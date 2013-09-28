'use strict';

/*globals CalculadorDePreco:true*/

describe("CalculadorDePreco", function() {
  var calculadorDePrecos;

  beforeEach(function() {
    calculadorDePrecos = new CalculadorDePreco();
  });
  
  describe("Compra de livros distintos", function(){
      it("resulta em 8", function() {
        expect(calculadorDePrecos.calculaPreco([1])).toEqual(8);
      });
  });
});