var gulp = require('gulp'),
    sass = require('gulp-ruby-sass') ,
    notify = require("gulp-notify") ,
    bower = require('gulp-bower');

//build paths, variables for simplification
var config = { 
    sassPath: './resources/sass',
     bowerDir: './bower_components' 
};

//add your bower stuff here
var loadList = [ 
	
	//our style
	'./resources/sass',

	//bootstrap
	config.bowerDir + '/bootstrap-sass/assets/stylesheets', 
	 //fontawesome
	config.bowerDir + '/font-awesome/scss',
	//
	config.bowerDir + '/material-design-lite/src'

] ;

//runs bower on home directory
gulp.task('bower', function() { 
    return bower() .pipe(gulp.dest(config.bowerDir)) 
});

//adds icons to fonts folder <projectfolder>/public/fonts
gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./public/fonts')); 
});

//compiles our sass script located @ resources/sass/style.css
// loadlist contains bower mixins
gulp.task('css', function() { 
    return sass('./resources/sass/*.scss', { 
        style: 'compressed',
         loadPath: loadList
    }) .on("error", notify.onError(function(error) { 
        return "Error: " + error.message; 
    }))  .pipe(gulp.dest('./public/css')); 
});


gulp.task('watch', function() { 
    gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});


gulp.task('default', ['bower', 'icons', 'css']);