function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");
	$stateProvider
		.state("login", {
			url: "/login",
			templateUrl: "viwes/login.html",
			controller: "sub"
		})
		.state("index", {
			url: "/index",
			templateUrl: "viwes/index.html"
		})
		.state("licai", {
			url: "/licai",
			templateUrl: "viwes/licai.html",
			controller: "renderLicai"
		})
		.state("find", {
			url: "/find",
			templateUrl: "viwes/find.html",
			controller: "renderFind"
		})
		.state("me", {
			url: "/me",
			templateUrl: "viwes/me.html"
		})
		.state("new_bie", {
			url: "/new_bie",
			templateUrl: "viwes/new_bie.html"
		})
		.state("safety", {
			url: "/safety",
			templateUrl: "viwes/safety.html"
		})
		.state("data", {
			url: "/data",
			templateUrl: "viwes/data.html"
		})
		.state("newbie_zx", {
			url: "/newbie_zx",
			templateUrl: "viwes/newbie_zx.html"
		})
		.state("vip_center", {
			url: "/vip_center",
			templateUrl: "viwes/vip_center.html"
		})
		.state("red_packet", {
			url: "/red_packet",
			templateUrl: "viwes/red_packet.html"
		})
		.state("investment", {
			url: "/investment",
			templateUrl: "viwes/investment.html"
		})
		.state("safety_twe", {
			url: "/safety_twe",
			templateUrl: "viwes/safety_twe.html"
		})
		.state("set", {
			url: "/set",
			templateUrl: "viwes/set.html"
		})
		.state("phone", {
			url: "/phone",
			templateUrl: "viwes/phone.html"
		})
		.state("email", {
			url: "/email",
			templateUrl: "viwes/email.html"
		})
		.state("bank", {
			url: "/bank",
			templateUrl: "viwes/bank.html"
		})
		.state("password", {
			url: "/password",
			templateUrl: "viwes/password.html"
		})
}
angular.module("myapp")
	.config(config);