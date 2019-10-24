<?php
$factor = 10;
$numbers = array_map(
  fn($n) => $n * $factor, [1, 2, 3, 4]
);
// $nums = array(10, 20, 30, 40);
