<?php
echo $a == 1 ? 'one' : $a == 2 ? 'two' : 'other';
// left-associative - current PHP
echo ($a == 1 ? 'one' : $a == 2) ? 'two' : 'other';
// right-associative - most (all?) other languages
echo $a == 1 ? 'one' : ($a == 2 ? 'two' : 'other');
