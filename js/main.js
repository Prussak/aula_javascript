
function clicou(){
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
    
    //console.log(document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar");
}

function redirecionar (){
    window.open("https://digitalinnovation.one/sign-up?ref=FTWZ9VT8QF"); //este abre em nova aba
   // window.location.href="https://digitalinnovation.one/sign-up?ref=FTWZ9VT8QF"; //este abre na mesma página
}

function trocar(elemento){
    //alert("trocar texto");
   // document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    elemento.innerHTML="Obrigado por passar o mouse";
}

 function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui";
}
function funcaoChange (elemento){
    console.long(elemento.value);
}

//--------------Exercicios função---------
/*function soma (n1,n2){
    return n1+n2;
}
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual dua idade");
console.log(validade(idade))*/


/*function soma (n1,n2){
    return n1+n2;
}
 function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
 }
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão","Brasil"));*/


/*function soma (n1,n2){
    return n1+n2;
}
alert(soma(5,10));*/



//----------- Data----------
/*var d = new Date();
alert(d); // data completa
alert(d.getMinutes()); //minutos
lert(d.getMonth()+1); //mês +1 pq ele começa do 0
*/
//-------------Laços for:----------
/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

//---------------Laços:-----------
/*var count = 0;
while (count <= 5){
    console.log(count);
  //  count = count + 1; ou:
  count++;
  alert(count);

};*/


//------------Condicionais:---------------
/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
    
}else{
    alert("menor de idade");
};
*/
//-----------Dicionário:------------------
/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

//------------Array-----------------------
/*var lista = ["maça","pêra", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));*/
//lista.pop();
//console.log(lista);
//alert(lista[1])
//console.log(lista.length);
//console.log(lista.reverse());

//var nome = "Tamara Prussak";
//var idade = 30;
//var idade2 = 1;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome);
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));