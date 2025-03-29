function matemaatilisedArvutused(a, b) {
    if (b === 0) {
        throw new Error('Jagamine nulliga ei ole lubatud');
    }

    let summa = a + b;
    let vahe = a - b;
    let jagatis = Math.floor(a / b);
    let korrutis = a * a;

    return { summa, vahe, jagatis, korrutis };
}

module.exports = matemaatilisedArvutused;