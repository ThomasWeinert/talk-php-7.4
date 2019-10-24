<?php
$ffi = FFI::cdef(
    "int printf(const char *format, ...);",
    "libc.so.6"
);
$ffi->printf("Hello %s!\n", "world");
