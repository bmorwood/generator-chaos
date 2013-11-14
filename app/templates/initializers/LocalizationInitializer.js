(function(){
	
	var LocalizationInitializer = function() {
		this.initialize();
	};

	var p = LocalizationInitializer.prototype = new <%= nameSpace %>.AbstractInitializer();
	p.constructor = LocalizationInitializer;
	
	p.localizationProxy;
	
	p.initialize = function (){
		this.$initialize('LOCALIZATION_INITIALIZER',
			<%= nameSpace %>.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS,
			<%= nameSpace %>.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT
			);
		this.localizationProxy = <%= nameSpace %>.LocalizationProxy.getInstance();
	};
	
	p.execute = function (){
		this.$execute();
		this.localizationProxy.loadLocalizedContent();
	};
	
	p.success = function ($event){

		if(<%= nameSpace %>.LocalizationUtility.initialized)
			LocalizationUtility.initInstance(this.localizationProxy.localizedContent);
		else
			<%= nameSpace %>.LocalizationUtility.repopulate(this.localizationProxy.localizedContent);

		<%= nameSpace %>.LC.initialize();
		this.$success($event);
	};

	p.toString = function (){
		return '[LocalizationInitializer]';
	};
	
<%= nameSpace %>.LocalizationInitializer = LocalizationInitializer;
}());