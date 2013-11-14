(function(){
	
	var SystemDownViewModel = function() {
		if (SystemDownViewModel.instance===null) {
			SystemDownViewModel.instance = this;
		}else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	SystemDownViewModel.instance = null;

	SystemDownViewModel.getInstance = function (){
		if(SystemDownViewModel.instance === null){
			SystemDownViewModel.instance = new SystemDownViewModel();
		}	
		return SystemDownViewModel.instance;
	};
	
	var p = SystemDownViewModel.prototype;
	
	p.h1Txt;
	p.h2Txt;
	p.buttonTxt;
	
	p.id = '<%= nameSpace.toLowerCase() %>-system-down-view';
	
	p.initialize = function (){

        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.SystemDownDisplayEvent.SHOW, this.handleShowSystemDown, this );
        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.SystemDownDisplayEvent.HIDE, this.handleHideSystemDown, this );
		
		this.h1Txt = ko.observable();
		this.h2Txt = ko.observable();
		this.buttonTxt = ko.observable();
	};
	
	p.handleShowSystemDown = function($event){
		
		var url = 'localized-copy/maintenance.json';

		var scope = this;
		
		$.get(url, function($data){
			scope.handleDataSuccess($data);
		});
	};
	
	p.handleDataSuccess = function($data){
		var locale = <%= nameSpace %>.AppProperties.getInstance().locale.toUpperCase();

        if(typeof $data === 'string')
            $data = JSON.parse( $data )

        var result = $data;

        var sections = [];

        for (var i = result.length - 1; i >= 0; i--){
            sections.push(<%= nameSpace %>.LocalizedSection.deserialize(result[i]));
        }

        <%= nameSpace %>.EventDispatcher.getInstance().addEventListener(<%= nameSpace %>.LocalizationEvent.REPOPULATED, this.contentReady, this);
        <%= nameSpace %>.LocalizationUtility.repopulate(sections);
	};

    p.contentReady = function(){

        <%= nameSpace %>.EventDispatcher.getInstance().removeEventListener(<%= nameSpace %>.LocalizationEvent.REPOPULATED, this.contentReady, this);
        <%= nameSpace %>.LC.initialize();

        if(<%= nameSpace %>.LC.SYSTEM_DOWN_H1 !== ''){
            this.h1Txt(<%= nameSpace %>.LC.SYSTEM_DOWN_H1);
            this.h2Txt(<%= nameSpace %>.LC.SYSTEM_DOWN_H2);
            this.buttonTxt(<%= nameSpace %>.LC.SYSTEM_DOWN_BUTTON);
        }else{
            h1 = 'the project is in the shop for a scheduled maintenance. We\'ll be back in no time.';
            h2 = 'Check out our other services.';
            button = 'Go main website page';
        }

        $('#<%= nameSpace.toLowerCase() %>-system-down-view').show();
    };
	
	p.handleHideSystemDown = function($event){
		$('#<%= nameSpace.toLowerCase() %>-system-down-view').hide();
	};
	
	p.handleClick = function (){
		alert('go somewhere')
	};
	
	p.render = function($src){
		var elm = <%= nameSpace %>.templates['SystemDown.html']();
		$src.append(elm);
		this.initialize();
		ko.applyBindings(this, $('#' + this.id)[0]);
	};
	
	p.dispose = function (){
		$('#' + this.id).remove();
	};
	
	p.toString = function (){
		return '[SystemDownViewModel]';
	};

    <%= nameSpace %>.SystemDownViewModel = SystemDownViewModel;
}());