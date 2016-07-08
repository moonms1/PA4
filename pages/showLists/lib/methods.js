Meteor.methods({
  "removeList": function(id, list){
    if(id == Meteor.userId()){
      Lists.remove(list);
      console.log("removed comment" + list);
    }
    else{
      console.log("this is not your list");
    }
  },
  "getList":
  function(listName){
    console.log("'"+listName+"'");
    const url = "/showLists/{{list._id}}";
    console.log(url);
    const z = Meteor.http.call("get",url);
      //"http://www.recipepuppy.com/api/?i={{ingr}}&q={{dish}}&p=3");
      //"http://www.recipepuppy.com/api/?i=onion,garlic&q=omelet&p=3");
      //console.dir(z);
      return z.content;
  },

})
