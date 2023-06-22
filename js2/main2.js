var creditos = [
    {"nombre": "plan001" , "capital": 150000 , "plazo": 30 , "tasa": 0.15},
    {"nombre": "plan002" , "capital": 300000 , "plazo": 180 , "tasa": 0.10},
    {"nombre": "plan003" , "capital": 485000 , "plazo": 60 , "tasa": 0.23},
]

/*for (var i = 0  ; i<creditos.length ; i ++) {
    alert (" El interes generado del " + creditos[i].nombre + " es $" + ((creditos[i].capital * creditos[i].plazo * creditos[i].tasa) / 100))
}
*/
var resultados = []

console.log(resultados)

resultados.push({"nombre":creditos[0].nombre,"interesgenerado":((creditos[0].capital * creditos[0].plazo * creditos[0].tasa) / 100 )}) ;
resultados.push({"nombre":creditos[1].nombre,"interesgenerado":((creditos[1].capital * creditos[1].plazo * creditos[1].tasa) / 100 )}) ;
resultados.push({"nombre":creditos[2].nombre,"interesgenerado":((creditos[2].capital * creditos[2].plazo * creditos[2].tasa) / 100 )}) ;

console.log(resultados)

alert("El interes generado del  " + resultados[0].nombre + " es: $" + resultados[0].interesgenerado)
alert("El interes generado del  " + resultados[1].nombre + " es: $" + resultados[1].interesgenerado)
alert("El interes generado del  " + resultados[2].nombre + " es: $" + resultados[2].interesgenerado)