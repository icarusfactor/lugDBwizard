<?php   
        ini_set( 'display_errors', 1 );
        error_reporting(-1);
        //phpinfo();
        
        //echo $_GET["search"];
        //$searchterms = $_GET["search"];       
        $sizew           = $_GET["width"]; 
        $sizeh            = $_GET["height"]; 

       
$output = ''; 

//$searchterms = "Linux,Open Source";
//$sizew =   "300";
//$sizeh =    "300";
$duration=5000;
$imgs=10;



$output .='<!DOCTYPE html >';
$output .='<HTML ><HEAD><META http-equiv="content-type" content="text/html; charset=UTF-8" />';


$output .='<script type="text/javascript" src="script/lug.js"></script>';
$output .='<script type="text/javascript" src="lugDB.js"></script>';
$output .='<style type="text/css"> body { padding: 0px;margin: 0px; }';
$output .='#header { background-color: #0E273C;font-weight: bold;';
$output .='padding: 12px;font-size: 11px;font-family: \'Lucida Grande\';color: white;}';
$output .='#footer {position: relative;height: 40px;background-color: #AAA;}';
$output .='#content {position: relative;background-color: #D7D7D7;}';
$output .='#isle {width: 100%;height: 160px;padding-bottom: 10px;}';
$output .='</style></head><body><div id="header"></div><div id="main">';
$output .='<div id="content"><div id="isle"></div><div id="demoContent">';
$output .='</div></div></div><div id="footer"></div></body></html>';







$output .='</BODY></HTML>';


echo $output; 
  

?>
