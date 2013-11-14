(function(){

    var <%= name %> = function() {
        this.initialize();
    };

    var p = <%= name %>.prototype;

    p.initialize = function (){};

    p.execute = function($event){
        <%= nameSpace %>.logger.log('I am executing ' + this.toString(), $event);
    };

    p.toString = function (){
        return '[<%= name %>]';
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());