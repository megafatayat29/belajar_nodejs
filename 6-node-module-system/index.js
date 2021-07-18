// const nama = 'Mega'
// const cetakNama = (nama) => `Hi nama saya ${nama}`;
// console.log(cetakNama(nama));

// const cetakNama = require('./coba');
const coba = require('./coba');
// console.log('Halo WPU');
console.log(
    coba.cetakNama('Maudy Ayunda'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);