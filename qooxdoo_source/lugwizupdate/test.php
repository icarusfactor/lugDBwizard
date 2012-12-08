<?php 

ini_set('display_errors', 'On');
error_reporting(E_ALL);

parse_str( $_SERVER['QUERY_STRING'] , $output );

echo $output['ugn'];
echo " "; 
echo $output['ugc'];
echo " "; 
echo $output['ugs'];
echo " "; 
echo $output['ugcty'];
echo " "; 
echo $output['ugt'];
echo " "; 
echo $output['ugi'];
echo " "; 
echo $output['ugw'];
echo " "; 
echo $output['uge'];
echo " "; 
echo $output['ugh'];


$username="b15_10061641";
$password="g1l2u3e4";
$database="b15_10061641_userspace";
$server="sql207.byethost15.com";



mysql_connect( $server,$username,$password);

@mysql_select_db($database) or die( "Unable to select database");
//$query = "INSERT INTO vol6usogroups VALUES ( '', CURDATE() , CURDATE() ,'Tulsa Linux Users Group','United States','Oklahoma','Tulsa','PUBLIC','MONTHLY','PUBLIC','NONE','RESTRICTED','Daniel Yount','factorf2@yahoo.com','(918)6835104','icarusfactor','UGUS12345')";


$query  = "";

if( $output['showid'] != NULL   )
{

//This is the update data will need to change responsiable person by data entry widget. 
$query .= "UPDATE vol6usogroups SET groupname = '". $output['ugn'] ."' , country = '". $output['ugc'] ."' , ";
$query .= "state = ' ". $output['ugs'] ." ' , city = '". $output['ugcty'] ."' , type = ''". $output['ugt'] ."' , interval  = '". $output['ugi'] ." ' , ";
$query .= "wifi = '". $output['ugw'] ."' , eth   = '". $output['uge'] ."' , bringhardware = '". $output['ugh'] ."', ";
$query .= "rp  = 'Daniel Yount' , rpemail = 'factorf2@yahoo.com', ";
$query .= "rpphone = '(918)6835104', rptwit = 'icarusfactor', link = 'UGUS12345' ";
$query .= "WHERE id = ' ". $output['ugid'] ." ';";

}
else
{
//This is the update data will need to change responsiable person by data entry widget. 
$query .= "INSERT INTO vol6usogroups VALUES ( '', CURDATE() , CURDATE() , ";
$query .=  "'". $output['ugn'] ."' ,";
$query .=  "'". $output['ugc'] ."' ,";
$query .=  "'". $output['ugs'] ."' ,";
$query .=  "'". $output['ugcty'] ."' ,";
$query .=  "'". $output['ugt'] ."' ,";
$query .=  "'". $output['ugi'] ."' ,";
$query .=  "'". $output['ugw'] ."' ,";
$query .=  "'". $output['ugw'] ."' ,";
$query .=  "'". $output['ugh'] ."' ,";
$query .=  " 'Daniel Yount','factorf2@yahoo.com','(918)6835104','icarusfactor','UGUS12345')";
}


mysql_query($query);
mysql_close();

echo "ADDED DATA TO DB";

//$id=$_GET['id'];
//$username="username";
//$password="password";
//$database="your_database";
//mysql_connect(localhost,$username,$password);

//$query=" SELECT * FROM contacts WHERE id='$id'";
//$result=mysql_query($query);
//$num=mysql_numrows($result);
//mysql_close();

//$i=0;
//while ($i < $num) {
//$first=mysql_result($result,$i,"first");
//$last=mysql_result($result,$i,"last");
//$phone=mysql_result($result,$i,"phone");
//$mobile=mysql_result($result,$i,"mobile");
//$fax=mysql_result($result,$i,"fax");
//$email=mysql_result($result,$i,"email");
//$web=mysql_result($result,$i,"web");

//Space For Code

//++$i;
//}

 ?>

