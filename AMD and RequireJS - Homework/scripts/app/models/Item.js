define("Item", ['exports'], function(exports) {
    (function() {
        var id = 0;

        function Item(content) {
            this.content = content;
            this.status = "notcompleted";
            this._id = id;

            id += 1;
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
                checkBoxElement.setAttribute("name", "Item" + this._id.toString());
                checkBoxElement.setAttribute("id", "statusInput" + this._id.toString());

                textItemElement.setAttribute("id", "textSection" + this._id.toString())
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

        exports.Item = Item;
        return Item;
    })();
});