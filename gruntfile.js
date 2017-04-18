module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // meta: {
        //     path: ''
        //     },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'lib/sass',
                    src: ['**/*.scss'],
                    dest: 'lib/styles/css',
                    ext: '.css'
                    }],
                options: {
                    // nested, compact, compressed, expanded
                    style: 'compressed'
                    }
                }
            },
        // Haml
        haml: {
            dist: {
                files: {
                    'haml/index.html' : 'haml/index.haml'
                    }
                }
            },
        // HTML min
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
                },
            dist: {
                files: {
                    'index.html' : 'haml/index.html'
                    }
                }
            },
        // Watch
		watch: {
			scss: {
				files: 'lib/sass/**/*.scss',
                tasks: 'sass'
				},
            haml: {
				files: 'haml/*.haml',
                tasks: 'haml'
				},
			},
        });

//    grunt.loadNpmTasks('grunt-php');       // SASS
    grunt.loadNpmTasks('grunt-contrib-sass');       // SASS
    grunt.loadNpmTasks('grunt-contrib-watch');      // watch
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');    // html min
    grunt.registerTask('dev', 'watch');
    grunt.registerTask('dis', 'htmlmin');
    };
