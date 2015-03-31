define('app', ['Factory'], function(Factory) {

    //console.log(Factory);

    return ((function(){
        var mainContainer = Factory.Factory.createContainer();
        mainContainer.addToDOM(document.getElementsByTagName('main')[0]);
    })());
});