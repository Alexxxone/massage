Router.configure({
    layoutTemplate: "layout",
    notFoundTemplate: "notFound",
    loadingTemplate: "loading",
    yieldTemplates: {
        'menu': { to: 'menu' },
        'footer': { to: 'footer' }
    }
});

Router.map(function() {
    this.route("home", {
        path: '/',
        template: 'body',
        waitOn: function(){
            return Meteor.subscribe('home_posts');
        },
        data:{
            posts: function(){return Posts.find({},{limit: 3, order:{created_at: -1} })}
        }
    });
    this.route("login", {
        path: "/login",
        yieldTemplates: {
        }
    });
    this.route("newPost", {
        path: "/new",
        template:'newPost',
        yieldTemplates: {
        },
        waitOn: function(){
            return Before.load();
        }
    });
    this.route("posts", {
        path: "/posts",
        template: 'posts',
        yieldTemplates: {
        },
        waitOn: function(){
            return Meteor.subscribe('posts');
        }
    });
    this.route("post", {
        path: "/post/:slug",
        template: 'PostShow',
        yieldTemplates: {
        },
        waitOn: function(){
            return Meteor.subscribe('post',this.params.slug);
        },
        data: function(){
            return Posts.findOne({});
        }
    });
    this.route("search", {
        path: '/search/:query',
        template: 'posts',
        yieldTemplates: {
        },
        waitOn:function(){
            return Meteor.subscribe('find_posts',this.params.query);
        }
    });
});

var Before={};
Before.load = function() {
    var handle, self;
    self = this;
    if (!this._lib) {
        this._lib = {
            ready: false,
            readyDeps: new Deps.Dependency
        };
        var lib;
        lib = self._lib;

        $.getScript("//tinymce.cachefly.net/4.0/tinymce.min.js",function(){
            lib.ready = true;
            return lib.readyDeps.changed();
        });

    }
    handle = {
        ready: function() {
            var lib;
            lib = self._lib;
            lib.readyDeps.depend();
            return lib.ready;
        }
    };
    return handle;
};


String.prototype.toSlug = function() {
    return this
        .toLowerCase()
        .replace(/ /g,'_')
        .replace(/[^\w]+/g,'')
        ;
};