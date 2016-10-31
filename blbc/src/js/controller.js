function sub($scope, $location, apiService) {
	$scope.submit = function () {
		var user = $("#username").val();
		var pwd = $("#userpwd").val();
		if (user == "" || pwd == "") {
			alert("请补全用户名或密码");
			return false;
		} else if (!(/^1[34578]\d{9}$/.test(user))) {
			alert("手机号码有误，请重填");
		} else {
			apiService.login("http://localhost:3001/login", {
					username: $scope.username,
					userpwd: $scope.userpwd
				}, "jsonp")
				.success(function (res) {
					if (res.code == 1) {
						alert("您输入的帐号或密码有误")
					} else {
						$location.url("/index");
					}
				});
		}

	}
}

function renderLicai($scope, apiService) {
	var arr = [];
	apiService.login("http://localhost:3001/licai", {
			username: "licai",
			userpwd: "666"
		}, "jsonp")
		.success(function (res) {
			$scope.data = res;
			angular.forEach($scope.data, function (val) {
				arr.push(val.num);
			});
		});
	//判断页面是否渲染完成
	$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
		//下面是在table render完成后执行的js
		new IScroll("#MoneyDv", {
			click: true
		});
		for (var i = 1, len = $(".canvas").length; i <= len; i++) {
			drawCircle({
				id: "canvas" + i,
				color: "#FC1F1F",
				angle: arr[i - 1],
				lineCap: "round"
			})
		}
	});
}

function renderFind($scope, apiService) {
	var arr = [];
	apiService.login("http://localhost:3001/find", {
			username: "licai",
			userpwd: "666"
		}, "jsonp")
		.success(function (res) {
			$scope.data = res;
			angular.forEach($scope.data, function (val) {
				arr.push(val.num);
			});
		});
	$scope.$on("ngRepeatFinished", function (ngRepeatFinishedEvent) {
		var pLen = $(".pBg").length;
		new IScroll("#find", {
			click: true
		});
		for (var i = 0; i < pLen; i++) {
			$("#pBg" + i).css({
				"width": arr[i] * 100 + "%",
				"transition": "width .5s"
			})
		}
	})
}
angular.module("myapp")
	.controller("sub", sub)
	.controller("renderLicai", renderLicai)
	.controller("renderFind", renderFind);