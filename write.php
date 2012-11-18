<?php

// Note: remember to have the directory writable by the php script
//       (or create the tree.json file yourself first)

$filename = $_POST['filename'];

if( !is_writable(".") ){
	echo "ERROR: directory is not writable by php script!";
} else {
//	header('Content-Type: application/json;charset=utf-8');

	// create file if it doesn't exist
	if( !file_exists($filename) ) { touch($filename); }
	// make file writable by php script if it was created by another user
	if( !is_writable($filename) ) { chmod($filename, 0666); }

	// replace current contents of the file with the data passed
	// TODO: implement some revision control mechanism, e.g. svn or git

	// Convert JSON string to JSON PHP variable
	$json_php = json_decode($_POST['json_string']);
	// Format JSON for pretty-print
	$json_fmt = json_encode($json_php, JSON_PRETTY_PRINT);
	file_put_contents( $filename, $json_fmt );
}

?>
