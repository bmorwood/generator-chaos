(function(){
    /**
     * initializer of AppConfigurationInitializer.
     *
     * @class AppConfigurationInitializer
     * @constructor
     */
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

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'AppConfigurationInitializer';
	};
	
    <%= nameSpace %>.AppConfigurationInitializer = AppConfigurationInitializer;
}());