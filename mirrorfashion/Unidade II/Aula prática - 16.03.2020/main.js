// Exemplo de classe com herança
class List{
    constructor(){
        this.data = []
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class ToList extends List{
    constructor(){
        super();
        this.usuario = "lucas"
    }
    getUsuario(){
        console.log(this.usuario)
    }

    static soma(a,b){
        return a+b
        
    }

}

//instacia a classe
var todo = new ToList();

//adiciona ao array data a string "adicionei" cada vez que clica no botão com id = "novotodo"  e chama o método getUsuario
document.getElementById("novotodo").onclick = function(){
    todo.add("adicionei");
    todo.getUsuario()
}


//Chama o método estático 
ToList.soma(1,3)

//variavel constante
const user = 'lucas'
//ao executar o código abaixo gera um erro, pois a variável é constante
//user = 'joao'
console.log(user)

//No caso abaixo há alteração da propriedade, mas da estrutura do objeto.
const usuario = {nome: 'lucas'}
usuario.nome = "joao"
console.log(usuario)

//Variável let só é visível dentro do escopo da função
function teste (x){
    let y =4
    if (x>2){
        y =6
        console.log(x,y)
    }
}

console.log(teste(10))

//O código abaixo gera um erro, pois a variável não é visível fora da função
console.log(y)