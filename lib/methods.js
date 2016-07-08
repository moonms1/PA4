Meteor.methods({
"addUserSetting": function(user_obj){
Setting.insert(user_obj);
},
})
