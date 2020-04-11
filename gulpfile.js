// Ścieżka do aktualnie wykonywanego zadania
const entryPath = "BestShop";
const gulp = require("gulp");             // Korzystamy z paczki i zapisujemy ją do zmiennej
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
function compileSass(done) { //Tworzymy funkcję odpowiedzialną za różne czynności
	gulp
		.src(entryPath + "/scss/main.scss") //pobiermay pliki do pamięci
		.pipe(sourcemaps.init())  // Inicjalizujemy source mape
		.pipe(sass({outputStyle: "expanded"}).on("error", sass.logError)) // wykonujemy na nich kilka opreacji np minimalizacje kodu
		.pipe(autoprefixer())   // dodajemy autoprefikser
		.pipe(sourcemaps.write(".")) //zapisujemy sourcemape
		.pipe(gulp.dest(entryPath + "/css")); // zapisujemy na dysku w określonym miejscu
	done();
}
function watcher(done) {
	browserSync.init({
		server: "./" + entryPath
	});
	gulp.watch(entryPath + "/scss/**/*.scss", gulp.series(compileSass, reload));
	gulp.watch(entryPath + "/*.html", gulp.series(reload));
	done();
}
function reload(done) {
	browserSync.reload();
	done();
}
exports.sass = gulp.parallel(compileSass); // parallel służy do odpalania zadań równocześnie , exportujemy naszą funckję po zmienną
exports.default = gulp.parallel(compileSass, watcher); // mó~wimy gulpowi co jest naszym domyślnym zadaniem