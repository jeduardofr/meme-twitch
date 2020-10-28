<?php

return PhpCsFixer\Config::create()
    ->setRules([
        '@PSR2' => true,
        'array_indentation' => true,
        'linebreak_after_opening_tag' => true,
        'method_chaining_indentation' => true,
        'blank_line_before_statement' => true,
        'align_multiline_comment' => true,
        'method_argument_space' => [ 'on_multiline' => 'ensure_fully_multiline' ],
        'no_unused_imports' => true,
        'ordered_imports' => [
            'sort_algorithm' => 'alpha'
        ],
    ])
    ->setUsingCache(false);
