module.exports = {
    // Production settings
    prod: {
        options: {
            paths: ["less"],
            sourceMap: false
        },
        files: {
            "css/material-design-color-palette.css": "less/material-design-color-palette.less"
        }
    }
};