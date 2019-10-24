<?php
$file = $_GET['file'] ?? '';
if (preg_match('((./)?examples/[^/?#]+)', $file)) {
  readfile($_GET['file']);
}
