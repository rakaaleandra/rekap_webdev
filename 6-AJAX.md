# AJAX (Asynchronous JavaScript & XML)

AJAX adalah teknik untuk **bertukar data dengan server** dan memperbarui sebagian halaman web tanpa harus me-reload seluruh halaman.

Kemampuan AJAX:
- Membaca data dari server setelah halaman dimuat
- Memperbarui sebagian halaman secara dinamis.
- Mengirim data ke server secara background (tanpa mengganggu pengalaman pengguna).

Contoh aplikasi yang menggunakan AJAX:
- Gmail
- Google Maps
- YouTube
- Facebook tabs

## Kenapa AJAX dengan jQuery?

jQuery menyediakan metode khusus untuk AJAX yang mempermudah penggunaannya.

Native JavaScript memiliki perbedaan implementasi AJAX antar-browser → jQuery menyederhanakan dengan sintaks seragam.

Dengan jQuery, fungsi AJAX dapat ditulis hanya dalam satu baris kode.

## Bagaimana Cara AJAX Berkerja

![AJAX_Works](/assets/Materi_6/AJAXWorks.png)

## Metode jQuery `load()`

Metode ini memuat data dari server dan menampilkannya di elemen yang dipilih. pada metode ini hanya melakukan tipe `GET` pada file yang dituju. Berikut sintaksnya

```javascript
$(selector).load(URL, data, callback);
```

contoh:
```javascript
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt");
  });
});
```

## Menggunakan `$.ajax()`

Metode `$.ajax()` memberikan kontrol penuh atas permintaan AJAX.

Cocok untuk permintaan kompleks, misalnya dengan pengaturan headers, metode request, callback, dll.

contoh:
```javascript
$("button").click(function(){
  $.ajax({
    url: "demo_test.txt",
    success: function(result){
      $("#div1").html(result);
    }
  });
});
```