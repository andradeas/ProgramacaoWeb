class Pessoa{
    constructor(){
        this.Nome = "André"
        this.Cpf = "859.862.305-90"
        this.Idade = "20"
    }
}

class Aluno extends Pessoa{
    constructor(){
        super()
        this.Matricula = "201710039"
        this.Nota = []
        this.Curso = "Sistemas de Informação"  
    }

    InserirNota(Nota){
        this.Nota.push(Nota)
    }

    DevolverMedia(){
        var media = 0
        var i
        for(i = 0; i<3; i++){
            media+= this.Nota[i]
        }
        return media/3
    }

    static NotaFinal(media){
        return (50 - 7 * media) / 3
        
    }

}

var aluno = new Aluno();

aluno.InserirNota(8);
aluno.InserirNota(7);
aluno.InserirNota(6);

console.log( aluno.DevolverMedia())
console.log(Aluno.NotaFinal(aluno.DevolverMedia()))


