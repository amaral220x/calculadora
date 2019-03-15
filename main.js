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
    r1= (-b + Math.pow(delta,0.5))/2*a;
    r2= (-b - Math.pow(delta,0.5))/2*a;
    result1.textContent = r1;
    result2.textContent = r2;
    }

}

