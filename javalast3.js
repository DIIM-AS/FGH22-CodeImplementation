function FazzFood(harga, voucher, jarak, pajak) {
    let potongan = 0;
    let biayaAntar = 5000;
    let pajakHarga = pajak ? harga * 0.05 : 0;

    // Pengecekan kode voucher
    if (voucher === 'FAZZFOOD50') {
        if (harga >= 50000) {
            potongan = harga * 0.5;
            if (potongan > 50000) {
                potongan = 50000;
            }
        }
    } else if (voucher === 'DITRAKTIR60') {
        if (harga >= 25000) {
            potongan = harga * 0.6;
            if (potongan > 30000) {
                potongan = 30000;
            }
        }
    }

    // Penghitungan biaya antar
    if (jarak > 2) {
        biayaAntar += (jarak - 2) * 3000;
    }

    // Penghitungan subtotal
    let subTotal = harga - potongan + biayaAntar + pajakHarga;

    // Output hasil
    console.log(`Harga: ${harga}`);
    console.log(`Potongan: ${potongan}`);
    console.log(`Biaya Antar: ${biayaAntar}`);
    console.log(`Pajak: ${pajakHarga}`);
    console.log(`SubTotal: ${subTotal}`);
}

// Contoh penggunaan
FazzFood(75000, 'FAZZFOOD50', 5, true);

// Output:
// Harga: 75000
// Potongan: 37500
// Biaya Antar: 14000
// Pajak: 3750
// SubTotal: 55250
