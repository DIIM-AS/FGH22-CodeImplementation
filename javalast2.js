function reverseWords(kalimat) {
    // Memisahkan kalimat menjadi array kata-kata
    let kataArray = kalimat.split(' ');

    // Membalikkan urutan array kata-kata
    let kataArrayTerbalik = kataArray.reverse();

    // Menggabungkan kembali array menjadi kalimat
    let kalimatTerbalik = kataArrayTerbalik.join(' ');

    return kalimatTerbalik;
}

// Contoh penggunaan
let hasil = reverseWords('Saya Makan Nasi Padang');
console.log(hasil); // Output: Padang Nasi Makan Saya
