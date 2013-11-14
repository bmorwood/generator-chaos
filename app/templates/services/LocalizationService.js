(function(){
	
	var LocalizationService = function() {
		if (LocalizationService.instance===null) {
			LocalizationService.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
		}
	};

	LocalizationService.instance = null;

	LocalizationService.getInstance = function (){
		if(LocalizationService.instance===null){
			LocalizationService.instance = new LocalizationService();
		}	
		return LocalizationService.instance;
	};
	
	var p = LocalizationService.prototype = new <%= nameSpace %>.AbstractService();
	p.constructor = LocalizationService;
	
	p.appProperties; 
	
	p.initialize = function (){ 
		this.appProperties = <%= nameSpace %>.AppProperties.getInstance();
	};
	
	p.getLocalizedContent = function($locale, $resultHandler, $faultHandler) {
		var url = this.appProperties.serviceBaseURL + 'localized-copy/' + $locale.toUpperCase() + '.json';
		this.initServiceWithConfig(url, $resultHandler, $faultHandler);
	};
	
	p.toString = function (){
		return "[LocalizationService]";
	};
	
<%= nameSpace %>.LocalizationService = LocalizationService;
}());