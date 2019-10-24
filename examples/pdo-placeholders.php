<?php
$statement = $pdo->prepare(
  'SELECT * FROM tbl WHERE json_col ?? ?'
);
$statement->execute(['foo']);
