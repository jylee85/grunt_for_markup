module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			css:{
				files: 'src/css/style.css',
				tasks: ['inlinecss']
			}
		},
		inlinecss:{
			main:{
				options:{},
				files: {
					'dest/email.html': 'src/email.html'
				}
			}
		}
		
	});
	
	
	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['inlinecss']);	
};