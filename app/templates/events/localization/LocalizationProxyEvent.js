(function(){
    /**
     * singleton of LocalizationProxyEvent.
     *
     * @class LocalizationProxyEvent
     * @extends <%= nameSpace %>.AbstractEvent
     * @constructor
     */
	var LocalizationProxyEvent = function($type, $params) {
		this.params = $params || null;
		this.type = $type;
	};

    /**
     * Fired when an sample event occurs...
     *
     * @event LOAD_LOCALIZATION_CONTENT
     **/
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT = '<%= nameSpace.toLowerCase() %>.localizationproxyevent::load_localization_content';
    /**
     * Fired when an sample event occurs...
     *
     * @event LOAD_LOCALIZATION_CONTENT_SUCCESS
     **/
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS = '<%= nameSpace.toLowerCase() %>.localizationproxyevent::load_localization_content_success';
    /**
     * Fired when an sample event occurs...
     *
     * @event LOAD_LOCALIZATION_CONTENT_FAULT
     **/
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT = '<%= nameSpace.toLowerCase() %>.localizationproxyevent::load_localization_content_fault';
    /**
     * Fired when an sample event occurs...
     *
     * @event REPOPULATED
     **/
    LocalizationProxyEvent.REPOPULATED = '<%= nameSpace.toLowerCase() %>.localizationproxyevent::repopulated';
    /**
     * Fired when an sample event occurs...
     *
     * @event LOCALIZATION_CONTENT_READY
     **/
	LocalizationProxyEvent.LOCALIZATION_CONTENT_READY = '<%= nameSpace.toLowerCase() %>.localizationproxyevent::localization_content_ready';
	
	var p = LocalizationProxyEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = LocalizationProxyEvent;

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'LocalizationProxyEvent';
	};
	
<%= nameSpace %>.LocalizationProxyEvent = LocalizationProxyEvent;
}());