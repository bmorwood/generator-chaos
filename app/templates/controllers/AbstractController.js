(function(){
    /**
     * AbstractController is used as the base class for other controllers to extend from.
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
    /**
    * $initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method $initialize
    * @final
    */
	p.$initialize = function (){ };
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
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