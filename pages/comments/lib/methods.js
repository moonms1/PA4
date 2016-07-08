Meteor.methods({
  "removeComment": function(id, comment){
    if (id == Meteor.userId()){
    Comments.remove(comment);
    console.log("removed comment id: " +id);
    }else{
      console.log("this is not your comment");
    }
  },
  "submitComment": function(comment_obj){
    Comments.insert(comment_obj);
  }

})
