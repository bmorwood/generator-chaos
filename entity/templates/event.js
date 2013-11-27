(function(){
    /**
     * event of <%= name %>.
     *
     * @class <%= name %>
     * @param {String} $type
     * @constructor
     * @extends <%= nameSpace %>.AbstractEvent
     */
    var <%= name %> = function($type) {
        this.initialize();
        this.type = $type;
    };

    /**
    * Fired when an sample event occurs...
    *
    * @event SAMPLE_EVENT
    **/
    <%= name %>.SAMPLE_EVENT = '<%= nameSpace.toLowerCase() %>'.<%= name.toLowerCase() %>::sample_event;

    var p = <%= name %>.prototype = new <%= nameSpace %>.AbstractEvent();
    p.constructor = <%= name %>;

    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
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