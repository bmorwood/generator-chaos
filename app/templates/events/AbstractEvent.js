(function(){
    /**
     * AbstractEvent is used as the base class for other events to extend from.
     *
     * @class AbstractEvent
     * @constructor
     * @param {Event} $type type is the event.
     * @namespace <%= nameSpace.toLowerCase() %>.events
     */
	var AbstractEvent = function($type) { 
		this.type = $type;
	};
	
	var p = AbstractEvent.prototype;
    /**
     * holds the event assigned to this instance.
     *
     * @property type
     * @type {String}
     * @default null
     */
	p.type;
    /**
     * used to reference the target that this event is assigned to.
     *
     * @property target
     * @type {Object}
     * @default null
     */
	p.target;

    /**
     * dispatch the event.
     *
     * @method dispatch
     */
	p.dispatch = function () {
        <%= nameSpace %>.EventDispatcher.getInstance().dispatchEvent(this);
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return '[AbstractEvent]';
	};

    <%= nameSpace %>.AbstractEvent = AbstractEvent;
}());