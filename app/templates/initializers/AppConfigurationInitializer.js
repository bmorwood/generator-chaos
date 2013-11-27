(function(){
    /**
     * initialize the configuration of teh application.
     *
     * @class AppConfigurationInitializer
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.initializers
     * @extends <%= nameSpace.toLowerCase() %>.initializers.AbstractInitializer
     * @uses <%= nameSpace.toLowerCase() %>.app.AppProperties
     */
	var AppConfigurationInitializer = function() {
		this.initialize();
	};

	var p = AppConfigurationInitializer.prototype = new <%= nameSpace %>.AbstractInitializer();
	p.constructor = AppConfigurationInitializer;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){		
		this.$initialize(
			'APP_CONFIG_INITIALIZER',
            <%= nameSpace %>.AppConfigEvent.CONFIG_READY,
            <%= nameSpace %>.AppConfigEvent.CONFIG_ERROR
			);
	};
	
	p.execute = function (){
		this.$execute();

        <%= nameSpace %>.AppProperties.getInstance().init();
	};

	p.toString = function (){
		return 'AppConfigurationInitializer';
	};
	
    <%= nameSpace %>.AppConfigurationInitializer = AppConfigurationInitializer;
}());