var myTest = (function(){
	var myVar = 35;

	var myFun = function (params){
		return myVar + 5;
	}

	return {
		publicTest: function(p){
			console.log(myFun(p));
		}
	}

})();