Meteor.startup(function(){
  if(Lists.find().count()==0){
    Lists.insert(
      {name:"Movies",items:["Finding Dory"]});
    Lists.insert(
      {name:"Travel",items:["Canada"]});
  }
})
