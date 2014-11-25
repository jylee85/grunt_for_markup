module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
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
	grunt.registerTask('default',['inlinecss']);
	
};