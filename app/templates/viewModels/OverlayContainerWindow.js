(function(){
	
	var OverlayContainerWindow = function($name, $window, $isModal, $x, $y) {
		this.name = $name;
		this.window = $window;
		this.isModal = _.isUndefined($isModal) ? false : $isModal;
		this.x = _.isUndefined($x) ? 0 : $x;
		this.y = _.isUndefined($y) ? 0 : $y;
	};
	
	var p = OverlayContainerWindow.prototype;
	
	p.name;
	p.window;
	p.isModal;
	p.y;
	p.x;

	p.toString = function (){
		return '[OverlayContainerWindow]';
	};

    <%= nameSpace %>.OverlayContainerWindow = OverlayContainerWindow;
}());