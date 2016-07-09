Template.showLists.helpers({
  listData: function(){
    return Lists.find({}, {sort: {date_created: 1}})
  },
  theCounter: function(){
    const instance = Template.instance();
      return instance.state.get("counter");
      },
})

Template.showLists.onCreated(function(){
  this.state = new ReactiveDict();
 //defining instance below when it is created 
 this.state.setDefault({
    counter:0,
  });
  console.log("created template");
  console.dir(this.state);
});


Template.showLists.events({
  "click .js-find-list": function(event){
    console.log("clicked search button")
    //read in the values of the input fields and store
    const listName = $(".js-list").val();
    // Meteor.find("findList", this.listsData, list);

    Meteor.apply("getList",[listName],{returnStubValue: true},
        function(error,result){

          console.dir(['getList',error,result]);
      
    r = JSON.parse(result);
          console.dir(r);
          return instance.state.set("lists",r.results);
        });
        console.dir(list);
        $(".js-find-list").val("");
    },
"click .js-submitList": function(event){
    console.log("BUTTON CLICKED");
    //read in the values of the input fields and store
    const list_name = $(".js-name").val();
    const list_items = $(".js-items").val();
    const list = {
      name:list_name,
      items:list_items,
      createdAt: new Date(),
      createdBy: Meteor.userId(),
      userEmail: Meteor.user().emails[0].address
    };
    console.dir(list);
    //test for insecure package
    // Lists.insert(list);
    Meteor.call("submitList", list);
    $(".js-name").val("");
    $(".js-items").val("");
    console.log("SUCCESS");

  },
})

Template.listRow.events({
  "click .js-delete-list":
	 function(event){
     console.log("clicked remove X")
     console.dir(this);
     //test for insecure package
    //  Lists.remove(this.list._id);
     Meteor.call("removeList", this.list.createdBy, this.list._id);

  },
  "click .js-edit-list":
  function(event){
    console.log("editing list");
    const id = this.list._id;
    window.location.replace("/showLists/" + id);
  },

"click .js-pusher": function(event, instance){
const c = instance.state.get("counter")+1;
instance.state.set("counter",c)
Meteor.call("sayhiserver")
},

})
