var options = {
	enableHighAccuracy: true,
	timeput: 6000,
	maximumAge: 0
};

navigator.geolocation.getCurrentPosition(succes, error, options);

funcion success(position) {
	var coordenadas = position.coords;

console.log("Tu posicion actual es: ");
console.log("Latitud: " + coordenadas.latitud);
console.log("Longitud: " + coordenadas.longitude);
console.log("Más o menos " + coordenadas.accuracy + " metros.");
};

function error (error){
console.warn("ERROR(" +error.code + "): " + error.message);
};