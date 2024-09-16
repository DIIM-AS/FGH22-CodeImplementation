function cekPalindrom(kata) {
    // Mengubah kata menjadi huruf kecil semua untuk memastikan pengecekan tidak case-sensitive
    kata = kata.toLowerCase();

    // Membalikkan kata
    let kataTerbalik = kata.split('').reverse().join('');

    // Mengecek apakah kata terbalik sama dengan kata asli
    if (kata === kataTerbalik) {
        return 'palindrom';
    } else {
        return 'bukan palindrom';
    }
}

// Contoh penggunaan
let hasil = cekPalindrom('katak');
console.log(hasil); // Output: palindrom
