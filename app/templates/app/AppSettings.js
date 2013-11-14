(function(){

    var AppSettings = function() {
        if (AppSettings.instance===null) {
            AppSettings.instance = this;
            this.initialize();
        }else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
        }
    };

    AppSettings.instance = null;

    AppSettings.getInstance = function (){

        if(AppSettings.instance===null){
            AppSettings.instance = new AppSettings();
        }

        return AppSettings.instance;
    };

    var p = AppSettings.prototype;

    p.width = 0;
    p.height = 0;
    p.rootContainer;

    p.initialize = function (){};

    p.toString = function (){
        return '[AppSettings]';
    };

    <%= nameSpace %>.AppSettings = AppSettings;
}());