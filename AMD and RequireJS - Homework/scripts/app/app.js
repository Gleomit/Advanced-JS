define(['Factory'], function(Factory) {
    console.log(Factory);
    var mainContainer = Factory.createContainer();
    mainContainer.addToDOM(document.getElementsByTagName('main')[0]);
});