module.exports = function(grunt) {
 
 // Create config
 grunt.initConfig({
 	// read in a package.json file for node
   pkg: grunt.file.readJSON('package.json'),
   concat: {   
        dist: {
            src: [
                './js/vendor/*.js', // All vendor JS in the libs folder
                './js/main.js' // page scripts
            ],
            dest: './js/prod.js',
        }
    },

    uglify: {
        build: {
            src: './js/prod.js',
            dest: './js/prod.min.js'
        }
    },
  // Parse CSS files and add vendor-prefixed CSS properties using the "Can I Use" database.
   autoprefixer: {
          dist: {
              options: {
                  browsers: [ "last 2 versions", "> 1%" ]
              },
              files: {
                  "./css/main.css": "./css/main.css"
              }
          }
      },
   // less task
   less: {
     style: {
       options: {
         compress: true
       },
       files: {
         "./css/main.css": "css/main.less",
         "./css/vendor.css": "css/vendor.less"
       }
     }
   },

   // watch task
   watch: {
     scripts: {
      files: [
          './js/*.js', // All JS in the libs folder
          './js/main.js'  // This specific file
      ],
      tasks: ['concat', 'uglify'],
      options: {
          spawn: false,
      },
    },
     css: {
       files: ['./css/*.less', './css/less/**/*.less'],
       tasks: ['less:style'],
       options: {
         livereload: false
       }
     }
   }
 });

 // Load the grunt modules
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

 // Register tasks
 grunt.registerTask('default', [ 'concat', 'uglify','less', 'watch' ]);

};