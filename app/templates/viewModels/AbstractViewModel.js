(function(){
    /**
     * class of AbstractViewModel.
     *
     * @class AbstractViewModel
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.viewmodels
     */
    var AbstractViewModel = function() {};

            var p = AbstractViewModel.prototype;
            /**
            * id is used to find the DOM element and bind teh view model.
            * id should match the root node id in the DOM.
            *
            * @property id
            * @type {String}
            * @default null
            */
            p.id = '<%= nameSpace.toLowerCase() %>-main';
            /**
            * initialize is used to run code after the class is instantiated.
            * NOTE: you can delete this method and add your code right in the constructor.
            * @method initialize
            */
            p.initialize = function (){};
            /**
             * render is called to attach the view to the DOM.
             *
             * @method render
             * @param {Jquery} $src
             * @required
             */
            p.render = function($src){};
            /**
             * once render is called the addToStage method should be called.
             *
             * @method addedToStage
             * @required
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
                return 'AbstractViewModel';
            };

 <%= nameSpace %>.AbstractViewModel = AbstractViewModel;
}());