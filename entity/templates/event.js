(function(){
    /**
     * event of <%= name %>.
     *
     * @class <%= name %>
     * @param {String} $type
     * @constructor
     * @extends AbstractEvent
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