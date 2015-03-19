var poppy = (function(){
    function pop(type, title, message) {
        var popup;
        switch (type) {
            case 'success':
                popup = new PopupFactory.Success(type, title, message);
                break;
            case 'warning':
                popup = new PopupFactory.Warning(type, title, message, arguments[3]);
                break;
            case 'info':
                popup = new PopupFactory.Info(type, title, message);
                break;
            case 'error':
                popup = new PopupFactory.Error(type, title, message);
                break;
        }

        var view = ViewFactory.createPopupView(popup);

        document.body.appendChild(view);

        processPopup(view, popup);
    }

    function processPopup(domView, popup) {
        switch(popup.type){
             case 'success':
                domView.style.opacity = "0";
                var fadeInInterval = setInterval(function(){
                    if(parseFloat(domView.style.opacity) < 1)
                        domView.style.opacity = (parseFloat(domView.style.opacity) + FADE_STEP).toString();
                    else{
                        clearInterval(fadeInInterval);
                    }
                }, 100);
                break;
            case 'warning':
                domView.onclick = popup.callback;
                break;
            case 'info':
                domView.querySelector('button').onclick = function(){
                    domView.style.opacity = "1";
                    
                    var fadeOutInterval = setInterval(function(){
                        if(parseFloat(domView.style.opacity) > 0){
                            domView.style.opacity = (parseFloat(domView.style.opacity) - FADE_STEP).toString();
                        } else {
                            clearInterval(fadeOutInterval);
                            domView.parentElement.removeChild(domView);
                        }
                    }, INTERVAL_TIME_MS);
                };
                break;
            case 'error':
                domView.style.opacity = "0";
                var fadeInInterval = setInterval(function(){
                    if(domView.style.opacity < 1)
                        domView.style.opacity = (parseFloat(domView.style.opacity) + FADE_STEP).toString();
                    else{
                        clearInterval(fadeInInterval);
                        
                        var timeAfterFadeOut = setTimeout(function(){
                            var fadeOutInterval = setInterval(function(){
                            if(parseFloat(domView.style.opacity) > 0){
                                domView.style.opacity = (parseFloat(domView.style.opacity) - FADE_STEP).toString();
                            } else {
                                clearInterval(fadeOutInterval);
                                domView.parentElement.removeChild(domView);
                            }
                            }, INTERVAL_TIME_MS);
                        }, popup.timeout);
                    }
                }, INTERVAL_TIME_MS);
                break;
        }
    }
    
    return {
        pop: pop
    };
})();



poppy.pop("success", "temp", "temp");
poppy.pop("warning", "temp", "temp", function(){window.location = 'https://www.youtube.com/watch?v=HMUDVMiITOU';});
poppy.pop("info", "temp", "temp");
poppy.pop("error", "temp", "temp");