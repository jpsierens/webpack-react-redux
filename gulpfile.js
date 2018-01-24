/**
 * @author Thomas.Lin
 * @version 1.0
 * 2017-05-09
 * usage：
 * run "gulp prod" will create the product version,
 * run "gulp dev" will create the development version.
 * 
 */
var gulp = require('gulp'),
    webpack = require('webpack'),
    zip = require("gulp-zip"),
    del = require("del"),
    gulpSequence = require("gulp-sequence");

//clean dist folder before
gulp.task("clean",function( done ){
    return del(["dist.zip","dist"],done);
});
//create a zip 
gulp.task("zip",function( done ){
    gulp.src("./dist/**/*").pipe(zip("./dist.zip")).pipe(gulp.dest("./"));
});
//build dev js

//use the local command to execute webpack 
gulp.task("build-dev", function(){
    return require("child_process").
    execSync('webpack --config webpack.config.js',
    {
        stdio:[0,1,2]
    });
});

gulp.task("build-prod", function(){
    return require("child_process").
    execSync('webpack --config webpack.production.config.js',
    {
        stdio:[0,1,2]
    });
});

//execute by sequence 
gulp.task("dev",function(done){
    gulpSequence("clean","build-dev","zip",done)
});
gulp.task("prod",function(done){
    gulpSequence("clean","build-prod","zip",done)
});
