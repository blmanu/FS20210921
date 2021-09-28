// 'use strict' 
describe('ejercicio 1', function(){
    it('aleatorio',  function(){
        expect(random(2, 18)).toBeGreaterThanOrEqual(2);
        expect(random(2, 18)).toBeLessThan(18);
    })
})

describe('ejercicio 3', function(){
    it('inicializarArray', function(){
        let arr = inicializarArray(5,0);
        expect(arr.length).toBe(5);
        for(i of arr){
            expect(i).toBe(0);
        }
    })
})

fdescribe('ejercicio 4', function(){
    it('esprimo',function(){
        expect(esPrimo(73)).toBeTrue();
    })
})