Template.contact.events({
    'submit #contactForm': function(e,tmpl){
        sendMessage(e,tmpl);
    },
    'click .sendContact': function(e,tmpl){
        sendMessage(e,tmpl);
   }
})
Template.contact.rendered = function(){
    $('#contactModal').modal('show');
}




function sendMessage(e,tmpl){
    e.preventDefault();
    text = tmpl.find('#textArea').value;
    name = tmpl.find('#contactFrom').value;
    if(name.length >2 && text.length >10){
        Meteor.call('sendEmail',
            'Aleksandr.Vladimirovich.Khomenko@gmail.com',
            'bulletone@mail.ru',
            'Sender: '+name,
            text
        );
        tmpl.find('#textArea').value = '';
        tmpl.find('#contactFrom').value = '';
        notify('Ваше сообщение отправлено!',"Success");
        $('#contactModal').modal('hide');
    }else{
        $('#contactModal').modal('hide');
        Meteor.setTimeout(function(){
            $('#contactModal').modal('show');
        }, 3000)
        notify('Ошибка в тексте или имени',"Error");
    }
}
function notify(message,status){
    $.gritter.add({
        title: status,
        text: message,
        time: 2000
    });
}