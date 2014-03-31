
Template.parallaxOne.rendered = function(){


   var id = Meteor.setInterval(function(){
        var video = document.getElementById("video");
        if(video){
            video.loadeddata =
                video.currentTime=80,
                video.play(),
            Meteor.clearInterval(id);
        }
    }, 500);

//    Meteor.setTimeout(function(){
//        var video = document.getElementById("video");
//        video.loadeddata =
//            video.currentTime=80,
//            video.play(),
//            console.log('asdasd');
//    }, 1000);
    Meteor.setTimeout(function(){
        $('#video_overlay').css('opacity','0.4');
    }, 300);


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
