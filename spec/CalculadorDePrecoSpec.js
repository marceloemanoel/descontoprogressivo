'use strict';

/*globals CalculadorDePreco:true*/

describe("CalculadorDePreco", function() {
  var calculadorDePrecos;

  beforeEach(function() {
    calculadorDePrecos = new CalculadorDePreco();
  });
  
  describe("Todos livros diferentes", function(){
      it("um único livro resulta em 8", function() {
        expect(calculadorDePrecos.calculaPreco([1])).toEqual(8);
      });  

      it("dois livros resulta em 15,20", function() {
          expect(calculadorDePrecos.calculaPreco([1, 2])).toEqual(15.20);
      });

      it("três livros resulta em 21,60", function() {
          expect(calculadorDePrecos.calculaPreco([1, 2, 3])).toEqual(21.6);
      });

      it("quatro livros resulta em 25,60", function() {
          expect(calculadorDePrecos.calculaPreco([1, 2, 3, 4])).toEqual(25.6);
      });

      it("cinco livros resulta em 30", function() {
          expect(calculadorDePrecos.calculaPreco([1, 2, 3, 4, 5])).toEqual(30);
      });
  });
      
  describe("Todos os livros são iguais", function(){
     it("dois livros resultam em 16", function(){
         expect(calculadorDePrecos.calculaPreco([1,1])).toEqual(16);
     }); 
  });
      
  describe("agrupar", function(){
      it("agrupa [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] em [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]", function(){
          expect(calculadorDePrecos.agrupar([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]);
      });
      it("agrupa [1, 1, 1, 1] em [[1], [1], [1], [1]]", function(){
          expect(calculadorDePrecos.agrupar([1, 1, 1, 1])).toEqual([[1], [1], [1], [1]]);
      });
      it("agrupa [1, 2, 1, 3, 5] em [[1, 2, 3, 5], [1]]", function(){
          expect(calculadorDePrecos.agrupar([1, 2, 1, 3, 5])).toEqual([[1, 2, 3, 5], [1]]);
      });
      it("agrupa [1, 2, 1, 3, 4, 4, 5, 3] em [[1, 2, 3, 4 ,5], [1, 4, 3]]", function(){
          expect(calculadorDePrecos.agrupar([1, 2, 1, 3, 4, 4, 5, 3])).toEqual([[1, 2, 3, 4 ,5], [1, 4, 3]]);
      });
  });
});