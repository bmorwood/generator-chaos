(function(){
    /**
     * event of LocalizationEvent.
     *
     * @class LocalizationEvent
     * @constructor
     * @namespace <%= nameSpace.toLowerCase() %>.events.localization
     * @extends <%= nameSpace.toLowerCase() %>.AbstractEvent
     */
    var LocalizationEvent = function($type, $params) {
        this.params = $params || null;
        this.type = $type;
    };

    /**
     * Fired when an sample event occurs...
     *
     * @event REPOPULATED
     **/
    LocalizationEvent.REPOPULATED = "<%= nameSpace.toLowerCase() %>.localizationevent::repopulated";
    /**
     * Fired when an sample event occurs...
     *
     * @event LOCALIZATION_CONTENT_READY
     **/
    LocalizationEvent.LOCALIZATION_CONTENT_READY = "<%= nameSpace.toLowerCase() %>.localizationevent::localization.contentcready";

    var p = LocalizationEvent.prototype = new <%= nameSpace %>.AbstractEvent();
    p.constructor = LocalizationEvent;

    p.toString = function (){
        return 'LocalizationEvent';
    };

    <%= nameSpace %>.LocalizationEvent = LocalizationEvent;
}());