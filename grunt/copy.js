module.exports = {
    "fonts": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            cwd: 'bower_components/material-design-iconic-font/dist/fonts/',
            dest: 'fonts/',
            src: ['{,*/}*']
        }]
    },
    "animatecss": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/animate.css/animate.min.css',
            dest: 'css/'
        }]
    },
    "jssocial-js": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jssocials/dist/jssocials.min.js',
            dest: 'js/'
        }]
    },
    "highlight": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/jquery.highlight/jquery.highlight.js',
            dest: 'js/'
        }]
    },
    "snackbarjs": {
        files: [{
            expand: true,
            dot: true,
            filter: 'isFile',
            flatten: true,
            src: 'bower_components/snackbarjs/dist/snackbar.min.js',
            dest: 'js/'
        }]
    }
};