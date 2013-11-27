(function(){
    /**
     * AbstractInitializer is used as the base class for other events to extend from.
     *
     * @class AbstractInitializer
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.initializers
     */
	var AbstractInitializer = function() {};
	
	var p = AbstractInitializer.prototype;
    /**
    * name of the initializer.
    *
    * @property name
    * @type {String}
    * @default null
    */
	p.name;
    /**
     * Called when the initializer is finished and is successful.
     *
     * @property successEventName
     * @type {Event}
     * @default null
     */
	p.successEventName;
    /**
     *  Called when the initializer is finished and has failed.
     *
     * @property faultEventName
     * @type {Event}
     * @default null
     */
	p.faultEventName;
	
	p.$initialize = function ($name, $successEventName, $faultEventName){
		this.name = $name;

		this.successEventName = $successEventName||'';
		this.faultEventName = $faultEventName||'';
		
		if (this.successEventName != '')
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
			
		if (this.faultEventName != '')
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
	};
    /**
    * $execute is used to execute code that needs to complete before the application is ready to use. NOTE: execute is called by the orchesterator {{#crossLink "<%= nameSpace.toLowerCase() %>.orchestrators.InitializationSequenceOrchestrator"}}{{/crossLink}}.
    *
    * @method $execute
    * @final
    */
	p.$execute = function (){
		if (this.successEventName === '' && this.faultEventName === ''){
			<%= nameSpace %>.logger.info('Initializer: ' + this.name + ' executed.');
			new <%= nameSpace %>.InitializerSuccessEvent(this.name).dispatch();
		}	
	};
    /**
    * execute is used as a method placeholder to be overwriting when extended by another class / prototype, to call the super 'execute' use $execute.
    *
    * @method execute
    */
	p.execute = function (){
		this.$execute();
	};
    /**
    * $success is used to tell the orchesterator that it can continue to the next initializer in the sequence. $success should be called when the initializer is complete.
    *
    * @method $success
    * @final
    */
	p.$success = function($event){
		this.removeCompletionListeners();
        <%= nameSpace %>.logger.info('Initializer: ' + this.name + ' succeeded.');
		new <%= nameSpace %>.InitializerSuccessEvent(this.name).dispatch();
	};
    /**
    * success is used as a method placeholder to be overwriting when extended by another class / prototype, to call the super 'success' use $success.
    *
    * @method success
    */
	p.success = function($event) {
		this.$success($event);
	};
    /**
    * $fault is used to tell the orchesterator that the initialize failed. $fault should be called when the initializer has failed. the {{#crossLink "<%= nameSpace.toLowerCase() %>.orchestrators.InitializationSequenceOrchestrator"}}{{/crossLink}} will fire the event {{#crossLink "<%= nameSpace.toLowerCase() %>.events.system.SystemDownDisplayEvent:SHOW"}}{{/crossLink}}.
    *
    * @method $fault
    * @final
    */
	p.$fault = function($event) {
		this.removeCompletionListeners();
        <%= nameSpace %>.logger.error('Initializer: ' + this.name + ' failed.');
		new <%= nameSpace %>.InitializerFaultEvent(this.name).dispatch();
	};
    /**
    * fault is used as a method placeholder to be overwriting when extended by another class / prototype, to call the super 'fault' use $fault.
    *
    * @method fault
    */
	p.fault = function($event) {
		this.$fault($event);
	};
    /**
    * reset is used when reinitializing the aplication.
    *
    * @method $reset
    */
	p.$reset = function(){

		if (!_.isEmpty(this.successEventName) && !<%= nameSpace %>.EventDispatcher.getInstance().hasEventListener(this.successEventName, this.success, this))   {
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
        }

		if (!_.isEmpty(this.faultEventName) && !<%= nameSpace %>.EventDispatcher.getInstance().hasEventListener(this.faultEventName, this.fault, this)) {
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
        }
	};
    /**
    * reset is used when reinitializing the aplication.
    *
    * @method reset
    */
	p.reset = function (){
		this.$reset();
	};
    /**
    * remove listeners after the initialization of the initializer so its not listeneing for changes in other initializers.
    *
    * @method removeCompletionListeners
    */
	p.removeCompletionListeners = function() {
        <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener(this.successEventName, this.success, this);
        <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener(this.faultEventName, this.fault, this);
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'AbstractInitializer';
	};

    <%= nameSpace %>.AbstractInitializer = AbstractInitializer;
}());