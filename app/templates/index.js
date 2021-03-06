(function($window){
    /**
     * A utility that brokers HTTP requests...
     *
     * @class <%= nameSpace %>
     * @constructor
     * @namespace <%= nameSpace %>
     **/
    var <%= nameSpace %> = function($params){
        /**
        * initialize the application.
        *
        * @attribute $params
        * @type Object
        * @default {width: 0, height: 0, container: '<div/>'}
        **/
        var appSettings = <%= nameSpace %>.AppSettings.getInstance();
        appSettings.width = $params.width || appSettings.width;
        appSettings.height = $params.height || appSettings.height;
        appSettings.rootContainer = $params.container || $('<div></div>',{id:'<%= nameSpace %>-main-container'});

        appSettings.rootContainer.css({
            width: appSettings.width,
            height: appSettings.height,
            position:'relative',
            overflow:'hidden'
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