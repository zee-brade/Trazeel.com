// Bagian materi 03. Isi objek dipertahankan dari file sumber.
export const part03 = [
{
    id: "slik-ojk-skor-kredit",
    label: "SLIK OJK (BI Checking) dan Skor Kolektibilitas Kredit",
    keys: ["slik ojk", "bi checking", "skor kredit", "kolektibilitas", "kol 1", "kol 5", "kredit macet", "riwayat kredit"],
    body: `**SLIK OJK** (Sistem Layanan Informasi Keuangan, sebelumnya dikenal sebagai *BI Checking*) adalah catatan riwayat kelancaran pembayaran kredit atau pinjaman seseorang di lembaga keuangan resmi.

Lima tingkat skor kolektibilitas kredit yang dicatat bank dan lembaga pembiayaan:
• **Kol 1 (Lancar):** Pembayaran cicilan pokok dan bunga selalu tepat waktu tanpa tunggakan.
• **Kol 2 (Dalam Perhatian Khusus / DPK):** Menunggak pembayaran cicilan antara **1 hingga 90 hari**.
• **Kol 3 (Kurang Lancar):** Menunggak pembayaran cicilan antara **91 hingga 120 hari**.
• **Kol 4 (Diragukan):** Menunggak pembayaran cicilan antara **121 hingga 180 hari**.
• **Kol 5 (Macet):** Menunggak pembayaran cicilan **lebih dari 180 hari**.

Catatan Kol 3 hingga Kol 5 membuat pengajuan KPR, kredit usaha, maupun pembiayaan di masa depan hampir pasti ditolak hingga kewajiban dilunasi dan statusnya diperbarui.`,
    example: `Banyak orang gagal disetujui KPR rumah pertama hanya karena pernah menunggak tagihan **PayLater** bernominal ratusan ribu rupiah hingga masuk status **Kol 3 atau Kol 5** di SLIK OJK. Pastikan seluruh kewajiban kecil pun selalu dibayar sebelum jatuh tempo.`,
    closing: "Apakah Anda ingin memahami bagaimana cara bank menghitung bunga cicilan seperti bunga flat, efektif, dan anuitas?",
    related: ["Sistem Bunga Pinjaman: Flat, Efektif, dan Anuitas", "Kartu Kredit dan PayLater (BNPL): Cara Kerja & Risikonya", "Manajemen Utang (Utang Produktif vs Konsumtif & Pelunasan)"]
  },
  {
    id: "bunga-flat-efektif-anuitas",
    label: "Sistem Bunga Pinjaman: Flat, Efektif, dan Anuitas",
    keys: ["bunga flat", "bunga efektif", "bunga anuitas", "floating rate", "fixed rate", "cicilan kpr", "cara hitung bunga"],
    body: `Sebelum menandatangani perjanjian kredit, memahami metode perhitungan bunganya mencegah Anda terkejut melihat sisa pokok utang yang lambat berkurang:

• **Bunga Flat:** Dihitung dari **total pokok pinjaman awal** sepanjang tenor. Nilai cicilan tetap sama setiap bulan. Umumnya dipakai pada kredit kendaraan bermotor, KTA, dan kredit barang konsumtif.
• **Bunga Efektif:** Dihitung dari **sisa pokok pinjaman** yang belum dibayar setiap bulannya. Semakin lama berjalan, porsi bunga mengecil sehingga total cicilan bulanan ikut menurun.
• **Bunga Anuitas:** Modifikasi dari bunga efektif agar **total cicilan bulanan tetap sama**, tetapi komposisinya diatur: di tahun-tahun awal porsi pembayaran didominasi oleh **bunga**, baru di tahun-tahun akhir porsi pokoknya membesar. Umum dipakai pada KPR.
• **Fixed vs Floating Rate:** *Fixed* adalah suku bunga tetap di periode awal promo, sedangkan *floating* adalah bunga mengambang mengikuti suku bunga pasar setelah masa promo berakhir.`,
    example: `Pada KPR dengan sistem **anuitas**, jika cicilan bulanan Anda Rp4.000.000 di tahun pertama, bisa jadi **Rp3.300.000-nya adalah bunga** dan hanya **Rp700.000 yang mengurangi pokok utang**. Karena itu melunasi KPR di tahun ke-2 sering terasa sisa pokoknya masih hampir utuh.`,
    closing: "Apakah Anda ingin membahas pertimbangan finansial antara menyewa rumah terlebih dahulu atau membeli rumah dengan KPR?",
    related: ["Dilema Sewa vs Beli Rumah (Rent vs Buy)", "SLIK OJK (BI Checking) dan Skor Kolektibilitas Kredit", "Rasio Kesehatan Keuangan Pribadi (Tabungan & Cicilan)"]
  },
  {
    id: "kartu-kredit-paylater",
    label: "Kartu Kredit dan PayLater (BNPL): Cara Kerja & Risikonya",
    keys: ["kartu kredit", "paylater", "bnpl", "buy now pay later", "minimum payment", "limit kredit"],
    body: `**Kartu kredit** dan **PayLater (*Buy Now Pay Later*)** pada dasarnya adalah fasilitas pinjaman jangka pendek. Jika dipakai secara disiplin, keduanya berfungsi sebagai alat bantu kelancaran arus kas; jika dipakai tanpa kendali, keduanya menjadi sumber utang berbunga tinggi.

Aturan emas agar tidak terjebak utang konsumtif:
• **Selalu Bayar Penuh (*Full Payment*) Sebelum Jatuh Tempo:** Hindari kebiasaan hanya membayar tagihan minimum (*minimum payment* 10%), karena sisa tagihan akan dikenakan bunga majemuk bulanan yang tinggi.
• **Jangan Gunakan untuk Barang di Luar Kemampuan Tunai:** Hanya gesek kartu kredit atau aktifkan PayLater apabila uang tunainya sebenarnya sudah tersedia di rekening Anda.
• **Jaga Rasio Pemakaian Limit:** Usahakan pemakaian limit bulanan berada di bawah 30% dari total plafon agar skor kredit tetap sehat.`,
    example: `Menggunakan kartu kredit untuk membayar tagihan rutin bulanan demi mendapatkan *cashback* atau poin, lalu langsung melunasinya 100% di hari yang sama dari pos anggaran bulanan, membuat Anda menikmati manfaatnya dengan **biaya bunga Rp0**.`,
    closing: "Apakah Anda ingin membahas bagaimana cara melunasi tumpukan utang konsumtif secara sistematis?",
    related: ["Manajemen Utang (Utang Produktif vs Konsumtif & Pelunasan)", "SLIK OJK (BI Checking) dan Skor Kolektibilitas Kredit", "Jebakan Lifestyle Inflation"]
  },
  {
    id: "sewa-vs-beli-rumah",
    label: "Dilema Sewa vs Beli Rumah (Rent vs Buy)",
    keys: ["sewa vs beli", "rent vs buy", "beli rumah", "ngontrak", "kpr rumah", "sewa rumah"],
    body: `Keputusan antara **menyewa (mengontrak)** atau **membeli rumah (KPR)** bukan sekadar soal gengsi, melainkan perhitungan kesiapan arus kas, jangka waktu tinggal, dan biaya peluang (*opportunity cost*).

Pertimbangan objektif sebelum memutuskan:
• **Kapan Menyewa Lebih Rasional:** Jika Anda belum memiliki dana darurat, uang muka (*DP*) masih di bawah 20%–30%, pekerjaan menuntut mobilitas pindah kota dalam < 3–5 tahun, atau biaya sewa tahunan jauh lebih murah daripada bunga cicilan KPR. Selama menyewa, selisih uangnya wajib diinvestasikan agar tidak habis terpakai.
• **Kapan Membeli Lebih Rasional:** Jika Anda berencana menetap jangka panjang (> 5–7 tahun), dana darurat sudah aman, uang muka memadai, dan total cicilan bulanan tidak melebihi **30% penghasilan bersih** (termasuk cadangan saat bunga masuk masa *floating*).`,
    example: `Jika harga rumah Rp600 juta memiliki cicilan KPR sekitar Rp4,5 juta/bulan, sementara rumah serupa bisa disewa seharga Rp1,8 juta/bulan, maka menyewa sambil menginvestasikan selisih **Rp2,7 juta/bulan** selama beberapa tahun dapat membantu Anda mengumpulkan DP lebih besar agar cicilan kelak jauh lebih ringan.`,
    closing: "Apakah Anda ingin mengenal lembaga penjaminan simpanan bank (LPS) dan dasar keamanan tabungan perbankan?",
    related: ["Penjaminan Simpanan Bank (LPS) dan Dasar Perbankan", "Sistem Bunga Pinjaman: Flat, Efektif, dan Anuitas", "Rasio Kesehatan Keuangan Pribadi (Tabungan & Cicilan)"]
  },
  {
    id: "lps-perbankan-dasar",
    label: "Penjaminan Simpanan Bank (LPS) dan Dasar Perbankan",
    keys: ["lps", "lembaga penjamin simpanan", "jaminan bank", "bunga penjaminan", "tabungan aman", "bank digital"],
    body: `Saat menyimpan dana darurat atau deposito di bank umum maupun bank digital, penting memahami aturan perlindungan dari **LPS (Lembaga Penjamin Simpanan)** agar simpanan Anda tetap aman jika bank mengalami pencabutan izin usaha.

Tiga syarat wajib (*3T*) agar simpanan dijamin LPS:
1. **Tercatat dalam Pembukuan Bank:** Simpanan Anda tercatat secara resmi di sistem perbankan.
2. **Tingkat Bunga Tidak Melebihi Bunga Penjaminan LPS:** Apabila suatu bank (termasuk bank digital) menawarkan promo bunga deposito di atas tingkat bunga penjaminan yang ditetapkan LPS, maka simpanan tersebut **tidak dijamin oleh LPS**.
3. **Tidak Melakukan Tindakan yang Merugikan Bank:** Misalnya memiliki kredit macet di bank yang bersangkutan.

Selain itu, batas maksimal nilai simpanan yang dijamin LPS adalah **Rp2 miliar per nasabah per bank**.`,
    example: `Jika tingkat bunga penjaminan LPS untuk bank umum saat ini berada di angka 4,25%, lalu sebuah bank digital menawarkan bunga deposito sebesar 7,5% per tahun, Anda perlu sadar bahwa produk tersebut memiliki **risiko tidak dijamin LPS** karena bunganya melampaui batas penjaminan.`,
    closing: "Apakah Anda ingin mengenal mekanisme gadai, leasing kendaraan, dan restrukturisasi kredit?",
    related: ["Gadai, Leasing Kendaraan, dan Restrukturisasi Kredit", "Instrumen Pasar Uang (Deposito & Reksa Dana Pasar Uang)", "Dana Darurat (Emergency Fund) dan Cara Menghitungnya"]
  },
  {
    id: "gadai-leasing-restrukturisasi",
    label: "Gadai, Leasing Kendaraan, dan Restrukturisasi Kredit",
    keys: ["gadai", "pegadaian", "leasing", "multifinance", "fidusia", "restrukturisasi kredit", "keringanan cicilan"],
    body: `Dalam pembiayaan non-bank maupun kondisi darurat likuiditas, tiga istilah ini sering ditemui:

• **Gadai:** Pinjaman jangka pendek dengan menyerahkan barang berharga (seperti emas atau kendaraan) sebagai jaminan fisik. Kelebihannya adalah proses cepat tanpa memengaruhi riwayat SLIK OJK jika barang jaminan dilelang saat gagal tebus, namun tetap ada biaya sewa modal.
• **Leasing / Perusahaan Pembiayaan (*Multifinance*):** Lembaga pembiayaan pembelian barang (umumnya kendaraan bermotor) dengan jaminan fidusia atas objek yang dibiayai.
• **Restrukturisasi Kredit:** Keringanan yang diajukan debitur kepada bank/lembaga pembiayaan saat mengalami penurunan kemampuan bayar yang sah (misalnya terkena PHK atau musibah), berupa perpanjangan tenor, penjadwalan ulang, atau penurunan suku bunga.`,
    example: `Apabila Anda mengalami musibah yang membuat arus kas terganggu sementara, **segera ajukan restrukturisasi kredit secara resmi** sebelum menunggak—daripada menghilang atau meminjam dari pinjaman online berbunga tinggi untuk menutup cicilan lama (*gali lubang tutup lubang*).`,
    closing: "Apakah Anda ingin beralih ke pengelolaan keuangan keluarga, dimulai dari manajemen keuangan pasangan dan rumah tangga?",
    related: ["Manajemen Keuangan Pasangan dan Rumah Tangga", "Manajemen Utang (Utang Produktif vs Konsumtif & Pelunasan)", "SLIK OJK (BI Checking) dan Skor Kolektibilitas Kredit"]
  },
  {
    id: "keuangan-pasangan-rumah-tangga",
    label: "Manajemen Keuangan Pasangan dan Rumah Tangga",
    keys: ["keuangan pasangan", "keuangan keluarga", "keuangan rumah tangga", "menikah", "rekening bersama", "suami istri"],
    body: `Perbedaan cara pandang terhadap uang merupakan salah satu pemicu konflik paling sering dalam rumah tangga. Keterbukaan finansial sebelum dan sesudah menikah menjadi fondasi keharmonisan jangka panjang.

Tiga model pengelolaan rekening rumah tangga yang umum diterapkan:
1. **Gabungan Penuh (*Fully Joint*):** Seluruh penghasilan pasangan digabung ke satu rekening utama untuk membiayai kebutuhan bersama, tabungan, dan investasi, dengan alokasi uang saku pribadi yang disepakati.
2. **Hibrida (*Yours, Mine, Ours*):** Pasangan memiliki **satu rekening bersama** untuk kebutuhan pokok rumah tangga, dana darurat keluarga, dan pendidikan anak (disetor proporsional sesuai gaji), sementara sisa penghasilan tetap berada di rekening masing-masing.
3. **Terpisah dengan Pembagian Pos:** Masing-masing memegang rekening sendiri dengan pembagian tanggung jawab tagihan yang jelas sejak awal.

Hal terpenting: diskusikan secara jujur riwayat utang, tanggungan orang tua, dan target dana darurat keluarga (ideal 6–12 bulan pengeluaran).`,
    example: `Dengan model **Hibrida**, jika suami berpenghasilan Rp10 juta dan istri Rp6 juta, keduanya bisa menyepakati menyetor **60% dari penghasilan masing-masing** ke rekening bersama untuk seluruh biaya rumah tangga dan investasi keluarga, sehingga kontribusinya terasa adil secara proporsional.`,
    closing: "Apakah Anda ingin membahas strategi mengatur keuangan bagi Sandwich Generation yang menanggung dua generasi sekaligus?",
    related: ["Strategi Keuangan Sandwich Generation", "Perencanaan Dana Pendidikan Anak", "Dana Darurat (Emergency Fund) dan Cara Menghitungnya"]
  },
  {
    id: "sandwich-generation",
    label: "Strategi Keuangan Sandwich Generation",
    keys: ["sandwich generation", "generasi sandwich", "tanggungan orang tua", "biaya orang tua", "memutus rantai"],
    body: `**Sandwich Generation** adalah kondisi ketika seseorang berada di tengah tekanan finansial karena harus membiayai kebutuhan hidup generasi di atasnya (orang tua) sekaligus generasi di bawahnya (anak/keluarga sendiri).

Empat langkah praktis agar tetap bertahan dan memutus rantai *sandwich generation*:
• **Tetapkan Batas Anggaran Bantuan yang Terukur:** Masukkan pos bantuan orang tua ke dalam anggaran bulanan secara jelas (misalnya maksimal 10%–20% penghasilan) agar tidak mengganggu kebutuhan pokok dan dana darurat sendiri.
• **Prioritaskan Proteksi Kesehatan Orang Tua:** Pastikan orang tua terdaftar aktif di jaminan kesehatan (BPJS Kesehatan) agar biaya pengobatan tak terduga tidak menguras seluruh tabungan Anda.
• **Komunikasikan Kemampuan Finansial secara Terbuka:** Jelaskan batas kemampuan Anda kepada keluarga besar agar tidak muncul ekspektasi pengeluaran konsumtif di luar kemampuan.
• **Tetap Sisihkan Dana Pensiun Pribadi:** Meskipun kecil, tetap bangun aset pensiun Anda sendiri agar anak Anda kelak tidak mengalami beban serupa.`,
    example: `Daripada memberi uang tunai tanpa batas setiap kali diminta, jauh lebih aman menyepakati **transfer rutin bulanan** yang sesuai anggaran Anda sekaligus membayarkan premi asuransi kesehatan orang tua secara otomatis.`,
    closing: "Apakah Anda ingin membahas bagaimana cara menghitung dan menyiapkan Dana Pendidikan Anak di tengah tingginya inflasi sekolah?",
    related: ["Perencanaan Dana Pendidikan Anak", "Dana Kesehatan Darurat dan BPJS vs Asuransi Swasta", "Manajemen Keuangan Pasangan dan Rumah Tangga"]
  },
  {
    id: "dana-pendidikan-anak",
    label: "Perencanaan Dana Pendidikan Anak dan Inflasi Pendidikan",
    keys: ["dana pendidikan", "pendidikan anak", "biaya sekolah", "biaya kuliah", "inflasi pendidikan", "tabungan pendidikan"],
    body: `**Dana pendidikan anak** memerlukan perhitungan khusus karena rata-rata **inflasi biaya pendidikan di Indonesia mencapai 10% hingga 15% per tahun**—jauh lebih tinggi dibandingkan inflasi barang konsumsi umum.

Strategi menyiapkan dana pendidikan berdasarkan rentang waktu masuk sekolah:
• **Jangka Pendek (< 2–3 Tahun, misal masuk TK/SD):** Gunakan instrumen rendah fluktuasi seperti Reksa Dana Pasar Uang, Deposito, atau Emas agar nilainya aman saat uang pangkal dibutuhkan.
• **Jangka Menengah (3–7 Tahun, misal masuk SMP/SMA):** Gunakan Obligasi Negara (SBN) atau Reksa Dana Pendapatan Tetap untuk mengimbangi kenaikan biaya.
• **Jangka Panjang (> 7–15 Tahun, misal dana kuliah):** Manfaatkan instrumen bertumbuh seperti Reksa Dana Indeks, ETF, atau saham unggulan secara rutin (DCA), lalu geser bertahap ke instrumen pasar uang 2 tahun sebelum anak masuk kuliah.`,
    example: `Jika uang pangkal kuliah saat ini sebesar **Rp50.000.000** dan anak Anda baru akan kuliah **10 tahun lagi**, dengan asumsi inflasi pendidikan 10% per tahun, perkiraan biaya yang dibutuhkan 10 tahun mendatang melonjak menjadi sekitar **Rp129.600.000**. Menghitung angka masa depan ini mencegah Anda kekurangan dana saat hari-H.`,
    closing: "Apakah Anda ingin mengenal cara kerja jaminan hari tua pekerja seperti BPJS Ketenagakerjaan dan DPLK?",
    related: ["BPJS Ketenagakerjaan (JHT, JP) dan Dana Pensiun Mandiri (DPLK)", "Efek Compound Interest (Bunga Berbunga) & Time Horizon", "Perencanaan Dana Pensiun dan Kebebasan Finansial (FIRE)"]
  },
  {
    id: "bpjs-ketenagakerjaan-dplk",
    label: "BPJS Ketenagakerjaan (JHT, JP) dan Dana Pensiun Mandiri (DPLK)",
    keys: ["bpjs ketenagakerjaan", "jht", "jaminan hari tua", "jaminan pensiun", "dplk", "dana pensiun lembaga keuangan"],
    body: `Bagi pekerja formal maupun mandiri, memahami program jaminan hari tua membantu Anda menghitung seberapa besar tambahan investasi pensiun yang masih perlu disiapkan sendiri:

• **JHT (Jaminan Hari Tua — BPJS Ketenagakerjaan):** Program tabungan wajib jangka panjang yang iurannya dibayar bersama oleh perusahaan dan pekerja. Hasil pengembangannya bersifat konservatif dan dapat dicairkan saat memasuki usia pensiun, berhenti bekerja (dengan masa tunggu sesuai aturan), atau sebagian untuk kepemilikan rumah.
• **JP (Jaminan Pensiun):** Program perlindungan yang memberikan manfaat uang bulanan rutin setelah peserta mencapai usia pensiun dan memenuhi masa iur minimal.
• **DPLK (Dana Pensiun Lembaga Keuangan):** Program dana pensiun sukarela yang diselenggarakan bank atau perusahaan asuransi jiwa—sangat berguna bagi pekerja lepas (*freelancer*), pengusaha, maupun karyawan yang ingin menambah portofolio pensiun dengan pilihan paket investasi pasar uang, pendapatan tetap, atau saham.`,
    example: `Saldo **JHT BPJS Ketenagakerjaan** umumnya baru cukup menopang kebutuhan dasar selama beberapa tahun pertama pensiun. Karena itu, mengombinasikan JHT dengan **DPLK atau portofolio investasi pribadi** memberikan perlindungan hari tua yang jauh lebih layak.`,
    closing: "Apakah Anda ingin membahas dasar perencanaan waris, hibah, dan wasiat agar distribusi aset keluarga berjalan tertib?",
    related: ["Perencanaan Waris, Hibah, dan Wasiat Dasar", "Perencanaan Dana Pensiun dan Kebebasan Finansial (FIRE)", "Piramida Perencanaan Keuangan"]
  },
  {
    id: "perencanaan-waris-dasar",
    label: "Perencanaan Waris, Hibah, dan Wasiat Dasar",
    keys: ["waris", "warisan", "hibah", "wasiat", "ahli waris", "distribusi aset", "estate planning"],
    body: `**Perencanaan distribusi aset (*Estate Planning*)** berada di puncak piramida keuangan dengan tujuan memastikan aset yang telah Anda bangun berpindah kepada keluarga atau ahli waris secara sah, adil, dan tanpa sengketa.

Tiga instrumen hukum utama dalam perpindahan aset:
• **Waris:** Pembagian harta peninggalan setelah pemilik harta meninggal dunia sesuai hukum yang berlaku (Hukum Waris Islam/Faraid, KUHPerdata, atau Hukum Adat).
• **Hibah:** Pemberian aset secara sukarela saat pemberi masih hidup kepada penerima hibah, disertai akta resmi agar sah secara hukum.
• **Wasiat:** Pernyataan kehendak seseorang mengenai apa yang harus dilakukan terhadap hartanya setelah ia meninggal dunia (umumnya dibatasi maksimal 1/3 dari harta bersih agar tidak merugikan hak ahli waris).

Langkah praktis paling sederhana: buat daftar inventaris aset, nomor polis asuransi, serta kontak lembaga keuangan Anda di tempat aman yang diketahui pasangan atau keluarga inti.`,
    example: `Banyak aset tabungan, saham, maupun dompet digital menjadi terbengkalai dan tidak pernah diklaim keluarga semata-mata karena **ahli waris tidak pernah tahu di mana saja aset tersebut disimpan** (tanpa perlu membocorkan PIN/password semasa hidup).`,
    closing: "Apakah Anda ingin membandingkan peran BPJS Kesehatan dan asuransi kesehatan swasta dalam melindungi aset keluarga?",
    related: ["Dana Kesehatan Darurat dan BPJS vs Asuransi Swasta", "Fungsi Asuransi sebagai Proteksi Risiko Finansial", "Piramida Perencanaan Keuangan"]
  },
  {
    id: "bpjs-kesehatan-vs-asuransi-swasta",
    label: "Dana Kesehatan Darurat dan BPJS Kesehatan vs Asuransi Swasta",
    keys: ["bpjs kesehatan", "asuransi swasta", "rawat inap", "cob", "coordination of benefit", "biaya rumah sakit"],
    body: `Biaya medis mengalami inflasi tinggi setiap tahun. Memadukan jaminan kesehatan nasional dan asuransi swasta secara cerdas menjaga agar tabungan Anda tidak terkuras saat sakit:

• **BPJS Kesehatan:** Jaminan kesehatan wajib yang menanggung seluruh biaya pengobatan dari fasilitas kesehatan tingkat pertama hingga rujukan rumah sakit tanpa batasan plafon tahunan (selama mengikuti prosedur rujukan berjenjang, kecuali kondisi gawat darurat).
• **Asuransi Kesehatan Swasta:** Memberikan fleksibilitas pilihan rumah sakit rekanan langsung tanpa rujukan berjenjang, kenyamanan kamar perawatan, serta akses jaringan rumah sakit internasional sesuai limit polis.
• **Skema COB (*Coordination of Benefit*):** Fasilitas koordinasi manfaat antara BPJS Kesehatan dan asuransi swasta untuk menanggung selisih biaya perawatan atau kenaikan kelas kamar sesuai ketentuan polis.`,
    example: `Pastikan seluruh anggota keluarga inti sudah terdaftar aktif di **BPJS Kesehatan** sebagai lapisan perlindungan dasar wajib. Apabila arus kas sudah surplus dan dana darurat terpenuhi, barulah Anda dapat menambah **asuransi kesehatan swasta murni** untuk kenyamanan layanan.`,
    closing: "Apakah Anda ingin masuk ke materi finansial untuk usaha/karier, dimulai dari cara memisahkan keuangan pribadi dan bisnis?",
    related: ["Memisahkan Keuangan Pribadi dan Bisnis (UMKM / Freelancer)", "Fungsi Asuransi sebagai Proteksi Risiko Finansial", "Dana Darurat (Emergency Fund) dan Cara Menghitungnya"]
  },
  {
    id: "keuangan-pribadi-vs-bisnis",
    label: "Memisahkan Keuangan Pribadi dan Bisnis (UMKM / Freelancer)",
    keys: ["keuangan bisnis", "keuangan umkm", "pisahkan rekening", "gaji pemilik", "uang usaha", "freelancer", "pekerja lepas"],
    body: `Kesalahan paling mematikan bagi pelaku UMKM dan pekerja lepas (*freelancer*) adalah **mencampur uang pribadi dan uang usaha dalam satu rekening**. Akibatnya, bisnis terlihat ramai pembeli tetapi modalnya habis terpakai untuk kebutuhan sehari-hari tanpa disadari.

Empat aturan dasar pengelolaan keuangan bisnis kecil:
1. **Pisahkan Rekening 100%:** Gunakan satu rekening khusus untuk seluruh pemasukan dan pengeluaran operasional usaha, dan rekening terpisah untuk pribadi.
2. **Tetapkan "Gaji Pemilik" (*Owner's Pay*):** Bayar diri Anda sendiri dengan nominal gaji bulanan yang tetap dan realistis sesuai kemampuan laba usaha. Jangan mengambil uang kas usaha sesuka hati.
3. **Sisihkan Laba Ditahan (*Retained Earnings*):** Simpan sebagian keuntungan bersih di kas bisnis sebagai cadangan pengembangan usaha dan dana darurat bisnis.
4. **Siapkan Dana Darurat Lebih Besar:** Karena penghasilan pengusaha dan *freelancer* bersifat fluktuatif, kumpulkan dana darurat pribadi minimal **9 hingga 12 bulan** pengeluaran.`,
    example: `Jika usaha online Anda membukukan omzet Rp25 juta dengan laba bersih Rp7 juta per bulan, tetapkan **gaji pribadi Rp4 juta/bulan** yang ditransfer ke rekening pribadi setiap tanggal 1, sementara sisa **Rp3 juta** tetap dibiarkan di rekening usaha untuk menambah stok dan modal kerja.`,
    closing: "Apakah Anda ingin memahami perbedaan antara Active Income, Passive Income, dan Portfolio Income?",
    related: ["Jenis Pendapatan: Active, Passive, dan Portfolio Income", "Menghitung HPP, Margin Laba, dan Break-Even Point (BEP) Usaha", "Manajemen Modal Kerja dan Arus Kas Bisnis Kecil"]
  },
  {
    id: "active-passive-portfolio-income",
    label: "Jenis Pendapatan: Active, Passive, dan Portfolio Income",
    keys: ["active income", "passive income", "portfolio income", "penghasilan pasif", "penghasilan aktif", "side hustle"],
    body: `Memahami perbedaan tiga sumber pendapatan membantu Anda merancang transisi dari menukar waktu dengan uang menuju kemandirian finansial:

1. **Active Income (Pendapatan Aktif):** Penghasilan yang diperoleh dari menukar waktu, tenaga, dan keahlian secara langsung—seperti gaji karyawan, honor *freelance*, atau fee konsultasi. Jika Anda berhenti bekerja, arus uang berhenti.
2. **Portfolio Income (Pendapatan Portofolio):** Keuntungan yang berasal dari aset kertas dan instrumen pasar modal—seperti dividen saham, kupon obligasi/SBN, bunga deposito, dan *capital gain* investasi.
3. **Passive Income (Pendapatan Pasif):** Arus kas masuk berulang dari aset bisnis atau kekayaan intelektual yang tidak lagi membutuhkan keterlibatan penuh waktu Anda sehari-hari—seperti properti sewa, royalti buku/musik/aplikasi, atau sistem bisnis yang sudah berjalan otomatis.

Catatan realistis: *Passive income* hampir selalu membutuhkan **modal uang besar** atau **kerja keras aktif di awal** untuk membangun sistemnya.`,
    example: `Urutan paling sehat: maksimalkan **Active Income** di usia produktif (termasuk lewat peningkatan skill atau *side hustle*), lalu alirkan surplusnya secara konsisten untuk membeli aset penghasil **Portfolio Income** (SBN, saham dividen, reksa dana).`,
    closing: "Apakah Anda ingin mempelajari cara menghitung harga pokok (HPP), margin laba, dan titik impas (BEP) dalam suatu usaha?",
    related: ["Menghitung HPP, Margin Laba, dan Break-Even Point (BEP) Usaha", "Memisahkan Keuangan Pribadi dan Bisnis (UMKM / Freelancer)", "Pilar Utama Literasi Finansial Pribadi"]
  },
  {
    id: "hpp-margin-bep-usaha",
    label: "Menghitung HPP, Margin Laba, dan Break-Even Point (BEP) Usaha",
    keys: ["hpp", "harga pokok penjualan", "margin laba", "gross margin", "net margin", "bep usaha", "break even point usaha", "balik modal"],
    body: `Banyak usaha kecil bangkrut meski laris manis karena salah menentukan harga jual dan tidak menghitung titik impas (**BEP**):

• **HPP (Harga Pokok Penjualan):** Seluruh biaya langsung yang dikeluarkan untuk memproduksi atau mendapatkan satu unit barang hingga siap dijual (bahan baku, kemasan, ongkos kirim masuk).
• **Gross Profit Margin (Margin Laba Kotor):** Selisih antara harga jual dan HPP dibagi harga jual. Mengukur efisiensi produksi/pembelian barang.
• **Net Profit Margin (Margin Laba Bersih):** Keuntungan akhir setelah dikurangi seluruh biaya operasional tetap (sewa tempat, gaji karyawan, listrik, biaya iklan, dan pajak).
• **Break-Even Point (BEP / Titik Impas):** Jumlah penjualan minimal yang harus dicapai agar total pendapatan tepat menutup seluruh biaya tetap dan biaya variabel (untung Rp0, rugi Rp0).`,
    example: `Jika biaya tetap bulanan kedai kopi Anda (sewa, listrik, gaji) adalah **Rp6.000.000**, harga jual per gelas **Rp20.000**, dan HPP per gelas **Rp8.000** (laba kotor Rp12.000/gelas), maka **BEP** usaha Anda adalah **Rp6.000.000 ÷ Rp12.000 = 500 gelas per bulan** (sekitar 17 gelas per hari) untuk sekadar balik modal operasional.`,
    closing: "Apakah Anda ingin membahas bagaimana cara mengelola modal kerja dan perputaran arus kas bisnis agar tidak macet meski penjualan tinggi?",
    related: ["Manajemen Modal Kerja dan Arus Kas Bisnis Kecil", "Memisahkan Keuangan Pribadi dan Bisnis (UMKM / Freelancer)", "Jenis Pendapatan: Active, Passive, dan Portfolio Income"]
  },
  {
    id: "modal-kerja-arus-kas-bisnis",
    label: "Manajemen Modal Kerja dan Arus Kas Bisnis Kecil",
    keys: ["modal kerja", "working capital", "arus kas bisnis", "piutang usaha", "stok barang", "omzet vs profit"],
    body: `Dalam bisnis berlaku ungkapan: *"Omzet adalah kebanggaan, profit adalah kewarasan, tetapi arus kas (cash flow) adalah nyawa."* Bisnis yang mencetak laba di atas kertas tetap bisa tutup jika kehabisan uang tunai untuk operasional harian.

Tiga kunci menjaga kelancaran modal kerja (*working capital*):
• **Bedakan Omzet dan Laba:** Omzet adalah total uang masuk kotor sebelum dikurangi HPP dan biaya operasional. Jangan pernah membelanjakan uang omzet seolah-olah itu adalah keuntungan bersih.
• **Kendalikan Piutang Usaha (*Account Receivable*):** Terlalu banyak menjual secara tempo/utang kepada pelanggan membuat kas bisnis kering sementara Anda tetap harus membayar pemasok secara tunai.
• **Hindari Penumpukan Stok Mati (*Dead Stock*):** Uang yang mengendap terlalu lama dalam bentuk stok barang yang lambat laku akan mengunci modal kerja Anda.`,
    example: `Jika Anda mencatat penjualan Rp50 juta bulan ini tetapi Rp35 jutanya masih berupa piutang yang baru dibayar 60 hari lagi, sementara gaji dan sewa harus dibayar minggu depan, bisnis Anda mengalami **defisit arus kas** meskipun secara pembukuan terlihat untung.`,
    closing: "Apakah Anda siap melanjutkan ke Part 2 untuk membahas Pajak Pribadi & UMKM, Laporan Keuangan Saham, Keuangan Syariah, dan Ekosistem Kripto?",
    related: ["Memisahkan Keuangan Pribadi dan Bisnis (UMKM / Freelancer)", "Menghitung HPP, Margin Laba, dan Break-Even Point (BEP) Usaha", "Pengelolaan Arus Kas (Cash Flow) Pribadi"]
  },
];
