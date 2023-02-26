function printDigitValue(angka) {
    var nilaiTempat = 1;
    var array = [];
  
    while (angka > 0) {
        //mengambil digit terkecil menggunakan % sebagai modulo operator
        var digit = angka % 10;

        //menghitung value dari digit yang telah diekstrak pada baris 10 (the value of a digit)
        var digitValue = digit * nilaiTempat;

        //memasukkan ke dalam array sebagai tempat penyimpanan sementara sebelum ditampilkan sesuai soal
        array.push(digitValue);

        //menaikkan value nilai tempat (satuan menjadi puluhan, puluhan menjadi ratusan, dst) dengan cara mengkali 'nilaiTempat' dengan angka 10 sekaligus mengganti value 'nilaiTempat' dengan menggunakan *= operator
        nilaiTempat *= 10;

        /*menghilangkan digit terkecil dari nilai tempat terkecil (satuan) dengan cara membagi dengan 10 sekaligus meng-assign value 'angka' yang baru menggunakan /= operator 
        sehingga nilai tempat seluruh digit akan turun 1 tingkat (bergeser ke kanan: digit yang sebelumnya di nilai tempat ribuan menjadi ratusan, ratusan menjadi puluhan, 
        puluhan menjadi satuan dan digit yang sebelumnya berada di nilai tempat satuan menjadi berada di nilai tempat persepuluhan karena telah menjadi angka di belakang koma (desimal) */
        angka /= 10;

        //membulatkan ke bawah bentuk bilangan 'angka' ke integer terdekat yang sebelumnya berbentuk desimal
        angka = Math.floor(angka);
    }
  
    //menampilkan array seperti arahan dari task test (descending)
    for (var i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  }

  printDigitValue(9327421);