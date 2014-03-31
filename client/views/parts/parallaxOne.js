
Template.parallaxOne.rendered = function(){


    Meteor.setTimeout(function(){
        var video = document.getElementById("video");

        video.currentTime=80;
        video.play();
    }, 800);
    Meteor.setTimeout(function(){
        $('#video_overlay').css('opacity','0.4');
    }, 200);


};

Template.parallaxOne.events({
    'click .show_contact': function(){
        if ($('#contactModal').length){
            $('#contactModal').modal('show');
        }else{
            frag = Meteor.render(Template.contact);
            document.body.appendChild(frag);
        }
    }
});
