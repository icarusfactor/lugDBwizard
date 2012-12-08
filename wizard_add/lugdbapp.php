<?php

$html="";

$html .= '<!DOCTYPE html><html><head>'.PHP_EOL;
$html .= '<META http-equiv="Content-Type" content="text/html; charset=utf-8" />'.PHP_EOL;
$html .= '<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">'.PHP_EOL;
$html .= '<META HTTP-EQUIV="EXPIRES" CONTENT="Mon, 22 Jul 2002 11:12:01 GMT">'.PHP_EOL;

$html .= '<script type="text/javascript" src="script/lugwiz.js"></script>'.PHP_EOL;
$html .= '<style type="text/css"> body { padding: 0px;margin: 0px; }'.PHP_EOL;
$html .= '#isle {width: 100%;height: 160px;padding-bottom: 10px;}</style>'.PHP_EOL;
$html .= '</head><body>'.PHP_EOL;
$html .= '<div id="header"></div><div id="main">'.PHP_EOL;
$html .= '<div id="content"><div id="isle"></div>'.PHP_EOL;
$html .= '</div></div><div id="footer"></div></body></html>'.PHP_EOL;

header('Content-Type: text/html; charset=utf-8');
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

echo $html;

?>
