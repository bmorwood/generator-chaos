(function(){

    var <%= name %> = function($type) {
        this.initialize();
        this.type = $type;
    };

    var p = <%= name %>.prototype = new <%= nameSpace %>.AbstractEvent();
    p.constructor = <%= name %>;

    p.initialize = function (){};

    p.toString = function (){
        return "[<%= name %>]";
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());