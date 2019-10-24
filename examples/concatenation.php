<?php
echo 'sum: '. $a + $b;
// old: evaluated left-to-right
echo ('sum: '. $a) + $b;
// new: addition and subtraction have a higher precedence
echo 'sum :'. ($a + $b);
