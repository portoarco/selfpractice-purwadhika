// Exercise 1
/*
Minta input angka dan tampilkan apakah angka tersebut genap atau ganjil.
Petunjuk: gunakan % dan if else.
*/

let inputAngka:number = 12;

if(inputAngka %2 === 0){
  console.log(`${inputAngka} adalah GENAP`);
} else {
  console.log(`${inputAngka} adalah GANJIL`);
}


// Exercise 2
/*
Gunakan for loop untuk mencetak angka 1 sampai 10.
*/

let inputAngkaa:number = 10;

for(let index = 1; index <= inputAngkaa; index++){
  console.log(index);
}

// Exercise 3
/*
Minta input n, jumlahkan semua angka dari 1 sampai n.
Contoh: n = 5 → 15
*/

let inputNumber:number = 5;
let sumNumber:number = 0;

for(let i:number = 0; i <= inputNumber; i++){
  console.log(i);
  sumNumber = sumNumber + i;
}

console.log(sumNumber);



// Exercise 4
/*
Input nilai ujian 0–100, tampilkan huruf nilai: A, B, C, D, E.

Contoh:

>= 80 → A

70–79 → B

60-69 : C

50-59: D
...

< 50 → E
*/

let inputNilai = 50;
if(inputNilai >= 80){
  console.log("Nilai Anda A");
} else if(inputNilai > 70 && inputNilai < 79){
  console.log("Nilai Anda B");
} else if(inputNilai > 60 && inputNilai < 69){
  console.log("Nilai Anda C");
} else if(inputNilai > 50 && inputNilai < 59){
  console.log("Nilai Anda D");
} else{
  console.log("Nilai Anda E");
}


// Exercise 5
/*
Tukar isi dua variabel a dan b tanpa membuat variabel baru.
Petunjuk: gunakan aritmatika atau array destructuring.
*/



// Exercise 6
/*
Input tahun, tampilkan apakah tahun itu kabisat atau tidak.

Logika:

Kabisat jika tahun habis dibagi 4

Kecuali juga habis dibagi 100

Kecuali lagi jika habis dibagi 400
*/


// Exercise 7
/*
Input angka n, hitung faktorialnya (n!) dengan while.
Contoh: 5! = 120
*/


// Exercise 8
/*
Cetak deret Fibonacci sebanyak n angka.
Contoh untuk n = 7: 0 1 1 2 3 5 8
*/


// Exercise 9
/*
Input angka, jumlahkan setiap digitnya.
Contoh:
Input: 1234
Output: 1 + 2 + 3 + 4 = 10
*/

// Exercise 10
/*
Cek apakah sebuah angka n adalah bilangan prima.
Contoh:

7 → prima

8 → bukan
*/


// Exercise 11
/*
Soal: Cetak pola seperti ini dengan n = 5:

*
**
***
****
*****

*/


// Exercise 12
/*
Soal: Cek apakah string yang dimasukkan adalah palindrome (sama dibaca dari depan dan belakang).
Contoh:

"katak" → palindrome

"mobil" → bukan

*/




// Exercise 13
/*
Soal: Input 3 angka, tampilkan angka terbesar.

*/


// Exercise 14
/*
Soal: Diberikan array let fruits = ["apel", "pisang", "jeruk"]. Cetak semua elemen menggunakan loop.

*/

// Exercise 15
/*
Soal: Diberikan array angka, jumlahkan semuanya.

let numbers = [5, 10, 15, 20]; // Output: 50

*/



// Exercise 16
/*
Soal: Hitung berapa kali angka tertentu muncul dalam array.
Contoh:

let data = [1, 2, 3, 2, 4, 2];
angka dicari: 2 → output: 3 kali

*/


// Exercise 17
/*
Soal: Buat array baru berisi hanya angka genap dari array awal.

*/

// Exercise 18
/*
Soal: Buat fungsi bernama tambah(a, b) yang mengembalikan hasil a + b.

*/

// Exercise 19
/*
Soal: Buat fungsi isOdd(n) yang mengembalikan true jika n ganjil.

*/

// Exercise 20
/*
Soal: Buat fungsi faktorial(n: number): number yang menghitung faktorial n.

*/


// Exercise 21
/*
Soal: Buat fungsi isPrime(n) untuk mengecek apakah n adalah bilangan prima.

*/

// Exercise 22
/*
Soal: Buat fungsi gabungDanUrut(arr1, arr2) yang:

Menggabungkan dua array angka

Mengurutkannya dari kecil ke besar
Tanpa menggunakan .sort()

*/


// Exercise 23
/*
Soal: Buat fungsi isValidPassword(pw: string): boolean yang memeriksa apakah password:

Minimal 8 karakter

Mengandung huruf dan angka

Tidak mengandung spasi

*/


// CHALLENGE CODE 
/*
📝 Deskripsi Masalah:
Kamu diminta membuat program analisis nilai siswa untuk sebuah bimbel privat. Setiap siswa memiliki:
* Nama
* Nilai (dalam array)
* Status aktif (boolean)

Program harus melakukan:
1. Menampilkan semua siswa yang aktif.
2. Menghitung rata-rata nilai masing-masing siswa.
3. Memberikan predikat berdasarkan rata-rata:
    A: 85–100
    B: 70–84
    C: 55–69
    D: <55
4. Menentukan siapa siswa dengan nilai rata-rata tertinggi.
5. Semua proses dilakukan melalui function-function terpisah.

🧠 Petunjuk:
1. Gunakan array of objects untuk menyimpan data siswa.
2. Gunakan loop untuk memproses seluruh data.
3. Gunakan function untuk:
    Menghitung rata-rata
    Menentukan predikat
    Menentukan siswa terbaik
    Gunakan conditional untuk predikat dan status aktif.

📥 Contoh Input:
const students = [
  { name: "Andi", grades: [90, 80, 85], isActive: true },
  { name: "Budi", grades: [60, 70, 75], isActive: false },
  { name: "Citra", grades: [88, 92, 91], isActive: true },
  { name: "Dina", grades: [40, 55, 50], isActive: true }
];

📤 Contoh Output:
Analisis Siswa Aktif:

Nama: Andi
Rata-rata: 85
Predikat: A

Nama: Citra
Rata-rata: 90.33
Predikat: A


Siswa dengan nilai tertinggi: Citra (90.33)

*/ 



