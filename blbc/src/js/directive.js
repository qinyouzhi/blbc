//首页js
function ngIndex() {
	return {
		link: function (scope, element) {
			//首页局部滚动
			var lsitPage = new IScroll("#list", {
				click: true
			});
			new Swiper('.swiper-container', {
				loop: true, //无缝滚动
				//pagination: ".pagination", //显示分页器
				autoplay: 5000, //自动轮播时长
				autoplayDisableOnInteraction: false //当手动播时，自动播停止，手指滑动离开后继续自动播
			})
		}
	}
}
//理财页js
function ngLicai($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	};
}
//发现页js
function ngFind($timeout) {
	return {
		link: function (scope, element) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	}
}
//我的页js
function ngMe() {
	return {
		link: function (scope, element) {
			var me = new IScroll("#me", {
				click: true
			});
		}
	}
}
//安全保障页js
function ngSafety() {
	return {
		link: function (scope, element) {
			var safety1 = new IScroll("#safety1", {
				click: true
			});
			var safety2 = new IScroll("#safety2", {
				click: true
			});
			var safety3 = new IScroll("#safety3", {
				click: true
			});
			var safety4 = new IScroll("#safety4", {
				click: true
			});
			var safety5 = new IScroll("#safety5", {
				click: true
			});
			$("#navUl>li").on("tap", function () {
				var i = $(this).index();
				$("#safetyBook").css({
					"transform": "translateX(" + -i * 100 + "%)",
					"transition": "transform .5s"
				});
				$("#navFousP").css({
					"left": i * 20 + "%",
					"transition": "left .5s"
				});
			})
		}
	}
}
//我的红包页js
function redBao() {
	return {
		link: function (scope, element) {
			var redOne1 = new IScroll("#redOne1", {
				click: true
			});
			var redOne2 = new IScroll("#redOne2", {
				click: true
			});
			var redOne3 = new IScroll("#redOne3", {
				click: true
			});
			$("#uls").find("li").on("tap", function () {
				var idx = $(this).index();
				$(this).addClass("bod").siblings().removeClass('bod');
				$("#redBox").css({
					"transform": "translateX(" + -idx * 100 + "%)",
					"transition": 'transform .5s'
				})
			});
		}
	}
}
//新手福利页js
function newbieFl() {
	return {
		link: function (scope, element) {
			var newDie = new IScroll("#newDie", {
				click: true
			});
		}
	}
}
//新手专享页js
function newBie() {
	return {
		link: function (scope, element) {
			var newbie = new IScroll("#newbie", {
				click: true
			});
		}
	}
}
//投资项目页js
function invesTment() {
	return {
		link: function (scope, element) {
			var investment = new IScroll("#investment", {
				click: true
			});
		}
	}
}
//登录页
function loadShow() {
	return {
		link: function (scope, element) {
			var i = false;
			setTimeout(function () {
				$("#loadImg").css({
					"-webkit-transform": "scale(2)",
					"opacity": "0",
					"-webkit-transition": "all 2s"
				});
				i = true;
			}, 2000);
			setTimeout(function () {
				if (i) {
					$("#loadImg").hide();
				}
			}, 4000);
		}
	}
}
angular.module("myapp")
	.directive("ngIndex", ngIndex)
	.directive("ngLicai", ngLicai)
	.directive("ngFind", ngFind)
	.directive("ngMe", ngMe)
	.directive("redBao", redBao)
	.directive("newBie", newBie)
	.directive("newbieFl", newbieFl)
	.directive("invesTment", invesTment)
	.directive("loadShow", loadShow)
	.directive("ngSafety", ngSafety);