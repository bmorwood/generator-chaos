(function(){
    /**
     * controller of SystemDownController.
     *
     * @class SystemDownController
     * @constructor
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
    * instance is the class, this is used for singleton classes.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
	SystemDownController.instance = null;

    /**
    * getInstance is called to get the single instance of this class.
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
		this.addCommand(<%= nameSpace %>.SystemDownEvent.SYSTEM_DOWN, <%= nameSpace %>.SystemDownCommand); //reacts to changes
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'SystemDownController';
	};

    <%= nameSpace %>.SystemDownController = SystemDownController;
}());