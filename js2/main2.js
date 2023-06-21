
var creditos = [
    {"nombre": "plan001" , "capital": 150000 , "plazo": 30 , "tasa": 0.15},
    {"nombre": "plan002" , "capital": 300000 , "plazo": 180 , "tasa": 0.10},
    {"nombre": "plan003" , "capital": 485000 , "plazo": 60 , "tasa": 0.23},
]

for (var i = 0  ; i<creditos.length ; i ++) {
    alert (" El interes generado del " + creditos[i].nombre + " es $" + ((creditos[i].capital * creditos[i].plazo * creditos[i].tasa) / 100))
}
