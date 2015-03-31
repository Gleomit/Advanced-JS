define(['Container', 'Section', 'Item'], function(Container, Section, Item) {

    return {
        createContainer: function(title){
            console.log(Container);
            var temp = new Container(title);

            return temp;
        },
        createSection: function(title){
            return new Section(title);
        },
        createItem: function(content){
            return new Item(content);
        }
    };
});