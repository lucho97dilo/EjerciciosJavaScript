
/*
var costoFijo = prompt("Ingrese su costo fijo")
var venta = prompt ("Ingrese su precio de venta")
var costoVariable = prompt ("Ingrese su costo variable")
var resultado = costoFijo / (venta - costoVariable ) ;
alert("Su punto de equilibro es "  +  resultado ) 


*/
function recibir() {
    var cf=document.getElementById("cf").value;
    var pv=document.getElementsByName("pv")[0].value;
    var cv=document.getElementById("cv").value;
    var resultado= cf/(pv-cv)
  
    document.getElementById("escribir").innerHTML= resultado  ;
    }
  function borrar() {
     document.getElementById("escribir").innerHTML=" " ;
    }
    


    