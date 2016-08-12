var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
 jshint = require('gulp-jshint');

var gulp   = require( 'gulp' ),
    server = require( 'gulp-develop-server' );

// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: './bin/server.js' } );
});

// restart server if app.js changed 
gulp.task( 'server:restart', function() {
  
    gulp.watch( [ './**/*.js' ], server.restart );
});



gulp.task('default',['server:start','server:restart']);
