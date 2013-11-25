(function(){
    /**
     * class of ServiceLocator.
     *
     * @class ServiceLocator
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.services
     */
	var ServiceLocator = function() {
		if (ServiceLocator.instance===null) {
			ServiceLocator.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
		}
	};

	ServiceLocator.instance = null;

	ServiceLocator.getInstance = function (){
		
		if(ServiceLocator.instance===null){
			ServiceLocator.instance = new ServiceLocator();
		}
			
		return ServiceLocator.instance;
	};
	
	var p = ServiceLocator.prototype;
	
	p.serviceDictionary = [];
    p.serviceBaseUrl;
	
	p.initialize = function (){

		/** 
		 * Define host to service mappings here. If the host is contained in this dictionary, then the mapping
		 * will be defined as the base URL for the NS service.
		**/

		this.serviceDictionary['localhost'] = 'http://127.0.0.1:9001/';

	};
	
	p.getServiceBaseUrl = function (){

		var protocol = this.extractProtocol();
		var hostWithPort = this.extractHostWithPort();
		var serviceBaseUrl;
		
		<%= nameSpace %>.logger.info('NS Service Locater sees host with port: ' + hostWithPort);
		
		if (this.serviceDictionary[hostWithPort]) {
			// Return appropriate mapping URL from dictionary.
			serviceBaseUrl = this.serviceDictionary[hostWithPort];
		} else {
			// Return default if nothing else matched.
			serviceBaseUrl = this.serviceDictionary['localhost'];
		}
		
		<%= nameSpace %>.logger.info('NS Service Locator resolved service URL to: ' + serviceBaseUrl);
		
		return this.serviceBaseUrl = serviceBaseUrl;

	};
	
	p.extractProtocol = function () {
		return $.address.baseURL().split('//')[0].toString();
	};
	
	p.extractHostWithPort = function() {
		var base = $.address.baseURL();

		<%= nameSpace %>.logger.info('NS Service Locator sees base URL: ' + base);

		if (base && base != '')
			return base.split('//')[1].toString().split('')[0].toString();
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'ServiceLocator';
	};
	
<%= nameSpace %>.ServiceLocator = ServiceLocator;
}());