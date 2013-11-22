(function(){
    /**
     * event of PreloaderEvent.
     *
     * @class PreloaderEvent
     * @extends <%= nameSpace %>.AbstractEvent
     * @constructor
     */
	var PreloaderEvent = function($type, $percentage) {
		this.percentage = $percentage;
		this.type = $type;
	};
    /**
     * Fired when an sample event occurs...
     *
     * @event COMPLETE
     **/
	PreloaderEvent.COMPLETE = '<%= nameSpace %>.preloaderevent::complete';
    /**
     * Fired when an sample event occurs...
     *
     * @event STEP
     **/
	PreloaderEvent.STEP = '<%= nameSpace %>.preloaderevent::step';

	var p = PreloaderEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = PreloaderEvent;
	
	p.percentage;

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'PreloaderEvent';
	};
	
    <%= nameSpace %>.PreloaderEvent = PreloaderEvent;
}());