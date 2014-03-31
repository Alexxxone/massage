Template.posts.events({
   'submit #new_post': function(e,form){
       console.log(form);
   },
    'click .remove_post':function(){
        Posts.remove(this._id);
    }
});


Template.posts.posts = function(){
    return Posts.find({},{sort:{created_at: -1}});
};

