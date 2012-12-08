<?php 

/* COPYRIGHT GPL 3.0+ Version 0.8   */

ini_set('display_errors', 'On');
error_reporting(E_ALL);


parse_str( $_SERVER['QUERY_STRING'] , $output );

//echo $output['ugn'];
//echo " "; 
//echo $output['ugc'];
//echo " "; 
//echo $output['ugs'];
//echo " "; 
//echo $output['ugcty'];
//echo " "; 
//echo $output['ugt'];
//echo " "; 
//echo $output['ugi'];
//echo " "; 
//echo $output['ugw'];
//echo " "; 
//echo $output['uge'];
//echo " "; 
//echo $output['ugh'];


$username="";
$password="";
$database="";
$server="";

 
function gen_uuid($len=8)
{
    $hex = md5("u_s-e_r-s_p-a_c-e_o-r_g" . uniqid("", true));

    $pack = pack('H*', $hex);

    $uid = base64_encode($pack);        // max 22 chars
    
    $uid = preg_replace("/[^A-Z0-9]/", "", strtoupper($uid));    // uppercase only

    if ($len<4)
        $len=4;
    if ($len>128)
        $len=128;                       // prevent silliness, can remove

    while (strlen($uid)<$len)
        $uid = $uid . gen_uuid(22);     // append until length achieved

    return substr($uid, 0, $len);
}


mysql_connect( $server,$username,$password);

@mysql_select_db($database) or die( "Unable to select database");


$query  = "";


if( $output['ugdel'] == "true" )
{
//get old data and overlay new data into the entry.Specifically link.
$result = mysql_query("SELECT * FROM `vol6lugdbgroups` WHERE `ug_id`='". $output['ugid'] ."' ");
$rowdata = mysql_fetch_array($result);
$oldug = $rowdata['ugn'];
//now actually delete the entry.
$query .= "DELETE FROM `vol6lugdbgroups` WHERE `ug_id`='". $output['ugid'] ."' ";
mysql_query($query);
//1: Need to remove unique id from list and add back to list.
//2: Delete page for UG

//Report to user which ID was Deleted. 
echo "DELETED "+ $oldug;
}

if( !empty( $output['ugid'] ) &&  $output['ugdel'] == "false"  )
{
//get old data and overlay new data into the entry.Specifically link.
$result = mysql_query("SELECT * FROM `vol6lugdbgroups` WHERE `ug_id`='". $output['ugid'] ."' ");
$rowdata = mysql_fetch_array($result);
$oldlink = $rowdata['link'];
$oldug = $rowdata['ugn'];
//This is the update data will need to change responsible person by data entry widget. 
$query .= "UPDATE `vol6lugdbgroups` SET `groupname`= '". $output['ugn'] ."' ,`country`='". $output['ugc'] ."',`state`='". $output['ugs'] ."',`city`='". $output['ugcty'] ."',`type`='". $output['ugt'] ."',`interval`='". $output['ugi'] ."',`wifi`='". $output['ugw'] ."',`eth`='". $output['uge'] ."',`bringhardware`='". $output['ugh'] ."',`rp`=' ',`rpemail`=' ',`rpphone`=' ',`rptwit`=' ',`link`='".$oldlink."' WHERE `ug_id`='". $output['ugid'] ."'";
mysql_query($query);
//report to user what name was changed and also the new name. 
echo "UPDATED "+$oldug+" to ".$output['ugn'];
}

if( empty( $output['ugid'] ) && $output['ugdel'] == "false"  )
{
//ADD to database
// Need to find a unique id available for LUG users group.  Should start out with USG 000000 6 character ASCII 256
$usgid=gen_uuid();


$query  = "";
$query .= "INSERT INTO vol6lugdbgroups VALUES ( '', CURDATE() , CURDATE() , ";
$query .=  "'". $output['ugn'] ."' ,";
$query .=  "'". $output['ugc'] ."' ,";
$query .=  "'". $output['ugs'] ."' ,";
$query .=  "'". $output['ugcty'] ."' ,";
$query .=  "'". $output['ugt'] ."' ,";
$query .=  "'". $output['ugi'] ."' ,";
$query .=  "'". $output['ugw'] ."' ,";
$query .=  "'". $output['uge'] ."' ,";
$query .=  "'". $output['ugh'] ."' ,";
$query .=  " ' ',' ',' ',' ', '".$usgid."' )";
// responsible person responsible email , contact phone , twitter , group userspace url id.
mysql_query($query);

// Send to a wiki page with ID , Setup page with per-formatted widgets options selectable.
//Give this data back to the client to go to. 
echo $usgid;
}



mysql_close();




 ?>
