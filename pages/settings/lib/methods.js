Meteor.methods({
"setUpdate": function(mood){
Setting.insert(mood);
console.dir(mood);
console.dir(mood.uid);
console.dir(Meteor.userId());
console.log(mood.uid==Meteor.userId());
console.log("element added");
},


})

