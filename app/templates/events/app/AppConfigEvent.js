(function(){
    /**
     * events for application config.
     *
     * @class AppConfigEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.app
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var AppConfigEvent = function($type) {
		this.type = $type;
	};

    /**
     * Fired when app configuration is ready.
     *
     * @event CONFIG_READY
     * @type {String}
     **/
	AppConfigEvent.CONFIG_READY = '<%= nameSpace.toLowerCase() %>.appconfigevent::config.ready';
    /**
     * Fired when configuration has experienced an error.
     *
     * @event CONFIG_ERROR
     * @type {String}
     **/
	AppConfigEvent.CONFIG_ERROR = '<%= nameSpace.toLowerCase() %>.appconfigevent::config.error';
    /**
     * Fired when when the file is loaded.
     *
     * @event CONFIG_LOAD
     * @type {String}
     **/
	AppConfigEvent.CONFIG_LOAD = '<%= nameSpace.toLowerCase() %>.appconfigevent::config.load';

	var p = AppConfigEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = AppConfigEvent;

	p.toString = function (){
		return 'AppConfigEvent';
	};

    <%= nameSpace %>.AppConfigEvent = AppConfigEvent;
}());