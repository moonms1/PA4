Template.settings.helpers({

userSetting: function(){
return Setting.find({});
}

})

Template.settings.events({

"click .js-submit": function(){
const first = $(".js-getfirstname").val();
const last = $(".js-getlastname").val();
const nick = $(".js-getnickname").val();

const profile_obj={
first : first, last : last, nick : nick, uid : Meteor.userId(), dailycal:0
}
Meteor.call("addUserSetting", profile_obj);

},
})
