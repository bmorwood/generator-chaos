(function(){
    /**
     * view model of <%= name %>.
     *
     * @class <%= name %>
     * @constructor
     */
    var <%= name %> = function() {
        if (<%= name %>.instance===null) {
            <%= name %>.instance = this;
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

    var p = <%= name %>.prototype;

    /**
    * id is used to find the DOM element and bind teh view model.
    * id should match the root node id in the DOM.
    *
    * @property id
    * @type {String}
    * @default null
    */
    p.id = '<%= nameSpace.toLowerCase() %>-<%= name.toLowerCase() %>-container';

    /**
    * initialize is called after the constructor is created.
    *
    * @method initialize
    */
    p.initialize = function (){ };

    /**
    * render is called to attach the view to the DOM.
    *
    * @method render
    * @param $src
    */
    p.render = function($src){
        this.elm = <%= nameSpace %>.templates['<%= name %>.html']();
        $src.append(this.elm);
        ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
    };

    /**
    * addedToStage called after the view model and view are bound.
    *
    * @method addedToStage
    */
    p.addedToStage = function(){ };

    /**
    * dispose should be called to remove the element from the DOM, this helps the
    * view model dispose of any objects / services that are running.
    *
    * @method dispose
    */
    p.dispose = function (){
        $('#' + this.id).remove();
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