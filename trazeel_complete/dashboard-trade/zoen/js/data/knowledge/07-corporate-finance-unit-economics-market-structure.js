// Bagian materi 07. Isi objek dipertahankan dari file sumber.
export const part07 = [
{
    id: "struktur-modal-debt-vs-equity",
    label: "Struktur Modal Perusahaan: Pendanaan Utang (Debt) vs Ekuitas (Equity)",
    keys: ["struktur modal", "capital structure", "debt financing", "equity financing", "pendanaan utang", "pendanaan ekuitas", "tax shield"],
    body: `Setiap perusahaan di dunia membutuhkan modal untuk berekspansi. Keputusan manajemen dalam mengombinasikan sumber dana tersebut disebut **Struktur Modal (*Capital Structure*)**, yang terbagi menjadi dua jalur utama:

• **Pendanaan Utang (*Debt Financing* — Obligasi Korporasi & Pinjaman Bank):** Perusahaan meminjam dana dengan kewajiban membayar bunga rutin dan melunasi pokok pada tanggal jatuh tempo. Kelebihannya: kepemilikan pemegang saham tidak terdilusi dan beban bunga sering kali mengurangi laba kena pajak (*Interest Tax Shield*). Risikonya: kewajiban bayar tetap mengikat meskipun perusahaan sedang merugi.
• **Pendanaan Ekuitas (*Equity Financing* — Penerbitan Saham Baru / Investor Strategis):** Perusahaan menjual sebagian kepemilikan saham untuk memperoleh dana segar tanpa kewajiban membayar bunga maupun mencicil pokok. Risikonya: persentase kepemilikan pemegang saham lama berkurang (*dilusi*) dan biaya modal ekuitas secara jangka panjang umumnya lebih mahal daripada utang.`,
    example: `Perusahaan yang memiliki arus kas sangat stabil (seperti perusahaan utilitas atau telekomunikasi) sanggup menanggung porsi **utang lebih besar** dengan aman, sedangkan perusahaan teknologi tahap awal dengan arus kas fluktuatif umumnya mengandalkan **pendanaan ekuitas** agar tidak tercekik beban bunga.`,
    closing: "Apakah Anda ingin memahami bagaimana perusahaan menghitung biaya rata-rata dari kombinasi utang dan ekuitas tersebut melalui WACC?",
    related: ["Biaya Modal Perusahaan: Cost of Debt, Cost of Equity, dan WACC", "Rasio Profitabilitas & Kesehatan Utang: ROE, ROA, NPM, dan DER", "Aksi Korporasi Pasar Modal: IPO, Stock Split, Right Issue, dan Buyback"]
  },
  {
    id: "biaya-modal-wacc-cost-of-equity",
    label: "Biaya Modal Perusahaan: Cost of Debt, Cost of Equity, dan WACC",
    keys: ["cost of capital", "biaya modal", "cost of equity", "cost of debt", "capm", "wacc", "hurdle rate"],
    body: `Uang modal tidak pernah gratis—baik kreditur maupun pemegang saham menuntut kompensasi imbal hasil atas risiko yang mereka tanggung. Dalam keuangan korporasi, biaya ini diukur melalui **WACC (*Weighted Average Cost of Capital*)**:

• **Cost of Debt (Biaya Utang):** Tingkat suku bunga efektif yang dibayar perusahaan atas pinjaman dan obligasinya setelah disesuaikan dengan penghematan pajak (*after-tax cost of debt*).
• **Cost of Equity (Biaya Ekuitas):** Tingkat imbal hasil minimal yang diharapkan investor saham sebagai kompensasi menanggung risiko kepemilikan bisnis (sering dihitung menggunakan model **CAPM**: *Risk-Free Rate + Beta × Equity Risk Premium*).
• **WACC & Hurdle Rate:** Rata-rata tertimbang dari *Cost of Debt* dan *Cost of Equity* sesuai porsinya di neraca. WACC berfungsi sebagai **Hurdle Rate** (batas imbal hasil minimal)—proyek bisnis baru hanya layak dijalankan jika imbal hasilnya melampaui WACC.`,
    example: `Jika **WACC** sebuah perusahaan adalah **9%**, lalu manajemen berinvestasi pada pabrik baru yang hanya menghasilkan imbal hasil **6%**, maka proyek tersebut sebenarnya **menghancurkan nilai pemegang saham** karena return-nya lebih kecil daripada biaya modal yang digunakan.`,
    closing: "Apakah Anda ingin mengetahui perbedaan perlakuan akuntansi dan arus kas antara belanja modal (CapEx) dan biaya operasional (OpEx)?",
    related: ["Belanja Modal (CapEx) vs Biaya Operasional (OpEx), Depresiasi, dan Amortisasi", "ROIC (Return on Invested Capital) dan ROCE: Mengukur Efisiensi Penciptaan Nilai", "Valuasi Institusional: Discounted Cash Flow (DCF), WACC, & Intrinsic Value"]
  },
  {
    id: "capex-vs-opex-depresiasi",
    label: "Belanja Modal (CapEx) vs Biaya Operasional (OpEx), Depresiasi, dan Amortisasi",
    keys: ["capex", "opex", "capital expenditure", "operating expense", "depresiasi", "amortisasi", "penyusutan"],
    body: `Membedakan pengeluaran harian dan investasi aset jangka panjang sangat penting dalam membaca laporan arus kas dan kualitas laba suatu bisnis:

• **CapEx (*Capital Expenditure* / Belanja Modal):** Dana yang dikeluarkan untuk membeli, membangun, atau meningkatkan aset fisik jangka panjang yang manfaatnya lebih dari satu tahun—seperti gedung, mesin pabrik, armada kendaraan, atau pusat data (*data center*). CapEx dicatat di neraca dan laporan arus kas investasi.
• **OpEx (*Operating Expenditure* / Biaya Operasional):** Biaya rutin sehari-hari untuk menjaga bisnis tetap berjalan—seperti gaji karyawan, sewa kantor, listrik, biaya pemasaran, dan langganan perangkat lunak (*cloud*). Langsung dibebankan di laporan laba rugi tahun berjalan.
• **Depresiasi & Amortisasi:** Proses akuntansi untuk menyebarkan biaya perolehan aset CapEx secara bertahap sepanjang umur ekonomisnya (**Depresiasi** untuk aset berwujud seperti mesin; **Amortisasi** untuk aset tak berwujud seperti hak paten dan perangkat lunak).`,
    example: `Bisnis perangkat lunak (*SaaS*) umumnya bersifat **asset-light** dengan **CapEx rendah**, sehingga sebagian besar laba operasionalnya langsung berubah menjadi *Free Cash Flow*. Sebaliknya, perusahaan tambang atau maskapai membutuhkan **CapEx raksasa** secara terus-menerus untuk mengganti peralatan berat.`,
    closing: "Apakah Anda ingin mengenal rasio utama yang mengukur seberapa pintar manajemen memutar modalnya, yaitu ROIC?",
    related: ["ROIC (Return on Invested Capital) dan ROCE: Mengukur Efisiensi Penciptaan Nilai", "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas", "Valuasi Komparatif: EV/EBITDA, Price-to-Sales (P/S), & Free Cash Flow Yield"]
  },
  {
    id: "roic-roce-penciptaan-nilai",
    label: "ROIC (Return on Invested Capital) dan ROCE: Mengukur Efisiensi Penciptaan Nilai",
    keys: ["roic", "return on invested capital", "roce", "nopat", "invested capital", "penciptaan nilai", "alokasi modal"],
    body: `Rasio ROE terkadang bisa terlihat tinggi secara semu jika perusahaan menumpuk utang besar. Untuk mengukur efisiensi operasional murni tanpa distorsi utang, investor global menggunakan **ROIC (*Return on Invested Capital*)**:

• **Apa itu ROIC?** Mengukur seberapa besar laba operasional bersih setelah pajak (*NOPAT*) yang dihasilkan dari setiap rupiah/dolar total modal yang ditanamkan dalam bisnis (gabungan ekuitas pemegang saham dan utang berbunga).
• **Aturan Penciptaan Nilai (*Value Creation*):** Perusahaan benar-benar menciptakan kekayaan jangka panjang apabila **ROIC > WACC** (imbal hasil modal yang diinvestasikan lebih tinggi daripada biaya rata-rata modalnya).
• **ROCE (*Return on Capital Employed*):** Rasio serupa yang membandingkan laba sebelum bunga dan pajak (*EBIT*) dengan total modal kerja jangka panjang (*Total Aset − Liabilitas Jangka Pendek*).`,
    example: `Perusahaan yang mampu mempertahankan **ROIC di atas 15%–20%** secara konsisten selama puluhan tahun sambil menginvestasikan kembali labanya (*compounding machine*) sering kali menghasilkan kenaikan harga saham jangka panjang yang jauh melampaui indeks pasar.`,
    closing: "Apakah Anda ingin mempelajari bagaimana perusahaan mengevaluasi kelayakan investasi proyek baru menggunakan NPV dan IRR?",
    related: ["Evaluasi Proyek Bisnis: NPV (Net Present Value), IRR, dan Payback Period", "Biaya Modal Perusahaan: Cost of Debt, Cost of Equity, dan WACC", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis"]
  },
  {
    id: "npv-irr-payback-period",
    label: "Evaluasi Proyek Bisnis: NPV (Net Present Value), IRR, dan Payback Period",
    keys: ["npv", "net present value", "irr", "internal rate of return", "payback period", "capital budgeting", "kelayakan proyek"],
    body: `Dalam *Capital Budgeting* (penganggaran modal), manajer keuangan dan investor menggunakan tiga metode utama untuk memutuskan apakah suatu proyek ekspansi atau investasi layak dijalankan:

1. **NPV (*Net Present Value* / Nilai Bersih Sekarang):** Selisih antara nilai sekarang dari seluruh arus kas masuk masa depan (yang sudah didiskontokan dengan tingkat bunga/WACC) dikurangi biaya investasi awal hari ini. **NPV positif (> 0)** berarti proyek tersebut menambah nilai kekayaan bersih.
2. **IRR (*Internal Rate of Return*):** Tingkat persentase imbal hasil tahunan efektif yang membuat nilai NPV proyek tepat sama dengan nol. Proyek dianggap layak apabila **IRR lebih besar daripada WACC / target imbal hasil minimal**.
3. **Payback Period (Periode Balik Modal):** Waktu yang dibutuhkan agar akumulasi arus kas bersih proyek menutup kembali modal investasi awal. Sederhana, namun kelemahannya tidak memperhitungkan arus kas setelah balik modal maupun nilai waktu uang.`,
    example: `Jika pembangunan gudang logistik membutuhkan modal awal **$1.000.000**, menghasilkan **IRR 16%** per tahun sementara biaya modal (**WACC**) perusahaan hanya **9%**, maka proyek tersebut menghasilkan **NPV positif** dan layak dieksekusi.`,
    closing: "Apakah Anda ingin memahami bagaimana kecepatan perputaran persediaan dan tagihan diukur melalui Cash Conversion Cycle?",
    related: ["Siklus Konversi Kas (Cash Conversion Cycle / CCC): Inventory, Piutang, dan Utang Usaha", "Nilai Waktu Uang (Time Value of Money): Present Value & Future Value", "Biaya Modal Perusahaan: Cost of Debt, Cost of Equity, dan WACC"]
  },
  {
    id: "siklus-konversi-kas-ccc",
    label: "Siklus Konversi Kas (Cash Conversion Cycle / CCC): Inventory, Piutang, dan Utang Usaha",
    keys: ["cash conversion cycle", "ccc", "siklus konversi kas", "dio", "dso", "dpo", "working capital efficiency"],
    body: `**Cash Conversion Cycle (CCC)** mengukur berapa hari waktu yang dibutuhkan sebuah perusahaan untuk mengubah investasi pada persediaan barang (*inventory*) dan sumber daya kembali menjadi **uang tunai di rekening bank**.

Rumus komponennya terdiri dari tiga indikator utama:
**CCC = DIO + DSO − DPO**
• **DIO (*Days Inventory Outstanding*):** Rata-rata jumlah hari barang tersimpan di gudang sebelum terjual. Semakin kecil semakin cepat perputaran stoknya.
• **DSO (*Days Sales Outstanding*):** Rata-rata jumlah hari yang dibutuhkan untuk menagih pembayaran tunai setelah penjualan dilakukan.
• **DPO (*Days Payable Outstanding*):** Rata-rata jumlah hari yang dimiliki perusahaan sebelum harus membayar tagihan kepada pemasok (*supplier*).

Semakin pendek (atau bahkan **negatif**) angka CCC, semakin efisien perusahaan mengelola modal kerjanya.`,
    example: `Raksasa ritel dan *e-commerce* global sering memiliki **CCC negatif**: mereka menerima pembayaran tunai dari pelanggan pada hari pertama (DSO mendekati 0), menjual barang dalam hitungan minggu, namun baru membayar pemasoknya 45 hingga 60 hari kemudian—sehingga pemasok secara tidak langsung ikut membiayai ekspansi mereka.`,
    closing: "Apakah Anda ingin mengenal konsep Operating Leverage dan Financial Leverage yang membuat laba perusahaan melonjak tajam saat omzet naik?",
    related: ["Operating Leverage vs Financial Leverage dalam Bisnis dan Saham", "Manajemen Modal Kerja dan Arus Kas Bisnis Kecil", "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas"]
  },
  {
    id: "operating-leverage-vs-financial-leverage",
    label: "Operating Leverage vs Financial Leverage dalam Bisnis dan Saham",
    keys: ["operating leverage", "financial leverage", "biaya tetap", "fixed cost", "variable cost", "pedang bermata dua"],
    body: `Dalam analisis kinerja perusahaan, **Leverage (Daya Ungkit)** terbagi menjadi dua jenis yang menyebabkan persentase perubahan laba bersih bergerak jauh lebih besar daripada persentase perubahan penjualan:

• **Operating Leverage (Daya Ungkit Operasional):** Muncul ketika struktur biaya perusahaan didominasi oleh **biaya tetap (*fixed costs*)** dibandingkan biaya variabel (*variable costs*)—contohnya perusahaan perangkat lunak, maskapai penerbangan, atau pabrik semikonduktor. Setelah titik impas (*break-even*) terlampaui, hampir setiap tambahan penjualan baru langsung mengalir menjadi laba operasional. Sebaliknya, saat penjualan turun sedikit saja, laba langsung anjlok drastis.
• **Financial Leverage (Daya Ungkit Keuangan):** Penggunaan **utang berbunga** untuk membiayai aset perusahaan. Selama imbal hasil aset lebih tinggi daripada bunga utang, keuntungan pemegang saham (ROE) berlipat ganda; namun saat ekonomi resesi, beban bunga tetap menjadi tekanan berat.`,
    example: `Sebuah perusahaan perangkat lunak (*SaaS*) dengan **Operating Leverage tinggi** mungkin hanya mengalami kenaikan pendapatan 20%, tetapi laba bersihnya melonjak 70% karena biaya pengembangan aplikasi sudah dibayar di muka dan tambahan pelanggan baru hampir tidak menambah biaya produksi.`,
    closing: "Apakah Anda ingin mempelajari metrik inti dalam menilai kesehatan model bisnis digital dan langganan modern, yaitu Unit Economics (CAC & LTV)?",
    related: ["Unit Economics Bisnis Modern: CAC, LTV, Churn Rate, dan Burn Rate", "Menghitung HPP, Margin Laba, dan Break-Even Point (BEP) Usaha", "Struktur Modal Perusahaan: Pendanaan Utang (Debt) vs Ekuitas (Equity)"]
  },
  {
    id: "unit-economics-cac-ltv-churn",
    label: "Unit Economics Bisnis Modern: CAC, LTV, Churn Rate, dan Burn Rate",
    keys: ["unit economics", "cac", "customer acquisition cost", "ltv", "lifetime value", "churn rate", "burn rate", "runway"],
    body: `Dalam mengevaluasi perusahaan teknologi, *startup*, dan bisnis berbasis langganan (*subscription*), investor global membedah **Unit Economics**—profitabilitas per satu pelanggan tunggal:

• **CAC (*Customer Acquisition Cost*):** Total biaya pemasaran dan penjualan yang dikeluarkan untuk mendapatkan satu pelanggan baru.
• **LTV (*Customer Lifetime Value*):** Total margin keuntungan bersih yang dihasilkan satu pelanggan selama ia terus menggunakan produk/layanan perusahaan. Aturan sehatnya adalah **rasio LTV : CAC minimal 3 : 1**.
• **Churn Rate:** Persentase pelanggan yang berhenti berlangganan atau berhenti membeli dalam periode tertentu. *Churn* tinggi menghancurkan nilai LTV.
• **Burn Rate & Runway:** *Burn Rate* adalah kecepatan perusahaan menghabiskan cadangan kas setiap bulan saat masih rugi; *Runway* adalah berapa bulan perusahaan dapat bertahan hidup dengan sisa kas yang ada sebelum membutuhkan pendanaan baru.`,
    example: `Jika sebuah aplikasi berlangganan mengeluarkan **CAC $30** untuk mendapatkan satu pengguna baru, lalu pengguna tersebut rata-rata berlangganan selama 24 bulan dengan laba bersih $5/bulan (**LTV = $120**), maka rasio **LTV:CAC mencapai 4:1**—menandakan model bisnis yang sangat sehat untuk diskalakan.`,
    closing: "Apakah Anda ingin mengenal bagaimana perusahaan mempercepat ekspansi melalui Merger, Akuisisi (M&A), dan Spin-Off?",
    related: ["Merger, Akuisisi (M&A), Spin-Off, dan Sinergi Korporasi", "Mengenal Hedge Fund, Private Equity, dan Venture Capital", "Operating Leverage vs Financial Leverage dalam Bisnis dan Saham"]
  },
  {
    id: "merger-akuisisi-ma-spinoff",
    label: "Merger, Akuisisi (M&A), Spin-Off, dan Sinergi Korporasi",
    keys: ["merger", "akuisisi", "m&a", "spin off", "hostile takeover", "sinergi", "goodwill", "konglomerasi"],
    body: `Selain tumbuh secara organik dari penjualan sendiri, perusahaan besar sering melakukan restrukturisasi kepemilikan melalui transaksi **M&A (*Mergers and Acquisitions*)**:

• **Merger (Penggabungan):** Dua perusahaan dengan skala relatif setara sepakat bergabung membentuk satu entitas baru.
• **Akuisisi (*Acquisition*):** Satu perusahaan membeli mayoritas saham perusahaan lain sehingga mengambil alih kendali penuhnya. Jika dilakukan tanpa persetujuan manajemen perusahaan target (dengan membeli saham langsung dari pasar atau pemegang saham), disebut **Hostile Takeover**.
• **Sinergi vs Overpaying:** Tujuan utama M&A adalah menciptakan **sinergi** (penghematan biaya duplikasi atau perluasan saluran distribusi gabungan). Namun secara historis, banyak transaksi M&A gagal menciptakan nilai karena pembeli membayar harga premi terlalu mahal.
• **Spin-Off:** Kebalikan dari merger—perusahaan induk memisahkan salah satu divisi bisnisnya menjadi perusahaan publik baru yang berdiri mandiri agar fokus manajemen dan valuasi pasarnya lebih optimal.`,
    example: `Ketika perusahaan teknologi raksasa mengakuisisi perusahaan kecerdasan buatan yang lebih kecil untuk mengintegrasikan fiturnya ke ratusan juta pengguna yang sudah ada, itulah contoh **sinergi distribusi dan teknologi** dalam akuisisi.`,
    closing: "Apakah Anda ingin mengetahui apa yang terjadi secara hukum dan finansial ketika perusahaan besar mengalami gagal bayar atau restrukturisasi utang?",
    related: ["Restrukturisasi Korporasi, Chapter 11 / PKPU, dan Urutan Hak Klaim Likuidasi", "Aksi Korporasi Pasar Modal: IPO, Stock Split, Right Issue, dan Buyback", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis"]
  },
  {
    id: "restrukturisasi-utang-korporasi-kebangkrutan",
    label: "Restrukturisasi Korporasi, Chapter 11 / PKPU, dan Urutan Hak Klaim Likuidasi",
    keys: ["kebangkrutan", "likuidasi", "chapter 11", "pkpu", "pailit", "hak klaim", "senior debt", "subordinated debt"],
    body: `Ketika sebuah perusahaan tidak lagi mampu memenuhi kewajiban utangnya (*insolvency*), hukum bisnis internasional dan nasional mengatur dua jalur penyelesaian serta urutan prioritas pembayaran aset:

• **Restrukturisasi / Reorganisasi (Contoh: Chapter 11 di AS atau PKPU):** Perusahaan mendapat perlindungan hukum sementara dari tuntutan kreditur untuk menyusun ulang jadwal utang, memangkas biaya, atau mengonversi utang menjadi saham (*debt-to-equity swap*) agar bisnis tetap beroperasi.
• **Likuidasi / Kepailitan (Contoh: Chapter 7):** Seluruh operasional dihentikan dan aset perusahaan dijual untuk melunasi kewajiban sesuai **Hierarki Hak Klaim (*Capital Stack*)**:
  1. **Secured Creditors (Kreditur Separatis):** Pemegang jaminan aset spesifik (hipotek/fidusia).
  2. **Unsecured Senior Creditors:** Pemegang obligasi senior dan utang bank tanpa jaminan khusus.
  3. **Subordinated Debt:** Pemegang utang subordinasi dengan tingkat prioritas lebih rendah.
  4. **Preferred Stockholders:** Pemegang saham preferen.
  5. **Common Stockholders (Pemegang Saham Biasa):** Urutan paling akhir—sering kali tidak menerima sisa apa pun dalam proses likuidasi.`,
    example: `Urutan prioritas likuidasi inilah alasan mendasar mengapa **obligasi korporasi memiliki risiko gagal bayar lebih rendah daripada saham biasa** pada perusahaan yang sama—karena pemegang obligasi dibayar lebih dulu sebelum pemegang saham biasa.`,
    closing: "Apakah Anda ingin memahami bagaimana struktur persaingan pasar (Monopoli, Oligopoli, dan Persaingan Sempurna) memengaruhi margin laba perusahaan?",
    related: ["Struktur Pasar Ekonomi: Persaingan Sempurna, Monopoli, Oligopoli, & Kartel", "Struktur Modal Perusahaan: Pendanaan Utang (Debt) vs Ekuitas (Equity)", "Risiko Gagal Bayar Utang Negara (Sovereign Debt Crisis) & Peringkat Kredit"]
  },
  {
    id: "struktur-pasar-monopoli-oligopoli",
    label: "Struktur Pasar Ekonomi: Persaingan Sempurna, Monopoli, Oligopoli, & Kartel",
    keys: ["struktur pasar", "monopoli", "oligopoli", "persaingan sempurna", "persaingan monopolistik", "kartel", "antitrust"],
    body: `Tingkat persaingan dalam suatu industri menentukan seberapa besar kekuatan perusahaan dalam menetapkan harga jual dan mempertahankan margin laba:

1. **Persaingan Sempurna (*Perfect Competition*):** Sangat banyak penjual menawarkan produk identik tanpa hambatan masuk (contoh: komoditas pertanian dasar). Penjual hanyalah *price taker* dengan margin laba tipis.
2. **Persaingan Monopolistik (*Monopolistic Competition*):** Banyak penjual menawarkan produk serupa tetapi dibedakan lewat merek, desain, atau kualitas (contoh: restoran, pakaian, kosmetik).
3. **Oligopoli:** Pasar dikuasai oleh hanya segelintir pemain besar dengan hambatan masuk sangat tinggi (contoh: produsen pesawat komersial Boeing & Airbus, sistem operasi ponsel, atau operator telekomunikasi). Keputusan harga satu pemain langsung memengaruhi pemain lainnya.
4. **Monopoli & Regulasi Antitrust:** Satu perusahaan menguasai pasokan tanpa substitusi dekat. Otoritas persaingan usaha (*antitrust regulator*) di berbagai negara mengawasi ketat praktik monopoli dan **kartel** (persekongkolan penetapan harga) agar tidak merugikan konsumen.`,
    example: `Industri dengan struktur **Oligopoli** yang sehat dan hambatan masuk tinggi cenderung menghasilkan **margin keuntungan dan stabilitas laba jauh lebih tinggi** dibandingkan industri yang berada dalam persaingan sempurna.`,
    closing: "Apakah Anda ingin memahami mengapa perusahaan raksasa sering memiliki biaya produksi jauh lebih murah melalui Economies of Scale?",
    related: ["Economies of Scale (Skala Ekonomi) dan Economies of Scope", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis", "Elastisitas Harga Permintaan & Penawaran (Barang Inelastis vs Elastis)"]
  },
  {
    id: "skala-ekonomi-economies-of-scale",
    label: "Economies of Scale (Skala Ekonomi) dan Economies of Scope",
    keys: ["economies of scale", "skala ekonomi", "economies of scope", "diseconomies of scale", "biaya per unit", "efisiensi produksi"],
    body: `Dua konsep mikroekonomi fundamental yang menjelaskan mengapa ekspansi ukuran bisnis dapat meningkatkan profitabilitas secara signifikan:

• **Economies of Scale (Skala Ekonomi):** Penurunan **biaya rata-rata per unit produk** seiring meningkatnya volume produksi. Terjadi karena biaya tetap (seperti riset R&D, perangkat lunak, sewa pabrik, dan pemasaran nasional) tersebar ke lebih banyak unit barang, serta daya tawar pembelian bahan baku grosir yang lebih murah.
• **Economies of Scope (Lingkup Ekonomi):** Penghematan biaya yang tercapai ketika perusahaan memproduksi atau mendistribusikan **berbagai jenis produk berbeda** menggunakan infrastruktur, merek, atau jaringan distribusi yang sama (contoh: satu jaringan logistik mengirim ribuan kategori barang sekaligus).
• **Diseconomies of Scale:** Titik ketika perusahaan tumbuh terlalu besar dan birokratis sehingga koordinasi melambat dan biaya per unit justru kembali naik.`,
    example: `Sebuah perusahaan cip semikonduktor menghabiskan **$2 miliar** untuk meriset desain cip baru: jika hanya terjual 1 juta unit, biaya riset per cip adalah $2.000; namun jika terjual **100 juta unit**, biaya riset per cip turun drastis menjadi hanya **$20**—itulah kekuatan *Economies of Scale*.`,
    closing: "Apakah Anda ingin mengenal konsep Elastisitas Harga yang menentukan apakah kenaikan harga produk akan meningkatkan atau justru menurunkan pendapatan perusahaan?",
    related: ["Elastisitas Harga Permintaan & Penawaran (Barang Inelastis vs Elastis)", "Struktur Pasar Ekonomi: Persaingan Sempurna, Monopoli, Oligopoli, & Kartel", "Operating Leverage vs Financial Leverage dalam Bisnis dan Saham"]
  },
  {
    id: "elastisitas-harga-permintaan-penawaran",
    label: "Elastisitas Harga Permintaan & Penawaran (Barang Inelastis vs Elastis)",
    keys: ["elastisitas harga", "price elasticity", "inelastis", "barang elastis", "elastisitas permintaan", "pricing power"],
    body: `**Elastisitas Harga Permintaan (*Price Elasticity of Demand*)** mengukur seberapa sensitif jumlah permintaan konsumen terhadap perubahan harga suatu barang atau jasa:

• **Permintaan Inelastis (*Inelastic Demand*):** Ketika harga naik 10%, jumlah pembelian hanya turun sangat sedikit (misalnya turun 1%–2%). Terjadi pada kebutuhan pokok, obat-obatan esensial, energi/listrik, maupun perangkat lunak krusial perusahaan yang sulit digantikan. Perusahaan dengan produk inelastis memiliki **Pricing Power** tinggi saat inflasi.
• **Permintaan Elastis (*Elastic Demand*):** Ketika harga naik 10%, konsumen langsung memangkas pembelian atau berpindah ke merek pesaing secara drastis (misalnya turun 20%–30%). Umum terjadi pada barang sekunder, hiburan, tiket liburan, dan produk dengan banyak pilihan pengganti.`,
    example: `Selama masa inflasi tinggi, perusahaan produsen barang kebutuhan sehari-hari dan obat-obatan (**permintaan inelastis**) lebih mudah menyesuaikan harga jual tanpa kehilangan volume penjualan dibandingkan produsen barang mewah atau elektronik sekunder (**permintaan elastis**).`,
    closing: "Apakah Anda ingin memahami bagaimana perusahaan multinasional melindungi labanya dari gejolak kurs mata uang asing?",
    related: ["Manajemen Risiko Valas Korporasi: Transaction, Translation, & Economic Exposure", "Rotasi Sektor Global (Sector Rotation): Siklikal vs Defensif", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis"]
  },
  {
    id: "risiko-nilai-tukar-korporasi-hedging",
    label: "Manajemen Risiko Valas Korporasi: Transaction, Translation, & Economic Exposure",
    keys: ["risiko valas", "currency exposure", "transaction exposure", "translation exposure", "economic exposure", "corporate hedging", "natural hedge"],
    body: `Perusahaan yang mengekspor produk, mengimpor bahan baku, atau memiliki anak usaha di luar negeri menghadapi tiga jenis eksposur fluktuasi kurs mata uang asing:

1. **Transaction Exposure:** Risiko perubahan nilai tukar antara saat kontrak jual-beli ditandatangani hingga tanggal pembayaran diselesaikan (misalnya tagihan ekspor dalam USD jatuh tempo 90 hari lagi).
2. **Translation Exposure (Eksposur Akuntansi):** Perubahan nilai laporan keuangan konsolidasi perusahaan induk saat mengonversi neraca dan laba anak perusahaan luar negeri dari mata uang lokal ke mata uang pelaporan induk.
3. **Economic / Operating Exposure:** Dampak jangka panjang pergerakan nilai tukar terhadap daya saing harga produk perusahaan dibanding kompetitor luar negeri.

Untuk meredamnya, bendahara perusahaan (*corporate treasury*) menerapkan **Natural Hedge** (menyamakan mata uang pendapatan dengan mata uang biaya/utang) atau menggunakan kontrak *Forward* dan *Currency Swap*.`,
    example: `Jika sebuah maskapai penerbangan memiliki pendapatan tiket dalam mata uang lokal tetapi biaya sewa pesawat dan bahan bakar avtur dibayar dalam **Dolar AS**, pelemahan mata uang lokal terhadap USD akan langsung menekan margin labanya jika tidak dilakukan **hedging valas**.`,
    closing: "Apakah Anda ingin menutup Part 3 ini dengan memahami Tata Kelola Korporasi (GCG) dan konflik kepentingan (Agency Problem)?",
    related: ["Tata Kelola Korporasi (Good Corporate Governance) dan Konflik Kepentingan (Agency Problem)", "Mengenal Kontrak Berjangka (Futures) dan Hedging Institusional", "Mekanisme Nilai Tukar: Floating, Pegged/Fixed, & Intervensi Bank Sentral"]
  },
  {
    id: "tata-kelola-korporasi-agency-problem",
    label: "Tata Kelola Korporasi (Good Corporate Governance) dan Konflik Kepentingan (Agency Problem)",
    keys: ["corporate governance", "gcg", "tata kelola perusahaan", "agency problem", "konflik kepentingan", "pemegang saham minoritas", "insider trading"],
    body: `Dalam perusahaan terbuka modern, pemilik perusahaan (**pemegang saham / *principal***) terpisah dari pihak yang menjalankan operasional sehari-hari (**manajemen / *agent***). Pemisahan ini dapat memicu **Agency Problem** (masalah keagenan):

• **Apa itu Agency Problem?** Kondisi ketika keputusan manajemen lebih mengutamakan kepentingan pribadi (seperti gaji dan fasilitas mewah, ekspansi akuisisi demi gengsi ukuran perusahaan, atau transaksi afiliasi yang merugikan) daripada memaksimalkan nilai pemegang saham.
• **Mekanisme Perlindungan Investor (GCG):**
  1. **Dewan Komisaris Independen & Komite Audit:** Mengawasi laporan keuangan serta mencegah manipulasi akuntansi.
  2. **Penyelarasan Insentif (*Incentive Alignment*):** Memberikan kompensasi manajemen berbasis kinerja jangka panjang seperti **ROIC** dan **Free Cash Flow per Share**, bukan sekadar pertumbuhan omzet kotor.
  3. **Larangan *Insider Trading* & Transparansi Transaksi Afiliasi:** Melindungi pemegang saham publik minoritas dari penyalahgunaan informasi orang dalam.`,
    example: `Sebelum menanamkan modal jangka panjang di sebuah perusahaan, investor institusional selalu memeriksa apakah manajemen memiliki rekam jejak memperlakukan **pemegang saham minoritas secara adil** atau justru sering melakukan transaksi afiliasi yang menggerus kas perusahaan.`,
    closing: "Part 3 (Modul #163–#177) selesai! Apakah Anda siap melanjutkan ke Part 4 untuk membahas Time Value of Money, Manajemen Kekayaan Lanjutan, Pajak Global, & Bias Kognitif?",
    related: ["Investasi Berkelanjutan (ESG), Green Bonds, dan Pasar Karbon", "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas", "ROIC (Return on Invested Capital) dan ROCE: Mengukur Efisiensi Penciptaan Nilai"]
  },
];
