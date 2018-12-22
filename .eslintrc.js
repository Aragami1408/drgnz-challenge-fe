module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "react/jsx-one-expression-per-line": 0,
        "import/no-extraneous-dependencies": [
            "warn",
            {
                "allowModules": ["prop-types"],
            }
        ],
        "no-continue": 0,
        "import/no-named-as-default-member": 0,
    },
    "globals": {
        "document": true,
        "window": true,
    },
    "parser": "babel-eslint",
};