'use strict';
function CalculadorDePreco() {
    var self = this,
        PRECO = 8;

    this.calculaPreco = function(livros){
        var i = 0,
            total = 0,
            grupos = self.agrupar(livros);
        
        for(i = 0; i < grupos.length; i++){
            total = total + totalGrupo(grupos[i].length);
        }
        
        return total;
    };
    
    function totalGrupo(numeroDeLivros) {
        return PRECO * numeroDeLivros * desconto(numeroDeLivros);
    }
                                                     
    function desconto(quantidade){
        var porcentagem = {
          1: 1,
          2: 0.95,
          3: 0.9,
          4: 0.8,
          5: 0.75  
        };
        return porcentagem[quantidade];
    }
    
    this.agrupar = function(livros){
         var grupos = [];
         function agruparIter(livrosRestantes) {
            if(livrosRestantes.isEmpty()) {
                return grupos;
            }
            else {
                buscaGrupo(livrosRestantes.head())
                     .push(livrosRestantes.head());

                return agruparIter(livrosRestantes.tail());
            }
        }
        
        function buscaGrupo(livro){
            for(var i = 0; i < grupos.length; i++) {
                if(grupos[i].length < 5 && !grupos[i].contains(livro)) {
                    return grupos[i];
                }
            }
            grupos[grupos.length] = [];
            return grupos[grupos.length - 1];
        }
        
        return agruparIter(livros);
    };
    
    
}