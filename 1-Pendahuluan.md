# Konsep Web Programming

WWW kepanjangan dari **World Wide Web** adalah **sistem informasi di internet yang menghubungkan dokumen melalui hypertext**, memungkinkan navigasi dari satu dokumen ke dokumen lainnya

Komponen utama :
- **Web Pages**             : Halaman yang memuat teks, gambar, dan elemen interaktif
- **Multimedia Content**    : Berupa gambar, audio, vidio, dan animasi
- **Documents**             : File digital, seperti PDF, Excel, dan presentasi

## Web Resources

- **Scripts dan Programs**  : Program yang dijalankan di sisi server (_server-side_) atau sisi klien (_client-side_) untuk meningkatkan fungsionalitas
- **Data Feeds dan APIs**   : Menyediakan data terstruktur dan layanan antar aplikasi
- **Web Services**          : Sistem _software_ untuk interaksi antar mesin menggunakan protokol standar

## Web Programming

Proses membuat dan memelihara _aplikasi web dinamis_ menggunakan berbagi bahasa pemrograman, framework, dan teknologi

Tujuan Utama:

- Menciptakan web yang interaktif dan dinamis
- Mengakses dan memanipulasi data dari basis data
- Menjamin fungsi, performa, dan keamanan aplikasi web

## Key Components

- Client-side (**Front-end**) Programming:
  - Bahasa : HTML, CSS, JavaScript
  - Fokus dalam tampilan
- Server-side (**Back-end**) Programming:
  - Bahasa : PHP, Python, Ruby, dll.
  - Menangani permintaan, proses data, dan menghasilkan konten dinamis

## URI dan URL

**URI** (Uniform Resource Identifier): Superset dari URN dan URL. mengidentifikasi resource dan membedakan setiap resource berdasarkan nama, lokasi, atau keduanya, contoh <code>urn:isbn:0451450523</code>

**URL** (Uniform Resource Locator): tipe URI spesifik yang menyertakan alamat dan protokol akses, contoh <code>https://www.example.com/index.html</code>

elemen sintaksis URL:
- **Scheme** : protokol yang digunakan untuk mengakses resource, contoh **HTTP**, **HTTPS**
- **Authority** : Komponen ini bersifat opsional, diawali dengan dua garis miring dan diakhiri dengan satu garis miring, tanda tanya, atau tanda pagar. Berikut 3 sub-komponennya:
  - **userinfo** : berisi username dan password yang dipisahkan oleh titik dua.
  - **Host** : terdiri dari alamat IP atau nama yang terdaftar, contoh <code>www.google.com</code>
  - **Port** : protokol yang digunakan untuk menghubungkan server. Diawali dengan titik dua.
- **Path** : Jalur berisi urutan segmen data yang menunjukkan lokasi resource dalam struktur direktori
- **Query** : Komponen yang bersifat opsional, berisi string query data non-hierarkis. Query seringnya berupa string pasangan key=value. Komponen ini diawali dengan tanda tanya. Query berfungsi untuk **mengirimkan data tambahan ke server**
- **Fragment** : Komponen opsional ini mencakup pengidentifikasi fragmen yang memberikan arah ke resource sekunder. Contoh <code>https://example.org/test/test1?search=test-question<bold>#part2</bold></code>

![URL](/assets/Materi_1/URL.png)

## Port yang Mendunia

- **Port 80**: HTTP - Menampilkan halaman web
- **Port 443**: HTTPS - Komunkasi aman melalui HTTP
- **Port 25**: SMTP - Pengeriman email
- **Port 22**: SSH - Login jarak jauh yang aman dan transfer file
- **Port 21**: FTP - Transfer file antara klien dan server

## HTTP & HTTPS

**HTTP** (Hypertext Transfer Protocol): Protokol komunikasi antar klien dan server dalam pengiriman halaman web.

![HTTP](/assets/Materi_1/HTTP.png)

**HTTPS**: Versi aman dari HTTP, dilindungi dengan SSL/TLS.

![HTTPS](/assets/Materi_1/HTTPS.png)

## HTTP Response Code

![HTTP Response Code](/assets/Materi_1/HTTPStatusCodes.png)

- 2XX
  - **200**: Permintaan berhasil, dan server mengembalikan data yang diminta.
- 3XX
  - **301**: **(Moved Permanently)** Resource telah dipindahkan secara permanen ke URL baru.
  - **302**: **Found (Temporary Redirect)** Sementara dialihkan ke URL lain, tapi URL asli masih bisa digunakan di masa depan.
  - **304**: **(Not Modified)** Resource belum berubah sejak terakhir kali diminta. Bisa gunakan versi cache.
- 4XX
  - **401**: **(Unauthorized)** Klien belum melakukan otentikasi atau kredensial salah.
  - **403**: **(Forbidden)** Server memahami permintaan, tapi menolak untuk memenuhinya (tidak punya izin).
  - **404**: **(Not Found)** Resource yang diminta tidak ditemukan di server.
  - **405**: **(Method Not Allowed)** Metode HTTP (GET, POST, dll) tidak diizinkan untuk resource tersebut.
- 5XX
  - **501**: **(Not Implemented)** Server tidak mengenali metode permintaan atau belum didukung.
  - **502**: **(Bad Gateway)** Server bertindak sebagai gateway/proxy dan menerima respon tidak valid dari server lain.
  - **503**: **(Service Unavailable)** Server sedang tidak tersedia (biasanya karena overload atau maintenance).
  - **504**: **(Gateway Timeout)** Server bertindak sebagai gateway dan tidak mendapatkan respons tepat waktu dari server upstream.

[< Kembali](silabus.md) [Selanjutnya >](2-HTML.md)