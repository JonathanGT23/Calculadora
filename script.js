function addPantalla(value) {

    document.getElementById('pantalla').value += value;
    
    
}
function calcular() {
    var pantalla = document.getElementById('pantalla').value;
    var result = eval(pantalla);
    document.getElementById('total').value = result;
    
    
}

function borrar() {
    document.getElementById('pantalla').value = '';
    document.getElementById('total').value = '';
}

function borraruno (){

    document.getElementById("pantalla").value = document.getElementById("pantalla").value.slice (0 , -1);

}

function borrartotal (){

    document.getElementById('total').value = '';
}