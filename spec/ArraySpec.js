'use strict';

/*globals CalculadorDePreco:true*/

describe("Array", function() {
  var array;

  beforeEach(function() {
    array = [1, 2, 3, 4, 5];
  });
  
  describe("head", function(){
      it("returns the first element of the list", function(){
         expect(array.head()).toEqual(1); 
      });
      it("returns undefined with empty list", function(){
         expect([].head()).toEqual(undefined);
      });
  });
  
  describe("tail", function() {
      it("returns the list without the first element", function(){
          expect(array.tail()).toEqual([2, 3, 4, 5]);
      });
      it("returns undefined with empty list", function(){
          expect([].tail()).toEqual([]);
      });
  });
  
  describe("contains", function() {
     it("returns true when the array contains the item", function() {
         expect(array.contains(1)).toEqual(true);
     });
     it("returns false when the array is empty", function() {
         expect([].contains(1)).toEqual(false);
     });
     it("returns false when the array doesn't contain the item", function() {
         expect(array.contains(10)).toEqual(false);
     });
  });
});