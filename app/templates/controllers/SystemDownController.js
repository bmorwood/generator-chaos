(function(){
    /**
     * SystemDownController controller is used to listen for system errors and report to commands.
     *
     * @class SystemDownController
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.controllers
     * @extends <%= nameSpace.toLowerCase() %>.controllers.AbstractController
     * @uses <%= nameSpace.toLowerCase() %>.SystemDownEvent
     */
	var SystemDownController = function() {
		
		if (SystemDownController.instance===null) {
			SystemDownController.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

    /**
    * instance is used to holder the singleton class for reference.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
	SystemDownController.instance = null;
    /**
    * getInstance returns the only instance of this class. It will also create an istance of the class if it has not been instantiated yet.
    *
    * @method getInstance
    */
	SystemDownController.getInstance = function (){
		if(SystemDownController.instance===null){
			SystemDownController.instance = new SystemDownController();
		}	
		return SystemDownController.instance;
	};

    var p = SystemDownController.prototype = new <%= nameSpace %>.AbstractController();
	p.constructor = SystemDownController;
	
	p.initialize = function (){
		this.addCommand(<%= nameSpace %>.SystemDownEvent.SYSTEM_DOWN, <%= nameSpace %>.SystemDownCommand);
	};

	p.toString = function (){
		return 'SystemDownController';
	};

    <%= nameSpace %>.SystemDownController = SystemDownController;
}());