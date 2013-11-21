(function(){
    /**
     * model of <%= name %>.
     *
     * @class <%= name %>
     * @constructor
     */
    var <%= name %> = function() {

    };

    var p = <%= name %>.prototype;

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