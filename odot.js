var treeData = {"key1": "val1", 
				"key2": "val2",
				"key3": "val3"};

function saveTree(){
	$.ajax({
		global: false,
		type: "POST",
		cache: false,
		dataType: "text",
		data: ({
			action: 'write',
			json_string: JSON.stringify(treeData)
		}),
		url: 'read-write.php',
		complete: function(xhr){ console.log(xhr.responseText); }
	});
}

function loadTree(){
	$.ajax({
		global: false,
		type: "POST",
		cache: false,
		dataType: "json",
		data: ({
			action: 'read'
		}),
		url: 'read-write.php',
		success: function(json_string){
			treeData = JSON.parse(json_string);
			updateDisplay();
		}
	});
}

function updateDisplay(){
	$('#tree-display').html( JSON.stringify(treeData) );
}

$(document).ready(updateDisplay);
