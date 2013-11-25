(function(){
    /**
     * SystemDownCommand command is used to monitor system errors that require the UI display for the user.
     *
     * @class SystemDownCommand
     * @constructor
     * @users <%= nameSpace %>.events.system.SystemDownDisplayEvent
     * @namespace <%= nameSpace.toLowerCase() %>.commands.system
     */
	var SystemDownCommand = function() {
		this.initialize();
	};
	
	var p = SystemDownCommand.prototype;
	
	p.initialize = function (){};
	
	p.execute = function($event){

		if($event.instruction == <%= nameSpace %>.SystemDownDisplayEvent.SHOW)
			new <%= nameSpace %>.SystemDownDisplayEvent(<%= nameSpace %>.SystemDownDisplayEvent.SHOW).dispatch();
		if($event.instruction == <%= nameSpace %>.SystemDownDisplayEvent.HIDE)
			new <%= nameSpace %>.SystemDownDisplayEvent(<%= nameSpace %>.SystemDownDisplayEvent.HIDE).dispatch();
	}
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'SystemDownCommand';
	};
	
    <%= nameSpace %>.SystemDownCommand = SystemDownCommand;
}());