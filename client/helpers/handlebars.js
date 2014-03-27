
Handlebars.registerHelper('log', function(arg) {
   console.log(arg);
});

Handlebars.registerHelper('prettifyDate', function(timestamp) {
    return moment(new Date(timestamp)).fromNow();
});
