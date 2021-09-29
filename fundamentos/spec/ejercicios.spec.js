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

describe('ejercicio 4', function(){
    it('esprimo',function(){
        expect(esPrimo(73)).toBeTrue();
        let arrayNum = numerosPrimosEntreEstosNumeros(10,30);//11,13,17,19,23,29
        expect(arrayNum.length).toBe(6);
        for(i of arrayNum){
            //compruebo si esta entre los dos numeros
            expect(i).toBeGreaterThanOrEqual(10);
            expect(i).toBeLessThan(30);
            //veo si es primo
            expect(esPrimo(i)).toBeTrue();
        }

    })
})

describe('ejercicio 5', function(){
    it('DNI correcto',function(){        
        let DNIcorrecto = "44667260H";
        
        //expresion regular dni
        let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        //probamos si los dni cumplen la expresion del dni
        expect(expresion_regular_dni.test(DNIcorrecto)).toBeTrue();

        //Prueba si la letra es correcta
        let numero = DNIcorrecto.substr(0,DNIcorrecto.length-1);
        let letr = DNIcorrecto.substr(DNIcorrecto.length-1,1);
        numero = numero % 23;
        let letra='TRWAGMYFPDXBNJZSQVHLCKET';
        let letra1=letra.substring(numero,numero+1);

        expect(letra1==letr.toUpperCase()).toBeTrue();

        expect(nif(DNIcorrecto)).toBeTrue();
    })
    
    let dniMal = ["00000000J", "09654HHH"].forEach(caso => {
        it('DNI incorrecto '+`${caso}`, function(){

        let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        expect(expresion_regular_dni.test(caso)).toBeFalse();

        let numero = caso.substr(0,caso.length-1);
        let letr = caso.substr(caso.length-1,1);
        numero = numero % 23;
        let letra='TRWAGMYFPDXBNJZSQVHLCKET';
        let letra1=letra.substring(numero,numero+1);

        expect(letra1==letr.toUpperCase()).toBeFalse();

        expect(nif(caso)).toBeFalse();
        expect(nif(caso)).toBeFalse();
    })
    })
    
})

fdescribe('Ejercicio 6', function(){

    let arrayBien = ['ana', 'La ruta nos aporto otro paso natural'].forEach(caso => {
        it('Palindromo correcto '+`${caso}`,function(){

            expect(esPalindromo(caso)).toBeTrue();

        })
    })

    let arrayMal = ['pepe', 'JLa ruta nos aporto otro paso natural'].forEach(caso => {
        it('Palindromo incorrecto '+`${caso}`, function(){

            expect(esPalindromo(caso)).toBeFalse();

        })
    })
})
