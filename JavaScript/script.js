function baskhara(){
    var a1= Number(document.getElementById("a").value);
    var b1= Number(document.getElementById("b").value);
    var c1= Number(document.getElementById("c").value);
    var a = a1.toFixed(2)
    var b = b1.toFixed(2)
    var c = c1.toFixed(2)
    
    
    var res=document.getElementById("resultado");
    var delt = ((b**2)+(4*a*c));
    var delta = delt.toFixed(2)
    var x11= (b*1 + delta**(1/2))/(2*a);
    var x1= x11.toFixed(2)
    var x21= (b - delta**(1/2))/(2*a);
    var x2= x21.toFixed(2)
    var vx= -b/(2*a);
    var vy= -delta/(4*a);
    if(a==0){res.innerHTML=`O valor de a não pode ser ZERO, pois a função deixa de ser de 2º grau e passa a ser de 1º grau.`}
    else{
        if(delta<0){
            res.innerHTML=`A função não tem raizes. Seu vértice se encontra no par ordenado (${vx};${vy}).<br> Resolução: <br>\u{02206} = ${b}²+4*${a}*${c}<br> \u{02206} = ${b**2}+4*${a*c}<br>\u{02206} = ${b**2}+${4*a*c}<br>\u{02206} = ${b**2+4*a*c}<br> \u{02206} menor que zero não há raiz quadrada no conjunto dos Números Reais.`
        }
        else if(delta==0){
            res.innerHTML=`A função tem duas raizes iguais.<br>A primeira raiz é igual a ${x1}.<br>A segunda raiz é igual a ${x2}. <br>Seu vértice se encontra no par ordenado (${vx};${vy}).<br> Resolução: <br>\u{02206} = ${b}²+4*${a}*${c}<br> \u{02206} = ${b**2}+4*${a*c}<br>\u{02206} = ${b**2}+${4*a*c}<br>\u{02206} = ${b**2+4*a*c}<br> x= (${b} \u{02213} \u{221A}${delta})/(2*${a})<br> x= (${b} + \u{02213} ${(delta**(1/2)).toFixed(2)})/(${2*a}) <br> x1= (${(b*1 + delta**(1/2)).toFixed(2)})/(${2*a})    x2= (${(b - delta**(1/2)).toFixed(2)})/(${2*a})<br> x1= ${((b*1 + delta**(1/2))/(2*a)).toFixed(2)}     x2= ${((b - delta**(1/2))/(2*a)).toFixed(2)} `
        }
        else{
            res.innerHTML=`A função tem duas raizes diferentes.<br>A primeira raiz é igual a ${x1}.<br>A segunda raiz é igual a ${x2}<br>Seu vértice se encontra no par ordenado (${vx};${vy}).<br> Resolução: <br>\u{02206} = ${b}²+4*${a}*${c}<br> \u{02206} = ${b**2}+4*${a*c}<br>\u{02206} = ${b**2}+${4*a*c}<br>\u{02206} = ${b**2+4*a*c}<br> x= (${b} \u{02213} \u{221A}${delta})/(2*${a})<br> x= (${b} \u{02213} ${(delta**(1/2)).toFixed(2)})/(${2*a}) <br> x1= (${(b*1 + delta**(1/2)).toFixed(2)})/(${2*a})    x2= (${(b - delta**(1/2)).toFixed(2)})/(${2*a})<br> x1= ${((b*1 + delta**(1/2))/(2*a)).toFixed(2)}     x2= ${((b - delta**(1/2))/(2*a)).toFixed(2)} `
        }
    }
}