// TODO: Implement popup function constructors

var PopupFactory = (function(){
    function Popup(type, title, message){
        this.type = type;
        this.title = title;
        this.message = message;
    }

    function Success(type, title, message){
        Popup.call(this, 'success', title, message);

        this.position = 'bottomLeft';
    }

    function Warning(type, title, message, callback){
        Popup.call(this, 'warning', title, message);

        this.position = 'bottomRight';
        this.callback = callback;
    }

    function Info(type, title, message){
        Popup.call(this, 'info', title, message);

        this.position = 'topLeft';
        this.closeButton = true;
    }

    function Error(type, title, message){
        Popup.call(this, 'error', title, message);

        this.position = 'topRight';
        this.autoHide = true;
        this.timeout = TIMEOUT_TIME_DEFAULT_MS;
    }
    
    return {
        Success: Success,
        Warning: Warning,
        Info: Info,
        Error: Error
    }
})();