const matemaatilisedArvutused = require('./kood.js')

test('kontrollib nulliga jagamist', () => {
    expect(() => matemaatilisedArvutused(10, 0)).toThrow();
});

test('kontrollib negatiivsete arvude sisendit', () => {
    const result = matemaatilisedArvutused(-5, -3);
    expect(result).toEqual({ summa: -8, vahe: -2, jagatis: 1, korrutis: 25 });
});

test('kontrollib nullide sisendit', () => {
    expect(() => matemaatilisedArvutused(0, 0)).toThrow('Jagamine nulliga ei ole lubatud');
});

test('kontrollib ühe ja nulli sisendit', () => {
    expect(() => matemaatilisedArvutused(1, 0)).toThrow();
});

test('kontrollib murdarvude sisendit', () => {
    const result = matemaatilisedArvutused(1.5, 0.5);
    expect(result).toEqual({ summa: 2, vahe: 1, jagatis: 3, korrutis: 2.25 });
});

test('kontrollib suuremate arvude sisendit', () => {
    const result = matemaatilisedArvutused(1000, 500);
    expect(result).toEqual({ summa: 1500, vahe: 500, jagatis: 2, korrutis: 1000000 });
});