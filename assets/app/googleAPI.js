function findMe(){
    var output = document.getElementById('map');
    // Verificar si soporta geolocalizacion
    if (navigator.geolocation) {
        output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
    }else{
        output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
    }
    //Obtenemos latitud y longitud
    function localizacion(posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;
        var imgURL = "maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters"+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyDTQZkvA12MM0uPt4zxpc50EWHX5q9x0P4";
        output.innerHTML ="<img src='"+imgURL+"'>";
        
    }
    function error(){
        output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
    }
    //Método getCurrentPsition
    navigator.geolocation.getCurrentPosition(localizacion,error);
}