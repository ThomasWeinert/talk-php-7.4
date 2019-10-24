<?php
class A {
    private $prop_a;
    public function __serialize(): array {
        return ['prop_a' => $this->prop_a];
    }
    public function __unserialize(array $data) {
        $this->prop_a = $data['prop_a'];
    }
}
