(function(){
    /**
    * class of AppSettings.
    *
    * @class LC
    * @constructor
    * @namespace <%= nameSpace.toLowerCase() %>.localization
    */
    var LC = function() {

    };
    /**
     Template for this view's container...

     @property SYSTEM_DOWN_H1
     @type String
     @default undefined
     @static
     **/
    LC.SYSTEM_DOWN_H1;
    /**
     Template for this view's container...

     @property SYSTEM_DOWN_H2
     @type String
     @default undefined
     @static
     **/
    LC.SYSTEM_DOWN_H2;
    /**
     Template for this view's container...

     @property SYSTEM_DOWN_BUTTON
     @type String
     @default undefined
     @static
     **/
    LC.SYSTEM_DOWN_BUTTON;
    /**
     Template for this view's container...

     @property WELCOME_MESSAGE
     @type String
     @default undefined
     @static
     **/
    LC.WELCOME_MESSAGE;

    var p = LC.prototype;

    LC.initialize = function (){

        var locales = <%= nameSpace %>.LocalizationProxy.getInstance().localeData;

        this.SYSTEM_DOWN_H1 = 		locales("system-down.h1");
        this.SYSTEM_DOWN_H2 = 		locales("system-down.h2");
        this.SYSTEM_DOWN_BUTTON = 	locales("system-down.button");

        this.WELCOME_MESSAGE = locales("core.welcome-message");

        new <%= nameSpace %>.LocalizationProxyEvent(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
    };
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
    p.toString = function (){
        return 'LC';
    };

    <%= nameSpace %>.LC = LC;
}());