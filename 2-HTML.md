# HTML (Hypertext Markup Language)

## Apa itu HTML?

HTML adalah bahasa markup standar untuk membuat dan menyusun halaman web

Tujuan utamanya adalah untuk **mendefinisikan struktur dan konten dokumen** yang ditampilkan di browser web.

## Struktur dasar HTML

Dokumen HTML dimulai dengan deklarasi `<!DOCTYPE html>`, lalu diikuti elemen:
- `<html>`: elemen utama pembungkus.
- `<head>`: berisi informasi metadata.
- `<body>`: berisi konten halaman.

![HTML](/assets/HTMLStructure.png)

### Elemen Dalam `<head>`

- `<title>`: Judul halaman.
- `<meta>`: Pengaturan seperti karakter encoding, deskripsi, kata kunci.
- `<meta `name="viewport">: Responsif untuk perangkat mobile.
- `<link>` / `<style>`: Untuk CSS.
- `<script>`: Untuk menyisipkan JavaScript.
- `<link `rel="icon">: Favicon.
- Resource eksternal lainnya juga dapat ditambahkan di sini.

### Elemen, Tag, dan Atribut

- **Elemen**: Struktur HTML seperti `<p>`, `<a>`, dll.
- **Tag**: Bagian pembuka dan penutup elemen, contoh `<p>` dan `</p`>.
- **Atribut**: Memberikan informasi tambahan, misal href, src, alt.

![Element](/assets/Element.png)

### Text Formatting

- **Heading**: `<h1>` sampai `<h6>` untuk judul dengan tingkatan berbeda.
- **Paragraph**: `<p>` untuk paragraf.
- **Bold**: `<strong>`, Italic: `<em>`.

### Hyperlink

- Membuat link: `<a href="URL">Teks Link</a>`
- Link External: `href` berisi URL penuh
- Link Internal: `href` ke file lokal, misalnya `about.html`

### Lists

**Ordered List** (berurutan): `<ol>` dengan item `<li>`. Berikut contohnya:

![ol](/assets/ol_li.png)
![ol](/assets/ol_li_hasil.png)

**Unordered List** (tak berurutan): `<ul>` dengan item `<li>`. Berikut contohnya:

![ul](/assets/ul_li.png)
![ul](/assets/ul_li_hasil.png)

### Description LIst

- `<dl>`: Awal daftar.
- `<dt>`: Term (judul item).
- `<dd>`: Deskripsi dari item tersebut.

Berikut contohnya:
![dl](/assets/dl.png)
![dl_hasil](/assets/dl_hasil.png)

### Image

Menggunakan tag `<img>`. image memiliki atribut penting supaya berjalan yaitu:
- `src`: Lokasi gambar.
- `alt`: Teks alternatif.
- `width`, height: Ukuran (opsional).

### Audio

Tag: `<audio>` untuk menyematkan file audio.

Atribut penting (meski teksnya korup di dokumen): `src`, `controls`, dll.

### Vidio

Tag: `<video>` untuk menyematkan file video.

Seperti audio, menggunakan `src`, `controls`, dan format video yang didukung.

### Table

Pembuatan tabel:
- `<table>`: Tabel utama.
- `<tr>`: Baris.
- `<th>`: Header kolom.
- `<td>`: Data dalam sel.

Contoh:
![table](/assets/table.png)
![table_hasil](/assets/table_hasil.png)

### iframe

Menyisipkan konten eksternal seperti video, peta, atau dokumen dari situs lain. Atribut yang ada:
- `src`: URL konten yang disisipkan.
- Atribut tambahan dapat mengatur tampilan dan batas.