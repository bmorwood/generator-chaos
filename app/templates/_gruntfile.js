module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today(\'yyyy-mm-dd\') %> */\n'
            },
            build: {
                src: '<%= pkg.buildPath %>js/<%= pkg.name %>.min.js',
                dest: '<%= pkg.buildPath %>js/<%= pkg.name %>.min.js'
            }
        },
        concat:{
            core:{
                options: {
                    footer: '}(window));'
                },
                src: [
                    'bower_components/handlebars/handlebars.runtime.js',
                    'bower_components/jquery/jquery.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/jquery-address/src/jquery.address.js',
                    'bower_components/greensock-js/src/uncompressed/**/*.js',
                    'bower_components/knockout/build/output/knockout-latest.js',
                    'bower_components/modernizr/modernizr.js',
                    'app/index.js',
                    'app/**/*.js'],
                dest: '<%= pkg.buildPath %>js/<%= pkg.name %>.min.js'
            }
        },
        less:{
            options:{
                ieCompact:false,
                yuicompress: true,
                compress: true
            },
            base:{
               files: {
                   '<%= pkg.buildPath %>css/default.css': 'css/default.less'
               }
            }
        },
        copy: {
            main: {
                files: [
                    {src: 'index.html', dest: '<%= pkg.buildPath %>'},
                    {src: 'css/img/**/*', dest: '<%= pkg.buildPath %>'},
                    {src: 'localized-copy/*', dest: '<%= pkg.buildPath %>'}
                ]
            },
            release: {
                files: [
                    {expand: true, cwd: 'build/', src: ['**'], dest: 'release/'}
                ]
            }
        },
        clean: {
            build: {
                src: ['<%= pkg.buildPath %>']
            },
            release: {
                src: ['<%= pkg.buildPath %>']
            }
        },
        imagemin: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.buildPath %>css/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= pkg.buildPath %>css/img/'
                }]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: '<%= pkg.nameSpace %>.templates',
                    processName: function(filePath) { // input:  **/*.html
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1]; // output: *.html
                    }
                },
                files: {
                    'build/js/template-data.js': 'app/**/*.html'
                }
            }
        },
        watch: {
            files: ['<%= concat.core.src %>', '*.html', 'app/**/*.html'],
            tasks: ['build']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'build/',
                    keepalive: true
                }
            }
        }
    });

    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean:build', 'copy:main', 'concat', 'less', 'handlebars']);
    grunt.registerTask('release', function (){
        var tasks = ['build', 'clean:release', 'imagemin', 'uglify', 'htmlmin', 'copy:release'];
        grunt.option('force', true);
        grunt.task.run(tasks);
    });

};