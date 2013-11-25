(function(){
    /**
     * event of PreloaderEvent.
     *
     * @class PreloaderEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.preloader
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
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

	p.toString = function (){
		return 'PreloaderEvent';
	};
	
    <%= nameSpace %>.PreloaderEvent = PreloaderEvent;
}());