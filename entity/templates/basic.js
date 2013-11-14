(function(){

    var <%= name %> = function() {
        this.initialize();
    };

    var p = <%= name %>.prototype;

    p.initialize = function (){};

    p.toString = function (){
        return "[<%= name %>]";
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());