var Container = (function (){
    function Container(){
        this._sections = [];
    }

    Container.prototype = {
        addSection: function(section){
            if(section instanceof Section){
                this._sections.push(section);
            } else{
                throw new Error("addSection expects Section as parameter.");
            }
        },
        addToDOM: function(){

        }
    };
})();

var Section = (function (){
    function Section(title){
        this.title = title;
        this._items = [];
    }

    Section.prototype = {
        get title(){
            return this._title;
        },
        set title(val){
            if(typeof val === "string"){
                this._title = val;
            } else{
                throw new Error("Section title must be string.");
            }
        },
        addItem: function(item){
            if(section instanceof Item){
                this._items.push(item);
            } else{
                throw new Error("addItem expects Item as parameter.");
            }
        },
        addToDOM: function(){

        }
    };
})();

var Item = (function (){
    function Item(content){
        this.content = content;
        this.status = "notcompleted";
    }

    Item.prototype = {
        get content(){
            return this._content;
        },
        set content(val){
            if(typeof val === "string"){
                this._content = val;
            } else{
                throw new Error("Item content must be string.");
            }
        },
        get status(){
            return this._status;
        },
        set status(val){
            if(typeof val === "string" && (val === "completed" || val === "notcompleted")){
                this._status = val;
            } else{
                throw new Error("Item status can be completed or notcompleted.");
            }
        },
        addToDOM: function(){

        }
    };
})();
