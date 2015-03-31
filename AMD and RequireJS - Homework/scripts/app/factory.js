define("Factory", ['exports', 'Container', 'Section', 'Item'], function(exports, Container, Section, Item) {
    exports.Factory = {
        createContainer: function(title){
            return new Container.Container(title);
        },
        createSection: function(title){
            return new Section.Section(title);
        },
        createItem: function(content){
            return new Item.Item(content);
        }
    };
});