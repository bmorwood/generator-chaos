(function(){
    /**
     * App Properties is used to hold application specific properties.
     *
     * @class AppProperties
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.app
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

    /**
    * used to hold the value of base URLs. The parameter is set by the location service.
    *
    * @property serviceBaseURL
    * @type {String}
    * @default ''
    */
    p.serviceBaseURL = '';

    /**
    * Locale is the current lcoale used to display the copy the user.
    *
    * @property locale
    * @type {String}
    * @default 'en-us'
    */
    p.locale = 'en-us';

    /**
    * initialize is called after the class is usally instantiated.
    *
    * @method initialize
    */
	p.initialize = function (){};

    /**
    * init is called after the class is usally instantiated.
    *
    * @method init
    */
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