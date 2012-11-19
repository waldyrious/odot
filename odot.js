var treeFilename = 'tree.json';
var treeData = {};

// The tree is initialized in the onload event of the html document.
// In jQuery this is usually done by passing a function to $(...)
$(function(){
	$("#tree").dynatree({
		initAjax: {url: treeFilename},
		onPostInit: function(isReloading, isError) {
		    // In lazy mode, this will be called *after* the initAjax request returned.
		    // 'this' is the current tree
		    // isReloading is set, if status was read from existing cookies
		    // isError is set, if Ajax failed
		    treeData = this.toDict().children;
			treeData.shift();
			$("#debug").text(JSON.stringify(treeData));
		}
	});
});

function saveTree(){
	$.ajax({
		global: false,
		type: "POST",
		cache: false,
		dataType: "text",
		data: ({
			filename: treeFilename,
			json_string: JSON.stringify(treeData)
		}),
		url: 'write.php',
		complete: function(xhr){ console.log(xhr.responseText); }
	});
}
