Meteor.startup(function () {
   if( Meteor.users.find().count() == 0){
       Accounts.createUser({email : 'vladimir@mail.ru' , password : 'secret', profile:{ name : 'Владимир'}})
   }

});




Meteor.publish("posts", function() {
    return Posts.find({});
});
