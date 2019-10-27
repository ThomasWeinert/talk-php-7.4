<?php
$image = imagecreatefrompng(__DIR__.'/../images/phpugcgn-avatar.png');

imagefilter($image,  IMG_FILTER_SCATTER, 3, 5);

header('Content-Type: image/png');
imagepng($image);
