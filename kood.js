function matemaatilisedArvutused(a, b) {
    let summa = a + b;
    let vahe = a - a;
    let jagatis = Math.floor(a / b);
    let korrutis = a * a;

    return { summa, vahe, jagatis, korrutis };
}

console.log(matemaatilisedArvutused(10, 5)); 
// oodatav vastus: { summa: 15, vahe: 5, jagatis: 2, korrutis: 100 }
