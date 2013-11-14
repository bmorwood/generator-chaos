(function(){

	var AppConfigEvent = function($type) {
		this.type = $type;
	};

	AppConfigEvent.CONFIG_READY = 'ns.appconfigevent:config.ready';
	AppConfigEvent.CONFIG_ERROR = 'ns.appconfigevent:config.error';
	AppConfigEvent.CONFIG_LOAD = 'ns.appconfigevent:config.load';

	var p = AppConfigEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = AppConfigEvent;

	p.toString = function (){
		return '[AppConfigEvent]';
	};

    <%= nameSpace %>.AppConfigEvent = AppConfigEvent;
}());