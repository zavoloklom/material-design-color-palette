module.exports = {
    prod: {
        options: {
            paths: ["less"],
            sourceMap: false
        },
        files: {
            "css/docs.color-palette.css": "less/docs.color-palette.less"
        }
    }
};