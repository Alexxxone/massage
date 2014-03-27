Posts.allow({
    insert: function (userId, comment) {
        return userId == comment.owner;
    },
    update: function (userid, comment){
        return userId == comment.owner;
    },
    remove: function (userId, comment){
        return userId == comment.owner;
    }
});
