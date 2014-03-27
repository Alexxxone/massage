Router.configure({
    layoutTemplate: "layout",
    notFoundTemplate: "notFound",
    loadingTemplate: "loading",
    yieldTemplates: {
        'header': { to: 'header' },
        'menu': { to: 'menu' },
        'footer': { to: 'footer' }
    }
});

Router.map(function() {
    this.route("home", {
        path: '/',
        template: 'body'
    });
    this.route("login", {
        path: "/login",
        yieldTemplates: {
        }
    });
});
