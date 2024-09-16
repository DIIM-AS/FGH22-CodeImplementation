function divideAndSort(deretAngka) {
    // Ubah deret angka menjadi string dan pisahkan berdasarkan angka '0'
    let angkaArray = deretAngka.toString().split('0');

    // Array untuk menyimpan hasil setelah sorting
    let hasilArray = [];

    // Proses setiap elemen dalam array
    for (let i = 0; i < angkaArray.length; i++) {
        // Ubah elemen menjadi array dari digit-digit angka, urutkan, lalu gabungkan kembali
        let sortedAngka = angkaArray[i].split('').sort().join('');
        
        // Simpan hasil yang sudah diurutkan ke array hasil
        hasilArray.push(sortedAngka);
    }

    // Gabungkan semua elemen array hasil menjadi satu string tanpa pemisah
    let hasilAkhir = hasilArray.join('');

    // Ubah kembali ke integer dan kembalikan hasilnya
    return parseInt(hasilAkhir, 10);
}

// Contoh penggunaan
let hasil = divideAndSort(5956560159466056);
console.log(hasil); // Output: 55566914566956
