(function(){
    /**
     * singleton of AppSettings.
     *
     * @class AppSettings
     * @constructor
     */
    var AppSettings = function() {
        if (AppSettings.instance===null) {
            AppSettings.instance = this;
            this.initialize();
        }else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
        }
    };

    /**
    * instance is the class, this is used for singleton classes.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
    AppSettings.instance = null;

    /**
    * getInstance is called to get the single instance of this class.
    *
    * @method getInstance
    */
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