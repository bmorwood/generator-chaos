(function(){
	
	var LC = function() {

	};

	LC.SYSTEM_DOWN_H1;
	LC.SYSTEM_DOWN_H2;
    LC.SYSTEM_DOWN_BUTTON;
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

	p.toString = function (){
		return '[LC]';
	};
	
    <%= nameSpace %>.LC = LC;
}());