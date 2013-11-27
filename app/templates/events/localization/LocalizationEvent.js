(function(){
    /**
     * event of LocalizationEvent.
     *
     * @class LocalizationEvent
     * @constructor
     * @param {Event} $type event type.
     * @param {Object} $params additional params to pass along to the listener.
     * @namespace <%= nameSpace.toLowerCase() %>.events.localization
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
    var LocalizationEvent = function($type, $params) {
        this.params = $params || null;
        this.type = $type;
    };

    /**
     * Fired when the locale is changed and new localized copy has been repopulated.
     *
     * @event REPOPULATED
     * @type {String}
     **/
    LocalizationEvent.REPOPULATED = "<%= nameSpace.toLowerCase() %>.localizationevent::repopulated";
    /**
     * Fired when the localized content is ready.
     *
     * @event LOCALIZATION_CONTENT_READY
     * @type {String}
     **/
    LocalizationEvent.LOCALIZATION_CONTENT_READY = "<%= nameSpace.toLowerCase() %>.localizationevent::localization.contentcready";

    var p = LocalizationEvent.prototype = new <%= nameSpace %>.AbstractEvent();
    p.constructor = LocalizationEvent;

    p.toString = function (){
        return 'LocalizationEvent';
    };

    <%= nameSpace %>.LocalizationEvent = LocalizationEvent;
}());