(function(){
    /**
     * singleton of LocalizationProxyEvent.
     *
     * @class LocalizationProxyEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.localization
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
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

	p.toString = function (){
		return 'LocalizationProxyEvent';
	};
	
<%= nameSpace %>.LocalizationProxyEvent = LocalizationProxyEvent;
}());