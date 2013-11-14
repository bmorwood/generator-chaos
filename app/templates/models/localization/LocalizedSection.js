(function(){
	
	var LocalizedSection = function($id, $key, $fields) {
		this.id = $id;
		this.key = $key;
		this.fields = $fields;
	};
	
	LocalizedSection.deserialize = function($obj){
		var section = $obj.localized_messaging_section;
		var fields = [];
		for (var i = section.fields.length - 1; i >= 0; i--){
			fields.push(<%= nameSpace %>.LocalizedField.deserialize(section.fields[i]));
		};
					
		return new LocalizedSection(
			section.id, 
			section.key, 
			fields
			);
	};

	var p = LocalizedSection.prototype;
	
	p.id;
	p.key;
	p.fields = [];

	p.toString = function (){
		return "[LocalizedSection]";
	};
	
    <%= nameSpace %>.LocalizedSection = LocalizedSection;
}());