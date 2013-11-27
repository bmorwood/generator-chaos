(function(){
    /**
     * class of LocalizationProx uses i18N.
     *
     * @class LocalizationProxy
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.proxies
     */
	var LocalizationProxy = function() {
		if (LocalizationProxy.instance===null) {
			LocalizationProxy.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	LocalizationProxy.instance = null;

	LocalizationProxy.getInstance = function (){
		
		if(LocalizationProxy.instance===null){
			LocalizationProxy.instance = new LocalizationProxy();
		}
			
		return LocalizationProxy.instance;
	};
    /**
    system down button copy

    @property DEFAULT_LOCALE_CODE
    @type String
    @default 'en_us'
    @static
    **/
	LocalizationProxy.DEFAULT_LOCALE_CODE = 'en_us';
	
	var p = LocalizationProxy.prototype;

    p.localeData;
    p.options;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){
        this.appSettings = <%= nameSpace %>.AppSettings.getInstance();

        this.options = {
        lng: LocalizationProxy.DEFAULT_LOCALE_CODE ,
        lowerCaseLng:true,
        resGetPath: 'locales/__lng__/__ns__.json'
        };
	};
	
	p.loadLocalizedContent = function ($locale){

        var localeCode;

        if($locale)
            localeCode = $locale;
        else
            localeCode = <%= nameSpace %>.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;

        this.options.lng = localeCode;

        var scope = this;

        i18n.init(this.options, function($data) {
            scope.handleLoadLocalizedContentSuccess($data)
        });
	};

    p.loadLocalizedContentSystemDown = function ($locale){

        var localeCode;

        if($locale)
            localeCode = $locale;
        else
            localeCode = <%= nameSpace %>.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;

        this.options.lng = localeCode;

        var scope = this;

        i18n.init(this.options, function($data) {
            scope.handleLoadLocalizedContentSuccess($data)
        });

    };
	
	p.handleLoadLocalizedContentSuccess = function($data){

		this.localeData = $data;

		new <%= nameSpace %>.LocalizationProxyEvent(<%= nameSpace %>.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS).dispatch();
	};

	p.handleLoadLocalizedContentFault = function($event){
		new <%= nameSpace %>.LocalizationProxyEvent(<%= nameSpace %>.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT).dispatch();
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return '[LocalizationProxy]';
	};
	
<%= nameSpace %>.LocalizationProxy = LocalizationProxy;
}());