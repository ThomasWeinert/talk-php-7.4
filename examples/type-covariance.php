<?php
interface Concatable {
    public function concat(Iterator $input);
}
class Collection implements Concatable {
    public function concat(iterable $input) {/* . . . */}
}
