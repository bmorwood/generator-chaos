(function(){
	
	var LC = function() {

	};

	LC.SYSTEM_DOWN_H1;
	LC.SYSTEM_DOWN_H2;
    LC.SYSTEM_DOWN_BUTTON;
    LC.WELCOME_MESSAGE;

	var p = LC.prototype;

	LC.initialize = function (){

        var locale = <%= nameSpace %>.AppProperties.getInstance().locale;

		this.SYSTEM_DOWN_H1 = 		<%= nameSpace %>.LocalizationUtility.getContent(locale, 'hd1');
		this.SYSTEM_DOWN_H2 = 		<%= nameSpace %>.LocalizationUtility.getContent(locale, 'hd2');
        this.SYSTEM_DOWN_BUTTON = 		<%= nameSpace %>.LocalizationUtility.getContent(locale, 'button');

        this.WELCOME_MESSAGE = 		<%= nameSpace %>.LocalizationUtility.getContent('core', 'welcome_message');

        new <%= nameSpace %>.LocalizationProxyEvent(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
	};

	p.toString = function (){
		return '[LC]';
	};
	
    <%= nameSpace %>.LC = LC;
}());