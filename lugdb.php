<?php
/**
 * MediaWiki LugDB Wizard Extension                                                                                          
 * {{php}}{{Category:Extensions|LugDBwizard}}                                                                               
 * @package MediaWiki                                                                                                        
 * @subpackage Extensions                                                                                                    
 * @author Daniel Yount  icarusfactor factorf2@yahoo.com                                                                     
 * @licence GNU General Public Licence 3.0 or later                                                                          
 * @version Version 0.8

Installation:
	install this file in
	
		${IP}/extensions/lugDBwizard/lugdb.php
	
	and add the following line at the end of ${IP}/LocalSettings.php :
	
		require_once("$IP/extensions/lugDBwizard/lugdb.php");

**/



define('LUGDBWIZARD_VERSION','0.8');


$wgHooks['LanguageGetMagic'][] = 'wfIframeLDBwLanguageGetMagic';
$wgExtensionFunctions[] = 'wfSetupIframeLDBw';


/**
 * Protect against register_globals vulnerabilities.
 * This line must be present before any global variable is referenced.
**/
if(!defined('MEDIAWIKI')){
	echo("This is an extension to the MediaWiki package and cannot be run standalone.\n" );
	die(-1);
}


function wfIframeLDBwLanguageGetMagic(&$magicWords,$langCode = 0) {
        $magicWords['lugdbwiz'] = array(0,'lugdbwiz');
        return true;
}
 
function wfSetupIframeLDBw() {
        global $wgParser;
        $wgParser->setFunctionHook('lugdbwiz','wfRenderIframeLDBw');
        return true;
}

/**
 * An array of extension types and inside that their names, versions, authors and urls. This credit information gets added to the wiki's Special:Version page, allowing users to see which extensions are installed, and to find more information about them.
**/
$wgExtensionCredits['parserhook'][] = array(
        'name'          =>      'lugdbwiz',
        'version'       =>       LUGDBWIZARD_VERSION ,
        'author'        =>      'Daniel Yount @icarusfactor',
        'url'           =>      'N/A',
        'description'   =>      'Creates a secure iframe for a Qooxdoo LUG database'
);

function wfRenderIframeLDBw( &$parser )
	{
        global $wgServer;
        $html='';        

        $argv = array();
        foreach (func_get_args() as $arg) if (!is_object($arg)) {
                if (preg_match('/^(.+?)\\s*=\\s*(.+)$/',$arg,$match)) $argv[$match[1]]=$match[2];
        }

        if(isset($argv['type']))  {  $wiztype  = $argv['type']; } else   { $wiztype = 'add'; }; 
        if(isset($argv['width'] ))  {  $width  = $argv['width' ]; } else { $width  = 475; }; 
        if(isset($argv['height']))  {  $height = $argv['height']; } else { $height = 729; };
        $scrolling='no';

        //This will be the url to the php HTML segment to embed in the iframe. Variables will be added dynamically.  
        if( $wiztype == 'add')
         {  $url= $wgServer."/extensions/lugDBwizard/wizard_add/lugdbapp.php";}
        else 
         {  $url= $wgServer."/extensions/lugDBwizard/wizard_update/lugdbapp.php"; }

       $data = array( 'search'=>$searchterms  ,  'width'=>$width ,  'height'=>$height  );

       $uquery = http_build_query($data,'','&');
     
       $urlquery = $url.'?'.$uquery;

       $html .= '<iframe id="lugDBframe" height='.$height.' width='.$width.' frameborder=0 scrolling="'.$scrolling.'" src ="'.$urlquery.'" ></iframe>';  

       $html .= '<script>'; 

       $html .= 'var ugwidth="&height=729";'; 
       $html .= 'var ugwidthd=ugwidth.replace(/amp;/g, "" );';  


       $html .= 'var ugseld="&ugsel=";'; 
       $html .= 'var ugselectd=ugseld.replace(/amp;/g, "" );';  
       $html .= 'var cswitch="false";';

       $html .='function loadlugDBadd() {document.getElementById("lugDBframe").src="'.$wgServer.'/extensions/lugDBwizard/wizard_add/lugdbapp.php?width=475"+ugwidthd;}';
       $html .='function loadlugDBupdate() {document.getElementById("lugDBframe").src="'.$wgServer.'/extensions/lugDBwizard/wizard_update/lugdbapp.php?width=475"+ugwidthd+ugselectd+cswitch;}';
       $html .='function loadlugDBupdatewithid(idswitch) { ';

//       $html .= 'idselw=idselw.replace(/amp;/g, "" );'; 
       $html .='document.getElementById("lugDBframe").src="'.$wgServer.'/extensions/lugDBwizard/wizard_update/lugdbapp.php?width=475"+ugwidthd+ugselectd+idswitch;}';
       $html .='</script>';
 
       return $parser->insertStripItem( $html, $parser->mStripState );  
  
         
	}


?>





