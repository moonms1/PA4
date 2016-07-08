Meteor.methods({
  "submitList": function(list){
    Lists.insert(list);
  },
})
