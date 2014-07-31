var app = angular.module("SwagApp", ["firebase"]);

app.controller("SwagCtrl", ['$scope', '$firebase', function($scope, $firebase)
{
	var swagFire = new Firebase ("https://wigglewiggle.firebaseio.com/");
	var sync = $firebase(swagFire);
	$scope.pins = sync.$asArray();
	console.log($scope.pins.length);

// MODAL PIN 
	$scope.setModalImage = function (image) {
		$scope.modalImage = image;
	};

	$scope.newImage = "";
	$scope.desc = "";
	// $scope.pins.$add
	// ( $scope.addNewPin()
	// );
// 6072557234
	$scope.addNewPin = function() 
	{
//checking to see if forms are blank
		if ($scope.newImage !="" && $scope.desc !="" )
			// && $scope.source !=""
		{
// adding new pins
			$scope.pins.$add({
				image:$scope.newImage,
				description:$scope.desc,
				// "source": $scope.source 	
			});
//reset the new pins
			$scope.newImage = "";
			$scope.desc = "";
			// $scope.source = ""
		}
// fill out form if blank
		else 
		{
			alert ("Please fill out the form")
		}
 	};

// Removing PINS and confirming
$scope.removePin = function(pin) {
	if(confirm("Are you sure you want to delete this pin?")){
var itemRef = new Firebase("https://swaggerest.firebaseio.com/" + pin.$id);
itemRef.remove();
	}
}

	// var pinModal = function(image){
	// 	$scope.modalImage = "http://d1warraxuf7xh1.cloudfront.net/wp-content/uploads/2014/02/USATSI_7713650_154224518_lowres.jpg"

	// }

}]);
// //making div draggable
// app.controller('DragCtrl', function ($scope) {
//     $scope.draggableObjects = [
//        	{name: 'one'},
//         {name: 'two'},
//         {name: 'three'}
//     ];
//     $scope.onDropComplete = function (index, obj, evt) {
//         var otherObj = $scope.draggableObjects[index];
//         var otherIndex = $scope.draggableObjects.indexOf(obj);
//         $scope.draggableObjects[index] = obj;
//         $scope.draggableObjects[otherIndex] = otherObj;
//     }
    
// });

