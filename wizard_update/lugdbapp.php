<?php


parse_str( $_SERVER['QUERY_STRING'] , $output );

////echo $output['ugn'];
////echo " "; 

//$username="";
//$password="";
//$database="";
//$server="";

//mysql_connect( $server,$username,$password);

//@mysql_select_db($database) or die( "Unable to select database");


$query  = "";

if( $output['ugsel'] != "false"  )
{
////get old data and overlay new data into the entry.Specifically link.
$result = mysql_query("SELECT * FROM `vol6lugdbgroups` WHERE `ug_id`='". $output['ugid'] ."' ");
$rowdata = mysql_fetch_array($result);

$origid = $rowdata['ugn'];
//$origid = "333";

$origgroupname = $rowdata['ugn'];
//$origgroupname = "Linux Test Group";

$origgroupcountry = $rowdata['ugc'];
//$origgroupcountry = "United States";

$origgroupstate = $rowdata['ugs'];
//$origgroupstate = "TEST STATE";

$origgroupcity = $rowdata['ugcty'];
//$origgroupcity = "TEST CITY";

//$origgrouptype = $rowdata['ugt'];
//$origgrouptype = "public";

//$origgroupinsterval = $rowdata['ugi'];
//$origgroupinsterval = "monthly";

//$origgroupwifi = $rowdata['ugw'];
//$origgroupwifi = "wifi";

//$origgroupeth = $rowdata['uge'];
//$origgroupeth = "public";

//$origgrouphd = $rowdata['ugh'];
//$origgrouphd = "restricted";

//make sure we can tell from the widget if we grabbed the data or not.
//$ugselected = $output['ugsel'];
}




$html="";

$html .= '<!DOCTYPE html><html><head>'.PHP_EOL;
$html .= '<META http-equiv="Content-Type" content="text/html; charset=utf-8" />'.PHP_EOL;
$html .= '<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">'.PHP_EOL;
$html .= '<META HTTP-EQUIV="EXPIRES" CONTENT="Mon, 22 Jul 2002 11:12:01 GMT">'.PHP_EOL;

$html .= '<style type="text/css"> body { padding: 0px;margin: 0px; }'.PHP_EOL;
$html .= '#isle {width: 100%;height: 160px;padding-bottom: 10px;}</style>'.PHP_EOL;

$html .= '<script>'.PHP_EOL;

if( $output['ugsel'] != "false"   )
{
//$html .= 'alert("should not see this if false" );';

$html .= 'localStorage.setItem(\'userspace_select_action\', '.$output['ugsel'].' );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupname\', "'.$origgroupname.'" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupcountry\',"'.$origgroupcountry.'" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupstate\', "'.$origgroupstate.'" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupcity\', "'.$origgroupcity.'" );'.PHP_EOL;

}
else
{

//$html .= 'alert("see this if false" );';
$html .= 'localStorage.setItem(\'userspace_select_action\', "false" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupname\', "" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupcountry\', "" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupstate\', "" );'.PHP_EOL;
$html .= 'localStorage.setItem(\'userspace_select_groupcity\', "" );'.PHP_EOL;

}

//$html .= 'function testSupport()'.PHP_EOL;
 
//$html .= ' {'.PHP_EOL;
//$html .= ' if (localStorage)'.PHP_EOL; 
//$html .= ' alert( "Local Storage: Supported");'.PHP_EOL; 
//$html .= ' else'.PHP_EOL; 
//$html .= ' alert( "Local Storage: Unsupported");'.PHP_EOL; 
//$html .= ' } '.PHP_EOL; 

//$html .= ' testSupport();'.PHP_EOL; 

$html .= '</script>'.PHP_EOL;

$html .= '<script type="text/javascript" src="script/lugwiz.js"></script>'.PHP_EOL;


$html .= '</head><body>'.PHP_EOL;
$html .= '<div id="header"></div><div id="main">'.PHP_EOL;
$html .= '<div id="content"><div id="isle"></div>'.PHP_EOL;
$html .= '</div></div><div id="footer"></div></body></html>'.PHP_EOL;

header('Content-Type: text/html; charset=utf-8');
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

echo $html;

?>
