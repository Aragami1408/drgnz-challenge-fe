module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "import/no-extraneous-dependencies": [
            "warn",
            {
                "allowModules": ["prop-types"],
            }
        ]
    },
    "globals": {
        "document": true,
        "window": true,
    },
    "parser": "babel-eslint",
};