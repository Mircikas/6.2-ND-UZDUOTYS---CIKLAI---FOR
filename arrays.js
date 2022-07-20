// ------ Pirma užduotis - Ciklai -------

// let text = "";
// let count = 0;

// for (let i = 0; i < 300; i++) {
//     let arr = Math.round(Math.random() * 300);
//     if (arr >= 150) { count++;}
//     if (arr >= 275) { text += " [" + arr + "]"; } 
//     else {text += " " + arr;}
// }

// console.log("Atsitiktiniai skaičiai: " + text);
// console.log("--------------------------------------------------------")
// console.log("Kintamųjų kurių reikšmė didesnė už 2: " + count);

// ------ Antra užduotis - Ciklai -------

// let text = "";

// for (let i = 77; i < 3000; i+= 77) {
//     text += i + ", ";
// }
// console.log(text.slice(0, -2)); // pirmas skaicius "slice" nurodo nuo kur prasideda o antras skaicius parodo kiek "nukasti"

// ------ Trečia užduotis - Ciklai -------

// let kvad = "";

// for (let i = 0; i < 100; i++) {
//     kvad = "";
//     for (let a = 0; a < 100; a++){
//         kvad += "*";
//     }
//     console.log(kvad); 
// }

// ------ Ketvirta užduotis - Ciklai -------

// let kvad = "";

// for (let i = 0; i < 100; i++) {
//     kvad = "";
//     for (let a = 0; a < 100; a++){
//         if ( i == a || i + a == 99){
//         kvad += "@";
//         }
//         else {
//         kvad += "*";
//     }
//     }
//     console.log(kvad); 
// }

// ------ Penkta užduotis - a - Ciklai -------

// let countH = 0    // Herbo iskritimo counteris
// let countS = 0    // Skaiciaus iskrtimo counteris
// let dropTimes = 0 // Bandymu kiekis

// while (true) {
//     let a = Math.round(Math.random())
//         console.log(a);
//         dropTimes++;
//         if (a == 0 ) {
//         console.log("Iškrito moneta su herbo simboliu po " + dropTimes + " bandymu.");
//         break;
//         }
//     }   


// ------ Penkta užduotis - b - Ciklai -------

// let countH = 0    // Herbo iskritimo counteris
// let countS = 0    // Skaiciaus iskrtimo counteris
// let dropTimes = 0 // Bandymu kiekis
 

// while (true) {
//     let a = Math.round(Math.random())
//     dropTimes++;
//     if ( a == 0 ) {
//     countH++;
//     } if ( a == 1) {
//     countS++;
//     } if (countH == 3) 
//         break;
// } 
//     console.log("Herbas iškrito 3 kartus po " + dropTimes + " bandymų.");


// ------ Penkta užduotis - c - Ciklai -------


// let countH = 0    // Herbo iskritimo counteris - 0
// let countS = 0    // Skaiciaus iskrtimo counteris - 1
// let dropTimes = 0 // Bandymu kiekis
 

// while (true) {
//     let a = Math.round(Math.random())
//     console.log(a);
//     dropTimes++;

//     if (a == 0 ) {
//     countH++;
//     } if ( a == 1 ) {
//     countS++;
//     countH = 0;
//     } if (countH == 3) 
//         break;

//     } 
//     console.log("Po " + dropTimes + " metimų tris kartus iš eilės iškrito herbas.");


// ------ Šešta užduotis - Ciklai -------

// let countKazys = 0 // Kazio surenkamu tasku count'as - a
// let countPetras = 0 // Petro surenkamu tasku count'as - b
// let gameCount = 0 // Suzaistu partiju skaicius

// while (true) {
//     let a = Math.round((Math.random() * 20) + 10);
//     let b = Math.round((Math.random() * 25) + 5);
//     gameCount++
//     countKazys += a
//     countPetras += b
    
//     if (countKazys >= 222 || countPetras >= 222)
//         break;
//     }
//     if (countKazys > countPetras) {
//         console.log("Partiją laimėjo Kazys po " + gameCount + " žaidimų, surinkęs " + countKazys + " taškų.");
//     } if (countKazys < countPetras) {
//         console.log("Partiją laimėjo Petras po " + gameCount + " žaidimų, surinkęs " + countPetras + " taškų.");
//     } if (countKazys == countPetras) {
//         console.log("Lygiosios!!!!");
//     }
//     console.log("Kazys bendrai surinko " + countKazys + " tasku, Petras surinko " + countPetras + " tasku." + "- po " + gameCount + " zaidimu." );


// ------ Septinta užduotis - Ciklai -------






// ------ Aštunta užduotis - a - Ciklai -------
// let nailLenght = 85; 
// let hitCount = 0;


// for (let i = 0; i < 5; i++) {
//     while (true) {
//         let a = Math.round((Math.random()* 15) + 5)
//         nailLenght -= a;
//         hitCount++;
//         console.log(a);
//         if (nailLenght <= 0)
//         break;
        
//     }
//     console.log("8.5 cmr ilgio viniui įkalti prireikė " + hitCount + " smūgių.");
// }

    // while (true) {
    //     let a = Math.round((Math.random()* 15) + 5)
    //     nailLenght -= a;
    //     hitCount++;
    //     console.log(a);
    //     if (nailLenght <= 0)
    //     break;
        
    // }
    // console.log("8.5 cmr ilgio viniui įkalti prireikė " + hitCount + " smūgių.");


    // ------ Aštunta užduotis - b - Ciklai -------
let nailLenght = 85; 
let hitCount = 0;
let hitMiss = 0;
let goodShot = 0;

while (true) {
    let a = Math.round((Math.random()* 10) + 20)
    hitCount++;
    let randomHit = Math.round(Math.random())
    console.log("tikimybe " + randomHit);
    if(randomHit == 1) {
        nailLenght -= a;
        console.log(a);
        goodShot++;
        if (nailLenght <= 0)
        break;
    } else {
        hitMiss++;
    }
}
console.log("Pataikyti smūgiai " + goodShot);
console.log("Nepataikyti smūgiai " + hitMiss)
console.log("Bandyta padaryti smūgių " + hitCount)
