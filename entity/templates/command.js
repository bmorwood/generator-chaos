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
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
    p.initialize = function (){};

    /**
    * execute is called by a controller.
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