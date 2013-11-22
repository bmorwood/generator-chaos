(function(){
    /**
     * service of EventDispatcher.
     *
     * @class EventDispatcher
     * @extends <%= nameSpace %>.AbstractService
     * @constructor
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
	
	p.target;
	p.events;
	
	p.initialize = function ($target){ 
		this.events = [];
	};
	
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
	
	p.hasEventListener = function ($type, $listener, $context){
		
		if($context === undefined) {debugger}
		
		var listeners = this.events[$type];
		if(!listeners) return false;
		
        for (var i = listeners.length - 1; i >= 0; i--){
		    if(listeners[i].listener === $listener && listeners[i].context === $context) return true;
        }
		
		return false;
	};

    <%= nameSpace %>.EventDispatcher = EventDispatcher;
}());