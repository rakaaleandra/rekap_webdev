# CSS (Cascading Style Sheets)

## Apa itu CSS

**CSS** adalah bahasa style sheet yang digunakan untuk menggambarkan presentasi dari dokumen HTML atau XML. Memisahkan konten dari presentasi visual.

## Pentingnya CSS

- Mengatur tampilan halaman web dan meningkatkan pengalaman pengguna
- Menghemat waktu: Satu file CSS bisa mengatur banyak halaman sekaligus.
- Memungkinkan pemisahan struktur HTML dengan gaya tampilan.

## Basic Syntax

![CSS_Basic](/assets/Materi_3/CSS_Basic.png)

## Jenis CSS

- **Internal CSS**: Dalam HTML, ditulis dalam tag `<style>` dibagian `<head>`
- **External CSS**: File `.css` terpisah, dihubungkan dengan tag `<link>` pada elemen `<head>`
- **Inline CSS**: Langsung dalam elemen HTML, melalui atribut `style`

## Selector CSS

- **Element Selector**: Target berdasar nama tag HTML, contoh: `p`, `h1`, dll.
- **Class Selector**: Target berdasarkan class, menggunakan titik(`.`), contoh: `.header`
- **ID Selector**: Target berdasarkan ID, menggunakan pagar(`#`), contoh: `#header`

Contoh CSS:

```css
/* Element Selector */
p {
    color: red;
}

/* Class Selector */
.highlight{
    font-size: 20px;
}

/* ID Selector */
#Header{
    text-align: center;
}
```

## Properti Umum CSS

- `color`: Warna teks.
- `font-size`: Ukuran font.
- `background`-color: Warna latar belakang.
- `margin`: Jarak luar elemen.
- `padding`: Jarak dalam elemen (dari konten ke batas elemen).

## CSS Box Model

Tiap elemen kotak terdiri dari:
- Content
- Padding
- Border
- Margin

![Box](/assets/Materi_3/Box.png)
![BoxModel](/assets/Materi_3/BoxModel.png)
![BoxWidth](/assets/Materi_3/BoxWidth.png)

Contoh:
```css
div {
    background-color: lightgrey;
    width: 300px;
    height: 180px;
    border: 15px solid maroon;
    padding: 50px;
    margin: 20px;
}
```

## CSS Layout Techniques

- **Float**: Elemen melayang kiri/kanan, konten lain mengalir di sekitarnya.
- **Position**: Posisi elemen relatif, absolut, tetap (fixed), atau sticky.
- **Flexbox**: Layout satu dimensi yang memudahkan perataan elemen.
- **Grid**: Layout dua dimensi (baris & kolom) yang sangat fleksibel.

## Transition dan Animation

- **Transitions**: Perubahan properti secara halus dalam durasi tertentu (misal: hover).
- **Animations**: Perubahan kompleks dengan definisi `@keyframes`, dapat membuat efek seperti fade, slide, rotate.

## Responsive Web Design (RWD)

Menyesuaikan tampilan agar optimal di berbagai ukuran layar. Meta tag viewport untuk inisialisasi:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Manfaat:
- Menurunkan bounce rate.
- Meningkatkan SEO.
- Menyesuaikan pengalaman pengguna di perangkat berbeda.

## CSS Frameworks

Framework kuat dengan komponen kustom dan grid responsif. Keuntungan:
  - Mempercepat pengembangan.
  - Konsistensi tampilan.
  - Memudahkan desain responsif.

- Bootstrap: Framework populer dengan komponen siap pakai dan sistem grid.
  
- Tailwind: Framework populernya menyaingi Bootstrap.