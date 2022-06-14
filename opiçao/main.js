function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por click</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=2Ts26uhhk2c&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=9");
    //window.location.href = "https://www.youtube.com/watch?v=2Ts26uhhk2c&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=9";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passa o mouse";
   //alert("trocar texto");
   elemento.innerHTML = "obrigado por passa o mouse";

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade =prompt("qual sua idade");
console.log(validaIdade(idade));
*/

/*
function soma(n1,n2){
    return n1+n2;
}

alert(soma(5,10));
*/