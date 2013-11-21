(function(){
    /**
     * service of <%= name %>.
     *
     * @class <%= name %>
     * @constructor
     */
    var <%= name %> = function() {
        if (<%= name %>.instance===null) {
        <%= name %>.instance = this;
            this.initialize();
        }else{
        <%= nameSpace %>.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
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

    var p = <%= name %>.prototype = new <%= nameSpace %>.AbstractService();
    p.constructor = <%= name %>;

    /**
    * initialize is called after the constructor is created.
    *
    * @method initialize
    */
    p.initialize = function(){ };

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
    p.toString = function(){
        return "<%= name %>";
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());