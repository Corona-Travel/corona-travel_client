/**
 * @type {import('@types/stylelint').Configuration}
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
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
  },
};
