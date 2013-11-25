(function(){
    /**
     * SystemDownController controller is used to listen for system errors and report to commands.
     *
     * @class SystemDownController
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.controllers
     * @extends <%= nameSpace.toLowerCase() %>.controllers.AbstractController

     */
	var SystemDownController = function() {
		
		if (SystemDownController.instance===null) {
			SystemDownController.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};


	SystemDownController.instance = null;

	SystemDownController.getInstance = function (){
		if(SystemDownController.instance===null){
			SystemDownController.instance = new SystemDownController();
		}	
		return SystemDownController.instance;
	};

    var p = SystemDownController.prototype = new <%= nameSpace %>.AbstractController();
	p.constructor = SystemDownController;
	
	p.initialize = function (){
		this.addCommand(<%= nameSpace %>.SystemDownEvent.SYSTEM_DOWN, <%= nameSpace %>.SystemDownCommand); //reacts to changes
	};

	p.toString = function (){
		return 'SystemDownController';
	};

    <%= nameSpace %>.SystemDownController = SystemDownController;
}());