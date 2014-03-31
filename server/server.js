Meteor.startup(function () {
   if( Meteor.users.find().count() == 0){
       Accounts.createUser({email : 'vladimir@mail.ru' , password : 'secret', profile:{ name : 'Владимир'}})
   }
    if( Posts.find().count() < 3){
        var userId = Meteor.users.findOne()._id;
        Posts.insert({owner: userId, slug: 'методика', title: 'Методика', body: 'Методика массажа — совокупность приемов, воздействий, применяемых в соответствии с определенными правилами (классический, испанский, финский, баночный, тайский, точечный, периостальный, медовый, стоун).',created_at: new Date()});
        Posts.insert({owner: userId, slug: 'виды_массажа', title: 'Виды Массажа', body: 'Существуют различные виды массажа. Под видом понимается применение различных методик для решения конкретной задачи, или массаж применяемый в отдельной группе (антицеллюлитный, спортивный (подготовительный, восстановительный), детский, профилактический, гигиенический)',created_at: new Date()});
        Posts.insert({owner: userId, slug: 'исполнение',title: 'Исполнение', body: 'По виду исполнения делится на ручной и аппаратный. По применению — общий и местный. Что касается назначения, то можно подразделить на следующие виды: лечебный, гигиенический, косметический, спортивный, рефлекторный, детский, а также самомассаж.',created_at: new Date()});
    }
});

Meteor.publish("posts", function() {
    return Posts.find({});
});
Meteor.publish("post", function(slug) {
    return Posts.find({slug: slug});
});
Meteor.publish("home_posts", function() {
    return Posts.find({},{limit: 3,sort:{created_at: -1}});
});
Meteor.publish("find_posts", function(query) {
    return Posts.find({title: new RegExp(query,'i')});
});
