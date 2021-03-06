// 'use strict'
describe("ejercicio 1", function () {
  it("aleatorio", function () {
    expect(random(2, 18)).toBeGreaterThanOrEqual(2);
    expect(random(2, 18)).toBeLessThan(18);
  });

  it("fallo entrada", function () {
    expect(random("a", 2)).toBeNull();
  });
});

describe("ejercicio 2", function(){
    let juego = null;

    beforeAll(() => {
        spyOn(Math, 'random').and.returnValue(0.10456);
    })

    beforeEach(() => {
        juego = new Juego(1, 100);
    })
    
    it("comparacion mayor", () => {
        expect(juego.comparar(9)).toBe("es mayor");
    })

    it("comparacion menor", () => {
        expect(juego.comparar(11)).toBe("es menor");
    })

    it("comparacion igual", () => {
        expect(juego.comparar(10)).toBe("son iguales");
    })
})

describe("ejercicio 3", function () {
  it("inicializarArray", function () {
    let arr = inicializarArray(5, 0);
    expect(arr.length).toBe(5);
    for (i of arr) {
      expect(i).toBe(0);
    }
  });
});

describe("ejercicio 4", function () {
  it("esprimo", function () {
    expect(esPrimo(73)).toBeTrue();
    let arrayNum = numerosPrimosEntreEstosNumeros(10, 30); //11,13,17,19,23,29
    expect(arrayNum.length).toBe(6);
    for (i of arrayNum) {
      //compruebo si esta entre los dos numeros
      expect(i).toBeGreaterThanOrEqual(10);
      expect(i).toBeLessThan(30);
      //veo si es primo
      expect(esPrimo(i)).toBeTrue();
    }
  });
});

describe("ejercicio 5", function () {
  it("DNI correcto", function () {
    let DNIcorrecto = "44667260H";

    expect(esNif(DNIcorrecto)).toBeTrue();
  });

  let dniMal = ["00000000J", "09654HHH", null, undefined].forEach((caso) => {
    it(`DNI incorrecto ${caso}`, function () {
      expect(esNif(caso)).toBeFalse();
    });
  });
});

describe("Ejercicio 6", function () {
  let arrayBien = ["ana", "La ruta nos aporto otro paso natural"].forEach(
    (caso) => {
      it(`Palindromo correcto ${caso}`, function () {
        expect(esPalindromo(caso)).toBeTrue();
      });
    }
  );

  let arrayMal = ["pepe", "JLa ruta nos aporto otro paso natural"].forEach(
    (caso) => {
      it("Palindromo incorrecto " + `${caso}`, function () {
        expect(esPalindromo(caso)).toBeFalse();
      });
    }
  );
});
