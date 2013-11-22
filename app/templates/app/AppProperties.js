(function(){
    /**
     * singleton of AppProperties.
     *
     * @class AppProperties
     * @constructor
     */
	var AppProperties = function() {
		if (AppProperties.instance===null) {
			AppProperties.instance = this;
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
	AppProperties.instance = null;

    /**
    * getInstance is called to get the single instance of this class.
    *
    * @method getInstance
    */
	AppProperties.getInstance = function (){
		
		if(AppProperties.instance===null){
			AppProperties.instance = new AppProperties();
		}
			
		return AppProperties.instance;
	};
	
	var p = AppProperties.prototype;

    p.serviceBaseURL;
    p.locale = 'en-us';
	
	p.initialize = function (){};

    p.init = function(){
        this.serviceBaseURL =  <%= nameSpace %>.ServiceLocator.getInstance().getServiceBaseUrl();
        new <%= nameSpace %>.AppConfigEvent(<%= nameSpace %>.AppConfigEvent.CONFIG_READY).dispatch();
    };

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'AppProperties';
	};

    <%= nameSpace %>.AppProperties = AppProperties;
}());