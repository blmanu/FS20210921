fdescribe('calculadora', () => {
    it('ponerDigito', () => {
        let c = new Calculadora();
        c.PonerDigito('3');
        expect(c.NumeroPantalla).toBe('3');
        c.PonerDigito('5');
        expect(c.NumeroPantalla).toBe('35');
        c.PonerDigito('3');
        expect(c.NumeroPantalla).toBe('353');

    })

    it('calcular', () => {
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
})