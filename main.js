function funcaoQuad(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var result1 = document.getElementById("span1");
    var result2 = document.getElementById("span2");
    var delta, r1, r2;

    delta = Math.pow(b,2) -4 * a * c;
    if(delta < 0){
        result1.textContent= "Não admite raizes reais";
        result2.textContent= " ";
    }    
    else{  
    r1= (-b + Math.pow(delta,0.5))/(2*a);
    r2= (-b - Math.pow(delta,0.5))/(2*a);
    result1.textContent = r1;
    result2.textContent = r2;
    }
}

function clean(result) {
    result.textContent = "Resultados: ";
}

function divCom(){
    var m = parseInt(document.getElementById("m").value);
    var n = parseInt(document.getElementById("n").value);
    var aux;
    var result = document.getElementById("result");
    var i;
    var rMDC = document.getElementById("mdc");
    var mdc;
    clean(result);

    if(m < n){
        aux = m;
        m = n;
        n = aux; 
    }

    for (i=1; i <= n; i++){
        if( m%i == 0 && n%i == 0){
            result.textContent += i;
            result.textContent += " ";
            mdc = i;
        }
    }
    rMDC.textContent = mdc ;


}

