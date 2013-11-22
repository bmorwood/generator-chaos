(function(){

	var PreloaderViewModel = function() {
		if (PreloaderViewModel.instance===null) {
			PreloaderViewModel.instance = this;
		}else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	PreloaderViewModel.instance = null;

	PreloaderViewModel.getInstance = function (){
		if(PreloaderViewModel.instance === null){
			PreloaderViewModel.instance = new PreloaderViewModel();
		}
		return PreloaderViewModel.instance;
	};

	var p = PreloaderViewModel.prototype;

	p.id = '<%= nameSpace.toLowerCase() %>-preloader-container';

	p.initialize = function (){ };

	p.update = function ($percent){
        TweenMax.killTweensOf($('#<%= nameSpace.toLowerCase() %>-preloader-bar'));
        TweenMax.to($('#<%= nameSpace.toLowerCase() %>-preloader-bar'), 1, {width: ($percent * 100) + '%'});
	};

	p.handleProgress = function($event){
		this.update($event.percentage);
	};

	p.handlePreloadComplete = function(){
		this.hide();
	};

	p.render = function($src){
		this.elm = <%= nameSpace %>.templates['Preloader.html']();
		$src.append(this.elm);
		ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
	};

    p.addedToStage = function(){

    <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.PreloaderEvent.COMPLETE, this.handlePreloadComplete, this);
    <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.PreloaderEvent.STEP, this.handleProgress, this);

        this.reset();
    };

	p.dispose = function (){
		$('#' + this.id).remove();
	};

	p.hide = function (){

		TweenMax.to($('#<%= nameSpace.toLowerCase() %>-preloader-container')[0], 1, {opacity: 0, delay:1, onComplete: function (){
			$('#<%= nameSpace.toLowerCase() %>-preloader-container').hide();
		}});
	};

	p.show = function (){

		this.reset();

		$('#<%= nameSpace.toLowerCase() %>-preloader-container').css({'background-color' : 'rgba(0,0,0,0.8)'});
		$('#<%= nameSpace.toLowerCase() %>-preloader-container').show();

		TweenMax.to($('#<%= nameSpace.toLowerCase() %>-preloader-container')[0], 0.5, {opacity: 1});
	};

	p.reset = function(){
		this.currentPercent = 0;
        $('#<%= nameSpace.toLowerCase() %>-preloader-bar').css({width: '0%'});
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'PreloaderViewModel';
	};

    <%= nameSpace %>.PreloaderViewModel = PreloaderViewModel;
}());