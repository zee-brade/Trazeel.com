// Bagian materi 05. Isi objek dipertahankan dari file sumber.
export const part05 = [
{
    id: "siklus-ekonomi-makro",
    label: "Siklus Ekonomi Global (Ekspansi, Puncak, Resesi, Pemulihan) & Stagflasi",
    keys: ["siklus ekonomi", "resesi", "stagflasi", "ekspansi ekonomi", "depresi ekonomi", "business cycle", "soft landing", "hard landing"],
    body: `Perekonomian global tidak bergerak lurus naik selamanya, melainkan berputar mengikuti **siklus ekonomi (*business cycle*)** yang memengaruhi suku bunga, laba perusahaan, dan harga seluruh kelas aset:

1. **Ekspansi (*Expansion*):** Pertumbuhan ekonomi meningkat, tingkat pengangguran rendah, konsumsi masyarakat kuat, dan laba perusahaan bertumbuh. Saham dan komoditas cenderung berkinerja baik.
2. **Puncak (*Peak*):** Aktivitas ekonomi mencapai kapasitas maksimal sehingga tekanan inflasi mulai melonjak tajam. Bank sentral biasanya mulai menaikkan suku bunga untuk mengerem panasnya ekonomi.
3. **Kontraksi / Resesi (*Recession*):** Aktivitas ekonomi melambat (secara teknis sering didefinisikan sebagai kontraksi GDP selama dua kuartal berturut-turut), belanja konsumen turun, dan pengangguran naik. Obligasi pemerintah berkualitas tinggi dan emas sering menjadi tempat berlindung.
4. **Pemulihan (*Recovery*):** Suku bunga yang telah dipangkas bank sentral mulai mendorong kembali pinjaman usaha dan konsumsi masyarakat.

Selain itu, dikenal istilah **Stagflasi**—kondisi paling menantang ketika pertumbuhan ekonomi stagnan/melambat, pengangguran tinggi, namun **inflasi tetap tinggi** secara bersamaan.`,
    example: `Ketika bank sentral menaikkan suku bunga untuk meredam inflasi tanpa memicu resesi parah, skenario ideal tersebut disebut **Soft Landing**. Sebaliknya, jika kenaikan suku bunga memicu kontraksi ekonomi tajam dan lonjakan pengangguran, kondisi itu disebut **Hard Landing**.`,
    closing: "Apakah Anda ingin memahami perbedaan antara Kebijakan Fiskal pemerintah dan Kebijakan Moneter bank sentral dalam mengendalikan siklus ini?",
    related: ["Kebijakan Fiskal (Anggaran & Utang Negara) vs Kebijakan Moneter", "Kurva Imbal Hasil Obligasi (Yield Curve & Sinyal Resesi)", "Sentimen Pasar: Risk-On dan Risk-Off"]
  },
  {
    id: "kebijakan-fiskal-vs-moneter",
    label: "Kebijakan Fiskal (Anggaran & Utang Negara) vs Kebijakan Moneter",
    keys: ["kebijakan fiskal", "kebijakan moneter", "defisit anggaran", "stimulus fiskal", "utang negara", "fiscal policy", "monetary policy"],
    body: `Dua tuas utama yang digunakan suatu negara untuk menjaga stabilitas ekonomi adalah **Kebijakan Fiskal** dan **Kebijakan Moneter**:

• **Kebijakan Fiskal (Dijalankan Pemerintah / Kementerian Keuangan):** Mengatur perekonomian melalui **penerimaan pajak** dan **belanja negara (APBN / anggaran pemerintah)**. Menurunkan tarif pajak atau memperbesar belanja infrastruktur/bantuan sosial bersifat ekspansif (mendorong pertumbuhan), tetapi dapat memperlebar defisit anggaran dan menambah penerbitan surat utang negara.
• **Kebijakan Moneter (Dijalankan Bank Sentral Independen):** Mengatur **jumlah uang beredar** dan **tingkat suku bunga acuan** untuk menjaga stabilitas harga (inflasi) dan nilai tukar.

Keseimbangan antara keduanya sangat krusial: jika pemerintah menggelontorkan stimulus fiskal besar-besaran saat inflasi tinggi, bank sentral terpaksa menahan suku bunga lebih tinggi untuk menyeimbangkannya.`,
    example: `Saat pandemi global 2020, pemerintah berbagai negara menerapkan **stimulus fiskal** (bantuan tunai & keringanan pajak) bersamaan dengan **pelonggaran moneter** (pemangkasan suku bunga mendekati 0% dan *Quantitative Easing*), yang memicu pemulihan cepat sekaligus gelombang inflasi tinggi pada tahun-tahun berikutnya.`,
    closing: "Apakah Anda ingin mengetahui indikator pasar obligasi yang paling sering digunakan ekonom untuk memprediksi resesi, yaitu Yield Curve?",
    related: ["Kurva Imbal Hasil Obligasi (Yield Curve & Sinyal Resesi)", "Kebijakan Bank Sentral: Hawkish vs Dovish & QE/QT", "Siklus Ekonomi Global (Ekspansi, Puncak, Resesi, Pemulihan) & Stagflasi"]
  },
  {
    id: "kurva-imbal-hasil-yield-curve",
    label: "Kurva Imbal Hasil Obligasi (Yield Curve & Inverted Yield Curve)",
    keys: ["yield curve", "kurva imbal hasil", "inverted yield curve", "inversi kurva", "10y 2y", "sinyal resesi"],
    body: `**Yield Curve (*Kurva Imbal Hasil*)** adalah grafik yang membandingkan tingkat imbal hasil (*yield*) obligasi pemerintah dengan penerbit yang sama tetapi memiliki jangka waktu jatuh tempo berbeda (misalnya obligasi AS tenor 3 bulan, 2 tahun, 10 tahun, dan 30 tahun).

Tiga bentuk utama *Yield Curve*:
• **Normal Yield Curve (Miring ke Atas):** Obligasi jangka panjang (10 tahun) memberikan *yield* lebih tinggi daripada jangka pendek (2 tahun). Ini kondisi sehat karena investor meminta kompensasi lebih besar untuk mengunci dana dalam waktu lebih lama.
• **Flat Yield Curve (Datar):** Selisih antara *yield* jangka pendek dan jangka panjang menyempit mendekati nol—menandakan masa transisi atau ketidakpastian arah ekonomi.
• **Inverted Yield Curve (Terbalik):** *Yield* obligasi jangka pendek (2 tahun) lebih tinggi daripada jangka panjang (10 tahun). Terjadi karena bank sentral menaikkan suku bunga jangka pendek secara agresif, sementara pasar obligasi memperkirakan perlambatan ekonomi dan pemangkasan suku bunga di masa depan.`,
    example: `Secara historis di Amerika Serikat, kemunculan **Inverted Yield Curve** (selisih *yield* US 10-Year dikurangi US 2-Year bernilai negatif) selama beberapa bulan berturut-turut sering kali mendahului terjadinya resesi ekonomi dalam rentang 6 hingga 18 bulan berikutnya.`,
    closing: "Apakah Anda ingin memahami perbedaan antara suku bunga nominal yang diumumkan bank sentral dengan suku bunga riil?",
    related: ["Suku Bunga Nominal vs Suku Bunga Riil (Real Interest Rate)", "Mengenal US Treasuries (T-Bills, T-Notes, T-Bonds) sebagai Acuan Global", "Siklus Ekonomi Global (Ekspansi, Puncak, Resesi, Pemulihan) & Stagflasi"]
  },
  {
    id: "suku-bunga-riil-vs-nominal",
    label: "Suku Bunga Nominal vs Suku Bunga Riil (Real Interest Rate)",
    keys: ["suku bunga riil", "real interest rate", "nominal interest rate", "real yield", "tips", "bunga riil"],
    body: `Dalam analisis makroekonomi global, investor institusional tidak hanya melihat angka suku bunga acuan yang tertera di berita (**Suku Bunga Nominal**), melainkan menghitung **Suku Bunga Riil (*Real Interest Rate*)**:

Rumus dasarnya:
**Suku Bunga Riil ≈ Suku Bunga Nominal − Tingkat Inflasi**

Mengapa *Real Interest Rate* sangat menentukan pergerakan modal global?
• **Suku Bunga Riil Positif & Naik:** Menyimpan uang tunai atau obligasi pemerintah memberikan keuntungan daya beli nyata di atas inflasi. Kondisi ini sangat menarik arus modal asing masuk ke mata uang tersebut, tetapi menekan harga emas (*non-yielding asset*) dan saham bertumbuh (*growth stocks*).
• **Suku Bunga Riil Negatif:** Tingkat inflasi lebih tinggi daripada suku bunga simpanan, sehingga memegang uang tunai justru merugikan daya beli. Investor terdorong memindahkan dana ke aset riil seperti emas, properti, dan komoditas.`,
    example: `Jika suku bunga acuan bank sentral adalah **5,0%** sementara inflasi tahunan berada di angka **2,5%**, maka **Suku Bunga Riil** bernilai positif sebesar **+2,5%**. Namun jika inflasi melonjak menjadi **7,0%** sementara suku bunga masih 5,0%, suku bunga riil berubah negatif (**-2,0%**), yang biasanya mendorong kenaikan harga emas global.`,
    closing: "Apakah Anda ingin melihat bagaimana arus ekspor-impor dan arus modal tercatat dalam Neraca Perdagangan suatu negara?",
    related: ["Neraca Perdagangan (Trade Balance) dan Neraca Pembayaran (BoP)", "Emas sebagai Lindung Nilai (Hedging Inflasi)", "Mengenal US Treasuries (T-Bills, T-Notes, T-Bonds) sebagai Acuan Global"]
  },
  {
    id: "neraca-perdagangan-bop",
    label: "Neraca Perdagangan (Trade Balance) dan Neraca Pembayaran (BoP)",
    keys: ["neraca perdagangan", "trade balance", "neraca pembayaran", "balance of payments", "current account", "surplus perdagangan", "defisit transaksi berjalan"],
    body: `Kekuatan fundamental jangka panjang suatu mata uang sangat dipengaruhi oleh aliran devisa yang masuk dan keluar dari negara tersebut, yang dicatat dalam **Neraca Pembayaran (*Balance of Payments / BoP*)**:

• **Neraca Perdagangan (*Trade Balance*):** Selisih antara total nilai **ekspor** barang/jasa dengan total nilai **impor** suatu negara. Jika ekspor lebih besar daripada impor, terjadi **surplus perdagangan** yang menciptakan permintaan alami terhadap mata uang negara pengekspor.
• **Neraca Transaksi Berjalan (*Current Account*):** Mencakup neraca perdagangan ditambah pendapatan investasi lintas negara dan transfer berjalan. Defisit transaksi berjalan yang terlalu lebar membuat mata uang suatu negara rentan melemah saat terjadi gejolak global karena bergantung pada arus modal asing untuk menutupinya.`,
    example: `Negara pengekspor komoditas atau manufaktur besar (seperti Tiongkok, Jepang di masa lalu, atau Australia saat harga komoditas tinggi) sering mencatatkan **surplus neraca perdagangan**, yang memberikan bantalan fundamental bagi cadangan devisa dan stabilitas nilai tukarnya.`,
    closing: "Apakah Anda ingin mengetahui bagaimana sistem nilai tukar mata uang di dunia diatur (mengambang bebas vs dipatok)?",
    related: ["Mekanisme Nilai Tukar: Floating, Pegged/Fixed, & Intervensi Bank Sentral", "Strategi Currency Carry Trade Global dan Risiko Unwind", "Karakteristik Pair AUD/USD dan NZD/USD"]
  },
  {
    id: "mekanisme-kurs-valuta-asing",
    label: "Mekanisme Nilai Tukar: Floating, Pegged/Fixed, & Intervensi Bank Sentral",
    keys: ["nilai tukar", "kurs", "floating exchange rate", "pegged currency", "fixed exchange rate", "intervensi bank sentral", "devaluasi", "apresiasi", "depresiasi"],
    body: `Setiap negara menerapkan rezim nilai tukar mata uang yang berbeda sesuai struktur ekonominya:

1. **Free Floating (Mengambang Bebas):** Nilai tukar ditentukan sepenuhnya oleh mekanisme permintaan dan penawaran di pasar valuta asing global (contoh: USD, EUR, JPY, GBP). Perubahan nilai disebut **apresiasi** (menguat) atau **depresiasi** (melemah).
2. **Managed Floating (Mengambang Terkendali):** Nilai tukar bergerak mengikuti pasar, tetapi bank sentral sewaktu-waktu melakukan **intervensi** di pasar valas menggunakan cadangan devisa apabila terjadi gejolak ekstrem yang mengancam stabilitas inflasi (contoh: Rupiah Indonesia / IDR).
3. **Fixed / Pegged Exchange Rate (Kurs Tetap):** Bank sentral mematok nilai tukar mata uangnya pada rasio tetap terhadap mata uang jangkar tertentu (contoh: Dolar Hong Kong / HKD dan Riyal Saudi / SAR yang dipatok terhadap Dolar AS). Penyesuaian nilai resmi pada sistem ini disebut **revaluasi** atau **devaluasi**.`,
    example: `Untuk mempertahankan patokan kurs tetap (**pegged**), bank sentral wajib memiliki cadangan devisa yang sangat besar agar sanggup membeli atau menjual mata uangnya sendiri setiap kali terjadi tekanan pasar.`,
    closing: "Apakah Anda ingin mengenal strategi institusional lintas mata uang yang memanfaatkan selisih suku bunga antarnegara, yaitu Carry Trade?",
    related: ["Strategi Currency Carry Trade Global dan Risiko Unwind", "Sistem Cadangan Devisa Global, Dominasi USD, dan Peran IMF", "Dasar Pasar Forex dan Cara Membaca Kuotasi"]
  },
  {
    id: "carry-trade-global",
    label: "Strategi Currency Carry Trade Global dan Risiko Unwind",
    keys: ["carry trade", "yen carry trade", "selisih suku bunga", "interest rate differential", "unwind"],
    body: `**Currency Carry Trade** adalah strategi institusional global di mana investor meminjam dana dalam mata uang dengan **suku bunga sangat rendah** (*funding currency*), lalu mengonversinya untuk diinvestasikan pada mata uang atau aset negara lain yang menawarkan **suku bunga atau imbal hasil tinggi** (*target currency*).

Karakteristik dan risiko utama *Carry Trade*:
• Selama kondisi pasar tenang (*Risk-On*) dan nilai tukar stabil, pelaku *carry trade* memperoleh keuntungan rutin dari selisih suku bunga harian (*positive swap*).
• **Risiko Unwind (Pembalikan Cepat):** Apabila bank sentral negara berbunga rendah tiba-tiba menaikkan suku bunga atau terjadi kepanikan global (*Risk-Off*), investor beramai-ramai menutup posisi dan membeli kembali mata uang pinjaman tersebut secara serentak—memicu penguatan tajam mata uang *funding* dan kejatuhan pasar aset berisiko.`,
    example: `Selama bertahun-tahun ketika Bank of Japan (BoJ) mempertahankan suku bunga mendekati 0% sementara AS menaikkan suku bunga di atas 5%, **Yen Carry Trade** berkembang sangat masif. Ketika BoJ mulai menaikkan suku bunga pada pertengahan 2024, terjadi gelombang *carry trade unwind* yang memicu gejolak tajam pada USD/JPY dan bursa saham global.`,
    closing: "Apakah Anda ingin memahami bagaimana struktur cadangan devisa dunia dan peran Dolar AS sebagai mata uang cadangan utama?",
    related: ["Sistem Cadangan Devisa Global, Dominasi USD, dan Peran IMF", "Karakteristik Pair USD/JPY (Gopher)", "Sentimen Pasar: Risk-On dan Risk-Off"]
  },
  {
    id: "petrodollar-cadangan-devisa",
    label: "Sistem Cadangan Devisa Global, Dominasi USD, dan Peran IMF",
    keys: ["cadangan devisa", "foreign exchange reserves", "reserve currency", "petrodollar", "imf", "sdr", "dedolarisasi"],
    body: `**Cadangan devisa (*Foreign Exchange Reserves*)** adalah aset likuid dalam mata uang asing, emas moneter, dan surat berharga luar negeri yang disimpan oleh bank sentral suatu negara untuk membiayai impor, membayar utang luar negeri, serta menstabilkan nilai tukar.

Pilar utama arsitektur moneter internasional:
• **Mata Uang Cadangan Utama (*Global Reserve Currency*):** Dolar AS (USD) masih mencakup porsi terbesar cadangan devisa bank sentral dunia dan perdagangan komoditas internasional, diikuti oleh Euro (EUR), Yen Jepang (JPY), Poundsterling (GBP), dan Renminbi Tiongkok (CNY).
• **Peran IMF dan SDR:** *International Monetary Fund* (IMF) berperan menjaga stabilitas moneter global dan menyediakan pinjaman darurat bagi negara yang mengalami krisis neraca pembayaran, dengan unit hitung cadangan internasional bernama **SDR (*Special Drawing Rights*)**.
• **Diversifikasi Cadangan ke Emas:** Banyak bank sentral global dalam beberapa tahun terakhir menambah cadangan emas fisiknya sebagai aset netral tanpa risiko gagal bayar pihak ketiga.`,
    example: `Ketika harga komoditas global seperti minyak mentah dan logam diperdagangkan dalam Dolar AS, negara-negara di seluruh dunia membutuhkan likuiditas USD untuk bertransaksi—inilah yang membuat kebijakan moneter The Fed AS berdampak langsung ke seluruh penjuru ekonomi dunia.`,
    closing: "Apakah Anda ingin mengenal berbagai jenis penyebab inflasi global seperti Demand-Pull dan Cost-Push Inflation?",
    related: ["Jenis Inflasi: Demand-Pull, Cost-Push, dan Supply Chain Shock Global", "Evolusi Uang: Dari Standar Emas (Gold Standard) hingga Uang Fiat Modern", "Kebijakan Bank Sentral: Hawkish vs Dovish & QE/QT"]
  },
  {
    id: "supply-shock-cost-push-inflation",
    label: "Jenis Inflasi: Demand-Pull, Cost-Push, dan Supply Chain Shock Global",
    keys: ["demand pull", "cost push", "supply shock", "hyperinflation", "hiperinflasi", "disinflasi", "jenis inflasi"],
    body: `Tidak semua inflasi berasal dari penyebab yang sama, sehingga cara bank sentral dan investor meresponsnya pun berbeda:

1. **Demand-Pull Inflation (Tarikan Permintaan):** Terjadi ketika permintaan barang dan jasa tumbuh lebih cepat daripada kapasitas produksi ekonomi (*"terlalu banyak uang mengejar terlalu sedikit barang"*). Umumnya muncul saat ekonomi sedang *booming*.
2. **Cost-Push Inflation (Dorongan Biaya Produksi):** Terjadi akibat kenaikan biaya bahan baku, energi, atau upah tenaga kerja yang memaksa produsen menaikkan harga jual kepada konsumen.
3. **Supply Chain Shock (Guncangan Rantai Pasok):** Gangguan mendadak pada pasokan komoditas penting (misalnya embargo minyak, perang, atau bencana alam besar) yang memicu lonjakan harga energi dan pangan secara cepat.
4. **Disinflasi vs Deflasi:** *Disinflasi* adalah melambatnya laju kenaikan harga (misal inflasi turun dari 6% ke 3%—harga tetap naik, tetapi lebih lambat), sedangkan *Deflasi* adalah penurunan tingkat harga umum secara keseluruhan.`,
    example: `Kenaikan suku bunga bank sentral sangat efektif untuk meredam **Demand-Pull Inflation** dengan mengerem belanja kredit, tetapi kurang ampuh mengatasi **Supply Chain Shock** (seperti kelangkaan energi akibat konflik geopolitik) tanpa risiko memperlambat ekonomi.`,
    closing: "Apakah Anda ingin memahami bagaimana pasar tenaga kerja dan pertumbuhan upah memengaruhi keputusan suku bunga bank sentral?",
    related: ["Dinamika Pasar Tenaga Kerja Global, Upah, dan Kurva Phillips", "Inflasi dan Dampaknya terhadap Daya Beli Uang", "Siklus Ekonomi Global (Ekspansi, Puncak, Resesi, Pemulihan) & Stagflasi"]
  },
  {
    id: "pasar-tenaga-kerja-phillips-curve",
    label: "Dinamika Pasar Tenaga Kerja Global, Upah, dan Kurva Phillips",
    keys: ["kurva phillips", "phillips curve", "wage growth", "pertumbuhan upah", "tenaga kerja", "full employment", "jolts"],
    body: `Bank sentral utama dunia (seperti The Fed yang memiliki mandat ganda: stabilitas harga dan lapangan kerja maksimal) memantau ketat data pasar tenaga kerja karena dampaknya terhadap inflasi jasa:

• **Spiral Upah-Harga (*Wage-Price Spiral*):** Ketika tingkat pengangguran sangat rendah dan perusahaan kesulitan mencari pekerja, perusahaan menaikkan gaji untuk menarik tenaga kerja. Kenaikan upah tersebut meningkatkan daya beli sekaligus biaya produksi, sehingga mendorong inflasi terus bertahan tinggi.
• **Kurva Phillips (*Phillips Curve*):** Konsep ekonomi klasik yang menggambarkan hubungan terbalik dalam jangka pendek antara tingkat pengangguran dan tingkat inflasi—semakin ketat pasar tenaga kerja (pengangguran rendah), semakin tinggi tekanan kenaikan upah dan harga.`,
    example: `Itulah sebabnya dalam rilis laporan tenaga kerja AS (**NFP**), pasar tidak hanya melihat jumlah pekerjaan baru, tetapi juga mencermati angka **Average Hourly Earnings (pertumbuhan upah per jam)** untuk menilai apakah tekanan inflasi mulai mereda atau justru bertahan.`,
    closing: "Apakah Anda ingin mengenal instrumen obligasi pemerintah AS (US Treasuries) yang menjadi patokan harga hampir seluruh aset keuangan global?",
    related: ["Mengenal US Treasuries (T-Bills, T-Notes, T-Bonds) sebagai Acuan Global", "Indikator Makroekonomi Utama: GDP, PMI, dan Retail Sales", "Bagaimana cara membaca analisis fundamental?"]
  },
  {
    id: "obligasi-pemerintah-as-treasuries",
    label: "Mengenal US Treasuries (T-Bills, T-Notes, T-Bonds) sebagai Acuan Global",
    keys: ["us treasuries", "treasury", "t-bills", "t-notes", "t-bonds", "risk free rate", "obligasi as"],
    body: `**US Treasuries** adalah surat utang yang diterbitkan oleh Departemen Keuangan Amerika Serikat. Karena didukung penuh oleh pemerintah dengan ekonomi dan mata uang cadangan terbesar di dunia, imbal hasil *US Treasuries* sering dijadikan acuan **Risk-Free Rate** (tingkat pengembalian bebas risiko) dalam keuangan global.

Tiga kategori utama berdasarkan tenor jatuh temponya:
• **T-Bills (*Treasury Bills*):** Jatuh tempo jangka pendek (**1 bulan hingga 1 tahun**). Tidak membayar kupon berkala, melainkan dijual dengan harga diskon dan dibayar penuh sebesar nilai nominal saat jatuh tempo.
• **T-Notes (*Treasury Notes*):** Jatuh tempo menengah (**2, 3, 5, 7, dan 10 tahun**), membayar kupon setiap 6 bulan. **US 10-Year Treasury Note** adalah barometer terpenting untuk suku bunga KPR, valuasi saham teknologi, dan harga emas dunia.
• **T-Bonds (*Treasury Bonds*):** Jatuh tempo jangka panjang (**20 hingga 30 tahun**) dengan pembayaran kupon setiap 6 bulan.`,
    example: `Harga obligasi dan *yield* (imbal hasil) selalu bergerak **berlawanan arah**: ketika investor global beramai-ramai membeli *US Treasuries* saat panik (*Risk-Off*), harga obligasi naik sehingga **yield-nya turun**—yang biasanya menjadi angin segar bagi harga emas dan saham defensif.`,
    closing: "Apakah Anda ingin memahami risiko utang negara dan bagaimana lembaga pemeringkat kredit menilai kelayakan suatu negara?",
    related: ["Risiko Gagal Bayar Utang Negara (Sovereign Debt Crisis) & Peringkat Kredit", "Kurva Imbal Hasil Obligasi (Yield Curve & Sinyal Resesi)", "Obligasi dan Surat Berharga Negara (SBN / Sukuk)"]
  },
  {
    id: "krisis-utang-sovereign-default",
    label: "Risiko Gagal Bayar Utang Negara (Sovereign Debt Crisis) & Peringkat Kredit",
    keys: ["sovereign debt", "utang negara", "gagal bayar negara", "default", "peringkat kredit", "credit rating", "investment grade", "junk bond", "rasio utang terhadap pdb"],
    body: `Seperti halnya individu dan perusahaan, negara yang menerbitkan surat utang juga dinilai kemampuan bayarnya melalui rasio ekonomi serta lembaga pemeringkat kredit internasional (**S&P, Moody's, dan Fitch**):

• **Rasio Utang terhadap PDB (*Debt-to-GDP Ratio*):** Membandingkan total utang pemerintah dengan ukuran ekonomi tahunan negara tersebut. Negara yang berutang dalam mata uangnya sendiri dan memiliki kredibilitas bank sentral kuat memiliki ruang napas lebih lebar dibandingkan negara berkembang yang berutang dalam mata uang asing (seperti USD).
• **Investment Grade vs Speculative (Junk):** Obligasi negara atau korporasi berperingkat **AAA hingga BBB-** masuk kategori *Investment Grade* (risiko gagal bayar rendah, bunga pinjaman lebih murah). Peringkat di bawah itu (**BB+ ke bawah**) masuk kategori *Non-Investment Grade / High-Yield (Junk)* dengan risiko gagal bayar lebih tinggi.
• **Sovereign Default:** Kondisi ketika pemerintah gagal membayar bunga atau pokok utangnya tepat waktu, yang berujung pada restrukturisasi utang, anjloknya mata uang, dan krisis perbankan domestik.`,
    example: `Ketika lembaga pemeringkat menurunkan peringkat kredit (*downgrade*) suatu negara, investor institusional global meminta kompensasi **yield lebih tinggi** untuk memegang obligasi negara tersebut, sehingga biaya pinjaman pemerintah dan perusahaan di negara itu ikut naik.`,
    closing: "Apakah Anda ingin membahas bagaimana ketegangan geopolitik, tarif perdagangan, dan sanksi memengaruhi arus modal dunia?",
    related: ["Dampak Geopolitik, Tarif Perdagangan, dan Sanksi Ekonomi terhadap Arus Modal", "Mengenal US Treasuries (T-Bills, T-Notes, T-Bonds) sebagai Acuan Global", "Kebijakan Fiskal (Anggaran & Utang Negara) vs Kebijakan Moneter"]
  },
  {
    id: "geopolitik-sanksi-komoditas",
    label: "Dampak Geopolitik, Tarif Perdagangan, dan Sanksi Ekonomi terhadap Arus Modal",
    keys: ["geopolitik", "perang dagang", "tarif impor", "sanksi ekonomi", "embargo", "arus modal", "capital outflow"],
    body: `Peristiwa geopolitik dan kebijakan perdagangan internasional dapat mengubah peta inflasi dan pergerakan mata uang dalam sekejap:

• **Tarif Impor & Perang Dagang:** Kenaikan tarif bea masuk antarnegara besar meningkatkan harga barang impor bagi konsumen (bersifat inflasioner) dan mengganggu efisiensi rantai pasok perusahaan multinasional.
• **Konflik di Jalur Pasokan Energi/Logistik:** Ketegangan di kawasan penghasil minyak (seperti Timur Tengah) atau jalur pelayaran strategis dunia langsung memicu lonjakan biaya pengiriman dan harga energi global.
• **Arus Modal Keluar (*Capital Outflow*):** Saat ketidakpastian geopolitik meningkat, dana asing cenderung keluar dari pasar negara berkembang (*Emerging Markets*) dan kembali masuk ke aset likuid berbasis Dolar AS, obligasi pemerintah AS, atau emas.`,
    example: `Penerapan tarif impor baru secara luas dapat mendorong kenaikan inflasi domestik, sehingga memaksa bank sentral menunda pemangkasan suku bunga—yang pada akhirnya memperkuat Dolar AS dan menekan mata uang negara mitra dagangnya.`,
    closing: "Apakah Anda ingin mengenal indikator psikologis utama di Wall Street untuk mengukur tingkat ketakutan pasar, yaitu indeks VIX?",
    related: ["Indeks Volatilitas Pasar (VIX / Fear Index) dan Cara Membaca Kepanikan Global", "Sentimen Pasar: Risk-On dan Risk-Off", "Sistem Cadangan Devisa Global, Dominasi USD, dan Peran IMF"]
  },
  {
    id: "indeks-volatilitas-vix",
    label: "Indeks Volatilitas Pasar (VIX / Fear Index) dan Cara Membaca Kepanikan Global",
    keys: ["vix", "fear index", "indeks volatilitas", "cboe vix", "kepanikan pasar", "implied volatility"],
    body: `**CBOE Volatility Index (VIX)**—sering dijuluki *"Fear Index"* (Indeks Ketakutan)—adalah ukuran ekspektasi pasar terhadap volatilitas indeks saham **S&P 500** selama 30 hari ke depan yang dihitung dari harga kontrak *options*.

Panduan praktis membaca level indeks VIX:
• **VIX di bawah 15:** Kondisi pasar sangat tenang, optimis, dan stabil (*complacency / risk-on*).
• **VIX antara 15 – 25:** Fluktuasi pasar normal sehari-hari.
• **VIX di atas 30 – 40+:** Menandakan ketakutan tinggi, ketidakpastian makro, atau kepanikan jual masif di pasar saham global (*risk-off*).

Bagi investor jangka panjang, lonjakan ekstrem VIX sering digunakan sebagai indikator kontrarian untuk mengamati kapan kepanikan pasar mulai mencapai titik jenuhnya.`,
    example: `Saat terjadi guncangan makro mendadak, indeks saham S&P 500 biasanya turun tajam sementara indeks **VIX** melonjak dari kisaran 14 menembus di atas 35 dalam beberapa hari—menandakan investor institusional berlomba-lomba membeli perlindungan (*hedging*).`,
    closing: "Apakah Anda ingin menutup bagian makroekonomi ini dengan memahami pengaruh jumlah uang beredar (M2 Money Supply) terhadap harga aset jangka panjang?",
    related: ["Jumlah Uang Beredar (M2 Money Supply) dan Likuiditas Global", "Sentimen Pasar: Risk-On dan Risk-Off", "Indeks Saham AS: US30, NAS100, dan SPX500"]
  },
  {
    id: "likuiditas-global-m2-money-supply",
    label: "Jumlah Uang Beredar (M2 Money Supply) dan Likuiditas Global",
    keys: ["m2", "money supply", "jumlah uang beredar", "m1", "likuiditas global", "ekspansi moneter"],
    body: `**Jumlah Uang Beredar (*Money Supply*)** mengukur total uang tunai dan aset likuid yang beredar dalam perekonomian pada suatu waktu. Para ekonom membaginya ke dalam beberapa lapisan:

• **M1 (Uang Sempit / *Narrow Money*):** Uang kartal (kertas dan logam) yang dipegang masyarakat ditambah simpanan giro yang dapat ditarik sewaktu-waktu.
• **M2 (Uang Luas / *Broad Money*):** Mencakup seluruh komponen M1 ditambah tabungan, deposito berjangka ritel, dan instrumen pasar uang jangka pendek.

Mengapa **pertumbuhan M2** sangat diperhatikan investor global? Karena ketika bank sentral memperluas likuiditas dan pertumbuhan M2 melonjak tajam, kelebihan likuiditas tersebut tidak hanya mengalir ke harga barang konsumsi, tetapi juga mendorong kenaikan valuasi aset langka seperti saham, properti, emas, dan aset digital.`,
    example: `Lonjakan drastis **M2 Money Supply** global selama 2020–2021 menjadi salah satu pendorong utama reli hampir seluruh kelas aset (*everything rally*), sedangkan fase pengetatan likuiditas (*QT*) dan kontraksi pertumbuhan M2 pada 2022 menekan harga obligasi, saham teknologi, dan aset digital secara bersamaan.`,
    closing: "Part 1 (15 modul makroekonomi global) selesai! Apakah Anda siap melanjutkan ke Part 2 untuk membahas Modern Portfolio Theory, Valuasi Institusional, & Rotasi Sektor?",
    related: ["Kebijakan Bank Sentral: Hawkish vs Dovish & QE/QT", "Inflasi dan Dampaknya terhadap Daya Beli Uang", "Modern Portfolio Theory (MPT), Efficient Frontier, dan Korelasi Portofolio"]
  },
];
