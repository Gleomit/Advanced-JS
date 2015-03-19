var TodoListModule = (function() {
    var totalContainersCount = 0;
    var totalSectionsCount = 0;
    var totalItemsCount = 0;

    var Container = (function () {
        function Container() {
            this._sections = [];
            totalContainersCount += 1;
        }

        Container.prototype = {
            addSection: function (section) {
                if (section instanceof Section) {
                    this._sections.push(section);
                } else {
                    throw new Error("addSection expects Section as parameter.");
                }
            },
            addToDOM: function (parentElement) {
                var sectionElement = document.createElement("section");
                var sectionsSectionElement = document.createElement("section");
                var inputSection = document.createElement("section");
                var headerText = document.createElement("h1");
                var inputField = document.createElement("input");
                var inputButton = document.createElement("button");

                inputField.setAttribute("id", "sectionTitle" + totalContainersCount.toString());
                inputField.setAttribute("placeholder", "Title");
                inputField.classList.add("sectionField");

                inputButton.setAttribute("id", "newSectionButton" + totalContainersCount.toString());
                inputButton.innerText = "New Section";
                inputButton.setAttribute("type", "button");

                var containerThis = this;

                inputButton.onclick = function (){
                    if(document.getElementById(inputField.id).value.trim().length > 0) {
                        var newSection = new Section(document.getElementById(inputField.id).value);
                        newSection.addToDOM(sectionsSectionElement, containerThis._sections.length + 1);
                        containerThis.addSection(newSection);
                    } else{
                        alert("You cannot add section with no title.");
                    }

                    document.getElementById(inputField.id).value = defaultStatus;
                };

                inputSection.classList.add("left");

                inputSection.appendChild(inputField);
                inputSection.appendChild(inputButton);

                headerText.innerText = "TODO List";

                sectionElement.setAttribute("id", "container" + totalContainersCount.toString());
                sectionElement.classList.add("container");

                sectionElement.appendChild(headerText);
                sectionElement.appendChild(sectionsSectionElement);
                sectionElement.appendChild(inputSection);

                parentElement.appendChild(sectionElement);
            }
        };

        return Container;
    })();

    var Section = (function () {
        function Section(title) {
            this.title = title;
            this.items = [];

            totalSectionsCount += 1;
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

            sectionElement.setAttribute("id", "section" + totalSectionsCount.toString());
            sectionElement.classList.add("section");

            inputItemField.setAttribute("placeholder", "Add Item");
            inputItemField.setAttribute("id", "itemField" + totalSectionsCount.toString());
            inputItemField.setAttribute("type", "text");
            inputItemField.classList.add("itemField");

            inputItemAdd.setAttribute("id", "itemAddButton" + totalSectionsCount.toString());
            inputItemAdd.innerText = "+";
            inputItemAdd.setAttribute("type", "button");

            var sectionThis = this;

            inputItemAdd.onclick = function () {
                if(document.getElementById(inputItemField.id).value.trim().length > 0) {
                    var item = new Item(document.getElementById(inputItemField.id).value.toString());
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

    var Item = (function () {
        function Item(content) {
            this.content = content;
            this.status = "notcompleted";

            totalItemsCount += 1;
        }

        Item.prototype = {
            get content() {
                return this._content;
            },
            set content(val) {
                if (typeof val === "string") {
                    if(val.trim().length === 0){
                        throw new Error("Item content cannot be empty string.");
                    }

                    this._content = val;
                } else {
                    throw new Error("Item content must be string.");
                }
            },
            get status() {
                return this._status;
            },
            set status(val) {
                if (typeof val === "string" && (val === "completed" || val === "notcompleted")) {
                    this._status = val;
                } else {
                    throw new Error("Item status can be completed or notcompleted.");
                }
            },
            addToDOM: function (parentElement) {
                var sectionElement = document.createElement("section");
                var checkBoxElement = document.createElement("input");
                var textItemElement = document.createElement("div");

                checkBoxElement.setAttribute("type", "checkbox");
                checkBoxElement.setAttribute("name", "Item" + totalItemsCount.toString());
                checkBoxElement.setAttribute("id", "statusInput" + totalItemsCount.toString());

                textItemElement.setAttribute("id", "textSection" + totalItemsCount.toString())
                textItemElement.classList.add("itemText");

                var itemThis = this;

                checkBoxElement.onchange = function () {
                    if (checkBoxElement.checked === true) {
                        itemThis.status = "completed";
                    } else {
                        itemThis.status = "notcompleted";
                    }

                    if (itemThis.status === "completed") {
                        document.getElementById(textItemElement.id).style.backgroundColor = "#90EE90";
                    } else {
                        document.getElementById(textItemElement.id).style.backgroundColor = defaultStatus;
                    }
                };

                textItemElement.innerText = this.content;
                textItemElement.classList.add("itemText");

                sectionElement.classList.add("left");

                sectionElement.appendChild(checkBoxElement);
                sectionElement.appendChild(textItemElement);
                parentElement.appendChild(sectionElement);
            }
        };

        return Item;
    })();

    return {
        Container: Container,
        Section: Section,
        Item: Item
    }
})();