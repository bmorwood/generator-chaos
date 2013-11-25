(function(){
    /**
     * initializer of AbstractInitializer.
     *
     * @class AbstractInitializer
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.initializers
     */
	var AbstractInitializer = function() {};
	
	var p = AbstractInitializer.prototype;
	
	p.name;
	p.successEventName;
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
	
	p.$execute = function (){
		if (this.successEventName === '' && this.faultEventName === ''){
			<%= nameSpace %>.logger.info('Initializer: ' + this.name + ' executed.');
			new <%= nameSpace %>.InitializerSuccessEvent(this.name).dispatch();
		}	
	};
	
	p.execute = function (){
		this.$execute();
	};
	
	p.$success = function($event){
		this.removeCompletionListeners();
        <%= nameSpace %>.logger.info('Initializer: ' + this.name + ' succeeded.');
		new <%= nameSpace %>.InitializerSuccessEvent(this.name).dispatch();
	};
	
	p.success = function($event) {
		this.$success($event);
	};
	
	p.$fault = function($event) {
		this.removeCompletionListeners();
        <%= nameSpace %>.logger.error('Initializer: ' + this.name + ' failed.');
		new <%= nameSpace %>.InitializerFaultEvent(this.name).dispatch();
	};
	
	p.fault = function($event) {
		this.$fault($event);
	};
	
	p.$reset = function(){

		if (!_.isEmpty(this.successEventName) && !<%= nameSpace %>.EventDispatcher.getInstance().hasEventListener(this.successEventName, this.success, this))   {
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
        }

		if (!_.isEmpty(this.faultEventName) && !<%= nameSpace %>.EventDispatcher.getInstance().hasEventListener(this.faultEventName, this.fault, this)) {
            <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
        }
	};
	
	p.reset = function (){
		this.$reset();
	};
	
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