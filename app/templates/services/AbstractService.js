(function () {
    /**
     * This is the description for AbstractService.
     *
     * @class AbstractService
     * @constructor
     */
	var AbstractService = function () {
		this.initialize();
	};
    
    var p = AbstractService.prototype;
    /**
     * default service request using ajax calls
     *
     *
     * @method initServiceWithConfig
     * @param {String} $url url to call
     * @param {Function} $success callback success
     * @param {Function} $fault  callback fault
     */
	p.$initServiceWithConfig = function ($url, $success, $fault) {
		$.get($url, function ($data) {

			if(typeof $data === 'string')
				$data = JSON.parse($data);
				
			$success($data);
		}).error(function ($data) {
			$fault($data);
		});
	};
    /**
    * default service request using ajax calls
    *
    *
    * @method initServiceWithConfig
    * @param {String} $url url to call
    * @param {Function} $success callback success
    * @param {Function} $fault  callback fault
    */
	p.initServiceWithConfig = function ($url, $success, $fault) {
		this.$initServiceWithConfig($url, $success, $fault);
	};
	
	p.initialize = function () { };
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function () {
		return 'AbstractService';
	};

    <%= nameSpace %>.AbstractService = AbstractService;
}());