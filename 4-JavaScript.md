# JavaScript

JavaScript adalah bahasa pemrograman tingkat tinggi yang diinterpretasikan, terutama digunakan untuk pengembangan web `client-side`(Front-end), tetapi juga digunakan di:

- Server-side (misal: Node.js)
- Aplikasi mobile
- Game development

Memungkinkan halaman web menjadi dinamis dan interaktif.

## Sejarah Singkat JavaScript

Diciptakan oleh **Brendan Eich** pada tahun 1995 di Netscape.

Awalnya dinamakan **LiveScript**, lalu diganti menjadi JavaScript untuk mengikuti popularitas Java (meskipun keduanya berbeda total).

## Sintaks dan Struktur Dasar

Mirip Java/C, tapi punya fitur khas untuk web.

Kode JavaScript dapat disisipkan  dalam HTML menggunakan tag `<script>...</script>` atau disimpan dalam file eksternal `<script src="file.js"></script>`

Setiap pernyataan diakhiri dengan tanda titik koma (`;`)

Blok kode dibungkus dengan kurung kurawal `{}`

## Penempatan Tag `<script>`

- `<head>` => Umum untuk deklarasi awal.
- `<body>` => Disarankan di akhir agar tidak menghambat tampilan awal halaman.

## Output di JavaScript

- `innerHTML` – Tulis ke elemen HTML.
- `document.write()` – Tulis langsung ke halaman (jarang digunakan sekarang).
- `window.alert()` – Munculkan kotak pesan pop-up.
- `console.log()` – Tulis ke konsol browser untuk debugging.

## Identifier JavaScript

Nama untuk variabel, fungsi, dan properti. Memiliki aturan yaitu harus diawali letter (A-Z atau a-z) atau dollar sign (`$`) atau juga underscore (`_`)

penamaannya dan memanggilnya itu sensitive(huruf besar dan huruf kecil ngaruh)

biasa memakai camelCase

## Variabel JavaScript

Digunakan untuk menyimpan data. Cara deklarasi:
- Otomatis (tanpa kata kunci)
- `var` – lama, masih digunakan
- `let` – modern, block-scoped
- `const` – nilai tetap (read-only)\

![variable](/assets/Materi_4/Variabel.png)

## Fungsi JavaScript

Blok kode yang dirancang untuk menjalankan tugas tertentu dan dipanggil saat dibutuhkan. Berikut contohnya:

```javascript
function name(parameter) {
    // code yang dieksekusi
}
```

## JavaScript Events

Event yang terjadi pada elemen HTML, seperti Klik, Hover, dan Submit. JavaScript bisa merespons peristiwa ini.

![Events](/assets/Materi_4/Events.png)

contoh:
```javascript
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
```

## Event Listener

Gunakan `addEventListener()` untuk menambahkan event handler tanpa menimpa handler lainnya.

Contoh Sintaks:
```javascript
element.addEventListener("click", myFunction);

function myFunction() {
  alert("Hello World!");
}
```

[< Kembali](silabus.md) [Selanjutnya >](5-JQuery.md)