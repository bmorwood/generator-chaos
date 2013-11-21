(function(){
    /**
     * basic model of <%= name %>.
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
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
    p.toString = function (){
        return "<%= name %>";
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());