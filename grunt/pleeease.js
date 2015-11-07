module.exports = {
    prod: {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: false
        },
        files: {
            'css/docs.color-palette.css': 'css/docs.color-palette.css'
        }
    },
    'prod-min': {
        options: {
            autoprefixer: {'browsers': ["> 1%", "last 2 versions"]},
            filters: {'oldIE': false},
            opacity: true,
            pseudoElements: true,
            minifier: {preserveHacks: true, removeAllComments: true}
        },
        files: {
            'css/docs.color-palette.min.css': 'css/docs.color-palette.css'
        }
    }
};