<?php
preg_replace_callback(
  '(\d(\s+)?)',
  static function($match) { var_dump($match); },
  '1 2',
  -1,
  $count,
  PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL
);
