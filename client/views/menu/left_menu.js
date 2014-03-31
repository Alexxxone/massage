

Template.left_menu.events({
    'click .show_drop_menu':function(){
      $('.drop_menu').slideToggle('fast');
    },
    'click #showLeft':function(){
       $('#cbp-spmenu-s1').addClass('cbp-spmenu-open');
    },
    'click #hideLeft':function(){
       $('#cbp-spmenu-s1').removeClass('cbp-spmenu-open');
    }
});