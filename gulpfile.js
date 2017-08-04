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
    webpack = require('webpack');
//use the local command to execute webpack 
gulp.task("dev", function(){
    return require("child_process").
    execSync('webpack --config webpack.config.js',
    {
        stdio:[0,1,2]
    });
});

gulp.task("prod", function(){
    return require("child_process").
    execSync('webpack --config webpack.production.config.js',
    {
        stdio:[0,1,2]
    });
});

