(function(){
    /**
     * The class dispatches events so listeners can react accordingly.
     *
     * @class EventDispatcher
     * @constructor
     * @param {Object} $target assign a object to the event.
     * @namespace <%= nameSpace.toLowerCase() %>.events
     */
	var EventDispatcher = function($target) {
		this.target = $target;
		this.events = [];
	};

	EventDispatcher.instance = null;

	EventDispatcher.getInstance = function (){
		if(EventDispatcher.instance===null){
			EventDispatcher.instance = new EventDispatcher();
		}	
		return EventDispatcher.instance;
	};
	
	var p = EventDispatcher.prototype;
    /**
     * used to reference the target that this event is assigned to.
     *
     * @property target
     * @type {Object}
     * @default null
     */
	p.target;
    /**
     * contains all the events and listeners.
     *
     * @property events
     * @type {Array}
     * @default null
     */
	p.events;
    /**
     * initialize is used to run code after the class is instantiated.
     * NOTE: you can delete this method and add your code right in the constructor.
     * @method initialize
     */
	p.initialize = function ($target){ 
		this.events = [];
	};

    /**
     * used to find the event(s) and associated listener(s) calls their assigned methods.
     *  __example__
     *  ```
     *  new <%= nameSpace %>.LocalizationEvent(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
     *  ```
     * @method dispatchEvent
     * @param {Event} $event is the event that is used to call the listeners assigned methods.
     * @return {Boolean} returns 'true' a listener was found and called and 'false' if no listeners were found.
     */
	p.dispatchEvent = function ( $event ) 
	{
		if(this.target !== null || this.target !== undefined)
			$event.target = this.target;
		
		var eventListeners = this.events[$event.type];
		if(!eventListeners) return false;
		
		for (var i = eventListeners.length - 1; i >= 0; i--){
			
			if(eventListeners[i] != null){
				//<%= nameSpace %>.logger.log(this, eventListeners[i], $event );
				eventListeners[i].listener.call(eventListeners[i].context, $event);
			}
		};
		
		return true;
	};
    /**
     * Find the event(s) and associated listener(s) and calls their assigned methods.
     *  __example__
     *  ```
     *  <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this);
     *  ```
     * @method addEventListener
     * @param {Event} $type is the event that is used to call the listeners assigned methods.
     * @param {Method} $listener is the method to call when the an event is dispatched.
     * @param {Object} $context holds the class reference that is used to call the method and keep it in the relevant context of the class.
     */
	p.addEventListener = function( $type, $listener, $context) 
	{
		
		if($context === undefined) {debugger}
		if($listener === undefined) {debugger}
		if($type === undefined) {debugger}

        if(this.hasEventListener($type, $listener, $context)) <%= nameSpace %>.logger.log('hasEventListener ' + $type);
		
		if(!this.events[$type]){
			this.events[$type] = [];
            this.events[$type].push({listener: $listener, context: $context});
		}else{
			this.events[$type].push({listener: $listener, context: $context});
		}
	};
	 /**
     * Remove an event listener.
     *  __example__
     *  ```
     *  <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this);
     *  ```
     * @method removeEventListener
     * @param {Event} $type is the event that is used to call the listeners assigned methods.
     * @param {Method} $listener is the method to call when the an event is dispatched.
     * @param {Object} $context holds the class reference that is used to call the method and keep it in the relevant context of the class.
     */
	p.removeEventListener = function( $type, $listener, $context ) 
	{

        if($context === undefined) {debugger}
        if($listener === undefined) {debugger}
        if($type === undefined) {debugger}
		
		var eventListeners = this.events[$type];

		if(!eventListeners) return false;
		for (var i = eventListeners.length - 1; i >= 0; i--){
			if(eventListeners[i].listener === $listener && eventListeners[i].context ===  $context){
                eventListeners[i] = null;
				delete eventListeners[i];
                eventListeners.splice(i, 1);
			}
		}

		if(this.events[$type].length <= 0){
			this.events[$type] = null;
			delete this.events[$type];
		}
	};
    /**
     * Check to see if there are any event listeners for event, method and context.
     *  __example__
     *  ```
     *  <%= nameSpace %>.EventDispatcher.getInstance().hasEventListener(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this);
     *  ```
     * @method hasEventListener
     * @param {Event} $type is the event that is used to call the listeners assigned methods.
     * @param {Method} $listener is the method to call when the an event is dispatched.
     * @param {Object} $context holds the class reference that is used to call the method and keep it in the relevant context of the class.
     * @return {Boolean} 'true' if event listener is assigned already.'false' if no event listener was found.
     */
	p.hasEventListener = function ($type, $listener, $context){
		
		if($context === undefined) {debugger}
		
		var listeners = this.events[$type];
		if(!listeners) return false;
		
        for (var i = listeners.length - 1; i >= 0; i--){
		    if(listeners[i].listener === $listener && listeners[i].context === $context) return true;
        }
		
		return false;
	};
    /**
     * Check to see if there are any event listeners for event, method and context.
     *  __example__
     *  ```
     *  <%= nameSpace %>.EventDispatcher.getInstance().getListenersForEvent(<%= nameSpace %>.LocalizationEvent.LOCALIZATION_CONTENT_READY);
     *  ```
     * @method getListenersForEvent
     * @param {Event} $event is the event that is used to call the listeners assigned methods.
     * @return {Array} returns an 'Array' of classes that are assigned to an 'Event'.
     */
	p.getListenersForEvent = function($event){
        return _.pluck(this.events[$event], 'context');
    };

	/**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function () {
		return 'EventDispatcher';
	};

    <%= nameSpace %>.EventDispatcher = EventDispatcher;
}());