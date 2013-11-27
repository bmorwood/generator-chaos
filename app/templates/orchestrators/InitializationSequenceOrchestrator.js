(function(){
    /**
     * this orchestrator is used to initial the application, it is responsible to load all the initials that are required to start the application.
     *
     * @class InitializationSequenceOrchestrator
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.orchestrators
     */
	var InitializationSequenceOrchestrator = function() {
		if (InitializationSequenceOrchestrator.instance===null) {
			InitializationSequenceOrchestrator.instance = this;
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
	InitializationSequenceOrchestrator.instance = null;
    /**
    * getInstance returns the only instance of this class. It will also create an istance of the class if it has not been instantiated yet.
    *
    * @method getInstance
    */
	InitializationSequenceOrchestrator.getInstance = function (){
		
		if(InitializationSequenceOrchestrator.instance===null){
			InitializationSequenceOrchestrator.instance = new InitializationSequenceOrchestrator();
		}
			
		return InitializationSequenceOrchestrator.instance;
	};
	
	var p = InitializationSequenceOrchestrator.prototype;
    /**
    * set to true when the orchestrator is finished.
    *
    * @property initializationComplete
    * @type {Boolean}
    * @default false
    */
	p.initializationComplete = false
    /**
    * used to queue the master sequence.
    *
    * @property initializationComplete
    * @type {Array}
    * @default []
    */
	p.queue = [];
    /**
    * used to store the master sequence of all initializers needed to run teh application.
    *
    * @property MASTER_SEQUENCE
    * @type {Array}
    * @default []
    */
    p.MASTER_SEQUENCE = [];
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){
        var APP_CONFIG = new <%= nameSpace %>.AppConfigurationInitializer();
        var LOCALIZATION = new <%= nameSpace %>.LocalizationInitializer();

        this.MASTER_SEQUENCE.push(APP_CONFIG);
        this.MASTER_SEQUENCE.push(LOCALIZATION);
	};
    /**
    * starts the orchestrator.
    * @method run
    */
	p.run = function () {

        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);

		<%= nameSpace %>.logger.info('beginning initialization...');
		this.queue = _.clone(this.MASTER_SEQUENCE).reverse(); //reverse because we're going to use pop() method later
		this.next();
	};
    /**
    * called when a initilaizer is finished and the next initializer is set to run.
    * @method next
    */
	p.next = function (){
		
		if (this.queue.length > 0) {
			var pctComplete = (this.MASTER_SEQUENCE.length-this.queue.length)/this.MASTER_SEQUENCE.length;
			new <%= nameSpace %>.PreloaderEvent(<%= nameSpace %>.PreloaderEvent.STEP, pctComplete).dispatch();
			
			var nextItem = this.queue.pop();
			<%= nameSpace %>.logger.info('Executing initializer: ' + nextItem.toString());
			nextItem.execute();
		}else{			
			if (!this.initializationComplete) {
				this.initializationComplete = true;
                <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener(<%= nameSpace %>.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
                <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener(<%= nameSpace %>.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);
				new <%= nameSpace %>.PreloaderEvent(<%= nameSpace %>.PreloaderEvent.STEP, 1).dispatch();
				new <%= nameSpace %>.InitializationCompleteEvent().dispatch();
			    new <%= nameSpace %>.AbstractEvent(<%= nameSpace %>.Controller.NOTIFY_APPLICATION_ACTIVATED).dispatch();
				new <%= nameSpace %>.PreloaderEvent(<%= nameSpace %>.PreloaderEvent.COMPLETE).dispatch();

			}
		}
	};
    /**
    * called when a initilaizer is finished without errors.
    * @method handleInitializerSuccess
    */
	p.handleInitializerSuccess = function ($event){
		this.next();
	};
    /**
    * called when a initilaizer is finished with errors.
    * @method handleInitializerFault
    */
	p.handleInitializerFault = function($event){
		new <%= nameSpace %>.SystemDownEvent(<%= nameSpace %>.SystemDownDisplayEvent.SHOW).dispatch();
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'InitializationSequenceOrchestrator';
	};
	
    <%= nameSpace %>.InitializationSequenceOrchestrator = InitializationSequenceOrchestrator;
}());