module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/css/style.css': 'app/scss/style.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch', 'sass']);
};
