module.exports = function (grunt) {
    grunt.initConfig({
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
        },
        watch: {
            files: 'app/**/*.scss',
            tasks: ['sass']
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch', 'sass']);
};
