
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    watch: {
       options: { livereload: true },
       css: {
        files: ["css/main.css"],
        tasks: ['cssmin']
       },
      js: {
        files: ['js/main.js'],
        tasks: ['uglify'],
      }, 
      sass: {
        files: ['sass/main.scss', 'sass/layouts/_header.scss', 'sass/layouts/_footer.scss', 'sass/layouts/_navigation.scss', 'sass/layouts/_paragraf.scss', 'sass/layouts/_selectPart.scss', 'sass/slick/_slick.scss'],
        tasks: ['sass'],
      },
    },


      uglify: {
        dist: {
          src: ["js/main.js"],
          dest: 'js/main-min.js'
        }

      },

      cssmin: {
        dist: {
          src: ["css/main.css"],
          dest: 'css/main-min.css'
        }
      },

      sass: {
        dist: {
          files: {
            'css/main.css' : 'sass/main.scss'
          }
        }

      },

	});
	grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-open');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask("default", ["concat",'server', 'open', 'watch']);
};