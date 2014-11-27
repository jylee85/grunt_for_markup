module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			email:{
				files: ['src/*.html','src/**/*.css'],
				tasks: ['emailBuilder','replace']
			}
		},
		emailBuilder:{
			inline:{
				files : [{
					expand: true,
					src: ['src/*.html'],
					dest: 'dest/',
					ext: '.html'
				}]
			}
		},
		replace: {
			inlineCssMinify: {
				src: ['dest/**/*.html'],
				overwrite:true,
				ext: '.html',
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

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-email-builder');
	grunt.registerTask('default', ['emailBuilder','replace']);
};
