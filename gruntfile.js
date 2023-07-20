module.exports = function(grunt) {
		grunt.initConfig({
				pkg: grunt.file.readJSON('package.json'),
                less: {
                    development: {
                        files: {
                            'dev/styles/main.css': 'src/styles/main.less'
                        }
                    },
                    production: {
                        options: {
                            compress: true
                        },
                        files: {
                            'dist/styles/main.min.css': 'src/styles/main.less'
                        }
                    }
                },
                htmlmin: {
                    dist: {
                        options: {
                            removeComments: true,
                            collapseWhitespace: true
                        },
                        files: {
                            'dist/index.html': 'src/index.html'
                        }
                    }
                },
                uglify: {
                    target: {
                        files: {
                            'dist/scripts/main.min.js': 'src/scripts/main.js'
                        }
                    }
                },
                concurrent: {
                    target: ['less', 'htmlmin', 'uglify'] 
                }
		});
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent'])
}