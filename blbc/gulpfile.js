//引入gulp模块
var gulp = require("gulp");
//文件操作模块
var fs = require("fs");
//本地服务器模块
var connect = require("gulp-connect");
//本地服务器编译响应
var respond = require("gulp-respond");
//压缩js
var uglify = require("gulp-uglify");
//合并js
var concat = require("gulp-concat");
//解决压缩angular控制器js文件压缩问题
var ngAnnotate = require("gulp-ng-annotate");
var ngMin = require("gulp-ngmin");
var clean = require("gulp-clean");
//压缩css、html
var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");
//更改文件名
var reName = require("gulp-rename");
//压缩img
//var imgMin = require("gulp-imagemin");
//图片深入压缩
//var pngquant = require('imagemin-pngquant');
//var pngcrush = require('imagemin-pngcrush');
/*gulp.task('imgMin', function () {
	gulp.src('./src/img/*.+(jpeg|jpg|png|gif)')
		.pipe(imgMin({
			progressive: true,
			use: [pngquant({
				quality: '65-80'
			})]
		}))
		.pipe(gulp.dest('./src/imgs/'));
});*/
//注册任务
gulp.task("clean", function () {
	return gulp.src(["./src/js/build/", "./src/buildCss/", "./src/build.html"])
		.pipe(clean());
});

gulp.task("miniCss", function () {
	return gulp.src(["./src/css/*.css"])
		.pipe(minifyCss())
		.pipe(concat("all.min.css"))
		.pipe(gulp.dest("src/buildCss"));
});
gulp.task("miniJs", ["miniCss"], function () {
	return gulp.src(["src/js/*.js"])
		.pipe(ngAnnotate())
		.pipe(ngMin())
		.pipe(uglify())
		.pipe(concat("all.min.js"))
		.pipe(gulp.dest("src/js/build"));
});
gulp.task("miniHtml", ["miniJs"], function () {
	return gulp.src("./src/index.html")
		.pipe(minifyHtml())
		.pipe(reName(function (path) {
			path.basename = "build"
		}))
		.pipe(gulp.dest("./src"));
});
gulp.task("watch", function () {
	gulp.watch(["src/js/*.js", "./src/css/*.css", ".src/index.html"], ['miniHtml']);
});
gulp.task("connect", function () {
	//启动本地server
	connect.server({
		//多个root目录
		root: ["src", "./libs"],
		port: 8008,
		livereload: true,
		//本地server中间件，完成本地动态编译
		middleware: function () {
			return [
				/*function (req, res, next) {
					next();
				},*/
				function (req, res) {
					var path = req.url.split("?").shift();
					path = path == "/" ? "/build.html" : path;
					url = "src" + path;
					if (!fs.existsSync(url)) {
						url = "." + path;
					}
					gulp.src(url)
						.pipe(respond(res));
				}
			]
		}
	});
});
gulp.task("serve", ["clean", "miniHtml", "connect", "watch"]);