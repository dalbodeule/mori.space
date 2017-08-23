module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */',
                mangle: true,
                preserveComments: false
            }, main: {
                files: [{
                    expand: true,
                    cwd: 'lib/js/',
                    src: ['*.babel.js'],
                    dest: 'src/js/',
                    ext: '.min.js'
                }]
            }
        }, babel: {
            options: {
                presets: ['env']
            }, main: {
                files: [{
                    expand: true,
                    cwd: 'lib/js/',
                    src: ['*.js', '!*.min.js'],
                    dest: 'lib/js/',
                    ext: '.babel.js'
                }]
            }
        }, copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'lib/js/',
                    src: ['*.min.js'],
                    dest: 'src/js/'
                }, {
                    expand: true,
                    cwd: 'lib/css/',
                    src: ['*.min.css'],
                    dest: 'src/css/'
                }]
            }
        }, cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'lib/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'src/css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['babel', 'uglify', 'cssmin', 'copy']);
}