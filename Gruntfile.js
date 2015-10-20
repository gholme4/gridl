module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach( grunt.loadNpmTasks );

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			
			dist: {
				options: {
					outputStyle: 'expanded',
					sourceComments: true
				},
				files: {
					'./css/gridl.css': './scss/gridl.scss',
				}
			},
			dev: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'./css/gridl.min.css': './scss/gridl.scss',
				}
			}
		},
		watch: {
			grunt: { files: ['Gruntfile.js'] },

			sass: {
				files: './scss/*.scss',
				tasks: ['sass']
			}
		}
  });


  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
};
