# JQuery

**jQuery** adalah library JavaScript ringan yang mengusung filosofi "_write less, do more_".

Menyederhanakan tugas JavaScript yang rumit seperti:
- Manipulasi DOM
- AJAX calls
- Event handling, animasi, dll

## Mengapa JQuery

Library JavaScript **terpopuler dan sangat fleksibel**.
<details>
<summary>...</summary>
AHEM react AHEM
<br />
</details>

Digunakan oleh perusahaan besar seperti:
- Google
- Microsoft
- IBM
- Netflix

## Kompabilitas Antar-Browser

JQuery dirancangn agar berjalan konsisten di semua browser utama (Chrome, Firefox, Edge, Safari, dll)

## Cara Menggunakan JQuery

1. Unduh library JQuery:
   - Versi Produksi
   - Versi Pengembangan
2. Gunakan dari CDN:
   - Mendukung cache dan lokasi server terdekat
   - Contoh: Google CDN

## Sintaks Dasar JQuery

```javascript
$(selector).action();
```

- $ → mendefinisikan jQuery
- (selector) → memilih elemen HTML
- .action() → metode yang dijalankan

contoh:
```javascript
<script>
  $(document).ready(function(){
    $("p").hide();
  });
</script>
```
- $(this).hide() – menyembunyikan elemen saat ini.
- $("p").hide() – menyembunyikan semua elemen `<p>`.
- $(".test").hide() – menyembunyikan semua elemen dengan class test.
- $("#test").hide() – menyembunyikan elemen dengan ID test.

## Event Document Ready

Menjalankan jQuery hanya setelah dokumen selesai dimuat

berikut codenya:
```javascript
$(document).ready(function(){
  // jQuery code
});
```

```javascript
$(function(){
  // jQuery code
});
```

## JQuery GET Methods

Untuk mengambil nilai dari elemen:

- `text()` – isi teks.
- `html()` – isi termasuk tag HTML.
- `val()` – nilai dari input form.
- `attr()` – atribut HTML (contoh: `src`, `href`).

## JQuery SET Methods

Untuk mengubah/mengisi elemen, Metode yang sama: `text()`, `html()`, `val()`, dan `attr()` juga bisa untuk menetapkan nilai baru.

## Menambahkan Konten(Append)

- `append()` – tambahkan ke akhir elemen terpilih.
- `prepend()` – tambahkan ke awal elemen terpilih.
- `after()` – tambahkan setelah elemen.
- `before()` – tambahkan sebelum elemen.