(function(){

    var <%= name %> = function() {
        if (<%= name %>.instance===null) {
            <%= name %>.instance = this;
            this.initialize();
        }else{
        <%= nameSpace %>.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
        }
    };


    <%= name %>.instance = null;

    <%= name %>.getInstance = function (){
        if(<%= name %>.instance===null){
            <%= name %>.instance = new <%= name %>();
        }
        return <%= name %>.instance;
    };

    var p = <%= name %>.prototype;

    p.initialize = function (){ };


    p.toString = function (){
        return "[<%= name %>]";
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());