function panoobj() {
	var container;
	var isTouching = false;
	var startX = 0, startY = 0;
	var panX, panY;

	function handleTouchStart(event) {
		event.preventDefault();
		isTouching = true;
		startX = event.targetTouches[0].pageX;
		startY = event.targetTouches[0].pageY;
		console.log('start: [startx]=>'+startX+'[startY]=>'+startY);
	}

	function handleTouchEnd(event) {
		isTouching = false;	
	}

	function handleTouchMove(event) {
		event.preventDefault();
		var curX = event.targetTouches[0].pageX - startX;
		var curY = event.targetTouches[0].pageY - startY;
		rotation = curX + panX;
		updown = curY + panY;
		console.log('start: [curX]=>'+curX+'[curY]=>'+curY+'[rotation]=>'+rotation+'[updown]=>'+updown);
	}

	this.init = function(containerId) {
		container = document.getElementById(containerId);
		// touch event handler functions.
		container.addEventListener("touchstart", handleTouchStart, true);
		container.addEventListener("touchmove", handleTouchMove, true);
		container.addEventListener("touchend", handleTouchEnd, true);		
		container.addEventListener("touchcancel", handleTouchEnd, true);	
		//container.addEventListener("MSPointerDown", handleTouchStart, true);
		//container.addEventListener("mousedown", handleTouchStart, true);
		//container.addEventListener("mousemove", handleTouchMove, true);
		//container.addEventListener("mouseup", handleTouchEnd, true);
	}

	this.stop = function() {
		// touch event handler functions 
		container.removeEventListener("touchstart", handleTouchStart);
		container.removeEventListener("touchmove", handleTouchMove);
		container.removeEventListener("touchend", handleTouchEnd);		
		container.removeEventListener("touchcancel", handleTouchEnd);	
		//container.removeEventListener("MSPointerDown", handleTouchStart);
		//container.removeEventListener("mousedown", handleTouchStart);		
		//container.removeEventListener("mousemove", handleTouchMove);	
		//container.removeEventListener("mouseup", handleTouchEnd);	
	}

	this.getPan = function() {
		return 0;
	}

	this.getTilt = function() {
		return 0;
	}

	this.isTouching = function() {
		return false;
	}

	this.getFov = function() {
		// the Field of view, angle of the camera
		return 100;
	}

	this.moveTo = function(yaw, pitch, roll) {
		panX = rotation = yaw;
		panY = updown = pitch;
	}
}

