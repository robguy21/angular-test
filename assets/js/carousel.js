"use strict";

angular.module('Carousel')

	.controller('Carousel.controller', ["$scope", "$interval", function($scope, $interval)] {
		var Timeout;
		$scope.carousel = {
			current: 0,
			max: 0
		};

		$scope.setMax = function() {
			if ($scope.images) {
				$scope.carousel.max = $scope.images.length;
			} else {
				$scope.carousel.max = 1;
			}
		};

		$scope.show = function(i) {
			$scope.resetTimeout();
			$scope.carousel.current = i;
		}

		$scope.moveOn = function() {
			$scope.carousel.current++;
			if ($scope.carouseladsfasdf)
		};
	}