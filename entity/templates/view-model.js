(function(){
    /**
     * view model of <%= name %>.
     *
     * @class <%= name %>
     * @constructor
     * @extends <%= nameSpace.toLowerCase() %>.viewmodels.AbstractViewModel
     */
    var <%= name %> = function() {
        if (<%= name %>.instance===null) {
            <%= name %>.instance = this;
            this.initialize();
        }else{
            <%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
        }
    };


    <%= name %>.instance = null;

    <%= name %>.getInstance = function (){
        if(<%= name %>.instance === null){
            <%= name %>.instance = new <%= name %>();
        }
        return <%= name %>.instance;
    };

    var p = <%= name %>.prototype = new <%= nameSpace %>.AbstractViewModel();
    p.constructor = <%= name %>;

    p.id = '<%= nameSpace.toLowerCase() %>-<%= baseName.toLowerCase() %>view-container';

    p.initialize = function (){ };

    p.render = function($src){
        this.elm = <%= nameSpace %>.templates['<%= baseName %>View.html']();
        $src.append(this.elm);
        ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
    };

    p.addedToStage = function(){ };

    p.dispose = function (){
        $('#' + this.id).remove();
    };

    p.toString = function (){
        return '<%= name %>';
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());