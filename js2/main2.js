function recibir() {
    var monto=document.getElementById("monto").value;
    var cincuenta= (monto * 50 ) / 100
    var treita= (monto * 30) / 100
    var veinte= (monto * 20) / 100


  
    document.getElementById("50").innerHTML= cincuenta ;
    
    document.getElementById("30").innerHTML= treita;
    
    document.getElementById("20").innerHTML= veinte ;

 }

  function borrar() {
     document.getElementById("escribir").innerHTML=" " ;
    }
    