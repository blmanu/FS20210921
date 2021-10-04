/* eslint-disable no-undef */
fdescribe('calculadora', () => {
    xit('ponerDigito', () => {
        let c = new Calculadora();
        c.PonerDigito('3');
        expect(c.NumeroPantalla).toBe('3');
        c.PonerDigito('5');
        expect(c.NumeroPantalla).toBe('35');
        c.PonerDigito('3');
        expect(c.NumeroPantalla).toBe('353');

    })

    xit('calcular', () => {
        let c = new Calculadora();
        c.PonerDigito('3');
        c.Calcular('-');
        expect(c.Resultado).toBe('3');
        c.PonerDigito('1');
        c.Calcular('*');
        expect(c.Resultado).toBe('2');
        c.PonerDigito('1');
        c.PonerDigito('0');
        c.Calcular('/');
        expect(c.Resultado).toBe('20');
        c.PonerDigito('4');
        c.Calcular('+');
        expect(c.Resultado).toBe('5');
        expect(c.Op).toBe('+');

    })

    it('cambio punto coma', () => {
        let c = new Calculadora();
        expect(c.cambioComaPunto('8,2')).toBe('8.2');
        expect(c.cambioComaPunto('0,222')).toBe('0.222');
        expect(c.cambioComaPunto('5')).toBe('5');
    })

    xit('cambio coma punto', () => {
        let c = new Calculadora();
        expect(c.cambioPuntoComa('8.2')).toBe('8,2');
        expect(c.cambioPuntoComa('0.222')).toBe('0,222');
        expect(c.cambioPuntoComa('5')).toBe('5');
    })
})