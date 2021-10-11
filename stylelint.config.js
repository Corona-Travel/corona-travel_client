/**
 * @type {import('@types/stylelint').Configuration}
 */
module.exports = {
    extends: ["stylelint-config-standard"],
    "plugins": [
        "stylelint-order", "stylelint-prettier"
    ],
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
    },
};
