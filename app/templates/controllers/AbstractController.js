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
        if(!AbstractController.commands[$eventName]){
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener($eventName, AbstractController.handleEvent, this);
            AbstractController.commands[$eventName] = [];
            AbstractController.commands[$eventName].push({event:$eventName, command:$command});
        }else{
            AbstractController.commands[$eventName].push({event:$eventName, command:$command});
        }
	};
	
	p.removeCommand = function ($eventName, $command){

        var commands = AbstractController.commands[$eventName];

        if(!commands) return false;

        for (var i = commands.length - 1; i >= 0; i--){
            if(commands[i].event === $eventName && commands[i].command ===  $command){
            commands[i] = null;
            delete commands[i];
            commands.splice(i, 1);
            }
        }

        if(AbstractController.commands[$eventName].length <= 0){
            <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener($eventName, AbstractController.handleEvent, this);
            AbstractController.commands[$eventName] = null;
            delete AbstractController.commands[$eventName];
        }
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

            var classRefs = AbstractController.commands[$event.type];
            if(!classRefs) return false;

            for (var i = classRefs.length - 1; i >= 0; i--){

            if(classRefs[i] != null){
                //NGP.logger.log(this, eventListeners[i], $event );
                var classRef = classRefs[i].command;
                if(!classRef){
                <%= nameSpace %>.logger.warn("command class not found for event type", $event.type);
                } else {
                    var commandClass = new classRef();
                    commandClass.execute($event);
                }
            }
        };

        var classRef = AbstractController.commands[$event.type];
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