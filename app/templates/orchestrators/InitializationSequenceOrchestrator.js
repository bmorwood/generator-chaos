(function(){
    /**
     * class of InitializationSequenceOrchestrator.
     *
     * @class InitializationSequenceOrchestrator
     * @constructor
     */
	var InitializationSequenceOrchestrator = function() {
		if (InitializationSequenceOrchestrator.instance===null) {
			InitializationSequenceOrchestrator.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	InitializationSequenceOrchestrator.instance = null;

	InitializationSequenceOrchestrator.getInstance = function (){
		
		if(InitializationSequenceOrchestrator.instance===null){
			InitializationSequenceOrchestrator.instance = new InitializationSequenceOrchestrator();
		}
			
		return InitializationSequenceOrchestrator.instance;
	};
	
	var p = InitializationSequenceOrchestrator.prototype;
	
	p.initializationComplete = false
	p.queue = [];
	p.MASTER_SEQUENCE = [];

	p.initialize = function (){
        var APP_CONFIG = new <%= nameSpace %>.AppConfigurationInitializer();
        var LOCALIZATION = new <%= nameSpace %>.LocalizationInitializer();

        this.MASTER_SEQUENCE.push(APP_CONFIG);
        this.MASTER_SEQUENCE.push(LOCALIZATION);
	};
	
	p.run = function () {

        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);

		<%= nameSpace %>.logger.info('beginning initialization...');
		this.queue = _.clone(this.MASTER_SEQUENCE).reverse(); //reverse because we're going to use pop() method later
		this.next();
	};
	
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
	
	p.handleInitializerSuccess = function ($event){
		this.next();
	};
	
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