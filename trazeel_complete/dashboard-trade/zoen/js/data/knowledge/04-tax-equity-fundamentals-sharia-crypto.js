// Bagian materi 04. Isi objek dipertahankan dari file sumber.
export const part04 = [
{
    id: "pajak-penghasilan-pribadi",
    label: "Pajak Penghasilan Pribadi (PPh 21, PTKP, & Lapor SPT)",
    keys: ["pph 21", "ptkp", "spt tahunan", "lapor spt", "pajak penghasilan", "pajak gaji", "tarif progresif", "npwp"],
    body: `Memahami dasar **Pajak Penghasilan (PPh Pasal 21)** membantu Anda membaca slip gaji dengan jernih sekaligus memastikan kepatuhan pelaporan pajak tahunan:

• **PTKP (Penghasilan Tidak Kena Pajak):** Batas minimal penghasilan tahunan yang dibebaskan dari pajak. Bagi wajib pajak lajang tanpa tanggungan (status TK/0), batas PTKP umumnya berada di angka **Rp54.000.000 per tahun** (atau rata-rata Rp4,5 juta per bulan), dan bertambah jika sudah menikah atau memiliki tanggungan keluarga.
• **Tarif Pajak Progresif:** Pajak hanya dikenakan atas selisih penghasilan bersih yang **melampaui batas PTKP** (*Penghasilan Kena Pajak / PKP*). Tarifnya bertingkat mulai dari **5%** untuk lapisan pertama hingga tarif lebih tinggi pada lapisan penghasilan berikutnya.
• **Kewajiban Lapor SPT Tahunan:** Meskipun pajak gaji karyawan sudah dipotong otomatis oleh perusahaan setiap bulan, setiap pemilik NPWP/NIK yang terdaftar tetap wajib melaporkan ringkasan penghasilan dan daftar harta/utangnya melalui **SPT Tahunan** paling lambat akhir Maret setiap tahun.`,
    example: `Jika penghasilan bersih setahun Anda Rp74.000.000 dan status Anda lajang (PTKP Rp54.000.000), maka yang dikenakan tarif pajak 5% bukanlah seluruh Rp74 juta tersebut, melainkan hanya selisihnya yaitu **Rp20.000.000** (pajak setahun Rp1.000.000 atau sekitar Rp83.000/bulan).`,
    closing: "Apakah Anda ingin mengetahui bagaimana aturan pajak berlaku bagi pelaku usaha kecil (UMKM) dan pekerja lepas?",
    related: ["Pajak Usaha Kecil (PPh Final UMKM 0,5%) dan Pekerja Lepas", "Memahami Pajak dan Biaya Transaksi dalam Keuangan", "Pengelolaan Arus Kas (Cash Flow) Pribadi"]
  },
  {
    id: "pajak-umkm-freelancer",
    label: "Pajak Usaha Kecil (PPh Final UMKM 0,5%) dan Pekerja Lepas",
    keys: ["pajak umkm", "pph final", "pajak 0.5 persen", "pajak freelancer", "pajak usaha", "omzet kena pajak"],
    body: `Bagi pelaku usaha mikro, kecil, dan menengah (UMKM) maupun pekerja lepas (*freelancer*), pencatatan omzet bulanan sangat penting untuk menghitung kewajiban pajak secara akurat:

• **PPh Final UMKM 0,5%:** Fasilitas pajak bagi wajib pajak orang pribadi maupun badan usaha dengan omzet bruto usaha **tidak melebihi Rp4,8 miliar dalam satu tahun pajak**. Tarifnya sangat ringan, yakni **0,5% dari total omzet bulanan**.
• **Batas Omzet Bebas Pajak bagi UMKM Orang Pribadi:** Wajib pajak orang pribadi pelaku UMKM mendapatkan fasilitas bebas PPh Final atas bagian omzet bruto sampai dengan **Rp500.000.000 dalam satu tahun pajak**. Pajak 0,5% baru mulai dihitung pada bulan ketika akumulasi omzet tahunan melampaui Rp500 juta.
• **Pekerja Lepas (*Freelancer* / Tenaga Ahli):** Penghasilan dari jasa profesional (seperti desainer, programmer, penulis, atau konsultan) menggunakan mekanisme penghitungan PPh 21 atau norma penghitungan penghasilan neto (NPPN) sesuai ketentuan perpajakan.`,
    example: `Jika Anda menjalankan toko online perorangan dengan omzet rata-rata Rp30 juta per bulan (total **Rp360 juta setahun**), karena akumulasi omzet tahunan masih di bawah **Rp500 juta**, maka PPh Final UMKM Anda adalah **Rp0**—namun omzet bulanan tetap wajib dicatat dan dilaporkan di SPT Tahunan.`,
    closing: "Apakah Anda ingin beralih ke analisis fundamental saham, dimulai dari cara membaca tiga laporan keuangan perusahaan?",
    related: ["Memisahkan Keuangan Pribadi dan Bisnis (UMKM / Freelancer)", "Pajak Penghasilan Pribadi (PPh 21, PTKP, & Lapor SPT)", "Memahami Pajak dan Biaya Transaksi dalam Keuangan"]
  },
  {
    id: "laporan-keuangan-dasar",
    label: "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas",
    keys: ["laporan keuangan", "laba rugi", "neraca", "balance sheet", "income statement", "laporan arus kas", "fundamental saham"],
    body: `Dalam investasi saham jangka panjang, membeli saham berarti membeli kepemilikan bisnis. Untuk mengecek kesehatan suatu perusahaan terbuka (*emiten*), perhatikan tiga dokumen laporan keuangan utamanya:

1. **Laporan Laba Rugi (*Income Statement*):** Menunjukkan kinerja pendapatan (*revenue*), beban operasional, hingga keuntungan bersih (*net profit*) perusahaan dalam satu periode (kuartalan atau tahunan).
2. **Neraca Keuangan (*Balance Sheet*):** Memotret posisi kekayaan perusahaan pada satu tanggal tertentu melalui persamaan dasar: **Aset = Liabilitas (Utang) + Ekuitas (Modal Bersih)**.
3. **Laporan Arus Kas (*Cash Flow Statement*):** Melacak keluar-masuknya uang tunai riil yang dibagi menjadi tiga aktivitas: **Arus Kas Operasi** (dari bisnis inti), **Investasi** (belanja modal/ekspansi), dan **Pendanaan** (pinjaman atau pembagian dividen).`,
    example: `Perusahaan yang sehat memiliki **Laba Bersih** yang bertumbuh sekaligus didukung oleh **Arus Kas Operasi positif**. Jika laba di laporan laba rugi terlihat besar tetapi arus kas operasinya terus negatif, artinya keuntungan tersebut baru berupa piutang di atas kertas dan belum menjadi uang tunai.`,
    closing: "Apakah Anda ingin mengenal rasio-rasio utama untuk menilai apakah harga saham suatu perusahaan tergolong murah atau mahal?",
    related: ["Rasio Valuasi Saham: PER, PBV, dan Market Cap", "Rasio Profitabilitas & Kesehatan Utang: ROE, ROA, NPM, dan DER", "Dasar Investasi Saham (Capital Gain dan Dividen)"]
  },
  {
    id: "rasio-valuasi-saham",
    label: "Rasio Valuasi Saham: PER, PBV, dan Market Cap",
    keys: ["per", "price to earning", "pbv", "price to book value", "valuasi", "market cap", "kapitalisasi pasar", "saham murah", "undervalued"],
    body: `Harga per lembar saham yang terlihat kecil (misalnya Rp200) belum tentu murah, dan harga per lembar Rp10.000 belum tentu mahal. Investor menggunakan **rasio valuasi** untuk membandingkan harga saham dengan kinerja bisnisnya:

• **Market Cap (Kapitalisasi Pasar):** Nilai total perusahaan di bursa, dihitung dari **Harga Saham × Jumlah Saham Beredar**. Mencerminkan ukuran skala perusahaan.
• **PER (*Price to Earnings Ratio*):** Perbandingan antara harga saham dengan laba bersih per lembar saham (*EPS*). Menggambarkan berapa tahun waktu yang dibutuhkan untuk "balik modal" jika laba perusahaan tetap konstan. Semakin rendah PER dibanding rata-rata industrinya, umumnya semakin menarik valuasinya.
• **PBV (*Price to Book Value*):** Perbandingan antara harga saham dengan nilai buku ekuitas bersih per lembar saham (*BVPS*). PBV di bawah **1,0×** berarti harga pasar saham sedang diperdagangkan di bawah nilai aset bersih pembukuannya.`,
    example: `Jika Saham A memiliki harga Rp2.000 dengan laba per saham (EPS) Rp250, maka **PER-nya adalah 8×** (2.000 ÷ 250). Bandingkan angka PER dan PBV tersebut dengan perusahaan lain di **sektor industri yang sama** serta rata-rata historisnya selama 5 tahun terakhir.`,
    closing: "Apakah Anda ingin melengkapi analisis valuasi dengan rasio profitabilitas dan kesehatan utang seperti ROE dan DER?",
    related: ["Rasio Profitabilitas & Kesehatan Utang: ROE, ROA, NPM, dan DER", "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas", "Karakteristik Saham Blue Chip, Second Liner, dan Third Liner"]
  },
  {
    id: "rasio-profitabilitas-solvabilitas",
    label: "Rasio Profitabilitas & Kesehatan Utang: ROE, ROA, NPM, dan DER",
    keys: ["roe", "return on equity", "roa", "npm", "net profit margin", "der", "debt to equity", "rasio keuangan saham"],
    body: `Saham yang valuasinya murah (PER/PBV rendah) bisa saja merupakan jebakan (*value trap*) jika bisnisnya sedang merosot atau terlilit utang. Gunakan empat rasio kualitas bisnis berikut:

• **ROE (*Return on Equity*):** Mengukur seberapa efektif perusahaan menghasilkan laba bersih dari modal pemegang saham. Perusahaan berkualitas umumnya menjaga konsistensi **ROE di atas 12%–15%**.
• **ROA (*Return on Assets*):** Mengukur efisiensi perusahaan menghasilkan laba dari keseluruhan aset yang dikelolanya.
• **NPM (*Net Profit Margin*):** Persentase keuntungan bersih yang tersisa dari setiap rupiah penjualan/omzet. Semakin tinggi dan stabil NPM, semakin kuat daya saing produk perusahaan.
• **DER (*Debt to Equity Ratio*):** Perbandingan total utang terhadap modal sendiri (*ekuitas*). Untuk sektor non-perbankan, **DER di bawah 1,0× (100%)** menandakan struktur utang yang tergolong sehat dan terkendali.`,
    example: `Jika sebuah perusahaan memiliki **ROE 18%**, **NPM 15%**, dan **DER 0,4×**, artinya perusahaan tersebut mampu mencetak keuntungan tinggi menggunakan modal sendiri tanpa bergantung pada tumpukan utang berbunga besar.`,
    closing: "Apakah Anda ingin memahami istilah penting dalam pembagian dividen saham seperti Dividend Yield dan Cum Date?",
    related: ["Analisis Dividen: Dividend Yield, Payout Ratio, dan Cum/Ex-Date", "Rasio Valuasi Saham: PER, PBV, dan Market Cap", "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas"]
  },
  {
    id: "dividen-yield-payout",
    label: "Analisis Dividen: Dividend Yield, Payout Ratio, dan Cum/Ex-Date",
    keys: ["dividend yield", "payout ratio", "dpr", "cum date", "ex date", "recording date", "dividend trap", "jadwal dividen"],
    body: `Bagi investor yang mencari arus kas pasif dari saham, memahami indikator dan jadwal pembagian dividen mencegah kesalahan membeli di harga puncak sesaat sebelum dividen dibagikan:

• **Dividend Yield (%):** Persentase imbal hasil dividen dibandingkan harga saham saat ini (**Dividen per Lembar ÷ Harga Saham × 100%**).
• **Dividend Payout Ratio (DPR):** Persentase dari laba bersih perusahaan yang dibagikan sebagai dividen kepada pemegang saham (sisanya disimpan sebagai laba ditahan untuk ekspansi).
• **Cum Date & Ex Date:** *Cum Date* adalah hari terakhir perdagangan saham yang masih berhak mendapatkan dividen. *Ex Date* adalah hari kerja bursa berikutnya ketika pembeli baru sudah tidak lagi berhak atas dividen periode tersebut—pada hari *Ex Date*, harga saham umumnya langsung turun menyesuaikan besarnya dividen (*dividend trap* jika dibeli tanpa analisis).`,
    example: `Jika saham seharga **Rp2.000** membagikan dividen **Rp120 per lembar**, maka **Dividend Yield-nya adalah 6%**. Namun hindari membeli saham hanya demi mengejar dividen jumbo satu kali (*one-off dividend*) jika fundamental bisnisnya sedang menurun.`,
    closing: "Apakah Anda ingin mengenal berbagai aksi korporasi pasar modal seperti IPO, Stock Split, Right Issue, dan Buyback?",
    related: ["Aksi Korporasi Pasar Modal: IPO, Stock Split, Right Issue, dan Buyback", "Dasar Investasi Saham (Capital Gain dan Dividen)", "Jenis Pendapatan: Active, Passive, dan Portfolio Income"]
  },
  {
    id: "aksi-korporasi-saham",
    label: "Aksi Korporasi Pasar Modal: IPO, Stock Split, Right Issue, dan Buyback",
    keys: ["aksi korporasi", "ipo", "stock split", "right issue", "buyback", "delisting", "dilusi saham"],
    body: `**Aksi korporasi (*Corporate Action*)** adalah kebijakan strategis perusahaan terbuka yang memengaruhi jumlah lembar saham, harga saham, maupun hak pemegang saham:

• **IPO (*Initial Public Offering*):** Penawaran umum perdana saat perusahaan swasta pertama kali menjual sahamnya kepada masyarakat di bursa efek.
• **Stock Split (Pemecahan Nilai Saham):** Memecah satu lembar saham menjadi beberapa lembar dengan nilai nominal lebih kecil agar harga per lembarnya lebih terjangkau dan likuid (total nilai aset pemegang saham tetap sama).
• **Right Issue (HMETD):** Penerbitan saham baru untuk menambah modal perusahaan dengan memberikan hak memesan lebih dulu kepada pemegang saham lama. Jika pemegang saham lama tidak menebus haknya, persentase kepemilikannya akan terdilusi (mengecil).
• **Share Buyback:** Perusahaan membeli kembali sahamnya sendiri yang beredar di pasar karena manajemen menilai harga saham sedang terlalu murah dibanding nilai wajarnya.`,
    example: `Jika Anda memegang 10 lot (1.000 lembar) saham seharga Rp10.000 per lembar (total Rp10 juta) lalu perusahaan melakukan **Stock Split 1:5**, maka jumlah saham Anda otomatis menjadi **50 lot (5.000 lembar)** dengan harga disesuaikan menjadi **Rp2.000 per lembar**—nilai totalnya tetap Rp10 juta.`,
    closing: "Apakah Anda ingin membandingkan perbedaan karakter saham Blue Chip, Second Liner, dan Third Liner?",
    related: ["Karakteristik Saham Blue Chip, Second Liner, dan Third Liner", "Analisis Dividen: Dividend Yield, Payout Ratio, dan Cum/Ex-Date", "Dasar Investasi Saham (Capital Gain dan Dividen)"]
  },
  {
    id: "blue-chip-vs-second-liner",
    label: "Karakteristik Saham Blue Chip, Second Liner, dan Third Liner",
    keys: ["blue chip", "second liner", "third liner", "saham lapis satu", "saham gorengan", "kapitalisasi besar", "small cap"],
    body: `Berdasarkan kapitalisasi pasar, likuiditas transaksi, dan kematangan bisnisnya, saham di bursa sering dikelompokkan menjadi tiga lapis:

• **First Liner / Blue Chip (Kapitalisasi Besar):** Perusahaan pemimpin industri dengan kapitalisasi pasar sangat besar (umumnya > Rp10–50 triliun), fundamental teruji, likuiditas tinggi, dan rutin membagikan dividen. Pergerakannya lebih terukur dan menjadi tulang punggung portofolio jangka panjang.
• **Second Liner (Kapitalisasi Menengah):** Perusahaan berkembang dengan ukuran menengah yang memiliki ruang ekspansi bisnis lebih cepat dibanding *blue chip*, namun fluktuasi harganya juga lebih dinamis.
• **Third Liner (Kapitalisasi Kecil):** Saham berkapitalisasi kecil dengan likuiditas tipis. Harganya sangat mudah melonjak maupun anjlok tajam dalam waktu singkat sehingga memiliki risiko spekulasi paling tinggi.`,
    example: `Bagi investor pemula, memulai portofolio saham dari jajaran **Blue Chip** (seperti penghuni indeks LQ45 atau IDX30) membantu Anda mempelajari siklus pasar dengan risiko likuiditas dan manipulasi harga yang jauh lebih rendah.`,
    closing: "Apakah Anda ingin beralih ke prinsip dasar Keuangan dan Investasi Syariah?",
    related: ["Prinsip Dasar Keuangan Syariah: Bebas Riba, Gharar, dan Maysir", "Mengenal ETF (Exchange-Traded Fund) dan Reksa Dana Indeks", "Rasio Valuasi Saham: PER, PBV, dan Market Cap"]
  },
  {
    id: "prinsip-keuangan-syariah",
    label: "Prinsip Dasar Keuangan Syariah: Bebas Riba, Gharar, dan Maysir",
    keys: ["keuangan syariah", "ekonomi syariah", "riba", "gharar", "maysir", "akad syariah", "halal"],
    body: `**Keuangan syariah** adalah sistem pengelolaan uang, pembiayaan, dan investasi yang berlandaskan prinsip syariah Islam dengan menekankan keadilan transaksi, keterkaitan dengan aset riil, serta pembagian risiko yang transparan.

Tiga larangan utama yang menjadi fondasi seluruh produk keuangan syariah:
1. **Riba:** Tambahan nilai atau bunga yang disyaratkan atas pinjaman uang maupun pertukaran barang sejenis secara tidak adil.
2. **Gharar:** Ketidakjelasan, ambiguitas, atau penyembunyian informasi penting mengenai objek transaksi, harga, maupun waktu penyerahan yang dapat merugikan salah satu pihak.
3. **Maysir:** Unsur spekulasi murni atau untung-untungan (*gambling*) tanpa dasar analisis ekonomi dan aset riil yang jelas.

Sebagai pengganti bunga pinjaman, keuangan syariah menggunakan akad berbasis jual-beli (**Murabahah**), sewa (**Ijarah**), maupun bagi hasil usaha nyata (**Mudharabah** dan **Musyarakah**).`,
    example: `Dalam pembiayaan kepemilikan rumah syariah dengan akad **Murabahah**, bank membeli rumah terlebih dahulu lalu menjualnya kembali kepada nasabah dengan margin keuntungan yang disepakati sejak awal—sehingga cicilan tetap pasti hingga lunas tanpa terpengaruh fluktuasi bunga mengambang (*floating rate*).`,
    closing: "Apakah Anda ingin mengetahui bagaimana mekanisme seleksi Saham Syariah dan Reksa Dana Syariah bekerja?",
    related: ["Saham Syariah (DES, ISSI, JII) dan Reksa Dana Syariah", "Perbedaan Sukuk (SBSN) dan Obligasi Konvensional", "Pilar Utama Literasi Finansial Pribadi"]
  },
  {
    id: "investasi-saham-reksadana-syariah",
    label: "Saham Syariah (DES, ISSI, JII) dan Reksa Dana Syariah",
    keys: ["saham syariah", "des", "daftar efek syariah", "issi", "jii", "reksa dana syariah", "screening syariah"],
    body: `Tidak semua perusahaan yang melantai di bursa otomatis termasuk instrumen syariah. Otoritas Jasa Keuangan (OJK) secara berkala menerbitkan **Daftar Efek Syariah (DES)** setelah menyaring perusahaan berdasarkan dua kriteria ketat:

1. **Skrining Kegiatan Usaha:** Perusahaan tidak bergerak di bidang yang bertentangan dengan prinsip syariah (seperti perbankan konvensional berbasis bunga, perjudian, minuman keras, atau produk tidak halal lainnya).
2. **Skrining Rasio Keuangan:**
   • Total utang berbasis bunga dibandingkan total aset **tidak lebih dari 45%**.
   • Total pendapatan bunga dan pendapatan tidak halal lainnya dibandingkan total pendapatan usaha **tidak lebih dari 10%**.

Saham-saham yang lolos skrining tersebut tergabung dalam indeks seperti **ISSI** (*Indeks Saham Syariah Indonesia*) dan **JII** (*Jakarta Islamic Index*), serta menjadi isi portofolio **Reksa Dana Syariah** yang dilengkapi mekanisme pembersihan dana (*cleansing*).`,
    example: `Apabila sebuah perusahaan yang semula masuk indeks syariah kemudian mengambil utang bank konvensional hingga rasio utangnya melewati batas **45%**, maka pada evaluasi berkala berikutnya saham tersebut akan otomatis dikeluarkan dari **Daftar Efek Syariah (DES)**.`,
    closing: "Apakah Anda ingin membandingkan perbedaan struktur antara Sukuk (Surat Berharga Syariah) dan Obligasi Konvensional?",
    related: ["Perbedaan Sukuk (SBSN) dan Obligasi Konvensional", "Prinsip Dasar Keuangan Syariah: Bebas Riba, Gharar, dan Maysir", "Mengenal Reksa Dana dan Jenis-Jenisnya"]
  },
  {
    id: "sukuk-vs-obligasi-konvensional",
    label: "Perbedaan Sukuk (SBSN) dan Obligasi Konvensional",
    keys: ["sukuk", "sbsn", "sukuk ritel", "sukuk tabungan", "perbedaan sukuk dan obligasi", "underlying asset"],
    body: `Meskipun sama-sama menawarkan imbal hasil berkala dan jatuh tempo yang jelas, **Sukuk** (Surat Berharga Syariah) dan **Obligasi Konvensional** memiliki struktur hukum dan akad yang berbeda:

• **Obligasi Konvensional:** Merupakan surat pengakuan utang dari penerbit kepada investor dengan imbalan berupa pembayaran **bunga (kupon)** tanpa memerlukan jaminan aset riil tertentu.
• **Sukuk (contoh: Sukuk Ritel / SR dan Sukuk Tabungan / ST):** Bukan surat utang, melainkan **bukti kepemilikan bersama atas suatu aset riil atau proyek tertentu (*Underlying Asset*)** yang menjadi dasar penerbitannya. Imbal hasilnya disebut **ujrah (uang sewa)** atau bagi hasil dari pemanfaatan aset negara/proyek tersebut, bukan bunga utang.`,
    example: `Ketika pemerintah menerbitkan **Sukuk Negara (SBSN)**, dana investor digunakan untuk membiayai proyek infrastruktur nyata atau menyewa aset milik negara—sehingga imbal hasil bulanan yang Anda terima berasal dari pemanfaatan aset riil tersebut dan telah mendapat opini kesesuaian syariah dari Dewan Syariah Nasional.`,
    closing: "Apakah Anda ingin beralih ke pembahasan ekosistem aset digital, dimulai dari perbedaan pasar Crypto Spot dan Futures?",
    related: ["Obligasi dan Surat Berharga Negara (SBN / Sukuk)", "Prinsip Dasar Keuangan Syariah: Bebas Riba, Gharar, dan Maysir", "Saham Syariah (DES, ISSI, JII) dan Reksa Dana Syariah"]
  },
  {
    id: "crypto-spot-vs-futures",
    label: "Perbedaan Pasar Crypto Spot dan Crypto Futures (Derivatif)",
    keys: ["crypto spot", "crypto futures", "pasar spot", "likuidasi", "liquidation", "perpetual futures", "funding rate"],
    body: `Dalam ekosistem aset kripto, cara Anda membeli aset di pasar **Spot** sangat berbeda tingkat risikonya dibandingkan memperdagangkan kontrak **Futures**:

• **Pasar Crypto Spot:** Anda membeli dan memiliki **koin/token kripto secara langsung** sesuai modal tunai yang Anda bayarkan (tanpa leverage/utang). Jika harga turun sementara, jumlah koin yang Anda miliki tetap utuh dan **tidak ada risiko likuidasi** selama Anda memegangnya di aset fundamental.
• **Pasar Crypto Futures (Derivatif):** Anda tidak memiliki koin aslinya, melainkan memperdagangkan kontrak berjangka dua arah (*Long/Short*) menggunakan **leverage tinggi** serta mekanisme biaya berkala (*Funding Rate*). Jika harga bergerak berlawanan melewati batas margin, posisi Anda otomatis ditutup paksa (**Likuidasi**) dan modal margin hangus.`,
    example: `Jika Anda membeli 0,05 Bitcoin di pasar **Spot** senilai Rp50 juta lalu harga pasar turun 20%, saldo Anda turun menjadi Rp40 juta tetapi Anda tetap memegang utuh 0,05 Bitcoin. Namun jika menggunakan **Futures dengan leverage 10×**, penurunan harga 10% saja sudah cukup melikuidasi seluruh modal Anda hingga menjadi Rp0.`,
    closing: "Apakah Anda ingin memahami cara kerja dasar jaringan Blockchain dan mengapa ada biaya transaksi (Gas Fee)?",
    related: ["Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)", "Pair Aset Kripto Utama: BTC/USD dan ETH/USD"]
  },
  {
    id: "cara-kerja-blockchain-gas-fee",
    label: "Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee",
    keys: ["blockchain", "desentralisasi", "gas fee", "proof of work", "proof of stake", "smart contract", "jaringan kripto"],
    body: `**Blockchain** adalah buku besar digital terdistribusi yang mencatat setiap transaksi secara permanen, transparan, dan terenkripsi di ribuan komputer (*node*) secara bersamaan tanpa dikendalikan satu otoritas pusat tunggal.

Empat istilah inti dalam mekanisme blockchain:
• **Desentralisasi:** Data transaksi diverifikasi oleh jaringan konsensus global—seperti **Proof of Work (PoW)** yang mengandalkan daya komputasi penambang (*miner*, contoh Bitcoin) atau **Proof of Stake (PoS)** yang mengandalkan penguncian aset validator (*staker*, contoh Ethereum).
• **Smart Contract:** Kode program otomatis di atas blockchain yang mengeksekusi perjanjian secara mandiri ketika syarat tertentu terpenuhi tanpa perantara.
• **Gas Fee (Biaya Jaringan):** Biaya komputasi yang dibayarkan pengguna kepada validator/penambang setiap kali mengirim aset atau menjalankan *smart contract* di jaringan blockchain.
• **Kesamaan Jaringan (*Network*):** Saat mengirim kripto antar-dompet, jaringan pengirim dan jaringan penerima wajib sama (misalnya sama-sama ERC-20 atau BEP-20) agar aset tidak hilang.`,
    example: `Mengirim aset kripto lewat jaringan yang salah ibarat mengirim paket ke alamat dengan kode pos yang keliru—transaksi di blockchain bersifat **tidak dapat dibatalkan (*irreversible*)**, sehingga selalu uji kirim nominal kecil terlebih dahulu sebelum mentransfer jumlah besar.`,
    closing: "Apakah Anda ingin mengetahui perbedaan menyimpan aset kripto di Exchange (Custodial) vs Dompet Pribadi (Self-Custody)?",
    related: ["Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)", "Crypto Spot vs Crypto Futures (Derivatif)", "Keamanan Akun Finansial, Phishing, & Manajemen Kredensial"]
  },
  {
    id: "wallet-kripto-custodial-self-custody",
    label: "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)",
    keys: ["wallet kripto", "cold wallet", "hot wallet", "hardware wallet", "custodial", "self custody", "private key", "not your keys"],
    body: `Dalam dunia aset kripto dikenal prinsip *"Not your keys, not your coins"*. Memahami tempat penyimpanan aset menentukan sejauh mana kendali dan keamanan portofolio Anda:

• **Custodial Wallet (Rekening di Bursa / Exchange):** Kunci privat (*private key*) aset dipegang oleh platform bursa tempat Anda bertransaksi. Praktis untuk transaksi rutin, tetapi memiliki risiko apabila bursa mengalami peretasan, pembekuan, atau kebangkrutan.
• **Self-Custody Wallet (Dompet Pribadi Non-Kustodial):** Anda memegang kendali penuh atas **Private Key** dan **12/24 kata Seed Phrase**:
  1. **Hot Wallet:** Dompet berbasis aplikasi/ekstensi browser yang terhubung ke internet (praktis untuk interaksi Web3, tetapi perlu kewaspadaan tinggi terhadap tautan *phishing*).
  2. **Cold Wallet (Hardware Wallet):** Perangkat fisik khusus yang menyimpan *private key* sepenuhnya secara **offline**—standar keamanan tertinggi untuk menyimpan aset kripto jangka panjang.`,
    example: `Catat **12 atau 24 kata Seed Phrase** Anda di atas kertas atau pelat logam dan simpan di tempat fisik yang aman—**jangan pernah memfoto, menyimpannya di catatan cloud/galeri HP, atau memberikannya kepada siapa pun** karena siapa pun yang memegang kata-kata tersebut memiliki akses penuh atas seluruh aset di dompet Anda.`,
    closing: "Apakah Anda ingin menutup rangkaian modul ini dengan memahami peran Stablecoin dan siklus Halving pada pasar kripto?",
    related: ["Stablecoin (USDT, USDC), Altcoin, dan Siklus Halving Kripto", "Keamanan Akun Finansial, Phishing, & Manajemen Kredensial", "Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee"]
  },
  {
    id: "stablecoin-siklus-halving-kripto",
    label: "Stablecoin (USDT, USDC), Altcoin, dan Siklus Halving Kripto",
    keys: ["stablecoin", "usdt", "usdc", "altcoin", "halving", "bitcoin halving", "dominasi bitcoin", "btc dominance"],
    body: `Selain Bitcoin, ekosistem pasar kripto digerakkan oleh dinamika likuiditas **Stablecoin**, rotasi ke **Altcoin**, serta siklus pasokan empat tahunan:

• **Stablecoin (Contoh: USDT, USDC):** Aset kripto yang nilainya dirancang stabil mengikuti aset acuan dunia nyata—umumnya dipatok **1:1 terhadap Dolar AS** dan didukung cadangan kas atau surat utang pemerintah AS jangka pendek. Berfungsi sebagai tempat parkir likuiditas tanpa harus mencairkan ke mata uang bank setiap saat.
• **Altcoin (*Alternative Coins*):** Seluruh aset kripto selain Bitcoin (termasuk Ethereum, Solana, dan token proyek lainnya). Umumnya memiliki volatilitas dan risiko kegagalan proyek jauh lebih tinggi dibanding Bitcoin.
• **Bitcoin Halving:** Peristiwa terprogram setiap sekitar **4 tahun sekali** (setiap 210.000 blok) ketika imbalan bagi penambang Bitcoin dipangkas menjadi setengahnya—sehingga laju pasokan Bitcoin baru berkurang 50%.`,
    example: `Secara historis, pasar kripto sering memperlihatkan pola rotasi likuiditas: dana institusional masuk lebih dulu ke **Bitcoin**, kemudian mengalir ke **Ethereum dan Altcoin besar** saat kepercayaan pasar meningkat, sebelum akhirnya kembali ke **Bitcoin atau Stablecoin** ketika pasar memasuki fase koreksi.`,
    closing: "Seluruh 132 modul literasi finansial, investasi, dan mekanisme pasar telah lengkap. Topik mana yang ingin Anda uji atau diskusikan sekarang?",
    related: ["Crypto Spot vs Crypto Futures (Derivatif)", "Pair Aset Kripto Utama: BTC/USD dan ETH/USD", "Cara Pandang Dasar dalam Dunia Finansial & Pasar"]
  },
];
