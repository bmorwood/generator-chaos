(function(){
    /**
     * service of SystemDownEvent.
     *
     *  __example__
     *  __SHOW__
     *  ```
     *  new <%= nameSpace %>.SystemDownEvent(<%= nameSpace %>.SystemDownDisplayEvent.SHOW).dispatch();
     *  ```
     *  __HIDE__
     *  ```
     *  new <%= nameSpace %>.SystemDownEvent(<%= nameSpace %>.SystemDownDisplayEvent.HIDE).dispatch();
     *  ```
     *
     * @class SystemDownEvent
     * @constructor
     * @param {Event} $instruction when action to preform.
     * @namespace <%= nameSpace.toLowerCase() %>.events.system
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     * @uses <%= nameSpace.toLowerCase() %>.events.system.SystemDownDisplayEvent
     */
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
    /**
     * Fired when an sample event occurs...
     *
     * @event SYSTEM_DOWN
     * @type {String}
     **/
	SystemDownEvent.SYSTEM_DOWN = '<%= nameSpace.toLowerCase() %>.systemdownevent::system.down';

	var p = SystemDownEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = SystemDownEvent;
	
	p.instruction;

	p.toString = function (){
		return 'SystemDownEvent';
	};
	
<%= nameSpace %>.SystemDownEvent = SystemDownEvent;
}());