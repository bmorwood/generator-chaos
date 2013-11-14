(function(){

    var <%= name %> = function() {
        if (<%= name %>.instance===null) {
            <%= name %>.instance = this;
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

    var p = <%= name %>.prototype;

    p.id = '<%= nameSpace.toLowerCase() %>-<%= name.toLowerCase() %>-container';

    p.initialize = function (){ };

    p.render = function($src){
        this.elm = <%= nameSpace %>.templates['<%= name %>.html']();
        $src.append(this.elm);
        ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
    };

    p.addedToStage = function(){ };

    p.dispose = function (){
        $('#' + this.id).remove();
    };

    p.toString = function (){
        return '[<%= name %>]';
    };

    <%= nameSpace %>.<%= name %> = <%= name %>;
}());