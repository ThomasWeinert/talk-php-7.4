<?php
final class WeakReference {

  public static function create(
    object $object
  ): WeakReference;
  public function get() : ?object;
}
