//when page is ready, start execution by running the function init()
$(document).ready(init);

var treeFilename = 'tree.json';
var treeData = {};

function init(){
	$('#tree').tree({dataUrl: treeFilename});
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
			filename: treeFilename,
			json_string: treeData
		}),
		url: 'read-write.php',
		complete: function(xhr){ console.log(xhr.responseText); }
	});
}

$(document).keydown(function() {
	//event.preventDefault();
	switch(event.which) {
		case 37: console.log("left"); break;
		case 38: console.log("up"); break;
		case 39: console.log("right"); break;
		case 40: console.log("down"); break;
	}
});
