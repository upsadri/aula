let ValorBoleto = 500
let diasatraso = 0

if (diasatraso == 0){
    console.log ("sem juros")
}
else if (diasatraso >= 1){
    let valormulta = ValorBoleto * 0.2
    let juros = ValorBoleto * 0.01 + ValorBoleto
    let valorfinal = ValorBoleto + valormulta + juros
    console.log ("VALOR A PAGAR", valorfinal    )
}
else{
    console.log ("valorpago")
}