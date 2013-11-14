(function($window){

    var <%= nameSpace %> = function($params){

        var appSettings = <%= nameSpace %>.AppSettings.getInstance();
        appSettings.width = $params.width || appSettings.width;
        appSettings.height = $params.height || appSettings.height;
        appSettings.rootContainer = $params.container || $('<div></div>', {
            id:'ns-main-container',
            width: appSettings.width,
            height: appSettings.height,
            css:{position:'relative'}
        });

        if(!$params.container)
            $(document.body).append(appSettings.rootContainer);

        //add controllers
        <%= nameSpace %>.SystemDownController.getInstance();

        var main = new <%= nameSpace %>.Main();
        main.render(appSettings.rootContainer);

        var preloader = new <%= nameSpace %>.PreloaderViewModel();
        preloader.render(appSettings.rootContainer);

        var systemDown = new <%= nameSpace %>.SystemDownViewModel();
        systemDown.render(appSettings.rootContainer);

    };

    <%= nameSpace %>.logger = {
        log: function (){
            if(typeof console == 'object')
                console.log(arguments[0]);
        },
        info: function(){
            if(typeof console == 'object')
                console.info(arguments[0]);
        },
        warn: function(){
            if(typeof console == 'object')
                console.warn(arguments[0]);
        },
        error: function(){
            if(typeof console == 'object')
                console.error(arguments[0]);
        }
    };

    var p = <%= nameSpace %>.prototype;

    p.init = function (){
        <%= nameSpace %>.InitializationSequenceOrchestrator.getInstance().run();
    };

    $window.<%= nameSpace %> = <%= nameSpace %>;