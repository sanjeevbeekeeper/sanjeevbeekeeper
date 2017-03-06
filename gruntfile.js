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
		watch: {
			scss: {
				files: 'lib/sass/**/*.scss',
                tasks: 'sass'
				},
			},
        });

//    grunt.loadNpmTasks('grunt-php');       // SASS
    grunt.loadNpmTasks('grunt-contrib-sass');       // SASS
    grunt.loadNpmTasks('grunt-contrib-watch');      // watch
    grunt.registerTask('default', 'watch');
    };
