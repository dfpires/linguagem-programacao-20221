function calcular(){

    
    let result = " "
    for(let tabuada = 1; tabuada <= 10; tabuada++){
        result += "<br/>"
        for(let contador =1; contador <=10; contador++){
            result += "<br/> " + tabuada + " x " + contador +
            " = " + (tabuada * contador)
        }
    }
    document.getElementById("result").innerHTML = result
}