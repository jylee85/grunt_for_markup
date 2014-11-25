module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			email:{
				files: 'src/css/style.css',
				tasks: ['inlinecss','replace']
			}
		},
		inlinecss:{
			main:{
				options:{},
				files: {
					'dest/email.html': 'src/email.html'
				}
			}
		},
		replace: {
			example: {
				src: ['dest/email.html'],
				dest: 'dest/email.html',
				replacements: [{
					from: ': ',
					to: ':'
				}, {
					from: '; ',
					to: ';'
				}]
			}
		}
	});
	
	
	grunt.loadNpmTasks('grunt-inline-css');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.registerTask('default', ['inlinecss']);	
};