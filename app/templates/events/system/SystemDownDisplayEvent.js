(function(){
    /**
     * service of SystemDownDisplayEvent.
     *
     * @class SystemDownDisplayEvent
     * @extends <%= nameSpace %>.AbstractService
     * @constructor
     */
	var SystemDownDisplayEvent = function($type) {
		this.type = $type;
	};
    /**
     * Fired when an sample event occurs...
     *
     * @event SHOW
     **/
	SystemDownDisplayEvent.SHOW = '<%= nameSpace.toLowerCase() %>.systemdowndisplayevent::show';
    /**
     * Fired when an sample event occurs...
     *
     * @event HIDE
     **/
	SystemDownDisplayEvent.HIDE = '<%= nameSpace.toLowerCase() %>.systemdowndisplayevent::hide';

	var p = SystemDownDisplayEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = SystemDownDisplayEvent;

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'SystemDownDisplayEvent';
	};
	
    <%= nameSpace %>.SystemDownDisplayEvent = SystemDownDisplayEvent;
}());