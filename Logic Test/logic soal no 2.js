//meginisiasi variabel 'array'
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//menginisiasi variabel 'arrayLength' dengan nilai dari panjang array yang ada di variabel 'array' untuk membaca panjang array original (sebelum dilakukan perubahan/modifikasi)
var arrayLength = array.length;

//melakukan for loops untuk menampilkan array dalam bentuk barisan dengan menggunakan panjang array awal sebagai syarat kondisi loop
for (var i = 0; i <= arrayLength; i++) {
    //menampilkan isi 'array' dan melakukan join agar array ditampilkan dalam 1 baris dan dipisah menggunakan space (" ")
    console.log(array.join(" "));

    //menghilangkan elemen pertama dari array (elemen dengan index 0)
    array.shift();
}