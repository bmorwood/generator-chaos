(function(){
    /**
     * controller of Controller.
     *
     * @class Controller
     * @constructor
     */
	var Controller = function() {
		if (Controller.instance===null) {
			Controller.instance = this;
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
	Controller.instance = null;

    /**
    * getInstance is called to get the single instance of this class.
    *
    * @method getInstance
    */
	Controller.getInstance = function (){
		if(Controller.instance===null){
			Controller.instance = new Controller();
		}	
		return Controller.instance;
	};
	
	Controller.SWF_ADDRESS_CHANGE_EVENT = 'swf_address_change_event';	
	Controller.NOTIFY_SWF_LOADER_LOADED = 'notify_swf_loader_loaded';
	Controller.NOTIFY_APPLICATION_ACTIVATED = 'notify_application_activated';
	Controller.NOTIFY_IMG_LOADER_LOADED = 'notify_img_loader_loaded';
	Controller.NOTIFY_SUCCESSFUL_LOGIN = 'notify_successful_login';
	
	var p = Controller.prototype = new <%= nameSpace %>.AbstractController();
	p.constructor = Controller;
	
	p.initialize = function (){ 
		//this.addCommand(UPDATE_SWF_ADDRESS_EVENT, UpdateSwfAddressCommand); //reacts to changes 
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'Controller';
	};

    <%= nameSpace %>.Controller = Controller;
}());