(function(){
	
	var PreloaderEvent = function($type, $percentage) {
		this.percentage = $percentage;
		this.type = $type;
	};
	
	PreloaderEvent.COMPLETE = "ns.preloaderevent:complete";
	PreloaderEvent.STEP = "ns.preloaderevent:step";

	var p = PreloaderEvent.prototype = new <%= nameSpace %>.AbstractEvent();
	p.constructor = PreloaderEvent;
	
	p.percentage;

	p.toString = function (){
		return "[PreloaderEvent]";
	};
	
    <%= nameSpace %>.PreloaderEvent = PreloaderEvent;
}());