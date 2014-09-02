function panoobj() {
	this.getPan = function() {
		return 1;
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
		//console.log(yaw + ':' + pitch + ':' + roll);
		rotation = yaw;
		updown = pitch;
	}
}

