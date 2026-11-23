# Trazeel | Local-First Trading Workspace

Folder ini berisi aplikasi Trazeel lengkap untuk dijalankan sebagai website statis. Login, akun, jurnal, profil, statistik, dan notifikasi disimpan di browser/perangkat, tanpa layanan autentikasi server.

## Isi folder

- `index.html` : struktur halaman dan komponen aplikasi.
- `style.css` : seluruh tampilan, termasuk login, dashboard, jurnal, statistik, profil, dan panel akun lokal.
- `script.js` : fungsi dashboard, jurnal, statistik, psikologi, navigasi, dan notifikasi.
- `local-auth.js` : pendaftaran/login lokal, isolasi data per akun, batas tiga akun, izin Quick Switch, serta Backup Vault.
- `manifest.webmanifest` : metadata instalasi aplikasi web.
- `logo-trazeel.png` : logo resmi yang dipakai pada splash screen, welcome, header, favicon, dan ikon instalasi.
- `service-worker.js` : cache app-shell agar aplikasi dapat dibuka offline setelah kunjungan online pertama.

## Menjalankan aplikasi

1. Upload seluruh isi folder ini ke direktori website yang sama. Jangan pisahkan file-file di atas.
2. Buka website melalui HTTPS. Untuk pengujian lokal, jalankan server lokal seperti Live Server atau `python -m http.server` lalu buka alamat `localhost`.
3. Buat akun menggunakan nama, ID akun, dan password. ID akun bersifat lokal pada browser/perangkat ini, bukan username global. Bila sudah punya file backup, pilih **Pulihkan akun dari backup** pada layar Welcome sebelum login.
4. Selesaikan Account Setup. Setelah itu, Trazeel akan membuka dashboard.

Jangan membuka aplikasi langsung dengan alamat `file://` untuk penggunaan normal. Web Crypto dan Service Worker memerlukan secure context seperti HTTPS atau localhost.

## Akun dan perpindahan akun

- Maksimal tiga akun lokal pada satu penyimpanan browser.
- Password tidak disimpan sebagai teks biasa. Browser menyimpan salt dan verifier PBKDF2-SHA-256.
- Data user, jurnal, dan profil dipisahkan per akun. Notifikasi disimpan pada browser yang sama dan dapat dihapus satu per satu atau sekaligus.
- Quick Switch tidak aktif sampai izin diberikan untuk akun tersebut. Izin dapat dicabut dari Profile.
- Akun tidak dicari atau disinkronkan ke server. Untuk memindahkan akun ke perangkat lain, gunakan Backup Vault atau tombol pemulihan di layar Welcome. Setelah pemulihan di perangkat baru, login dengan ID/password backup dan berikan ulang izin Quick Switch di perangkat tersebut.

## Backup dan pemulihan

Di halaman Profile, bagian Backup Vault menyediakan tiga tindakan:

- **Pilih lokasi backup**: pada browser yang mendukung File System Access API, pilih folder dan aktifkan pembaruan file `Trazeel-Backup.json` setelah perubahan data.
- **Backup sekarang**: membuat atau memperbarui backup. Jika pemilihan folder tidak tersedia atau izin folder tidak aktif, browser mengunduh file JSON.
- **Pulihkan backup**: impor file JSON Trazeel. Pemulihan menggantikan data akun lokal saat ini pada browser tersebut.

**Penting:** file backup JSON tidak dienkripsi. File menyertakan data jurnal/profil/foto serta verifier password dan salt, bukan password asli. Data aplikasi di penyimpanan browser juga bukan penyimpanan terenkripsi. Simpan file backup secara pribadi dan jangan membagikannya.

Browser atau perangkat yang menghapus data situs dapat menghapus akun dan jurnal lokal. Buat backup secara berkala. Lupa password tidak dapat dipulihkan melalui email karena tidak ada server akun atau reset password.

## Mode offline dan batasan

Service Worker menyimpan file aplikasi setelah website berhasil dibuka pertama kali melalui HTTPS/localhost. Fitur offline tidak berarti data tersinkron antard perangkat. Performa dan dukungan pemilihan folder berbeda antar-browser; unduh/pulihkan JSON tersedia sebagai jalur cadangan.

Trazeel ini adalah aplikasi frontend lokal. Tidak ada API/server yang menerima atau menyimpan data pengguna.


## Pembaruan antarmuka

- Ikon Feel dan ikon hapus menggunakan SVG dengan ukuran serta stroke yang konsisten.
- Notifikasi bisa dihapus satu per satu atau sekaligus setelah konfirmasi.
- Pilihan tema System, Dark, dan Light diterapkan ke kartu, formulir, modal, navigasi, profil, akun lokal, serta panel notifikasi.
- Pilihan Bahasa Indonesia atau English diterapkan ke label, validasi, pesan, notifikasi, tanggal, dan format angka.
- Cache offline diperbarui ke versi baru agar browser mengambil aset antarmuka terbaru.

## Zoén | Asisten edukasi finansial

Zoén sudah tersedia sebagai menu tersendiri pada bottom navigation Trazeel. Implementasinya tetap dipisahkan di folder `dashboard-trade/zoen/` dan ditampilkan melalui iframe agar file aplikasi utama tidak bercampur dengan file chatbot.

Struktur Zoén tetap modular:

- `zoen/index.html` dan `zoen/css/styles.css` untuk tampilan chatbot.
- `zoen/js/ui/chat-ui.js` untuk antarmuka percakapan.
- `zoen/js/core/` untuk intent, matcher, normalisasi, konteks percakapan, gaya respons, dan answer engine.
- `zoen/js/data/` untuk normalisasi dan seluruh knowledge base.

Seluruh file HTML, CSS, dan JavaScript Zoén dimasukkan ke cache Service Worker agar halaman chatbot dan modul pengetahuannya tersedia setelah app-shell berhasil di-cache pada kunjungan pertama.

Untuk mengedit Zoén, buka file di folder `dashboard-trade/zoen/` tanpa perlu mengubah `script.js` Trazeel.
