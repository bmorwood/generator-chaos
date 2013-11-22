(function(){
	
	var LC = function() {

	};
    /**
     * Fired when an sample event occurs...
     *
     * @event SYSTEM_DOWN_H1
     **/
	LC.SYSTEM_DOWN_H1;
    /**
     * Fired when an sample event occurs...
     *
     * @event SYSTEM_DOWN_H2
     **/
	LC.SYSTEM_DOWN_H2;
    /**
     * Fired when an sample event occurs...
     *
     * @event SYSTEM_DOWN_BUTTON
     **/
    LC.SYSTEM_DOWN_BUTTON;
    /**
     * Fired when an sample event occurs...
     *
     * @event WELCOME_MESSAGE
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