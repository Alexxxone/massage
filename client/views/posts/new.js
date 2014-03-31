Template.newPost.rendered = function(){
    tinymce.init({selector:'textarea',plugins : 'advlist autolink link fullscreen importcss code image lists charmap preview', controls: 'fullscreen code'});

};


Template.newPost.events({
'click .create_post':function(e){
    e.preventDefault();
    var body = tinyMCE.activeEditor.getContent({format : 'raw'});
    var title = $('.post_title').val();
    var slug = title.toSlug();
    console.log(slug);
    if(title.length >= 5 && body.length >=10 ){
            Posts.insert({
                owner: Meteor.userId(),
                slug: slug,
                title: title ,
                body: body,
                created_at:  new Date
            },function(e,s){
                console.log(e);
                console.log(s);
                if(s){
                    $('#new_post').trigger( 'reset' );
                    Router.go('post', {slug: slug} )
                }
            });

    }
},
'submit #new_post': function(e){
    e.preventDefault();
    $('.create_post').click();
}
})
