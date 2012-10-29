<?php

// Adapted from http://stackoverflow.com/q/6187052/266309

// Note: remember to have the directory writable by the php script
//       (or create the tree.json file yourself first)

$filename = 'tree.json';

switch ($_REQUEST['action']) {
    case 'write':
		if( !is_writable(".") ){
			echo "ERROR: directory is not writable by php script!";
		} else {
			//header('Content-Type: application/json;charset=utf-8');
			if( !file_exists($filename) ) { touch ($filename); chmod($filename, 0666); }
			// make file writable by php script if it was created by another user
			if( !is_writable($filename) ) { chmod($filename, 0666); }
			// replace current contents of the file with the data passed
			// TODO: implement some revision control mechanism, e.g. svn or git
		    file_put_contents( $filename, $_REQUEST['json_string'] );
		}
		break;
    case 'read':
		if( file_exists($filename) ) {
			header('Content-Type: application/json;charset=utf-8');
    	    $json_string = file_get_contents($filename);
    	    echo json_encode($json_string);
		}
}
?>
