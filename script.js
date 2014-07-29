var app = angular.module("SwagApp", []);

app.controller("SwagCtrl", function($scope)
{
	$scope.pins = [
	{"image": "images/kiko.jpg",
	"description":"Kiko Mizuhara",
	// "source": "from tumblr"
	},
	{"image": "images/boglioli.jpg",
	"description":"Andre Hamann for BOGLIOLI",
	// "source": "from blogspot"
	},
	{"image": "images/existentialism.jpg",
	"description":"Existentialism",
	// "source": "from google"
	},
	{"image": "http://media-cache-ec0.pinimg.com/736x/a0/d3/39/a0d3391487fbda6594bb644d1a8147b5.jpg",
	"description":"Daisuke Ueda",
	// "source": "from tumblr"
	},
	{"image": "http://media-cache-ec0.pinimg.com/736x/dc/a8/08/dca80838848b1a66c1147970205dcfb4.jpg",
	"description":"Martijn Van Striejn",
	// "source": "from blogspot"
	},
	{"image": "http://media-cache-ak0.pinimg.com/736x/c4/39/92/c43992d925e104062f5fee1ee98da5b7.jpg",
	"description":"Kiko Mizuhara 2",
	// "source": "from google"
	},
	{"image": "http://media-cache-ec0.pinimg.com/736x/1b/75/fe/1b75fe72998b06788fe7b2df475c99a2.jpg",
	"description":"Dank burger",
	// "source": "from tumblr"
	},
	{"image": "images/boglioli.jpg",
	"description":"Andre Hamann for BOGLIOLI",
	// "source": "from blogspot"
	},
	{"image": "http://media-cache-ec0.pinimg.com/736x/ae/9f/1e/ae9f1e69223b1f13e383a71a070525bb.jpg",
	"description":"Chicken and Waffles from Bouchon",
	// "source": "from google"
	},
	{"image": "http://media-cache-ak0.pinimg.com/736x/f7/64/42/f76442a07ad435f5189c347e226abc06.jpg",
	"description":"Goyard by the trunk",
	// "source": "from tumblr"
	},
	{"image": "http://media-cache-cd0.pinimg.com/736x/3a/af/08/3aaf0810d23653731c8880ddccf424ab.jpg",
	"description":"Tony Leung - 2046",
	// "source": "from blogspot"
	},
	{"image": "http://media-cache-cd0.pinimg.com/736x/0e/26/49/0e264977c9dd8eccc4f068b357daff7a.jpg",
	"description":"In the Mood for Love",
	// "source": "from google"
	},
	{"image": "http://media-cache-ec0.pinimg.com/736x/a0/d3/39/a0d3391487fbda6594bb644d1a8147b5.jpg",
	"description":"Daisuke Ueda",
	// "source": "from tumblr"
	},
	{"image": "http://media-cache-ec0.pinimg.com/736x/dc/a8/08/dca80838848b1a66c1147970205dcfb4.jpg",
	"description":"Martijn Van Striejn",
	// "source": "from blogspot"
	},
	];
// 6072557234
	$scope.addNewPin = function() 
	{
//checking to see if forms are blank
		if ($scope.newImage !="" && $scope.desc !="" )
			// && $scope.source !=""
		{
// adding new pins
			$scope.pins.push({
				"image":$scope.newImage,
				"description":$scope.desc,
				"source": $scope.source 	});
//reset the new pins
			$scope.newImage = "";
			$scope.desc = "";
			// $scope.source = ""
		}
// fill out form if blank
		else {
			alert ("Please fill out the form")
		}



	};
//making div draggable
	angular.module('draggableModule', []).
 	directive('draggable', ['$document' , function($document) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        var startX, startY, initialMouseX, initialMouseY;
        elm.css({position: 'absolute'});
 
        elm.bind('mousedown', function($event) {
          startX = elm.prop('offsetLeft');
          startY = elm.prop('offsetTop');
          initialMouseX = $event.clientX;
          initialMouseY = $event.clientY;
          $document.bind('mousemove', mousemove);
          $document.bind('mouseup', mouseup);
          return false;
        });
 
        function mousemove($event) {
          var dx = $event.clientX - initialMouseX;
          var dy = $event.clientY - initialMouseY;
          elm.css({
            top:  startY + dy + 'px',
            left: startX + dx + 'px'
          });
          return false;
        }
 
        function mouseup() {
          $document.unbind('mousemove', mousemove);
          $document.unbind('mouseup', mouseup);
        }
      }
    };
  }]);

});
