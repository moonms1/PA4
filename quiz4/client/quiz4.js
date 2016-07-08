Template.quiz4.helpers({
userbio:function(){
return userBio.find({});
},
})


Template.quiz4.events({
"click .js-submit": function(event){
const name = $(".js-name").val();
const bio = $(".js-bio").val();
const bio_obj={
name:name, bio:bio,
}
Meteor.call("updatebio",bio_obj);
},
})


