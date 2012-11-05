//when page is ready, start execution by running the function init()
$(document).ready(init);

var treeData = {};

function init(){
	$('#tree').tree({dataUrl: 'tree.json'});
	// bind code to be run after tree is initialized,
	// since getting the data from the server is done asynchronously
	$('#tree').bind(
		'tree.init',
		function() {
		    treeData = $('#tree').tree('toJson');
		}
	);
}

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
