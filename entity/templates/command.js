(function(){
    /**
     * command of <%= name %>.
     *
     * @class <%= name %>
     * @constructor
     */
    var <%= name %> = function() {
        this.initialize();
    };

    var p = <%= name %>.prototype;

    /**
    * initialize is called after the constructor is created.
    *
    * @method initialize
    */
    p.initialize = function (){};

    /**
    * execute is called by a controller
    *
    * @method execute
    */
    p.execute = function($event){
        <%= nameSpace %>.logger.log('I am executing ' + this.toString(), $event);
    };

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
    p.toString = function (){
        return '<%= name %>';
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());