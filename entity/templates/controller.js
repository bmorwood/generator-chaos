(function(){
    /**
     * controller of <%= name %>.
     *
     * @class <%= name %>
     * @constructor
     * @extends <%= nameSpace %>.AbstractController
     */
    var <%= name %> = function() {
        if (<%= name %>.instance===null) {
        <%= name %>.instance = this;
            this.initialize();
        }else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
        }
    };

    /**
    * instance is the class, this is used for singleton classes.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
    <%= name %>.instance = null;

    /**
    * getInstance is called to get the single instance of this class.
    *
    * @method getInstance
    */
    <%= name %>.getInstance = function (){
        if(<%= name %>.instance === null){
        <%= name %>.instance = new <%= name %>();
        }
    return <%= name %>.instance;
    };

    var p = <%= name %>.prototype = new <%= nameSpace %>.AbstractController();
    p.constructor = <%= name %>;

    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
    p.initialize = function (){
        this.addCommand(); //reacts to changes
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