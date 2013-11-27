(function(){
    /**
     * service of SystemDownDisplayEvent.
     *
     * @class SystemDownDisplayEvent
     * @constructor
     * @param {Event} $type event type.
     * @namespace <%= nameSpace.toLowerCase() %>.events.system
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var SystemDownDisplayEvent = function($type) {
		this.type = $type;
	};
    /**
     * Fired when system down screen should show.
     *
     * @event SHOW
     * @type {String}
     **/
	SystemDownDisplayEvent.SHOW = '<%= nameSpace.toLowerCase() %>.systemdowndisplayevent::show';
    /**
     * Fired when system down screen should hide.
     *
     * @event HIDE
     * @type {String}
     **/
	SystemDownDisplayEvent.HIDE = '<%= nameSpace.toLowerCase() %>.systemdowndisplayevent::hide';

	var p = SystemDownDisplayEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = SystemDownDisplayEvent;

	p.toString = function (){
		return 'SystemDownDisplayEvent';
	};
	
    <%= nameSpace %>.SystemDownDisplayEvent = SystemDownDisplayEvent;
}());