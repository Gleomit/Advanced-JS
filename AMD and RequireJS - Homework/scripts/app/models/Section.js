define(['Factory', 'Item'], function() {
    return (function() {
        var id = 0;

        function Section(title) {
            this.title = title;
            this.items = [];
            this._id = id;

            id += 1;
        }

        Section.prototype.__defineGetter__("title", function () {
            return this._title;
        });

        Section.prototype.__defineSetter__("title", function (val) {
            if (typeof val === "string") {
                if(val.trim().length === 0){
                    throw new Error("Section title cannot be empty string.");
                }

                this._title = val;
            } else {
                throw new Error("Section title must be string.");
            }
        });

        Section.prototype.addItem = function (item) {
            if (item instanceof Item) {
                this.items.push(item);
            } else {
                throw new Error("addItem expects Item as parameter.");
            }
        };

        Section.prototype.addToDOM = function (parentElement) {
            var sectionElement = document.createElement("section");
            var inputItemField = document.createElement("input");
            var inputItemAdd = document.createElement("button");
            var titleElement = document.createElement("h2");
            var inputSection = document.createElement("section");

            titleElement.innerText = this.title;
            titleElement.classList.add("sectionTitle");

            sectionElement.setAttribute("id", "section" + this._id.toString());
            sectionElement.classList.add("section");

            inputItemField.setAttribute("placeholder", "Add Item");
            inputItemField.setAttribute("id", "itemField" + this._id.toString());
            inputItemField.setAttribute("type", "text");
            inputItemField.classList.add("itemField");

            inputItemAdd.setAttribute("id", "itemAddButton" + this._id.toString());
            inputItemAdd.innerText = "+";
            inputItemAdd.setAttribute("type", "button");

            var sectionThis = this;

            inputItemAdd.onclick = function () {
                if(document.getElementById(inputItemField.id).value.trim().length > 0) {
                    var item = Factory.createItem(document.getElementById(inputItemField.id).value.toString());

                    sectionThis.addItem(item);
                    item.addToDOM(document.getElementById(sectionElement.id));
                } else{
                    alert("You cannot add item with no content in it.");
                }

                document.getElementById(inputItemField.id).value = defaultStatus;
            };

            inputSection.classList.add("right");
            inputSection.appendChild(inputItemField);
            inputSection.appendChild(inputItemAdd);

            sectionElement.appendChild(titleElement);

            parentElement.appendChild(sectionElement);

            parentElement.appendChild(inputSection);
        };

        return Section;
    })();
});