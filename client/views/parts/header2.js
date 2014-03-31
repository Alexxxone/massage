Template.header2.events({
    'keypress .search_posts':function(e){
        if(e.keyCode == 13){
            e.preventDefault();
            Router.go('search', {query: e.currentTarget.value});
        }

    }
});