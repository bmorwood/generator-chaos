(function(){
	
	var LocalizationUtility = function() {
		if (LocalizationUtility.instance===null) {
			LocalizationUtility.instance = this;
			this.initialize();
		}else{
			<%= nameSpace %>.logger.error('You should not call the constructor for ' + this.toString() + ' directly. It is a singleton, so you should use getInstance()');
		}
	};

	LocalizationUtility.instance = null;

	LocalizationUtility.getInstance = function (){
		
		if(LocalizationUtility.instance===null){
			LocalizationUtility.instance = new LocalizationUtility();
		}
			
		return LocalizationUtility.instance;
	};
	
	LocalizationUtility.localizationHash = [];
	LocalizationUtility.localizedContent = [];
	
	LocalizationUtility.getContent = function ($sectionKey, $fieldKey){
		var returnValue = (LocalizationUtility.localizationHash[$sectionKey] && LocalizationUtility.localizationHash[$sectionKey][$fieldKey]) ? LocalizationUtility.localizationHash[$sectionKey][$fieldKey] : '';
		if(returnValue == '') 
			<%= nameSpace %>.logger.warn($sectionKey+', '+$fieldKey+' was not found in the localization hash');
		
		
		return returnValue.replace('®', '<sup>®</sup>').replace('(MD)', '<sup>MD</sup>');
	};
	
	LocalizationUtility.prepData = function(){
		LocalizationUtility.localizationHash = LocalizationUtility.flattenData();
	};

	LocalizationUtility.flattenData = function(){
		var flattenedMap = [];
		
		for (var i = LocalizationUtility.localizedContent.length - 1; i >= 0; i--){
			var section = LocalizationUtility.localizedContent[i];
			var fields = [];
			for (var ii = section.fields.length - 1; ii >= 0; ii--){
				var field = section.fields[ii];
				fields[field.key] = field.value;
			};
			flattenedMap[section.key] = fields;
		};
		
		return flattenedMap;
	};

	LocalizationUtility.repopulate = function($localizedContent){
		LocalizationUtility.localizedContent = $localizedContent;
		LocalizationUtility.prepData();
		new <%= nameSpace %>.LocalizationProxyEvent(<%= nameSpace %>.LocalizationEvent.REPOPULATED).dispatch();
	};
	
	LocalizationUtility.initialized = false;
	
	var p = LocalizationUtility.prototype;
	
	p.initialize = function (){};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return '[LocalizationUtility]';
	};
	
    <%= nameSpace %>.LocalizationUtility = LocalizationUtility;
}());