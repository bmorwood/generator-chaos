(function(){

    var <%= name %> = function() {

    };

    var p = <%= name %>.prototype;

    p.toString = function (){
        return "[<%= name %>]";
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());