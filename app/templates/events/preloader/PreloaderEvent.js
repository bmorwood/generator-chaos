(function(){
    /**
     * event of PreloaderEvent.
     *
     * @class PreloaderEvent
     * @constructor
     * @param {Event} $type event type.
     * @param {Number} $percentage the current percentage that the pre-loader should display.
     * @namespace <%= nameSpace.toLowerCase() %>.events.preloader
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
	var PreloaderEvent = function($type, $percentage) {
		this.percentage = $percentage;
		this.type = $type;
	};
    /**
     * Fired when the pre-loader is completed and has reached 100%.
     *
     * @event COMPLETE
     * @type {String}
     **/
	PreloaderEvent.COMPLETE = '<%= nameSpace %>.preloaderevent::complete';
    /**
     * Fired when the pre-loader percentage has changed.
     *
     * @event STEP
     * @type {String}
     **/
	PreloaderEvent.STEP = '<%= nameSpace %>.preloaderevent::step';

	var p = PreloaderEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = PreloaderEvent;
    /**
    * percentage is used to holder the current percentage of the pre-loader.
    *
    * @property percentage
    * @type {Number}
    * @default null
    */
	p.percentage;

	p.toString = function (){
		return 'PreloaderEvent';
	};
	
    <%= nameSpace %>.PreloaderEvent = PreloaderEvent;
}());