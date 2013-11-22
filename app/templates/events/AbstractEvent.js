(function(){
    /**
     * abstract event AbstractEvent.
     *
     * @class AbstractEvent
     * @constructor
     */
	var AbstractEvent = function($type) { 
		this.type = $type;
	};
	
	var p = AbstractEvent.prototype;
    /**
     * instance is the class, this is used for singleton classes.
     *
     * @property type
     * @type {String}
     * @default null
     */
	p.type;
    /**
     * instance is the class, this is used for singleton classes.
     *
     * @property target
     * @type {Object}
     * @default null
     */
	p.target;

    /**
     * dispatch
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