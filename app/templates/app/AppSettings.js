(function(){
    /**
     * App settings is used to hold application settings. Contains all the application specific start-up data. e.g. width, height and the root app container.
     *
     * @class AppSettings
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.app
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
    * instance is used to holder the singleton class for reference.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
    AppSettings.instance = null;

    /**
    * getInstance returns the only instance of this class. It will also create an istance of the class if it has not been instantiated yet.
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
    /**
    * Width is used to set the initial width of the application.
    *
    * @property width
    * @type {Number}
    * @default 0
    */
    p.width = 0;
    /**
    * Height is used to set the initial width of the application.
    *
    * @property Height
    * @type {Number}
    * @default 0
    */
    p.height = 0;
    /**
    * rootContainer is used to hold the root DOM element of the application.
    * If no DOM element is supplied in the init, a default div is created and appened to the body.
    * @property rootContainer
    * @type {HTMLElement}
    * @default '<div/>'
    */
    p.rootContainer;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
    p.initialize = function (){};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
    p.toString = function (){
        return 'AppSettings';
    };

    <%= nameSpace %>.AppSettings = AppSettings;
}());