# Zoén | Asisten Edukasi Finansial (versi modular 1.1)

Proyek ini dipecah dari satu file HTML menjadi beberapa file agar lebih mudah diedit. Markup, isi CSS, materi, aturan pencocokan, dan alur UI dipindahkan tanpa sengaja mengubah isi aplikasinya.

## Cara menjalankan

Gunakan server lokal atau hosting web. Karena JavaScript sekarang memakai `import`/`export`, jangan membuka `index.html` langsung lewat alamat `file://`.

- VS Code: jalankan dengan ekstensi Live Server.
- Python: dari folder proyek jalankan `python -m http.server 8000`, lalu buka `http://localhost:8000`.
- Hosting: unggah seluruh isi folder proyek dengan struktur folder tetap utuh, lalu buka `index.html`.

## Peta file

- `index.html`: kerangka halaman dan elemen UI.
- `css/styles.css`: seluruh gaya tampilan.
- `js/main.js`: titik masuk aplikasi.
- `js/ui/chat-ui.js`: elemen chat, bubble, indikator berpikir, tombol topik, reset, dan input.
- `js/core/answer-engine.js`: orkestrasi respons, pemanggilan intent, pencarian materi, dan fallback.
- `js/core/intent.js`: klasifikasi sapaan, small talk, ucapan terima kasih, pertanyaan lanjutan, dan pertanyaan biasa.
- `js/core/conversation.js`: memori percakapan sementara selama halaman terbuka, termasuk topik terakhir.
- `js/core/response-style.js`: variasi respons kasual dan pembuka penjelasan edukatif.
- `js/core/matcher.js`: pencocokan kata kunci, toleransi typo, dan pemeringkatan topik.
- `js/core/normalization.js`: normalisasi teks, variasi huruf berulang, jarak edit, dan pencocokan frasa.
- `js/data/normalization-data.js`: kamus singkatan/typo dan stopwords. Kata ganti informal seperti `gua` dan `lu` dipertahankan agar nuansa percakapan tidak berubah.
- `tests/conversation.test.js`: pengujian otomatis untuk sapaan, small talk, pencarian materi, typo, dan konteks lanjutan.
- `js/data/knowledge.js`: menggabungkan seluruh kelompok materi.
- `js/data/knowledge/*.js`: 14 kelompok materi yang dipisah berdasarkan kelompok modul pada file asli.

## Bagian yang biasanya diedit

- Mau ubah warna, jarak, ukuran, atau animasi: `css/styles.css`.
- Mau ubah tulisan di halaman atau susunan komponen: `index.html` dan `js/ui/chat-ui.js`.
- Mau menambah atau memperbaiki materi: file yang sesuai di `js/data/knowledge/`.
- Mau menambah singkatan/typo yang dikenali: `js/data/normalization-data.js`.
- Mau mengubah cara sistem memahami/mencocokkan pertanyaan: `js/core/normalization.js`, `js/core/intent.js`, dan `js/core/matcher.js`.
- Mau mengubah cara Zoén mengingat topik yang sedang dibahas: `js/core/conversation.js`.
- Mau mengubah gaya bahasa atau variasi jawaban: `js/core/response-style.js`.
- Mau mengubah alur utama pemilihan jawaban: `js/core/answer-engine.js`.
- Jalankan pengujian setelah mengedit logika: `npm test` (atau `node --test`).

## Catatan pemeliharaan

File materi dibagi mengikuti 14 kelompok modul yang sudah ada pada sumber. `knowledge.js` menggabungkan semua kelompok dalam urutan aslinya, jadi jangan menghapus import atau mengubah urutannya kecuali memang disengaja.

Identitas yang tertulis di sumber asli, termasuk nama **Zoén**, dipertahankan. Materi pengetahuan tidak diubah dalam pembaruan mesin percakapan ini.

## Batas kerja mesin percakapan

Zoén tetap berjalan lokal tanpa API atau server eksternal. Mesin intent, normalisasi, matcher, dan memori percakapan membuat pola interaksi lebih toleran, tetapi ini bukan model bahasa generatif. Memori konteks hanya hidup selama halaman terbuka dan akan dihapus saat halaman dimuat ulang atau tombol **Topik Utama** ditekan.
