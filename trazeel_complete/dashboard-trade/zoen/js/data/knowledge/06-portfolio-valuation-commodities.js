// Bagian materi 06. Isi objek dipertahankan dari file sumber.
export const part06 = [
{
    id: "mpt-efficient-frontier",
    label: "Modern Portfolio Theory (MPT), Efficient Frontier, dan Korelasi Aset",
    keys: ["modern portfolio theory", "mpt", "efficient frontier", "markowitz", "korelasi negatif", "uncorrelated assets", "teori portofolio"],
    body: `**Modern Portfolio Theory (MPT)** yang diperkenalkan oleh Harry Markowitz menjelaskan bahwa risiko sebuah portofolio tidak hanya ditentukan oleh risiko masing-masing aset secara terpisah, melainkan oleh **bagaimana aset-aset tersebut bergerak satu sama lain (korelasi)**.

Konsep kunci dalam MPT:
• **Kombinasi Aset Berkorelasi Rendah/Negatif:** Menggabungkan dua aset yang tidak selalu bergerak searah (misalnya saham global dan obligasi pemerintah atau emas) dapat **menurunkan volatilitas total portofolio** tanpa harus mengorbankan potensi imbal hasil jangka panjang.
• **Efficient Frontier:** Kurva yang menggambarkan kombinasi portofolio optimal—yaitu portofolio yang memberikan **imbal hasil tertinggi untuk tingkat risiko tertentu**, atau risiko terendah untuk target imbal hasil tertentu.
• **Risiko Sistematis vs Non-Sistematis:** Risiko spesifik satu perusahaan (*unsystematic risk*) dapat dihilangkan lewat diversifikasi, sedangkan risiko pasar makro (*systematic risk*) tetap melekat dan dikelola melalui alokasi kelas aset.`,
    example: `Portofolio berisi 100% saham agresif mungkin berfluktuasi ±25% per tahun. Dengan menambahkan alokasi obligasi jangka pendek dan emas yang berkorelasi rendah, fluktuasi tahunan portofolio bisa turun menjadi ±12% sementara pertumbuhan majemuk jangka panjangnya tetap kompetitif.`,
    closing: "Apakah Anda ingin mengenal rasio matematis yang dipakai manajer investasi untuk mengukur imbal hasil per unit risiko, seperti Sharpe Ratio dan Alpha?",
    related: ["Rasio Evaluasi Portofolio: Sharpe Ratio, Sortino Ratio, dan Alpha vs Beta", "Diversifikasi dan Alokasi Aset (Asset Allocation)", "Korelasi Antar-Aset (Intermarket Correlation)"]
  },
  {
    id: "sharpe-sortino-alpha-beta",
    label: "Rasio Evaluasi Portofolio: Sharpe Ratio, Sortino Ratio, dan Alpha vs Beta",
    keys: ["sharpe ratio", "sortino ratio", "alpha", "beta", "risk adjusted return", "benchmark", "volatilitas portofolio"],
    body: `Dua portofolio yang sama-sama menghasilkan return 15% dalam setahun belum tentu sama kualitasnya jika salah satunya mengambil risiko dua kali lipat lebih berbahaya. Investor institusional menggunakan empat metrik **Risk-Adjusted Return**:

• **Beta ($\beta$):** Mengukur sensitivitas pergerakan aset/portofolio terhadap indeks acuan (*benchmark*). Beta **1,0** berarti bergerak seirama dengan pasar; Beta **1,5** berarti jika pasar naik/turun 10%, aset cenderung bergerak ±15%; Beta **< 1,0** lebih defensif.
• **Alpha ($\alpha$):** Kelebihan imbal hasil (*excess return*) yang berhasil dicetak manajer investasi di atas kinerja indeks acuannya setelah disesuaikan dengan faktor risiko Beta.
• **Sharpe Ratio:** Mengukur selisih imbal hasil di atas *risk-free rate* dibagi total volatilitas (standar deviasi). Semakin tinggi **Sharpe Ratio** (> 1,0 tergolong baik, > 2,0 sangat unggul), semakin efisien imbal hasil yang didapat per unit risiko.
• **Sortino Ratio:** Penyempurnaan dari Sharpe Ratio yang **hanya menghukum volatilitas penurunan (*downside risk*)**, bukan lonjakan kenaikan harga yang menguntungkan.`,
    example: `Jika Reksa Dana A mencetak return 14% dengan fluktuasi tajam (**Sharpe Ratio 0,8**) sedangkan Reksa Dana B mencetak return 12% dengan pergerakan sangat mulus (**Sharpe Ratio 1,6**), secara institusional Reksa Dana B memiliki kualitas pengelolaan risiko jauh lebih baik.`,
    closing: "Apakah Anda ingin mempelajari metode valuasi intrinsik yang digunakan analis institusional seperti Discounted Cash Flow (DCF)?",
    related: ["Valuasi Institusional: Discounted Cash Flow (DCF), WACC, & Intrinsic Value", "Modern Portfolio Theory (MPT), Efficient Frontier, dan Korelasi Aset", "Metrik Evaluasi Kinerja Trading: Profit Factor, R-Multiple, & Max Drawdown"]
  },
  {
    id: "valuasi-dcf-intrinsic-value",
    label: "Valuasi Institusional: Discounted Cash Flow (DCF), WACC, & Intrinsic Value",
    keys: ["dcf", "discounted cash flow", "intrinsic value", "nilai intrinsik", "wacc", "margin of safety", "terminal value"],
    body: `**Discounted Cash Flow (DCF)** adalah metode valuasi fundamental yang menghitung **nilai wajar intrinsik (*intrinsic value*)** sebuah perusahaan berdasarkan seluruh proyeksi arus kas bebas (*Free Cash Flow*) yang akan dihasilkannya di masa depan, lalu didiskontokan kembali ke nilai hari ini.

Komponen inti dalam model DCF:
• **Free Cash Flow (FCF):** Uang tunai bersih yang tersisa setelah perusahaan membiayai operasional dan belanja modal (*CapEx*).
• **Discount Rate / WACC (*Weighted Average Cost of Capital*):** Tingkat diskonto yang mencerminkan biaya modal rata-rata perusahaan dan risiko investasi. Karena uang di masa depan bernilai lebih rendah daripada uang hari ini (*Time Value of Money*), arus kas tahun-tahun mendatang harus didiskontokan dengan WACC.
• **Margin of Safety:** Prinsip membeli saham hanya ketika harga pasarnya berada jauh di bawah nilai intrinsik hasil perhitungan DCF (misalnya diskon 20%–30%) untuk melindungi investor dari kesalahan asumsi proyeksi.`,
    example: `Jika perhitungan DCF menunjukkan nilai intrinsik suatu perusahaan adalah **Rp5.000 per lembar**, sementara harga di bursa sedang tertekan di **Rp3.200 per lembar**, maka investor memperoleh **Margin of Safety sebesar 36%** sebelum mengambil keputusan beli.`,
    closing: "Apakah Anda ingin mengenal metrik valuasi cepat yang dipakai untuk membandingkan perusahaan lintas negara dengan struktur utang berbeda, seperti EV/EBITDA?",
    related: ["Valuasi Komparatif: EV/EBITDA, Price-to-Sales (P/S), & Free Cash Flow Yield", "Rasio Valuasi Saham: PER, PBV, dan Market Cap", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis"]
  },
  {
    id: "ev-ebitda-fcf-yield",
    label: "Valuasi Komparatif: EV/EBITDA, Price-to-Sales (P/S), & Free Cash Flow Yield",
    keys: ["ev ebitda", "enterprise value", "ebitda", "price to sales", "fcf yield", "free cash flow yield", "valuasi global"],
    body: `Saat membandingkan perusahaan multinasional yang memiliki struktur utang, tarif pajak, dan aturan penyusutan berbeda, analis global melengkapi rasio PER dengan metrik berbasis **Enterprise Value (EV)** dan arus kas:

• **Enterprise Value (EV):** Nilai total pengambilalihan perusahaan secara utuh, dihitung dari **Market Cap + Total Utang − Kas Setara Kas**.
• **EV / EBITDA:** Membandingkan nilai total perusahaan dengan laba operasional sebelum bunga, pajak, depresiasi, dan amortisasi (*EBITDA*). Rasio ini sangat adil untuk membandingkan perusahaan padat modal (seperti manufaktur, telekomunikasi, atau energi) yang memiliki beban utang berbeda.
• **Price-to-Sales (P/S Ratio):** Membandingkan kapitalisasi pasar dengan total pendapatan/omzet tahunan—sering dipakai untuk menilai perusahaan teknologi bertumbuh cepat yang belum mencetak laba bersih.
• **Free Cash Flow Yield:** Persentase *Free Cash Flow* dibagi *Market Cap* (atau EV); menunjukkan berapa persen uang tunai riil yang dihasilkan bisnis relatif terhadap harga belinya.`,
    example: `Dua perusahaan bisa sama-sama punya PER 10×, tetapi jika Perusahaan A punya kas melimpah tanpa utang sedangkan Perusahaan B terlilit utang jumbo, maka **EV/EBITDA Perusahaan A akan jauh lebih murah** karena utang ikut diperhitungkan dalam *Enterprise Value*.`,
    closing: "Apakah Anda ingin memahami perbedaan filosofi antara Value Investing, Growth Investing, dan Quality Investing?",
    related: ["Gaya Investasi Global: Value Investing vs Growth Investing vs Quality Factor", "Valuasi Institusional: Discounted Cash Flow (DCF), WACC, & Intrinsic Value", "Tiga Laporan Keuangan Utama: Laba Rugi, Neraca, dan Arus Kas"]
  },
  {
    id: "value-vs-growth-investing",
    label: "Gaya Investasi Global: Value Investing vs Growth Investing vs Quality Factor",
    keys: ["value investing", "growth investing", "quality investing", "garp", "value trap", "saham growth", "saham value"],
    body: `Dalam manajemen investasi global, terdapat tiga aliran utama dalam menyeleksi saham perusahaan:

1. **Value Investing (Investasi Nilai):** Berfokus membeli saham perusahaan yang diperdagangkan **di bawah nilai intrinsiknya** (PER, PBV, atau EV/EBITDA rendah) akibat sentimen negatif sementara. Risiko utamanya adalah *Value Trap*—saham tampak murah karena bisnisnya memang sedang mengalami kemunduran struktural.
2. **Growth Investing (Investasi Pertumbuhan):** Berfokus pada perusahaan yang membukukan **pertumbuhan pendapatan dan pangsa pasar jauh di atas rata-rata industri** (sering di sektor teknologi, kesehatan, atau inovasi baru), meskipun rasio valuasinya tampak mahal saat ini. Sangat sensitif terhadap kenaikan suku bunga.
3. **Quality Investing & GARP (*Growth at a Reasonable Price*):** Menggabungkan keduanya—mencari perusahaan dengan profitabilitas tinggi (ROE/ROIC kuat), utang rendah, dan pertumbuhan laba konsisten pada harga valuasi yang masih masuk akal.`,
    example: `Saat suku bunga bank sentral naik tajam, saham **Growth** sering terkoreksi lebih dalam karena nilai arus kas masa depannya terdiskonto lebih besar, sementara saham **Value** yang sudah membagikan dividen tunai besar cenderung lebih tahan banting.`,
    closing: "Apakah Anda ingin mengenal strategi kuantitatif institusional berbasis faktor seperti Factor Investing / Smart Beta?",
    related: ["Factor Investing (Smart Beta): Size, Momentum, Low Volatility, & Quality", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis", "Rasio Valuasi Saham: PER, PBV, dan Market Cap"]
  },
  {
    id: "factor-investing-smart-beta",
    label: "Factor Investing (Smart Beta): Size, Momentum, Low Volatility, & Quality",
    keys: ["factor investing", "smart beta", "momentum factor", "low volatility", "size factor", "fama french", "faktor investasi"],
    body: `**Factor Investing (Smart Beta)** adalah pendekatan investasi berbasis riset akademis (seperti model Fama-French) yang menyusun portofolio secara sistematis berdasarkan karakteristik spesifik yang terbukti secara historis mendorong perbedaan imbal hasil jangka panjang:

• **Value Factor:** Saham bervaluasi murah relatif terhadap fundamentalnya.
• **Size Factor (Small Cap):** Perusahaan berkapitalisasi kecil secara historis memiliki potensi pertumbuhan jangka panjang lebih tinggi dibanding raksasa mapan, dengan kompensasi volatilitas lebih besar.
• **Momentum Factor:** Kecenderungan saham yang berkinerja kuat dalam 6–12 bulan terakhir untuk terus melanjutkan trennya dalam jangka menengah.
• **Low Volatility Factor:** Saham dengan fluktuasi harga historis paling rendah yang memberikan perlindungan lebih baik saat pasar mengalami koreksi tajam (*bear market*).
• **Quality Factor:** Perusahaan dengan margin laba stabil, arus kas kuat, dan rasio utang rendah.`,
    example: `Banyak ETF global modern menggabungkan pendekatan **Multi-Factor** (misalnya 50% *Quality* + 50% *Momentum* atau *Low Volatility*) agar portofolio tidak hanya bergantung pada satu kondisi siklus pasar saja.`,
    closing: "Apakah Anda ingin melihat bagaimana dana institusional berpindah antar-sektor industri mengikuti siklus ekonomi melalui Sector Rotation?",
    related: ["Rotasi Sektor Global (Sector Rotation): Siklikal vs Defensif", "Gaya Investasi Global: Value Investing vs Growth Investing vs Quality Factor", "Mengenal ETF (Exchange-Traded Fund) dan Reksa Dana Indeks"]
  },
  {
    id: "rotasi-sektor-global",
    label: "Rotasi Sektor Global (Sector Rotation): Siklikal vs Defensif",
    keys: ["rotasi sektor", "sector rotation", "sektor defensif", "sektor siklikal", "consumer staples", "consumer discretionary", "utilities", "healthcare"],
    body: `Standar klasifikasi industri global (GICS) membagi pasar saham ke dalam 11 sektor utama yang dikelompokkan menjadi **Sektor Siklikal** (sensitif terhadap pertumbuhan ekonomi) dan **Sektor Defensif** (permintaan tetap stabil meski resesi):

• **Awal Pemulihan (*Early Recovery*):** Suku bunga rendah mendorong sektor **Keuangan (Financials)**, **Properti (Real Estate)**, dan **Barang Konsumen Sekunder (*Consumer Discretionary*)** seperti otomotif dan ritel.
• **Pertengahan Ekspansi (*Mid-Cycle*):** Pertumbuhan belanja modal menguntungkan sektor **Teknologi Informasi**, **Industri**, dan **Komunikasi**.
• **Puncak Siklus & Inflasi Tinggi (*Late Cycle*):** Kenaikan harga komoditas menguntungkan sektor **Energi** dan **Material/Bahan Baku**.
• **Resesi / Kontraksi (*Recession*):** Modal berpindah ke **Sektor Defensif** seperti **Barang Konsumen Primer (*Consumer Staples* / makanan-minuman pokok)**, **Kesehatan (*Healthcare*)**, dan **Utilitas (*Utilities* / listrik & air)** karena masyarakat tetap membutuhkannya dalam kondisi ekonomi apa pun.`,
    example: `Ketika indikator makro mulai menunjukkan perlambatan pertumbuhan dan risiko resesi meningkat, manajer dana global sering mengurangi porsi saham ritel mewah (*Consumer Discretionary*) dan memindahkannya ke saham kebutuhan pokok (*Consumer Staples*) serta farmasi.`,
    closing: "Apakah Anda ingin mempelajari konsep Economic Moat yang melindungi keunggulan bisnis suatu perusahaan dari gempuran kompetitor?",
    related: ["Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis", "Siklus Ekonomi Global (Ekspansi, Puncak, Resesi, Pemulihan) & Stagflasi", "Factor Investing (Smart Beta): Size, Momentum, Low Volatility, & Quality"]
  },
  {
    id: "economic-moat-keunggulan-kompetitif",
    label: "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis",
    keys: ["economic moat", "moat", "keunggulan kompetitif", "network effect", "switching cost", "brand power", "warren buffett"],
    body: `Dipopulerkan oleh Warren Buffett, **Economic Moat** (parit pertahanan ekonomi) adalah keunggulan kompetitif struktural yang melindungi pangsa pasar dan margin keuntungan sebuah perusahaan dari serangan pesaing dalam jangka panjang.

Lima sumber utama *Economic Moat*:
1. **Network Effect (Efek Jaringan):** Nilai produk meningkat secara eksponensial seiring bertambahnya jumlah pengguna (contoh: jaringan pembayaran global Visa/Mastercard, platform media sosial, atau marketplace dominan).
2. **High Switching Costs (Biaya Perpindahan Tinggi):** Pelanggan enggan beralih ke kompetitor karena proses migrasi data, pelatihan ulang, atau risikonya terlalu mahal dan rumit (contoh: perangkat lunak akuntansi/cloud perusahaan dan sistem operasi ekosistem).
3. **Intangible Assets (Aset Tak Berwujud):** Kekuatan merek yang dipercaya konsumen (*pricing power*), hak paten teknologi/farmasi, atau lisensi regulasi eksklusif.
4. **Cost Advantage (Keunggulan Biaya):** Kemampuan memproduksi atau mendistribusikan barang dengan biaya jauh lebih murah berkat skala ekonomi raksasa atau lokasi sumber daya strategis.
5. **Efficient Scale:** Pasar dengan ukuran terbatas yang secara alami hanya efisien dilayani oleh satu atau dua pemain utama.`,
    example: `Perusahaan yang memiliki **Pricing Power** dari merek kuat maupun *Switching Cost* tinggi sanggup menaikkan harga jual saat terjadi inflasi bahan baku tanpa kehilangan pelanggannya—sehingga margin labanya tetap terjaga.`,
    closing: "Apakah Anda ingin memahami mekanisme transaksi Short Selling di pasar saham global serta fenomena Short Squeeze?",
    related: ["Strategi Short Selling, Short Squeeze, dan Securities Lending", "Valuasi Institusional: Discounted Cash Flow (DCF), WACC, & Intrinsic Value", "Gaya Investasi Global: Value Investing vs Growth Investing vs Quality Factor"]
  },
  {
    id: "short-selling-short-squeeze",
    label: "Strategi Short Selling, Short Squeeze, dan Securities Lending",
    keys: ["short selling", "short squeeze", "securities lending", "short interest", "short covering", "jual kosong"],
    body: `Di pasar saham dan komoditas global, pelaku pasar tidak hanya bisa mendapat untung saat harga naik, tetapi juga saat harga turun melalui mekanisme **Short Selling**:

• **Cara Kerja Short Selling:** Trader meminjam lembar saham dari broker atau investor institusional (melalui layanan *Securities Lending* dengan membayar biaya sewa/bunga pinjaman), langsung menjualnya di harga pasar saat ini, lalu berharap membelinya kembali (*buy to cover*) di harga yang lebih rendah untuk mengembalikan saham pinjaman tersebut dan mengantongi selisihnya.
• **Risiko Tidak Terbatas (*Unlimited Loss Potential*):** Saat membeli saham (*Long*), kerugian maksimal adalah 100% (jika harga turun ke nol). Namun pada *Short Selling*, karena harga saham secara teoritis bisa naik tanpa batas, potensi kerugian jika harga melonjak tajam tidak memiliki batas atas.
• **Short Squeeze:** Fenomena ketika sebuah saham dengan tingkat *short interest* sangat tinggi tiba-tiba mengalami kenaikan harga tajam akibat berita positif atau aksi beli terkoordinasi—memaksa para *short seller* panik membeli kembali saham untuk menutup kerugian (*short covering*), yang justru mendorong harga meroket semakin tinggi.`,
    example: `Jika seorang trader melakukan *short selling* 100 saham di harga $50 ($5.000) lalu saham tersebut tiba-tiba melonjak ke $150 akibat *short squeeze*, kerugiannya mencapai **$10.000 (200% dari modal awal)** dan dapat memicu *margin call* paksa.`,
    closing: "Apakah Anda ingin mengenal berbagai jenis dana investasi institusional besar seperti Hedge Fund, Private Equity, dan Venture Capital?",
    related: ["Mengenal Hedge Fund, Private Equity, dan Venture Capital", "Posisi Buy (Long) dan Sell (Short)", "Leverage dan Margin"]
  },
  {
    id: "hedge-fund-private-equity-vc",
    label: "Mengenal Hedge Fund, Private Equity, dan Venture Capital",
    keys: ["hedge fund", "private equity", "venture capital", "modal ventura", "buyout", "dana lindung nilai", "2 and 20"],
    body: `Di luar reksa dana publik ritel, terdapat tiga pilar pengelolaan modal institusional swasta (*Alternative Investments*) dengan mandat dan horizon waktu berbeda:

1. **Hedge Fund (Dana Lindung Nilai):** Dana investasi terakreditasi yang memiliki fleksibilitas strategi luas—mulai dari *Long/Short Equity*, arbitrase makro global, hingga derivatif—untuk mengejar imbal hasil positif (*absolute return*) baik saat pasar naik maupun turun.
2. **Private Equity (PE):** Perusahaan investasi yang menghimpun modal besar untuk **mengakuisisi saham mayoritas perusahaan matang** (sering kali mengambil perusahaan publik menjadi privat / *buyout*), merestrukturisasi operasional dan keuangannya selama 4–7 tahun, lalu menjualnya kembali atau melakukan IPO ulang dengan nilai lebih tinggi.
3. **Venture Capital (VC / Modal Ventura):** Mendanai **perusahaan rintisan (*startup*) tahap awal** yang memiliki potensi pertumbuhan eksponensial namun berisiko gagal sangat tinggi, dengan imbalan kepemilikan ekuitas minoritas.`,
    example: `Portofolio **Venture Capital** bekerja dengan hukum distribusi ekstrem (*power law*): dari 10 startup yang didanai, 6–7 mungkin gagal atau stagnan, tetapi **1–2 startup yang sukses besar** (menjadi *unicorn* dan IPO) sanggup menutup seluruh kerugian dan melipatgandakan total nilai dana.`,
    closing: "Apakah Anda ingin mengenal lembaga pengelola kekayaan negara raksasa dunia yang disebut Sovereign Wealth Fund (SWF)?",
    related: ["Sovereign Wealth Fund (SWF) dan Peran Investor Institusional Raksasa", "Mengenal Hedge Fund, Private Equity, dan Venture Capital", "Aksi Korporasi Pasar Modal: IPO, Stock Split, Right Issue, dan Buyback"]
  },
  {
    id: "sovereign-wealth-fund-institusi",
    label: "Sovereign Wealth Fund (SWF) dan Peran Investor Institusional Raksasa",
    keys: ["sovereign wealth fund", "swf", "dana kekayaan negara", "dana pensiun global", "endowment fund", "investor institusional"],
    body: `**Sovereign Wealth Fund (SWF)** adalah dana investasi milik negara yang mengelola surplus anggaran, pendapatan ekspor komoditas (seperti minyak dan gas), atau cadangan devisa untuk diinvestasikan lintas negara demi kesejahteraan generasi mendatang.

Contoh kekuatan modal institusional global:
• **Sovereign Wealth Fund Terkemuka:** *Government Pension Fund Global* milik Norwegia (mengelola aset lebih dari $1,7 triliun dan memiliki sekitar 1,5% dari seluruh saham tercatat di dunia), GIC & Temasek (Singapura), ADIA (Abu Dhabi), serta INA (Indonesia).
• **Dana Pensiun Global & University Endowment:** Lembaga pengelola dana pensiun publik dan dana abadi universitas (seperti model *Yale Endowment*) yang berinvestasi dengan horizon waktu **puluhan tahun hingga abadi**, mengalokasikan dana ke saham global, obligasi, properti komersial, infrastruktur, hingga *private equity*.`,
    example: `Karena horizon waktunya mencapai puluhan tahun, **Sovereign Wealth Fund** tidak panik saat pasar saham global turun 20% dalam setahun—sebaliknya, mereka sering memanfaatkan koreksi pasar untuk membeli aset berkualitas dengan harga diskon.`,
    closing: "Apakah Anda ingin membahas dinamika pasar komoditas global seperti minyak mentah (WTI & Brent), logam industri, dan agrikultur?",
    related: ["Investasi Komoditas Global: Minyak Mentah (WTI/Brent), Logam Industri, & Pertanian", "Sistem Cadangan Devisa Global, Dominasi USD, dan Peran IMF", "Modern Portfolio Theory (MPT), Efficient Frontier, dan Korelasi Aset"]
  },
  {
    id: "komoditas-global-minyak-logam",
    label: "Investasi Komoditas Global: Minyak Mentah (WTI/Brent), Logam Industri, & Pertanian",
    keys: ["komoditas global", "minyak mentah", "wti", "brent", "opec", "tembaga", "copper", "dr copper", "hard commodities", "soft commodities"],
    body: `**Komoditas** adalah bahan baku fisik utama penggerak ekonomi global yang dibagi menjadi dua kelompok besar: **Hard Commodities** (hasil tambang dan energi) dan **Soft Commodities** (hasil pertanian dan peternakan).

Tiga sektor komoditas yang paling memengaruhi pasar keuangan dunia:
1. **Energi (Minyak Mentah WTI & Brent, Gas Alam):** *WTI (West Texas Intermediate)* adalah acuan minyak Amerika Serikat, sedangkan *Brent Crude* dari Laut Utara menjadi acuan utama pasar Eropa dan global. Pasokannya sangat dipengaruhi keputusan kuota produksi **OPEC+** serta ketegangan geopolitik.
2. **Logam Industri (Tembaga, Nikel, Aluminium, Bijih Besi):** Tembaga sering dijuluki **"Dr. Copper"** karena permintaannya sangat sensitif terhadap aktivitas konstruksi, manufaktur, dan transisi energi hijau—sehingga kenaikan harga tembaga sering menjadi sinyal awal ekspansi ekonomi global.
3. **Agrikultur / Soft Commodities (Gandum, Kedelai, Jagung, Kopi, Kakao):** Sangat dipengaruhi oleh siklus cuaca ekstrem (seperti *El Niño* dan *La Niña*) serta kebijakan pembatasan ekspor pangan.`,
    example: `Lonjakan harga minyak mentah **Brent** secara tiba-tiba dapat memicu kekhawatiran kembalinya gelombang inflasi transportasi dan manufaktur global, yang langsung menekan pasar obligasi dan saham negara pengimpor energi.`,
    closing: "Apakah Anda ingin memahami istilah unik dalam perdagangan kontrak berjangka komoditas, yaitu Contango dan Backwardation?",
    related: ["Struktur Pasar Berjangka Komoditas: Contango vs Backwardation", "Logam Mulia CFD: XAU/USD (Emas) dan XAG/USD (Perak)", "Jenis Inflasi: Demand-Pull, Cost-Push, dan Supply Chain Shock Global"]
  },
  {
    id: "contango-vs-backwardation",
    label: "Struktur Pasar Berjangka Komoditas: Contango vs Backwardation",
    keys: ["contango", "backwardation", "roll yield", "kurva futures", "spot price", "futures curve"],
    body: `Berbeda dengan saham yang bisa disimpan selamanya tanpa biaya gudang, komoditas fisik diperdagangkan melalui kontrak berjangka (*futures*) dengan bulan jatuh tempo berbeda. Hubungan antara harga saat ini (*spot price*) dan harga kontrak jatuh tempo lebih jauh (*futures price*) membentuk dua kondisi kurva:

• **Contango:** Harga kontrak berjangka bulan-bulan mendatang **lebih tinggi** daripada harga *spot* saat ini. Ini kondisi normal pada pasar yang pasokannya cukup, karena harga masa depan mencerminkan tambahan biaya penyimpanan gudang (*storage cost*), asuransi, dan bunga pendanaan.
• **Backwardation:** Harga kontrak berjangka bulan-bulan mendatang **lebih rendah** daripada harga *spot* saat ini. Terjadi ketika terjadi **kelangkaan pasokan mendesak** sehingga pembeli bersedia membayar premi mahal untuk mendapatkan komoditas fisik hari ini juga.`,
    example: `Investor ritel yang membeli ETF berbasis kontrak berjangka minyak saat pasar berada dalam kondisi **Contango** dalam dapat mengalami kerugian tersembunyi (*negative roll yield*), karena pengelola dana terus menjual kontrak lama yang murah dan menggantinya dengan kontrak bulan berikutnya yang lebih mahal.`,
    closing: "Apakah Anda ingin mengenal standar investasi berkelanjutan global seperti ESG, Green Bonds, dan pasar kredit karbon?",
    related: ["Investasi Berkelanjutan (ESG), Green Bonds, dan Pasar Karbon", "Investasi Komoditas Global: Minyak Mentah (WTI/Brent), Logam Industri, & Pertanian", "Mengenal Kontrak Berjangka (Futures) dan Hedging Institusional"]
  },
  {
    id: "esg-green-bonds-karbon",
    label: "Investasi Berkelanjutan (ESG), Green Bonds, dan Pasar Karbon",
    keys: ["esg", "green bonds", "pasar karbon", "carbon credit", "sustainable investing", "greenwashing", "sri"],
    body: `**ESG (*Environmental, Social, and Governance*)** adalah kerangka evaluasi non-finansial yang digunakan investor global untuk menilai keberlanjutan jangka panjang serta risiko tata kelola sebuah perusahaan:

• **Environmental (Lingkungan):** Pengelolaan emisi karbon, efisiensi energi, limbah industri, dan dampak perubahan iklim.
• **Social (Sosial):** Keselamatan kerja, hubungan dengan masyarakat sekitar, perlindungan data pelanggan, dan rantai pasok yang etis.
• **Governance (Tata Kelola):** Independensi dewan komisaris, transparansi akuntansi, hak pemegang saham minoritas, serta pencegahan korupsi.

Instrumen turunannya meliputi **Green Bonds** (obligasi yang dananya dikhususkan untuk proyek ramah lingkungan dan energi terbarukan) serta **Carbon Credit** (sertifikat izin emisi karbon yang diperdagangkan). Investor juga wajib mewaspadai **Greenwashing**—klaim ramah lingkungan yang dilebih-lebihkan sekadar untuk pemasaran tanpa dampak nyata.`,
    example: `Banyak dana pensiun Eropa dan global kini dilarang oleh mandat internalnya untuk berinvestasi di perusahaan dengan skor **Governance (tata kelola)** buruk atau pelanggaran lingkungan berat—sehingga skor ESG memengaruhi akses perusahaan terhadap modal murah global.`,
    closing: "Apakah Anda ingin menutup Part 2 ini dengan membandingkan dua mazhab besar teori pasar: Efficient Market Hypothesis (EMH) dan Behavioral Finance?",
    related: ["Efficient Market Hypothesis (EMH) vs Behavioral Finance", "Keunggulan Kompetitif Berkelanjutan (Economic Moat) dalam Bisnis", "Sovereign Wealth Fund (SWF) dan Peran Investor Institusional Raksasa"]
  },
  {
    id: "efficient-market-hypothesis-emh",
    label: "Efficient Market Hypothesis (EMH) vs Behavioral Finance",
    keys: ["emh", "efficient market hypothesis", "hipotesis pasar efisien", "behavioral finance", "anomali pasar", "random walk"],
    body: `Perdebatan klasik paling terkenal dalam ilmu keuangan modern mempertemukan dua sudut pandang mengenai bagaimana harga aset terbentuk di pasar:

• **Efficient Market Hypothesis (EMH — Eugene Fama):** Menyatakan bahwa harga aset di bursa selalu mencerminkan seluruh informasi yang tersedia secara instan dan rasional. Dalam bentuk *Semi-Strong EMH*, analisis fundamental maupun teknikal dari data publik tidak dapat secara konsisten mengalahkan rata-rata pasar (*index*), sehingga strategi terbaik adalah investasi pasif biaya rendah pada reksa dana indeks atau ETF.
• **Behavioral Finance (Keuangan Keperilakuan):** Menunjukkan bahwa dalam praktiknya, pelaku pasar adalah manusia yang sering bertindak **tidak rasional** akibat bias emosi, kepanikan massal, euforia gelembung (*bubble*), dan ketakutan berlebih—yang menciptakan **anomali harga sementara** yang dapat dimanfaatkan investor disiplin.`,
    example: `Dalam jangka pendek, emosi manusia sering menciptakan gelembung harga maupun kepanikan jual ekstrem (**Behavioral Finance**); namun dalam jangka panjang, persaingan jutaan analis membuat pasar cukup efisien (**EMH**) sehingga mayoritas pengelola dana aktif kesulitan mengalahkan indeks S&P 500 setelah dipotong biaya manajemen.`,
    closing: "Part 2 (Modul #148–#162) selesai! Apakah Anda siap melanjutkan ke Part 3 untuk membahas Corporate Finance, Struktur Modal, Unit Economics Bisnis, & Struktur Pasar?",
    related: ["Bias Psikologis dalam Keuangan (Herd Mentality & Sunk Cost)", "Bias Kognitif Investasi Lanjutan: Anchoring, Confirmation, & Recency Bias", "Mengenal ETF (Exchange-Traded Fund) dan Reksa Dana Indeks"]
  },
];
