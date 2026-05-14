
function Car(make, nodel){
	this.make = make;
	this. model = model;
}

Car.prototype.getMakeModel = function() {
	
};


function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

SportsCar.prototype.getTopSpeed = function () {
	return this.topSpeed;
};


SportsCar.prototype.constructor = SportsCar;
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
