(function(){
	
	var AppProperties = function() {
		if (AppProperties.instance===null) {
			AppProperties.instance = this;
			this.initialize();
		}else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	AppProperties.instance = null;

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

	p.toString = function (){
		return '[AppProperties]';
	};

    <%= nameSpace %>.AppProperties = AppProperties;
}());