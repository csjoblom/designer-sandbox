var gulp = require('gulp'),
    sass = require('gulp-ruby-sass') ,
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify') ,
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower');

//build paths, variables for simplification
var config = { 
    sassPath: './resources/sass',
    jsPath: './resources/js',
     bowerDir: './bower_components' 
};

//add your bower stuff here
var sassLoadList = [ 
	//our style
	'./resources/sass',

	//bootstrap
	config.bowerDir + '/bootstrap-sass/assets/stylesheets', 
	 //fontawesome
	config.bowerDir + '/font-awesome/scss',
	//mat design
	//config.bowerDir + '/material-design-lite/src'
] ;

gulp.task('js', function(){
    return gulp.src('resources/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

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
         loadPath: sassLoadList
    }) .on("error", notify.onError(function(error) { 
        return "Error: " + error.message; 
    }))  .pipe(gulp.dest('./public/css')); 
});


gulp.task('watch', function() { 
    gulp.watch(config.sassPath + '/*.scss', ['css']); 
    gulp.watch(config.jsPath + '/*.js', ['js'] );
});


gulp.task('default', ['bower', 'js', 'icons', 'css']);