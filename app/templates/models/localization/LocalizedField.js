(function(){
	
	var LocalizedField = function($id, $key, $value, $sectionId, $localeId) {
		this.id = $id;
		this.key = $key;
		this.value = $value;
		this.sectionId = $sectionId;
		this.localeId = $localeId;
	};
	
	LocalizedField.deserialize = function($obj){
		var field = $obj.localized_messaging_field;
		return new LocalizedField(
			field.id, 
			field.key, 
			field.value, 
			field.localized_messaging_section_id, 
			field.locale_id
			);
	};

	var p = LocalizedField.prototype;
	
	p.id;
	p.key;
	p.value;
	p.sectionId;
	p.localeId;

	p.toString = function (){
		return "[LocalizedField]";
	};
	
    <%= nameSpace %>.LocalizedField = LocalizedField;
}());