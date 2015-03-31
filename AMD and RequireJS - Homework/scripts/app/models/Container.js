define("Container", ['exports', 'Factory', 'Section'], function(exports, Factory, Section) {

    (function() {
        var id = 0;

        function Container() {
            this._sections = [];
            this._id = id;
            console.log(Factory)
            id += 1;
        }

        Container.prototype = {
            addSection: function (section) {
                this._sections.push(section);
            },
            addToDOM: function (parentElement) {
                var sectionElement = document.createElement("section");
                var sectionsSectionElement = document.createElement("section");
                var inputSection = document.createElement("section");
                var headerText = document.createElement("h1");
                var inputField = document.createElement("input");
                var inputButton = document.createElement("button");

                inputField.setAttribute("id", "sectionTitle" + this._id.toString());
                inputField.setAttribute("placeholder", "Title");
                inputField.classList.add("sectionField");

                inputButton.setAttribute("id", "newSectionButton" + this._id.toString());
                inputButton.innerText = "New Section";
                inputButton.setAttribute("type", "button");

                var containerThis = this;

                inputButton.onclick = function (){
                    if(document.getElementById(inputField.id).value.trim().length > 0) {
                        var newSection = Factory.Factory.createSection(document.getElementById(inputField.id).value);
                        newSection.addToDOM(sectionsSectionElement);
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

                sectionElement.setAttribute("id", "container" + this._id.toString());
                sectionElement.classList.add("container");

                sectionElement.appendChild(headerText);
                sectionElement.appendChild(sectionsSectionElement);
                sectionElement.appendChild(inputSection);

                parentElement.appendChild(sectionElement);
            }
        };

        exports.Container = Container;
        return Container;
    })();
});