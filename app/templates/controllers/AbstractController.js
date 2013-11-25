(function(){
    /**
     * singleton of AbstractController.
     *
     * @class AbstractController
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.controllers
     */
	var AbstractController = function() { 
		this.initialize();
	};
	
	var p = AbstractController.prototype;
	
	AbstractController.commands = [];
	AbstractController.enabled = true;

	p.addCommand = function ($eventName, $command){
        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener($eventName, AbstractController.handleEvent, this);
		AbstractController.commands[$eventName] = $command;
	};
	
	p.removeCommand = function ($eventName, $command){
		AbstractController.commands[$eventName] = null;
		delete AbstractController.commands[$eventName];
	};
	
	p.$initialize = function (){ };
	p.initialize = function (){ this.$initialize() };
	
	AbstractController.handleEvent = function ($event) {
		
		if (AbstractController.enabled) {
			var classRef = AbstractController.commands[$event.type];

			if(!classRef){
                <%= nameSpace %>.logger.warn('command class not found for event type', $event.type);
			} else {
				var commandClass = new classRef();
				commandClass.execute($event);
			}
		}
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'AbstractController';
	};

    <%= nameSpace %>.AbstractController = AbstractController;
}());