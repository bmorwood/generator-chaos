(function(){
	
	var LocalizationProxyEvent = function($type, $params) {
		this.params = $params || null;
		this.type = $type;
	};

	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT = "load_localization_content";
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS = "load_localization_content_success";
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT = "load_localization_content_fault";

    LocalizationProxyEvent.REPOPULATED

	LocalizationProxyEvent.LOCALIZATION_CONTENT_READY = "localization_content_ready";
	
	var p = LocalizationProxyEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = LocalizationProxyEvent;

	p.toString = function (){
		return "[LocalizationProxyEvent]";
	};
	
<%= nameSpace %>.LocalizationProxyEvent = LocalizationProxyEvent;
}());