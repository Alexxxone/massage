Template.body.events({

});


Template.body.rendered = function(){
//    VK.init({
//        apiId: 111111,
//        onlyWidgets: true
//    });
//    VK.Widgets.Like('vk_like');
    $('.scroll_to').click(function(){
        $.scrollTo($(this).attr('name'),500);
    })
    $( '.parallax.one' ).parallax("50%", 0.6);
    $( '.parallax.two' ).parallax("50%", 0.5);
    $('.img-circle').mouseenter(function(e){
        $(e.currentTarget).css({'height':'250px','width':'250px'})
    }).mouseleave(function(e){
        $(e.currentTarget).css({'height':'200px','width':'200px'})
    });
    var arrow = $(".scroll_to_top");
    $(document).on('scroll', function(){
        if(window.pageYOffset > 500 ){
            if(arrow.is( ":hidden" )){
                arrow.clearQueue();
                arrow.stop();
                arrow.css('display','block');
                arrow.css('left','0');
                arrow.animate({
                    opacity: 0.6,
                    left: "+=50"
                }, 200);
            }
        }else{
            if(arrow.is( ":visible" )){
                arrow.clearQueue();
                arrow.stop();
                arrow.css('left','0');
                arrow.animate({
                    opacity: 0.25,
                    left: "-=50"

                }, 200,function(){
                    arrow.css('display','none');
                });
            }
        }
    });
    $('.scroll_to_top').mouseenter(function(){
        $(this).css('opacity', 1);
    }).mouseleave(function(e){
        $(this).css('opacity', 0.6);
    });
};