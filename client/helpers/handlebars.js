
Handlebars.registerHelper('log', function(arg) {
   console.log(arg);
});

Handlebars.registerHelper('prettifyDate', function(timestamp) {
    return moment(new Date(timestamp)).fromNow();
});
Handlebars.registerHelper('strip', function(str,numb) {

    var add = '';
    if(str.length > numb){
        add ='...'
    }
    return  str.substr(0,numb)+add;
});
Handlebars.registerHelper('strip_body', function(body) {
    var cuted_text= $('<div>'+body+'</div>').text(function(e,s){
        s.substr(0,200);
    });
    var total =0;
    var a='';
    cuted_text.each(function(i,b){
        if(total<=200){
            b.innerText = b.innerText.substr(0,200-total);
            total += b.innerText.length;
            a+=$(b).html();
        }else{
            return;
        }
    });
    return new Handlebars.SafeString(a+='...');
});
