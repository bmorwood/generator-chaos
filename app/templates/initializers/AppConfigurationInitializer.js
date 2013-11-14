(function(){
	
	var AppConfigurationInitializer = function() {
		this.initialize();
	};

	var p = AppConfigurationInitializer.prototype = new <%= nameSpace %>.AbstractInitializer();
	p.constructor = AppConfigurationInitializer;
	
	p.initialize = function (){		
		this.$initialize(
			'APP_CONFIG_INITIALIZER',
            <%= nameSpace %>.AppConfigEvent.CONFIG_READY,
            <%= nameSpace %>.AppConfigEvent.CONFIG_ERROR
			);
	};
	
	p.execute = function (){
		this.$execute();
        //AppConfigurationInitializer.execute.apply(this, arguments)
		//<%= nameSpace %>.AppConfig.getInstance().loadProperties();

        <%= nameSpace %>.AppProperties.getInstance().init();
	};

	p.toString = function (){
		return '[AppConfigurationInitializer]';
	};
	
    <%= nameSpace %>.AppConfigurationInitializer = AppConfigurationInitializer;
}());