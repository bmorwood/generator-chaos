(function(){
	
	var Locale = function($id, $code, $description) {
		this.id = $id;
		this.description = $description;
		this.code = $code.toUpperCase();
	};
	
	Locale.deserialize = function(obj) {
		return new Locale(
			obj.id,
			obj.code,
			obj.description
		);
	};
	
	var p = Locale.prototype;
	
	p.id;
	p.description;
	p.selected = false;
	p.code;

	p.toString = function (){
		return "[Locale]";
	};
	
    <%= nameSpace %>.Locale = Locale;
}());