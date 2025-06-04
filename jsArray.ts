// SOAL-SOAL BUILT IN FUNCTION JS ARRAY

/**
 * Jika kamu ingin menggandakan semua angka dalam array [2, 4, 6], bagaimana caranya?
 * Bagaimana cara menyaring hanya angka lebih dari 5 dari array [3, 6, 8, 2]?
 * Bagaimana cara menemukan indeks dari angka pertama yang lebih besar dari 50 dalam array [10, 60, 30]?
 * Bagaimana cara menjumlahkan semua angka dalam array [1, 2, 3, 4]?
 * Apa perbedaan reduceRight() dibanding reduce() saat menjumlahkan elemen array [1, 2, 3]?
 * Bagaimana mengecek apakah semua angka dalam array [10, 20, 30] lebih besar dari 5?
 * Bagaimana mengecek apakah ada angka dalam array [3, 4, 10] yang lebih besar dari 5?
 * Bagaimana cara mengubah string 'halo' menjadi array karakter?
 * Bagaimana cara mendapatkan semua indeks dari array ['a','b','c']?
 * Bagaimana cara mendapatkan pasangan indeks dan elemen dari array ['x','y']?
 * Bagaimana mengecek apakah 'jeruk' ada di dalam array ['apel','jeruk','pisang']?
*/


// SOAL 1 
//Kamu punya daftar angka [4, 5, 6]. Bagaimana cara mengubahnya menjadi string dengan koma sebagai pemisah? 
// toString() = mengubah array berisi number menjadi string 

const angka:number[] = [4,5,6];

let convertString:string = angka.toString()
console.log(convertString);

// SOAL 2 
// Jika kamu punya array ['apel', 'pisang', 'jeruk'], bagaimana cara menjadikannya satu string dengan tanda '-' sebagai pemisah?
//  array.join("") = menggabungkan elemen-elemen array menjadi satu string, dan bisa diberi pemisah tertentu seperti "-" atau ", "

const fruits:string[] = ['apel','pisang','jeruk'];
let joinFruits:string = fruits.join("-") 
console.log(joinFruits);


    //nb. akses isi array bisa dengan at() vs []
    // akses dengan at() bisa menggunakan indeks negatif
    console.log(fruits.at(1));
    console.log(fruits[1]);

// SOAL 3 
// Dari daftar belanja ['susu', 'roti', 'telur'], bagaimana cara menghapus barang terakhir dari daftar? 
// array.pop() = menghapus isi array paling terakhir 

const daftarBelanja:string[] = ["susu","roti","telur"];
let deleteEndArray = daftarBelanja.pop();
console.log(daftarBelanja);

// SOAL 4 
// Jika kamu ingin menambahkan 'keju' ke akhir daftar sebelumnya, bagaimana caranya?
// array.push() = menambahkan isi array pada bagian paling akhir array

let newItem:string = "keju";
let addItem = daftarBelanja.push(newItem);
console.log(daftarBelanja);

// SOAL 5
// Bagaimana cara menghapus elemen pertama dari daftar sebelumnya?
// array.shift() = menghapus elemen pertama pada array 
let deleteFirstEl = daftarBelanja.shift()
console.log(daftarBelanja);

// SOAL 6
// Bagaimana cara menambahkan 'indomi' di awal array sebelumnya?
// array.unshift() = menambahkan elemen baru pada awal array 
let addElement1st = daftarBelanja.unshift("Indomi");
console.log(daftarBelanja);

// SOAL 7
// Jika kamu punya array seperti pada data sebelumnya, bagaimana cara mengetahui jumlah elemennya?
// array.length = mengetahui jumlah elemen (tanpa memperhatikan index)
let lihatJumlahEl:number = daftarBelanja.length;
console.log(lihatJumlahEl);

// SOAL 8
// Bagaimana cara menggabungkan dua array [1, 2] dan [3, 4] menjadi satu array? 
// array1.concat(array2) = menggabungkan dua atau lebih array menjadi 1 array
let num1:number[] = [1,2];
let num2:number[] = [3,4];
let num3:number[] = [5,6]
const concatArray:number[] = num1.concat(num2,num3);
console.log(concatArray);

// SOAL 9
// Dari array ['a', 'b', 'c', 'd'], bagaimana cara menghapus elemen di indeks ke-2?
    // CARA 1 : delete array1[index]  ==> kurang ideal karena bisa meninggalkan isi indeks yang terhapus mjd undefined
    let soal9:string[] = ['a', 'b', 'c', 'd'];
    let deleteItem = delete soal9[0];
    console.log(soal9);

    // CARA 2: splice 
    // array1.splice(indeks_yg_akan_dihapus,delete_number/berapa indeks ke belakang yang mau dihapus)
    let soal9_2:string[] = ['a', 'b', 'c', 'd']
    let deleteSplice = soal9_2.splice(1,1);
    console.log(soal9_2);

// SOAL 10 
// Bagaimana cara mengambil sebagian elemen dari array ['a','b','c','d'] mulai dari indeks 1 hingga sebelum indeks 3?
// array.slice(start,end) : mengambil elemn dari indeks start hingga sebelum end array
let arr = ['a','b','c','d'];
let sliced = arr.slice(1, 3); // indeks 1 sampai sebelum 3
console.log(sliced);

// SOAL 11
// Dalam array ['kucing', 'anjing', 'kelinci'], bagaimana cara mencari posisi 'anjing'?



// SOAL 12 
// Jika 'apel' muncul dua kali dalam array ['apel', 'jeruk', 'apel'], bagaimana mencari posisi terakhir 'apel'?



// SOAL 13 
// Bagaimana cara mengurutkan array angka [5, 2, 8, 1] dari kecil ke besar?


// SOAL 14
// Bagaimana cara membalik urutan array ['pagi', 'siang', 'malam']?


// SOAL 15 
// Bagaimana cara mencetak semua elemen dalam array [1, 2, 3] ke konsol satu per satu?











    





