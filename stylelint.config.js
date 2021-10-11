/**
 * @type {import('@types/stylelint').Configuration}
 */
module.exports = {
  extends: [
    "stylelint-config-standard",
    // "stylelint-config-prettier",
    // "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-order", "stylelint-prettier"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          // "extends",
          "tailwind",
        ],
      },
    ],
    "order/properties-alphabetical-order": true,
    "prettier/prettier": true,

    // stylelint-config-prettier but without scss
    indentation: null,
    linebreaks: null,

    "at-rule-name-case": null,
    "at-rule-name-newline-after": null,
    "at-rule-name-space-after": null,
    "at-rule-semicolon-newline-after": null,
    "at-rule-semicolon-space-before": null,
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-closing-brace-newline-before": null,
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": null,
    "block-opening-brace-newline-after": null,
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": null,
    "block-opening-brace-space-before": null,
    "color-hex-case": null,
    "declaration-bang-space-after": null,
    "declaration-bang-space-before": null,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-semicolon-newline-before": null,
    "declaration-block-semicolon-space-after": null,
    "declaration-block-semicolon-space-before": null,
    "declaration-block-trailing-semicolon": null,
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": null,
    "declaration-colon-space-before": null,
    "function-comma-newline-after": null,
    "function-comma-newline-before": null,
    "function-comma-space-after": null,
    "function-comma-space-before": null,
    "function-max-empty-lines": null,
    "function-parentheses-newline-inside": null,
    "function-parentheses-space-inside": null,
    "max-empty-lines": null,
    "max-line-length": null,
    "media-feature-colon-space-after": null,
    "media-feature-colon-space-before": null,
    "media-feature-name-case": null,
    "media-feature-parentheses-space-inside": null,
    "media-query-list-comma-newline-after": null,
    "media-query-list-comma-newline-before": null,
    "media-query-list-comma-space-after": null,
    "media-query-list-comma-space-before": null,
    "no-empty-first-line": null,
    "no-eol-whitespace": null,
    "no-extra-semicolons": null,
    "no-missing-end-of-source-newline": null,
    "number-leading-zero": null,
    "number-no-trailing-zeros": null,
    "property-case": null,
    "selector-attribute-brackets-space-inside": null,
    "selector-attribute-operator-space-after": null,
    "selector-attribute-operator-space-before": null,
    "selector-attribute-quotes": null,
    "selector-combinator-space-after": null,
    "selector-combinator-space-before": null,
    "selector-descendant-combinator-no-non-space": null,
    "selector-list-comma-newline-after": null,
    "selector-list-comma-newline-before": null,
    "selector-list-comma-space-after": null,
    "selector-list-comma-space-before": null,
    "selector-max-empty-lines": null,
    "selector-pseudo-class-case": null,
    "selector-pseudo-class-parentheses-space-inside": null,
    "selector-pseudo-element-case": null,
    "string-quotes": null,
    "unicode-bom": null,
    "unit-case": null,
    "value-list-comma-newline-after": null,
    "value-list-comma-newline-before": null,
    "value-list-comma-space-after": null,
    "value-list-comma-space-before": null,
    "value-list-max-empty-lines": null,
  },
};
