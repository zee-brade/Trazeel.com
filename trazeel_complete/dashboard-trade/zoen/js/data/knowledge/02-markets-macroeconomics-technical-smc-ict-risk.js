// Bagian materi 02. Isi objek dipertahankan dari file sumber.
export const part02 = [
{
    id: "bullish-bearish",
    label: "Bullish dan Bearish",
    keys: ["bullish", "bearish", "bull", "bear", "sentimen naik", "sentimen turun"],
    body: `Dalam pasar keuangan dan trading, **Bullish** dan **Bearish** adalah dua istilah utama untuk menggambarkan arah kecenderungan harga maupun suasana pelaku pasar saat itu.

• **Bullish (Tren Naik):** Kondisi ketika harga cenderung bergerak naik karena tekanan beli lebih kuat daripada tekanan jual. Istilah ini terinspirasi dari cara banteng (*bull*) menyerang dengan menanduk ke atas.
• **Bearish (Tren Turun):** Kondisi ketika harga cenderung bergerak turun karena tekanan jual lebih mendominasi. Istilah ini terinspirasi dari cara beruang (*bear*) mencakar ke arah bawah.`,
    example: `Sebagai contoh sederhana: apabila grafik EUR/USD bergerak naik dari 1,0800 menuju 1,0950 dengan rangkaian puncak yang semakin tinggi, maka kondisi pasar saat itu disebut sedang **bullish**. Sebaliknya, jika harga terus turun dari 1,0950 ke 1,0800, kondisi tersebut disebut **bearish**.`,
    closing: "Apakah Anda ingin membahas bagaimana cara mengonfirmasi perubahan dari kondisi bearish ke bullish di grafik?",
    related: ["Apa itu posisi Buy (Long) dan Sell (Short)?", "Apa itu market structure?", "Jelaskan pola candlestick Pin Bar dan Engulfing"]
  },
  {
    id: "long-short",
    label: "Posisi Buy (Long) dan Sell (Short)",
    keys: ["long", "short", "posisi buy", "posisi sell", "dua arah", "short selling", "buy dan sell"],
    body: `Berbeda dengan pembelian barang fisik yang hanya untung saat harga naik, pasar forex dan derivatif memungkinkan partisipan mengambil peluang dua arah—baik saat harga naik maupun turun.

• **Posisi Buy (Long):** Membuka kontrak beli dengan proyeksi harga bergerak naik. Transaksi menghasilkan keuntungan jika ditutup di harga yang lebih tinggi dari titik masuk.
• **Posisi Sell (Short):** Membuka kontrak jual terlebih dahulu dengan proyeksi harga bergerak turun. Transaksi menghasilkan keuntungan jika ditutup kembali di harga yang lebih rendah dari titik masuk.`,
    example: `Misalnya pada pair **EUR/USD** di harga 1,0850. Jika Anda memproyeksikan Euro akan menguat terhadap Dolar AS, Anda membuka posisi **Buy**. Bila harga naik ke 1,0900 lalu ditutup, selisih 50 pip tersebut menjadi keuntungan. Sebaliknya, jika memproyeksikan harga akan turun ke 1,0800, posisi **Sell** dapat dibuka sejak di 1,0850.`,
    closing: "Apakah Anda ingin mengetahui jenis perintah eksekusi order seperti Buy Limit atau Sell Stop?",
    related: ["Apa saja jenis order dalam trading?", "Dasar pasar forex dan cara membaca kuotasi", "Apa itu bullish dan bearish?"]
  },
  {
    id: "broker-akun",
    label: "Broker dan Jenis Akun Trading",
    keys: ["broker", "akun demo", "akun riil", "akun real", "ecn", "akun standard", "regulasi broker", "memilih broker"],
    body: `**Broker** adalah perusahaan perantara keuangan yang menyediakan platform agar trader ritel dapat terhubung ke pasar global. Pada umumnya, broker menyediakan tiga jenis akun utama:

• **Akun Demo:** Akun simulasi dengan dana virtual namun menggunakan pergerakan harga pasar nyata. Sangat disarankan untuk berlatih membaca grafik dan menguji strategi tanpa risiko kehilangan dana sungguhan.
• **Akun Standard:** Akun riil dengan biaya transaksi yang umumnya sudah digabungkan ke dalam *spread* (tanpa komisi tambahan per lot).
• **Akun Raw Spread / ECN:** Akun dengan *spread* sangat tipis (bahkan mendekati 0,0 pip pada pair utama), namun dikenakan biaya komisi tetap per lot yang ditransaksikan.

Pastikan broker yang Anda pilih diawasi oleh badan regulasi keuangan yang kredibel dan transparan dalam spesifikasi kontraknya.`,
    example: `Sebagai gambaran biaya: pada **Akun Standard**, EUR/USD mungkin memiliki spread 1,2 pip tanpa komisi tambahan. Sementara pada **Akun ECN**, spread EUR/USD bisa sebesar 0,1 pip, tetapi dikenakan komisi sekitar $6–$7 per 1,00 lot standar.`,
    closing: "Apakah Anda sedang berlatih menggunakan akun demo saat ini, atau ingin membahas perbedaan Balance, Equity, dan Margin Level?",
    related: ["Apa perbedaan Balance, Equity, dan Margin Level?", "Apa itu pip, lot, dan spread?", "Apa itu swap dan komisi dalam trading?"]
  },
  {
    id: "equity-balance-marginlevel",
    label: "Balance, Equity, Free Margin, dan Margin Level",
    keys: ["equity", "balance", "free margin", "margin level", "ekuitas", "saldo akun", "floating"],
    body: `Saat memiliki posisi yang masih berjalan (*floating*), ada empat angka di terminal trading yang wajib dipahami perbedaannya:

• **Balance:** Saldo total dana di akun yang hanya berubah setelah transaksi ditutup (tidak terpengaruh posisi yang masih terbuka).
• **Equity:** Nilai riil akun saat ini, dihitung dari **Balance + Floating Profit** (atau dikurangi *Floating Loss*).
• **Free Margin:** Sisa dana bebas yang masih tersedia untuk membuka posisi baru atau menahan fluktuasi harga (**Equity − Used Margin**).
• **Margin Level (%):** Rasio kesehatan akun yang dihitung dari **(Equity ÷ Used Margin) × 100%**. Jika angka ini turun melewati batas tertentu (misalnya di bawah 100% atau 50% tergantung broker), akun berisiko terkena *Margin Call* hingga *Stop Out*.`,
    example: `Misalnya **Balance** Anda $1.000, Anda membuka posisi dengan margin terpakai **$100**, dan posisi tersebut sedang mengalami *floating loss* sebesar **-$150**. Maka **Equity** Anda saat ini adalah **$850**, **Free Margin** tersisa **$750**, dan **Margin Level** berada di **850%**.`,
    closing: "Apakah Anda ingin mengetahui bagaimana cara menghitung lot yang aman agar Margin Level akun selalu sehat?",
    related: ["Apa itu leverage dan margin?", "Apa itu risk management dan position sizing?", "Jelaskan risiko Averaging, Martingale, dan Hedging"]
  },
  {
    id: "swap-komisi",
    label: "Swap dan Komisi Trading",
    keys: ["swap", "overnight", "rollover", "free swap", "islamic account", "komisi", "commission", "biaya inap"],
    body: `Selain spread, ada dua komponen biaya operasional lain yang perlu diperhatikan dalam menghitung hasil bersih transaksi:

• **Swap (Biaya Inap):** Bunga *rollover* yang dikenakan atau diberikan ketika membiarkan posisi terbuka melewati pergantian hari perdagangan server (umumnya pukul 00.00 waktu server broker). Nilainya bergantung pada selisih suku bunga antar-mata uang. Banyak broker menyediakan opsi *Free Swap* untuk jangka waktu tertentu.
• **Komisi (Commission):** Biaya tetap per lot yang dibebankan broker (biasanya pada akun tipe ECN atau Raw Spread) sebagai imbalan atas akses harga mentah antarbank.`,
    example: `Jika Anda menerapkan gaya *day trading* dan menutup semua posisi sebelum pergantian hari server, Anda tidak akan terkena biaya **swap**. Namun bagi *swing trader* yang menahan posisi selama beberapa hari, memperhitungkan swap sangat penting agar keuntungan bersih tetap optimal.`,
    closing: "Apakah gaya transaksi yang Anda pelajari lebih cenderung ditutup di hari yang sama atau ditahan beberapa hari?",
    related: ["Apa perbedaan scalping, day trading, dan swing trading?", "Apa itu pip, lot, dan spread?", "Apa itu broker dan jenis akun trading?"]
  },
  {
    id: "slippage",
    label: "Slippage dan Gap Pasar",
    keys: ["slippage", "requote", "eksekusi meleset", "lonjakan harga"],
    body: `**Slippage** adalah kondisi ketika order tereksekusi pada harga yang sedikit berbeda dari harga yang tampil di layar saat tombol order ditekan.

Hal ini umumnya terjadi pada dua situasi:
• **Rilis Berita Fundamental Berdampak Tinggi:** Saat data seperti NFP atau keputusan suku bunga FOMC dirilis, harga melompat sangat cepat dalam hitungan milidetik sehingga harga awal sudah terlewati sebelum order diproses.
• **Likuiditas Pasar Sangat Tipis:** Terjadi saat pergantian sesi harian atau menjelang penutupan pasar akhir pekan.`,
    example: `Misalnya tombol Buy EUR/USD ditekan tepat saat data inflasi AS dirilis di harga 1,0850, namun karena lonjakan harga yang sangat cepat, posisi baru tereksekusi di 1,0854. Selisih 4 pip inilah yang disebut **slippage**.`,
    closing: "Apakah Anda ingin membahas fenomena lompatan harga lainnya seperti Gap Pasar saat pembukaan hari Senin?",
    related: ["Apa itu Gap pasar dalam trading?", "Bagaimana cara membaca analisis fundamental?", "Sesi pasar trading global"]
  },
  {
    id: "gap-pasar",
    label: "Gap Pasar (Weekend Gap & Jenis Gap)",
    keys: ["gap", "gap pasar", "weekend gap", "breakaway gap", "runaway gap", "exhaustion gap", "lompatan harga pembukaan"],
    body: `**Gap** adalah area kosong pada grafik candle yang terjadi karena harga pembukaan sesi baru melompat jauh di atas atau di bawah harga penutupan sebelumnya tanpa ada transaksi di antaranya.

Empat jenis gap yang umum dikenal:
• **Weekend Gap (Common Gap):** Terjadi pada pembukaan pasar Senin pagi akibat rilis berita ekonomi atau peristiwa geopolitik selama akhir pekan saat pasar ritel tutup.
• **Breakaway Gap:** Terjadi saat harga melompat menembus area konsolidasi atau Support/Resistance kuat disertai momentum besar.
• **Runaway (Continuation) Gap:** Muncul di tengah-tengah tren yang sedang kuat sebagai tanda dorongan kelanjutan.
• **Exhaustion Gap:** Muncul di ujung tren panjang sebagai tanda kelelahan sebelum pembalikan arah.`,
    example: `Pada pasar forex, *Weekend Gap* pada hari Senin pagi sering kali cenderung kembali ditutup (*gap fill*) apabila tidak didukung perubahan fundamental jangka panjang. Namun pada saham dan indeks yang memiliki jam tutup harian, *Breakaway Gap* sering menjadi awal tren baru.`,
    closing: "Apakah Anda ingin membahas bagaimana cara mengamankan posisi agar tidak terkena risiko Weekend Gap?",
    related: ["Apa perbedaan scalping, day trading, dan swing trading?", "Slippage dan Gap Pasar", "Manajemen posisi (SL, TP, Break Even, & Trailing Stop)"]
  },
  {
    id: "jenis-pair",
    label: "Klasifikasi Jenis Pair dalam Trading",
    keys: ["jenis pair", "klasifikasi pair", "macam pair", "daftar pair", "major pair", "minor pair", "cross pair", "exotic pair", "commodity pair", "pair trading", "pasangan mata uang", "pair"],
    body: `Dalam pasar forex dan CFD, aset diperdagangkan secara berpasangan (*pair*) untuk membandingkan nilai satu instrumen terhadap instrumen lainnya. Secara umum, pair dibagi menjadi empat kelompok:

1. **Major Pairs (Pasangan Utama):** Selalu melibatkan Dolar AS (USD) dan mata uang ekonomi terbesar dunia. Likuiditasnya paling tinggi dan biaya spread-nya paling tipis. Contoh: **EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, dan NZD/USD**.
2. **Minor / Cross Pairs (Pasangan Silang):** Pasangan mata uang utama dunia tanpa melibatkan Dolar AS. Contoh: **EUR/GBP, EUR/JPY, GBP/JPY, dan AUD/JPY**.
3. **Exotic Pairs (Pasangan Eksotis):** Kombinasi satu mata uang utama dengan mata uang negara berkembang. Spread-nya jauh lebih lebar dan pergerakannya rentan lonjakan tajam. Contoh: **USD/SGD, USD/IDR, dan USD/TRY**.
4. **Commodity & Metal Pairs:** Instrumen komoditas logam mulia dan energi terhadap USD, seperti **XAU/USD** (emas), **XAG/USD** (perak), dan **WTI** (minyak mentah).`,
    example: `Untuk tahap belajar, sebagian besar trader memilih fokus pada 1 hingga 2 **Major Pairs** seperti EUR/USD karena pergerakannya lebih terstruktur dan biaya transaksinya efisien dibandingkan pair eksotis.`,
    closing: "Apakah ada pair tertentu—misalnya EUR/USD, GBP/JPY, atau XAU/USD—yang ingin Anda pelajari karakteristiknya secara lebih detail?",
    related: ["Jelaskan karakteristik pair EUR/USD", "Jelaskan karakteristik pair EUR/GBP dan AUD/JPY", "Jelaskan XAU/USD (Emas) dan XAG/USD (Perak)"]
  },
  {
    id: "pair-eurusd",
    label: "Karakteristik Pair EUR/USD (Fiber)",
    keys: ["eur/usd", "eurusd", "fiber", "euro dolar", "eur usd"],
    body: `**EUR/USD** (sering dijuluki *"Fiber"*) adalah pasangan mata uang paling likuid dan paling aktif diperdagangkan di dunia.

Beberapa karakter utama yang membuatnya populer:
• **Spread Paling Tipis:** Karena volume transaksinya sangat besar, biaya spread EUR/USD hampir selalu menjadi yang terendah di setiap broker.
• **Penggerak Fundamental:** Dipengaruhi oleh perbedaan kebijakan suku bunga dan data inflasi antara Bank Sentral Eropa (ECB) dan Bank Sentral AS (The Fed).
• **Waktu Paling Aktif:** Pergerakan paling optimal berlangsung sejak pembukaan sesi Eropa (London) hingga sesi Amerika (New York), terutama saat kedua sesi tersebut tumpang tindih (*overlap*).
• **Struktur Harga Rapi:** Cenderung menghormati area teknis dan tidak se-agresif emas atau pasangan Yen, sehingga sangat ideal untuk melatih konsistensi.`,
    example: `Dalam satu hari perdagangan normal, EUR/USD umumnya bergerak dalam rentang 60 hingga 100 pip. Memantau grafik pada pukul 19.00–22.00 WIB (overlap London–New York) biasanya memperlihatkan likuiditas dan struktur harga paling jelas pada pair ini.`,
    closing: "Apakah Anda ingin membandingkan karakter EUR/USD dengan pair yang lebih agresif seperti GBP/USD atau XAU/USD?",
    related: ["Jelaskan karakteristik pair GBP/USD", "Jelaskan karakteristik pair USD/CHF", "Bagaimana korelasi DXY dengan EUR/USD?"]
  },
  {
    id: "pair-gbpusd",
    label: "Karakteristik Pair GBP/USD (Cable)",
    keys: ["gbp/usd", "gbpusd", "cable", "poundsterling", "gbp usd"],
    body: `**GBP/USD** (dijuluki *"Cable"*) mempertemukan Poundsterling Inggris dengan Dolar AS dan dikenal memiliki karakter yang lebih dinamis dibandingkan EUR/USD.

Karakteristik utama GBP/USD:
• **Rentang Harian Lebih Lebar:** GBP/USD sering bergerak lebih agresif dan kerap melakukan sapuan likuiditas (*liquidity sweep*) di atas atau di bawah level swing sebelum membentuk arah utamanya.
• **Penggerak Fundamental:** Dipengaruhi oleh kebijakan suku bunga Bank of England (BoE), data inflasi & tenaga kerja Inggris, serta kebijakan The Fed AS.
• **Waktu Paling Aktif:** Sangat aktif sejak pembukaan sesi London (sekitar pukul 14.00–15.00 WIB) hingga sesi New York.`,
    example: `Jika EUR/USD biasanya membutuhkan jarak Stop Loss sekitar 15–20 pip untuk setup intraday, pada **GBP/USD** sering kali diperlukan ruang Stop Loss sedikit lebih lebar (misalnya 25–35 pip) agar tidak mudah tersentuh oleh fluktuasi normalnya.`,
    closing: "Apakah Anda ingin mengetahui bagaimana GBP/USD berperilaku saat dipasangkan dengan Yen Jepang pada pair GBP/JPY?",
    related: ["Jelaskan karakteristik pair GBP/JPY", "Jelaskan karakteristik pair EUR/USD", "Apa itu liquidity dan liquidity sweep?"]
  },
  {
    id: "pair-usdjpy",
    label: "Karakteristik Pair USD/JPY (Gopher)",
    keys: ["usd/jpy", "usdjpy", "gopher", "yen jepang", "yen", "usd jpy"],
    body: `**USD/JPY** (dijuluki *"Gopher"*) adalah pasangan mata uang teraktif kedua di dunia dan menjadi barometer utama arus modal antara Amerika Serikat dan Asia.

Karakteristik utama USD/JPY:
• **Sensitif terhadap Selisih Suku Bunga:** Sangat dipengaruhi oleh perbedaan imbal hasil obligasi pemerintah AS (*US Treasury Yield*) dengan kebijakan suku bunga Bank of Japan (BoJ).
• **Peran Safe Haven Yen:** Saat terjadi kepanikan pasar global atau ketegangan geopolitik, investor cenderung membeli Yen Jepang sehingga USD/JPY berpotensi turun tajam.
• **Waktu Paling Aktif:** Aktif sejak sesi Tokyo (pagi hari WIB) dan kembali mengalami lonjakan volume pada sesi New York saat rilis data ekonomi AS.
• **Perhitungan Pip:** Berbeda dari pair mayor lainnya, 1 pip pada USD/JPY dihitung pada angka desimal kedua (**0,01**).`,
    example: `Misalnya USD/JPY bergerak dari 150,00 ke 150,50, pergerakan tersebut bernilai **50 pip**. Jika imbal hasil obligasi AS melonjak naik setelah rilis data inflasi AS, USD/JPY biasanya ikut terdorong naik.`,
    closing: "Apakah Anda ingin melihat bagaimana karakter Yen Jepang saat digabungkan dengan Poundsterling pada pair GBP/JPY?",
    related: ["Jelaskan karakteristik pair GBP/JPY", "Sesi pasar trading global", "Apa itu pip, lot, dan spread?"]
  },
  {
    id: "pair-usdchf",
    label: "Karakteristik Pair USD/CHF (Swissie)",
    keys: ["usd/chf", "usdchf", "swissie", "franc swiss", "chf", "usd chf"],
    body: `**USD/CHF** (dijuluki *"Swissie"*) mempertemukan Dolar AS dengan Franc Swiss, mata uang yang dikenal luas karena stabilitas ekonomi dan sistem keuangan Swiss.

Karakteristik utama USD/CHF:
• **Karakter Safe Haven Eropa:** Franc Swiss kerap dijadikan aset pelindung nilai saat terjadi ketidakpastian ekonomi atau politik di kawasan Eropa.
• **Korelasi Negatif Kuat dengan EUR/USD:** Secara historis, USD/CHF sering bergerak berlawanan arah dengan EUR/USD. Ketika EUR/USD naik, USD/CHF cenderung turun, dan sebaliknya.
• **Penggerak Fundamental:** Dipengaruhi oleh kebijakan Swiss National Bank (SNB) serta pergerakan Indeks Dolar AS (DXY).`,
    example: `Karena korelasi negatifnya yang erat dengan EUR/USD, banyak analis menjadikan USD/CHF sebagai **konfirmasi pembanding**: jika EUR/USD menembus resistance ke atas sementara USD/CHF menembus support ke bawah di waktu bersamaan, sinyal pelemahan Dolar AS tersebut menjadi lebih valid.`,
    closing: "Apakah Anda ingin mempelajari korelasi antar-aset lainnya seperti hubungan minyak mentah dengan USD/CAD?",
    related: ["Jelaskan karakteristik pair EUR/USD", "Korelasi antar-aset (Intermarket Correlation)", "Jelaskan karakteristik pair USD/CAD"]
  },
  {
    id: "pair-audusd-nzdusd",
    label: "Karakteristik Pair AUD/USD dan NZD/USD",
    keys: ["aud/usd", "audusd", "aussie", "dolar australia", "aud usd", "nzd/usd", "nzdusd", "kiwi", "selandia baru", "nzd usd"],
    body: `**AUD/USD** (*"Aussie"*) dan **NZD/USD** (*"Kiwi"*) termasuk dalam kelompok *Commodity Currencies* karena perekonomian Australia dan Selandia Baru sangat bergantung pada ekspor komoditas.

Karakteristik utama keduanya:
• **Sensitif terhadap Harga Komoditas:** Australia adalah eksportir utama bijih besi, batu bara, dan emas; sedangkan Selandia Baru mengandalkan ekspor produk agrikultur dan susu. Kenaikan harga komoditas global cenderung memperkuat AUD dan NZD.
• **Pengaruh Ekonomi Tiongkok:** Karena Tiongkok adalah mitra dagang utama kedua negara tersebut, data ekonomi Tiongkok sering langsung memengaruhi pergerakan kedua pair ini.
• **Korelasi Positif Tinggi:** Keduanya sering bergerak searah, sehingga membuka posisi Buy pada keduanya sekaligus akan menggandakan eksposur risiko Anda.`,
    example: `Jika data manufaktur Tiongkok dirilis jauh lebih baik dari perkiraan pada pagi hari WIB, biasanya **AUD/USD** dan **NZD/USD** akan langsung merespons positif karena meningkatnya ekspektasi permintaan bahan baku dari Tiongkok.`,
    closing: "Apakah Anda ingin mengetahui pair komoditas utama lainnya yaitu USD/CAD?",
    related: ["Jelaskan karakteristik pair USD/CAD", "Korelasi antar-aset (Intermarket Correlation)", "Apa saja jenis pair dalam trading?"]
  },
  {
    id: "pair-usdcad",
    label: "Karakteristik Pair USD/CAD (Loonie)",
    keys: ["usd/cad", "usdcad", "loonie", "dolar kanada", "usd cad", "minyak", "wti", "oil"],
    body: `**USD/CAD** (dijuluki *"Loonie"*) mempertemukan Dolar AS dengan Dolar Kanada dan merupakan pasangan komoditas utama di kawasan Amerika Utara.

Karakteristik utama USD/CAD:
• **Korelasi Negatif dengan Harga Minyak (WTI):** Kanada merupakan salah satu eksportir minyak mentah terbesar ke Amerika Serikat. Ketika harga minyak dunia naik, Dolar Kanada (CAD) cenderung menguat sehingga grafik USD/CAD bergerak turun.
• **Waktu Paling Aktif:** Sangat aktif pada sesi New York (malam hari WIB), terutama saat data ekonomi AS dan Kanada dirilis pada jam yang berdekatan.
• **Penggerak Suku Bunga:** Dipengaruhi oleh kebijakan Bank of Canada (BoC) dan The Fed.`,
    example: `Apabila harga minyak mentah dunia melonjak tajam akibat gangguan pasokan global, Dolar Kanada biasanya ikut menguat. Akibatnya, grafik **USD/CAD** cenderung mengalami tekanan turun.`,
    closing: "Apakah Anda ingin melihat karakteristik cross pair berkecepatan tinggi seperti GBP/JPY?",
    related: ["Jelaskan karakteristik pair AUD/USD dan NZD/USD", "Korelasi antar-aset (Intermarket Correlation)", "Jelaskan karakteristik pair GBP/JPY"]
  },
  {
    id: "pair-gbpjpy-eurjpy",
    label: "Cross Pairs Populer: GBP/JPY dan EUR/JPY",
    keys: ["gbp/jpy", "gbpjpy", "gbp jpy", "eur/jpy", "eurjpy", "eur jpy", "dragon", "beast"],
    body: `**GBP/JPY** dan **EUR/JPY** adalah dua *cross pairs* (pasangan tanpa USD) yang paling populer karena momentum trennya yang kuat.

Karakteristik utama keduanya:
• **Volatilitas Tinggi:** GBP/JPY kerap dijuluki *"The Beast"* atau *"The Dragon"* karena rentang pergerakan hariannya bisa mencapai 120–200 pip lebih.
• **Barometer Sentimen Risiko (*Risk Sentiment*):** Saat pasar saham global optimis (*risk-on*), kedua pair ini cenderung naik kuat. Sebaliknya, saat pasar panik (*risk-off*), aliran dana masuk ke Yen Jepang membuat keduanya turun tajam.
• **Waktu Aktif Ganda:** Aktif sejak sesi Tokyo (pagi hari) dan kembali meningkat tajam saat sesi London dibuka.`,
    example: `Karena kecepatan pergerakan **GBP/JPY** bisa dua kali lebih lebar daripada EUR/USD, seorang trader yang biasa menggunakan 0,10 lot di EUR/USD umumnya akan menurunkan ukuran posisinya menjadi 0,05 lot di GBP/JPY agar risiko nominal per transaksinya tetap sama.`,
    closing: "Apakah Anda ingin mengenal cross pair lainnya seperti EUR/GBP dan AUD/JPY?",
    related: ["Jelaskan karakteristik pair EUR/GBP dan AUD/JPY", "Jelaskan sentimen pasar Risk-On dan Risk-Off", "Apa itu risk management dan position sizing?"]
  },
  {
    id: "pair-eurgbp-audjpy",
    label: "Cross Pairs Tambahan: EUR/GBP dan AUD/JPY",
    keys: ["eur/gbp", "eurgbp", "eur gbp", "aud/jpy", "audjpy", "aud jpy", "chunnel"],
    body: `Selain pasangan silang berkecepatan tinggi, terdapat dua *cross pairs* lain dengan karakter yang sangat kontras dan menarik dipelajari:

• **EUR/GBP (Euro vs Poundsterling — *"Chunnel"*):** Menghubungkan dua ekonomi utama Eropa. Karena kedua mata uang sering terpengaruh sentimen kawasan yang mirip, pergerakan EUR/GBP cenderung lebih lambat, memiliki rentang harian sempit (30–50 pip), dan sering bergerak mendatar (*ranging*), namun nilai per pip-nya lebih besar daripada pair ber-quote USD.
• **AUD/JPY (Dolar Australia vs Yen Jepang):** Salah satu indikator paling akurat untuk membaca sentimen **Risk-On / Risk-Off** global, karena mempertemukan mata uang komoditas berimbal hasil tinggi (AUD) dengan mata uang *safe haven* (JPY).`,
    example: `Ketika bursa saham dunia menguat dan harga komoditas naik, **AUD/JPY** sering kali menjadi salah satu pair tercepat yang membentuk tren naik. Sebaliknya, saat terjadi kepanikan pasar global, AUD/JPY biasanya turun tajam.`,
    closing: "Apakah Anda ingin membahas konsep sentimen pasar Risk-On dan Risk-Off secara lebih mendalam?",
    related: ["Jelaskan sentimen pasar Risk-On dan Risk-Off", "Cross Pairs Populer: GBP/JPY dan EUR/JPY", "Apa saja jenis pair dalam trading?"]
  },
  {
    id: "pair-xauusd",
    label: "Logam Mulia CFD: XAU/USD (Emas) dan XAG/USD (Perak)",
    keys: ["xauusd", "xau/usd", "xau usd", "emas", "gold", "xagusd", "xag/usd", "xag usd", "perak", "silver", "logam mulia"],
    body: `Dalam pasar derivatif/CFD, logam mulia diperdagangkan terhadap Dolar AS dengan simbol **XAU/USD** untuk emas dan **XAG/USD** untuk perak.

Karakteristik utama XAU/USD & XAG/USD:
• **Faktor Penggerak:** Sangat sensitif terhadap suku bunga riil AS, pergerakan Indeks Dolar AS (DXY), data inflasi, serta ketegangan geopolitik.
• **Perbedaan Emas dan Perak:** Keduanya umumnya bergerak searah, namun XAG/USD (perak) memiliki likuiditas lebih kecil sehingga fluktuasi persentasenya kerap lebih liar daripada emas.
• **Volatilitas Tinggi:** Pergerakan XAU/USD sangat agresif terutama pada sesi New York (malam hari WIB). Pastikan mengecek nilai per poin/pip pada broker sebelum menentukan lot.`,
    example: `Pada kontrak standar emas (1,00 lot = 100 troy ounce), pergerakan harga **XAU/USD** sebesar $10 (misalnya dari 2.650 ke 2.660) setara dengan perubahan nilai sebesar **$1.000** (atau **$10** jika menggunakan 0,01 lot). Oleh karena itu, perhitungan Stop Loss pada emas harus sangat disiplin.`,
    closing: "Apakah Anda ingin melihat simulasi cara menghitung ukuran lot yang tepat khusus untuk emas (XAU/USD) dan indeks?",
    related: ["Bagaimana cara menghitung lot dan pip di XAU/USD?", "Bagaimana korelasi antar-aset seperti DXY dan emas?", "Emas sebagai Lindung Nilai (Hedging Inflasi)"]
  },
  {
    id: "indeks-us30-nas100",
    label: "Indeks Saham AS: US30, NAS100, dan SPX500",
    keys: ["us30", "dow jones", "nas100", "ustec", "nasdaq", "spx500", "us500", "s&p 500", "indeks as", "indeks saham"],
    body: `Indeks saham AS merupakan instrumen yang mencerminkan kinerja sekelompok perusahaan publik terbesar di Amerika Serikat:

• **NAS100 / USTEC (Nasdaq 100):** Berisi 100 perusahaan teknologi dan pertumbuhan terbesar (seperti Apple, Microsoft, Nvidia). Memiliki volatilitas tertinggi dan paling sensitif terhadap perubahan suku bunga The Fed.
• **US30 / DJ30 (Dow Jones Industrial Average):** Berisi 30 perusahaan industri dan *blue-chip* mapan AS. Pergerakannya kuat namun sedikit lebih stabil daripada Nasdaq.
• **SPX500 / US500 (S&P 500):** Mencakup 500 perusahaan terbesar AS dan menjadi tolok ukur utama kesehatan pasar saham Amerika secara keseluruhan.`,
    example: `Lonjakan volume dan pergerakan terbesar pada **NAS100 dan US30** terjadi saat pembukaan bursa saham New York (**pukul 20.30 WIB** pada musim panas AS, atau **pukul 21.30 WIB** pada musim dingin AS).`,
    closing: "Apakah Anda ingin mengetahui cara menghitung nilai poin dan ukuran lot pada indeks serta emas?",
    related: ["Bagaimana cara menghitung lot dan pip di XAU/USD?", "Karakteristik berbagai instrumen pasar", "Sesi pasar trading global"]
  },
  {
    id: "pair-crypto",
    label: "Pair Aset Kripto Utama: BTC/USD dan ETH/USD",
    keys: ["btc/usd", "btcusd", "btc usd", "eth/usd", "ethusd", "eth usd", "pair kripto", "crypto pair", "bitcoin", "ethereum"],
    body: `Pasangan aset kripto seperti **BTC/USD** (Bitcoin) dan **ETH/USD** (Ethereum) diperdagangkan baik di bursa spot maupun kontrak derivatif.

Karakteristik utama BTC/USD & ETH/USD:
• **Beroperasi 24/7:** Tidak seperti forex dan saham yang libur di akhir pekan, pasar kripto berjalan nonstop 24 jam sehari sepanjang minggu.
• **Volatilitas Ekstrem:** Fluktuasi harga beberapa persen dalam satu hari adalah hal lumrah, dipengaruhi oleh sentimen adopsi institusional, likuiditas makro AS, regulasi, serta dinamika pasar derivatif.
• **ETH/USD Lebih Fluktuatif:** Ethereum umumnya mengikuti arah tren besar Bitcoin, tetapi dengan ayunan persentase yang lebih lebar.`,
    example: `Karena pasar kripto buka 24/7 dan dapat bergerak tajam kapan saja termasuk saat Anda tidur, alokasi modal menggunakan uang dingin, penggunaan **Stop Loss**, dan leverage rendah sangat krusial.`,
    closing: "Apakah Anda ingin membandingkan karakteristik kripto dengan instrumen pasar lainnya seperti forex dan indeks?",
    related: ["Karakteristik berbagai instrumen pasar", "Apa itu risk management dan position sizing?", "Keamanan Akun Finansial, Phishing, & Manajemen Kredensial"]
  },
  {
    id: "perhitungan-pip-emas-indeks",
    label: "Cara Menghitung Nilai Pip dan Lot pada Emas & Indeks",
    keys: ["hitung pip", "nilai pip", "pip emas", "lot emas", "pip xauusd", "lot xauusd", "kontrak emas", "hitung poin", "menghitung lot"],
    body: `Kesalahan paling sering terjadi ketika trader menggunakan ukuran lot forex (seperti EUR/USD) secara langsung pada emas (**XAU/USD**) atau indeks (**NAS100/US30**) tanpa mengecek nilai kontraknya.

Acuan umum standar kontrak CFD (selalu verifikasi di *Contract Specification* broker Anda):
• **XAU/USD (Emas):** 1,00 lot standar = 100 troy ounce. Setiap kenaikan **$1,00** pada harga emas (misal dari 2.650,00 ke 2.651,00) bernilai **$100** pada 1,00 lot, **$10** pada 0,10 lot, dan **$1** pada 0,01 lot.
• **Indeks (NAS100 / US30):** Umumnya 1,00 lot bernilai **$1 per 1 poin** pergerakan harga indeks (pada sebagian broker 1 lot = $10; wajib cek spesifikasi kontrak).
• **Rumus Cepat Ukuran Lot:** **Lot = Nominal Risiko ($) ÷ (Jarak SL dalam Poin/Pip × Nilai per Poin pada 1 Lot)**.`,
    example: `**Simulasi pada XAU/USD:** Modal Anda **$1.000**, risiko maksimal **1% ($10)**. Anda ingin membuka posisi Buy emas di 2.650 dengan Stop Loss di 2.645 (jarak SL = **$5**). Karena pada 0,01 lot setiap pergerakan $1 bernilai $1, maka dengan **0,02 lot**, jarak SL $5 akan menghasilkan kerugian pas sebesar **$10 (1%)**.`,
    closing: "Apakah contoh perhitungan lot tersebut sudah cukup jelas, atau ingin kita bahas prinsip manajemen risiko secara menyeluruh?",
    related: ["Apa itu risk management dan position sizing?", "Logam Mulia CFD: XAU/USD (Emas) dan XAG/USD (Perak)", "Indeks Saham AS: US30, NAS100, dan SPX500"]
  },
  {
    id: "fundamental",
    label: "Cara Membaca Analisis Fundamental",
    keys: ["fundamental", "analisis fundamental", "kalender ekonomi", "economic calendar", "berita", "news", "nfp", "cpi", "fomc", "suku bunga", "actual", "forecast"],
    body: `**Analisis fundamental** mempelajari kondisi ekonomi, kebijakan suku bunga bank sentral, dan sentimen makro yang menjadi bahan bakar utama pergerakan harga jangka menengah hingga panjang.

Untuk membacanya secara praktis melalui kalender ekonomi, perhatikan empat langkah berikut:
1. **Saring Dampak Berita (*Impact*):** Fokus pada berita berdampak tinggi (*High Impact* / berlabel merah) seperti keputusan suku bunga (**FOMC**), data inflasi (**CPI**), dan laporan tenaga kerja (**NFP**).
2. **Pahami Tiga Kolom Angka:**
   • *Previous:* Angka hasil rilis periode sebelumnya.
   • *Forecast:* Perkiraan konsensus ekonom saat ini.
   • *Actual:* Data resmi yang baru saja diumumkan.
3. **Bandingkan Actual vs Forecast:** Jika data aktual suatu negara lebih kuat dari perkiraan (misalnya inflasi naik sehingga mendorong kenaikan suku bunga), mata uang negara tersebut cenderung menguat.
4. **Cek Korelasi dengan USD:** Jika USD menguat karena data AS positif, pair seperti EUR/USD dan XAU/USD umumnya mendapat tekanan turun.`,
    example: `Misalnya data **NFP (Non-Farm Payrolls)** AS memiliki *Forecast* 180.000 lapangan kerja baru, tetapi *Actual*-nya keluar jauh lebih tinggi di angka 260.000. Pasar akan menilai ekonomi AS sangat kuat sehingga The Fed berpotensi mempertahankan suku bunga tinggi—hasilnya Dolar AS (DXY) cenderung menguat, sedangkan EUR/USD dan emas berpotensi turun.`,
    closing: "Apakah Anda ingin mengenal istilah kebijakan bank sentral seperti Hawkish dan Dovish?",
    related: ["Apa perbedaan Hawkish dan Dovish pada bank sentral?", "Apa itu data GDP, PMI, dan Retail Sales?", "Korelasi antar-aset (Intermarket Correlation)"]
  },
  {
    id: "bank-sentral",
    label: "Kebijakan Bank Sentral: Hawkish vs Dovish & QE/QT",
    keys: ["hawkish", "dovish", "bank sentral", "the fed", "ecb", "boj", "boe", "quantitative easing", "quantitative tightening", "moneter"],
    body: `Keputusan dan pernyataan pejabat bank sentral (seperti Gubernur The Fed, ECB, atau Bank Indonesia) merupakan penggerak tren jangka panjang paling kuat di pasar keuangan:

• **Hawkish:** Sikap bank sentral yang cenderung ketat untuk menekan inflasi—biasanya ditandai dengan menaikkan suku bunga atau mempertahankan suku bunga tinggi lebih lama. Sikap *hawkish* cenderung **menguatkan** mata uang negara tersebut, tetapi menekan pasar saham/obligasi jangka pendek.
• **Dovish:** Sikap bank sentral yang lebih longgar untuk mendorong pertumbuhan ekonomi dan lapangan kerja—ditandai dengan memangkas suku bunga. Sikap *dovish* cenderung **melemahkan** mata uang tersebut, tetapi menjadi katalis positif bagi saham dan obligasi.
• **Quantitative Easing (QE) vs Tightening (QT):** *QE* adalah penyuntikan likuiditas ke sistem keuangan, sedangkan *QT* adalah penarikan likuiditas dari peredaran.`,
    example: `Meskipun The Fed tidak mengubah suku bunga pada rapat bulan ini, jika dalam konferensi persnya Gubernur The Fed menyampaikan pernyataan **hawkish** bahwa inflasi masih terlalu tinggi, Dolar AS (DXY) tetap bisa melonjak tajam karena pasar mengantisipasi suku bunga tinggi yang lebih lama.`,
    closing: "Apakah Anda ingin mengetahui indikator makroekonomi selain inflasi dan NFP yang dipantau bank sentral?",
    related: ["Apa itu data GDP, PMI, dan Retail Sales?", "Bagaimana cara membaca analisis fundamental?", "Jelaskan sentimen pasar Risk-On dan Risk-Off"]
  },
  {
    id: "data-makro-penting",
    label: "Indikator Makroekonomi Utama: GDP, PMI, dan Retail Sales",
    keys: ["gdp", "pmi", "retail sales", "unemployment rate", "pengangguran", "data makro", "indikator ekonomi", "ppi"],
    body: `Selain suku bunga dan CPI, ada empat rilis data ekonomi pada kalender ekonomi yang sering memicu pergerakan besar:

• **GDP (Gross Domestic Product):** Mengukur total nilai barang dan jasa yang diproduksi suatu negara—menjadi barometer utama pertumbuhan atau resesi ekonomi.
• **PMI (Purchasing Managers' Index):** Survei bulanan manajer pembelian di sektor manufaktur dan jasa. Angka di atas **50,0** menunjukkan ekspansi ekonomi, sedangkan di bawah **50,0** menunjukkan kontraksi.
• **Retail Sales (Penjualan Ritel):** Mengukur tingkat belanja konsumen; karena konsumsi menyumbang porsi besar ekonomi negara maju, data ini sangat diperhatikan pasar.
• **Unemployment Rate:** Persentase angkatan kerja yang menganggur; kenaikan tingkat pengangguran yang tajam sering mendorong bank sentral bersikap lebih *dovish*.`,
    example: `Jika data **PMI Manufaktur dan Jasa** zona Eropa keluar di bawah ekspektasi (misalnya turun ke 47,5), pelaku pasar akan menilai ekonomi Eropa melambat sehingga **EUR/USD** berpotensi melemah.`,
    closing: "Apakah Anda ingin membahas bagaimana data-data ekonomi tersebut membentuk sentimen global Risk-On dan Risk-Off?",
    related: ["Jelaskan sentimen pasar Risk-On dan Risk-Off", "Apa perbedaan Hawkish dan Dovish pada bank sentral?", "Bagaimana cara membaca analisis fundamental?"]
  },
  {
    id: "risk-on-off",
    label: "Sentimen Pasar: Risk-On dan Risk-Off",
    keys: ["risk-on", "risk-off", "risk on", "risk off", "risk sentiment", "sentimen pasar", "safe haven"],
    body: `**Risk-On** dan **Risk-Off** menggambarkan selera risiko investor institusional global terhadap kondisi ekonomi dan geopolitik saat itu:

• **Risk-On (Optimis / Berani Ambil Risiko):** Terjadi saat kondisi ekonomi stabil atau membaik. Investor memindahkan modal ke aset berimbal hasil tinggi seperti **saham/indeks (NAS100, US30)**, **kripto**, serta mata uang komoditas (**AUD, NZD, CAD**), sementara mata uang *safe haven* seperti Yen (JPY) cenderung melemah.
• **Risk-Off (Waspada / Menghindari Risiko):** Terjadi saat muncul ancaman resesi, krisis perbankan, atau konflik geopolitik. Investor menarik dana dari aset berisiko dan mengamankannya ke aset **Safe Haven** seperti **Emas (XAU/USD)**, **Franc Swiss (CHF)**, **Yen Jepang (JPY)**, dan **Obligasi Pemerintah AS**.`,
    example: `Ketika ketegangan geopolitik meningkat secara tiba-tiba, Anda sering melihat pola **Risk-Off** serentak: indeks saham AS turun, pasangan **AUD/JPY** merosot, sementara harga **XAU/USD (emas)** melonjak naik.`,
    closing: "Apakah Anda ingin melihat bagaimana hubungan korelasi antar-aset lainnya bekerja?",
    related: ["Korelasi antar-aset (Intermarket Correlation)", "Cross Pairs Tambahan: EUR/GBP dan AUD/JPY", "Emas sebagai Lindung Nilai (Hedging Inflasi)"]
  },
  {
    id: "korelasi",
    label: "Korelasi Antar-Aset (Intermarket Correlation)",
    keys: ["korelasi", "intermarket", "dxy", "indeks dolar", "us10y", "yield", "korelasi pasangan"],
    body: `**Korelasi antar-aset** adalah hubungan keterkaitan pergerakan antara satu instrumen dengan instrumen lainnya. Memahaminya membantu Anda membaca konfirmasi arah pasar sekaligus menghindari penumpukan risiko yang tidak disadari.

Beberapa hubungan korelasi utama yang sering diamati:
• **DXY vs EUR/USD & GBP/USD (Korelasi Negatif):** Indeks Dolar AS (DXY) mengukur kekuatan USD terhadap sekeranjang mata uang utama. Jika DXY naik, EUR/USD dan GBP/USD cenderung turun.
• **DXY & US10Y vs XAU/USD (Korelasi Negatif):** Kenaikan DXY dan imbal hasil obligasi AS (US10Y) umumnya menekan harga emas (XAU/USD).
• **Harga Minyak (WTI) vs USD/CAD (Korelasi Negatif):** Kenaikan harga minyak cenderung memperkuat Dolar Kanada sehingga USD/CAD bergerak turun.`,
    example: `Jika Anda membuka posisi **Buy EUR/USD** sekaligus **Buy GBP/USD** pada waktu yang sama, secara tidak langsung Anda sedang mengambil dua posisi yang sama-sama bertaruh pada pelemahan Dolar AS. Jika Dolar AS tiba-tiba menguat, kedua posisi tersebut berisiko terkena Stop Loss secara bersamaan.`,
    closing: "Apakah Anda ingin melanjutkan ke pembahasan bagaimana menyusun trading plan dan checklist sebelum entry?",
    related: ["Bagaimana cara menyusun trading plan?", "Bagaimana rutinitas pre-market dan checklist sebelum entry?", "Apa itu risk management dan position sizing?"]
  },
  {
    id: "trading-plan",
    label: "Cara Menyusun Trading Plan",
    keys: ["trading plan", "rencana trading", "menentukan plan", "menyusun plan", "plan", "setup", "strategi trading"],
    body: `**Trading plan** adalah panduan aturan objektif yang Anda buat sebelum membuka transaksi, sehingga keputusan masuk dan keluar pasar tidak dipengaruhi emosi sesaat.

Anda dapat menyusunnya melalui enam langkah berurutan berikut:
1. **Tentukan Bias Arah (Timeframe Besar):** Lihat struktur harga pada Daily atau H4 untuk mengetahui tren dominan (bullish, bearish, atau ranging).
2. **Tandai Area Kunci (*Point of Interest*):** Tandai area Support/Resistance, Supply/Demand, atau area likuiditas tempat harga berpotensi bereaksi.
3. **Tetapkan Syarat Konfirmasi:** Tentukan pemicu masuk yang jelas di timeframe lebih kecil, misalnya pola penolakan candle atau perubahan struktur (CHoCH).
4. **Tentukan Titik Stop Loss (SL):** Letakkan SL di luar area kunci—yakni titik yang membuktikan analisis Anda salah.
5. **Tentukan Target Take Profit (TP):** Sesuaikan target dengan struktur terdekat dan pastikan rasio Risk/Reward sepadan (minimal 1:2).
6. **Hitung Ukuran Lot:** Sesuaikan volume lot dengan batas risiko per transaksi (misalnya 1% dari saldo akun).`,
    example: `Contoh trading plan sederhana: *"Saya hanya mencari posisi Buy pada EUR/USD ketika tren H4 bullish, harga terkoreksi menyentuh area Support H1, dan muncul candle konfirmasi bullish di M15. Stop Loss diletakkan 20 pip di bawah Support, Take Profit 40 pip (R:R 1:2), dengan risiko maksimal 1% dari modal."*`,
    closing: "Apakah Anda ingin melihat contoh checklist rutinitas pre-market agar trading plan ini mudah dijalankan setiap hari?",
    related: ["Bagaimana rutinitas pre-market dan checklist sebelum entry?", "Bagaimana cara melakukan analisis multi-timeframe?", "Apa itu Confluence dalam analisis teknikal?"]
  },
  {
    id: "rutinitas-premarket",
    label: "Rutinitas Pre-Market dan Checklist Sebelum Entry",
    keys: ["pre-market", "premarket", "rutinitas", "checklist", "sebelum entry", "persiapan trading"],
    body: `Memiliki **rutinitas pre-market** dan **checklist eksekusi** membantu Anda menyaring sinyal berkualitas rendah serta mencegah transaksi impulsif:

1. **Cek Kalender Ekonomi:** Periksa jadwal rilis berita berdampak tinggi hari ini pada mata uang yang akan ditransaksikan.
2. **Pemetaan Top-Down (Daily → H4 → H1):** Tandai titik tertinggi/terendah hari sebelumnya (*Previous Day High/Low*), arah tren utama, dan area kunci terdekat.
3. **Tentukan Skenario (*If-Then*):** Buat dua skenario objektif—misalnya skenario Buy jika harga memantul di Support dengan konfirmasi, atau skenario Sell jika harga menembus dan retest.
4. **Checklist Final Sebelum Klik Order:**
   • Apakah setup sesuai bias timeframe besar?
   • Apakah sudah ada konfirmasi penutupan candle?
   • Apakah jarak SL dan TP memberikan rasio minimal 1:2?
   • Apakah ukuran lot sudah dihitung sesuai batas risiko maksimal 1%?`,
    example: `Jika dari 4 poin checklist di atas ada satu saja yang belum terpenuhi—misalnya harga baru menyentuh area tetapi belum ada candle konfirmasi—maka keputusan terbaik adalah **menunggu**, bukan memaksakan entry.`,
    closing: "Apakah Anda ingin membahas konsep Confluence untuk memperkuat kriteria konfirmasi pada checklist Anda?",
    related: ["Apa itu Confluence dalam analisis teknikal?", "Bagaimana cara menyusun trading plan?", "Psikologi Trading dan Disiplin Eksekusi"]
  },
  {
    id: "multi-timeframe",
    label: "Analisis Multi-Timeframe (Top-Down)",
    keys: ["multi timeframe", "timeframe", "top down", "htf", "ltf", "analisis timeframe", "mtf"],
    body: `**Analisis multi-timeframe** (*Top-Down Analysis*) adalah cara membaca grafik dari kerangka waktu besar menuju kerangka waktu kecil agar keputusan transaksi searah dengan arus utama pasar.

Pembagian fungsi yang paling umum digunakan:
• **Higher Timeframe / HTF (Daily / H4):** Berfungsi sebagai peta besar untuk membaca tren utama dan area Support/Resistance signifikan.
• **Medium Timeframe (H1 / M30):** Berfungsi memantau struktur internal dan melihat bagaimana harga mendekati area kunci.
• **Lower Timeframe / LTF (M15 / M5):** Berfungsi mencari konfirmasi eksekusi yang presisi agar jarak Stop Loss lebih efisien.`,
    example: `Ibarat berkendara: **Daily/H4** adalah aplikasi peta untuk menentukan kota tujuan, **H1** adalah jalan raya yang Anda lewati, dan **M15** adalah kaca spion serta lampu sein saat Anda hendak berbelok masuk ke jalur yang tepat.`,
    closing: "Kombinasi timeframe mana yang paling sesuai dengan waktu luang Anda—apakah scalping, day trading, atau swing trading?",
    related: ["Apa perbedaan scalping, day trading, dan swing trading?", "Apa itu market structure?", "Bagaimana cara menyusun trading plan?"]
  },
  {
    id: "gaya-trading",
    label: "Gaya Trading: Scalping, Day Trading, dan Swing Trading",
    keys: ["gaya trading", "style trading", "scalping", "day trading", "swing trading", "position trading", "intraday"],
    body: `Pemilihan gaya trading sebaiknya disesuaikan dengan ketersediaan waktu harian, karakter psikologis, dan besaran modal Anda.

• **Scalping:** Membuka dan menutup posisi dalam hitungan menit (timeframe M1–M15). Membutuhkan fokus penuh di depan layar, pengambilan keputusan cepat, serta broker dengan spread sangat rendah.
• **Day Trading (Intraday):** Membuka dan menutup posisi pada hari yang sama tanpa menginapkan transaksi (umumnya memadukan H1 dan M15/M5).
• **Swing Trading:** Menahan posisi selama beberapa hari hingga beberapa minggu mengikuti gelombang tren besar (timeframe Daily/H4). Sangat cocok bagi Anda yang memiliki pekerjaan utama karena tidak perlu memantau grafik setiap menit.`,
    example: `Jika Anda bekerja penuh waktu dari pagi hingga sore dan baru bisa menganalisis pasar pada malam hari selama 1 jam, maka **Swing Trading** pada grafik H4/Daily jauh lebih realistis dibandingkan memaksakan diri melakukan *scalping*.`,
    closing: "Apakah Anda ingin mengetahui jam-jam sesi pasar global yang paling aktif untuk menyesuaikan jadwal analisis Anda?",
    related: ["Sesi pasar trading global", "Perbedaan Investasi, Swing Trading, dan Day Trading", "Bagaimana cara menyusun trading plan?"]
  },
  {
    id: "sesi-pasar",
    label: "Sesi Pasar Trading Global",
    keys: ["sesi", "session", "waktu trading", "jam trading", "london", "new york", "tokyo", "asia", "overlap"],
    body: `Pasar forex berjalan 24 jam selama lima hari kerja karena aktivitas berpindah mengikuti zona waktu pusat keuangan dunia. Setiap sesi memiliki ritme volatilitas yang berbeda:

• **Sesi Sydney & Tokyo / Asia (Pagi–Siang WIB):** Pergerakan harga cenderung lebih tenang dan sering membentuk rentang konsolidasi (*ranging*), kecuali pada pasangan yang melibatkan JPY, AUD, atau NZD.
• **Sesi London / Eropa (Mulai ±14.00–15.00 WIB):** Volume transaksi melonjak signifikan; sering menjadi titik awal penembusan rentang sesi Asia.
• **Sesi New York / Amerika (Mulai ±19.00–20.00 WIB):** Likuiditas sangat tinggi karena bertepatan dengan jam rilis data ekonomi AS.
• **Overlap London–New York (±19.00–23.00 WIB):** Pertemuan dua sesi terbesar dunia yang umumnya menghasilkan pergerakan harga paling aktif dalam sehari.`,
    example: `Bagi trader di Indonesia (WIB), waktu paling ideal untuk mengamati pasangan EUR/USD, GBP/USD, dan XAU/USD biasanya berada pada rentang **pukul 14.00 hingga 23.00 WIB**.`,
    closing: "Apakah Anda ingin membahas bagaimana konsep Killzone dan Power of Three bekerja pada sesi London dan New York?",
    related: ["Jelaskan Killzone dan Power of Three (AMD)", "Karakteristik berbagai instrumen pasar", "Bagaimana cara membaca analisis fundamental?"]
  },
  {
    id: "instrumen-pasar",
    label: "Karakteristik Berbagai Instrumen Pasar",
    keys: ["instrumen", "pasar keuangan", "instrumen trading", "perbedaan pasar", "kelas aset trading", "forex saham kripto"],
    body: `Meskipun prinsip pembacaan grafik dan manajemen risiko berlaku umum, tiap instrumen pasar memiliki karakter pergerakan yang berbeda:

• **Forex (Mata Uang):** Pasar paling likuid di dunia, beroperasi 24/5, dan sangat dipengaruhi suku bunga bank sentral.
• **Komoditas (Emas/XAUUSD, Minyak):** Volatilitasnya lebih lebar daripada mata uang utama dan sensitif terhadap inflasi serta situasi geopolitik.
• **Indeks Saham (US30, NAS100, SPX500):** Mewakili kinerja sekumpulan perusahaan besar suatu negara; cenderung memiliki bias tren jangka panjang yang kuat dan paling aktif saat jam bursa terkait dibuka.
• **Aset Kripto (BTC, ETH):** Berjalan 24/7 tanpa libur dengan tingkat volatilitas paling tinggi, sehingga memerlukan pengelolaan ukuran posisi yang ekstra hati-hati.`,
    example: `Pada indeks saham AS seperti **NAS100 (Nasdaq)**, lonjakan volatilitas paling tajam biasanya terjadi tepat saat bursa saham New York dibuka pada pukul 20.30 atau 21.30 WIB.`,
    closing: "Dari keempat kelas aset tersebut, instrumen mana yang paling menarik perhatian Anda saat ini?",
    related: ["Apa saja jenis pair dalam trading?", "Indeks Saham AS: US30, NAS100, dan SPX500", "Instrumen Pasar Uang (Deposito & Reksa Dana Pasar Uang)"]
  },
  {
    id: "dasar-forex",
    label: "Dasar Pasar Forex dan Cara Membaca Kuotasi",
    keys: ["forex", "foreign exchange", "valuta asing", "base currency", "quote currency", "kuotasi"],
    body: `**Forex** (*foreign exchange*) adalah pasar pertukaran mata uang global tempat satu mata uang diperdagangkan terhadap mata uang lainnya dalam bentuk pasangan (*pair*), seperti **EUR/USD**.

Cara membaca kuotasi pasangan mata uang:
• **Base Currency (Mata Uang Dasar):** Mata uang pertama di sisi kiri (contoh: **EUR**).
• **Quote Currency (Mata Uang Pembanding):** Mata uang kedua di sisi kanan (contoh: **USD**).
• Nilai kuotasi menunjukkan berapa banyak *Quote Currency* yang diperlukan untuk membeli 1 unit *Base Currency*.`,
    example: `Jika kuotasi **EUR/USD = 1,0850**, artinya 1 Euro bernilai 1,0850 Dolar AS. Apabila grafik naik ke 1,0900, artinya Euro menguat terhadap Dolar AS (atau Dolar AS melemah terhadap Euro).`,
    closing: "Apakah Anda ingin melanjutkan ke satuan dasar transaksi seperti pip, lot, dan spread?",
    related: ["Apa itu pip, lot, dan spread?", "Apa saja jenis pair dalam trading?", "Apa itu leverage dan margin?"]
  },
  {
    id: "pip-lot-spread",
    label: "Pip, Lot, dan Spread",
    keys: ["pip", "pips", "lot", "ukuran lot", "volume", "spread", "bid", "ask"],
    body: `Tiga satuan dasar ini wajib dipahami agar Anda bisa menghitung biaya dan risiko setiap transaksi dengan akurat:

• **Pip:** Satuan terkecil untuk mengukur perubahan harga. Pada mayoritas pair forex 4 desimal, 1 pip = **0,0001** (pada pasangan JPY, 1 pip = **0,01**).
• **Lot:** Satuan ukuran volume kontrak transaksi. Dalam forex standar: **1,00 lot** = 100.000 unit, **0,10 lot** (mini) = 10.000 unit, dan **0,01 lot** (mikro) = 1.000 unit.
• **Spread:** Selisih antara harga jual pasar (*Ask*) dan harga beli pasar (*Bid*). Spread adalah biaya langsung saat posisi dibuka dan dapat melebar saat rilis berita besar.`,
    example: `Pada pair EUR/USD dengan ukuran **0,10 lot**, setiap pergerakan **1 pip** bernilai sekitar **$1**. Jadi jika harga bergerak naik 25 pip sesuai arah posisi Anda, keuntungan kotor yang diperoleh adalah **$25** (sebelum dikurangi spread/komisi).`,
    closing: "Apakah Anda ingin melihat bagaimana perhitungan pip dan lot pada instrumen lain seperti emas (XAU/USD) dan indeks?",
    related: ["Bagaimana cara menghitung lot dan pip di XAU/USD?", "Apa itu leverage dan margin?", "Apa itu risk management dan position sizing?"]
  },
  {
    id: "leverage-margin",
    label: "Leverage dan Margin",
    keys: ["leverage", "margin", "margin call", "stop out"],
    body: `**Leverage** adalah fasilitas daya ungkit yang memungkinkan Anda mengendalikan nilai kontrak besar dengan dana jaminan yang lebih kecil. Dana jaminan yang dikunci sementara selama posisi terbuka disebut **Margin**.

Hal penting yang perlu dipahami secara objektif:
• Leverage memperbesar daya beli modal, tetapi juga memperbesar dampak fluktuasi harga terhadap saldo akun Anda.
• Menggunakan leverage tinggi tanpa **Stop Loss** membuat akun sangat rentan mengalami penurunan drastis hingga memicu *Margin Call* atau *Stop Out*.
• Leverage hanyalah alat efisiensi jaminan, bukan tambahan modal gratis.`,
    example: `Dengan leverage **1:100**, untuk membuka posisi senilai $10.000 (0,10 lot), broker hanya mengunci margin sebesar **$100**. Namun nilai pergerakan per pip-nya tetap $1 per pip—artinya pergerakan berlawanan 100 pip saja sudah menghabiskan margin tersebut jika tidak dibatasi Stop Loss.`,
    closing: "Apakah Anda ingin membahas bagaimana cara menghitung ukuran lot yang aman agar terhindar dari risiko over-leveraging?",
    related: ["Apa perbedaan Balance, Equity, dan Margin Level?", "Apa itu risk management dan position sizing?", "Kesalahan umum trader pemula"]
  },
  {
    id: "jenis-order",
    label: "Jenis Order dalam Trading",
    keys: ["jenis order", "order", "buy limit", "sell limit", "buy stop", "sell stop", "pending order", "market execution"],
    body: `Dalam mengeksekusi transaksi, Anda dapat memilih dua metode perintah utama sesuai rencana masuk pasar:

1. **Market Execution (Instant Order):** Membuka posisi Buy atau Sell secara langsung pada harga pasar saat itu juga.
2. **Pending Order:** Perintah otomatis yang baru aktif apabila harga menyentuh level tertentu di masa mendatang:
   • **Buy Limit:** Antre beli di *bawah* harga saat ini (berharap harga turun ke area support lalu memantul naik).
   • **Sell Limit:** Antre jual di *atas* harga saat ini (berharap harga naik ke area resistance lalu berbalik turun).
   • **Buy Stop:** Antre beli di *atas* harga saat ini (mengikuti momentum breakout ke atas).
   • **Sell Stop:** Antre jual di *bawah* harga saat ini (mengikuti momentum breakout ke bawah).`,
    example: `Misalnya harga EUR/USD saat ini berada di 1,0850 dan Anda melihat area Support kuat di 1,0820. Daripada menunggu di depan layar terus-menerus, Anda bisa memasang **Buy Limit di 1,0820** lengkap dengan Stop Loss dan Take Profit-nya.`,
    closing: "Apakah Anda ingin membahas cara membedakan breakout yang valid dengan jebakan fakeout?",
    related: ["Breakout, Retest, dan Fakeout", "Bagaimana cara menyusun trading plan?", "Manajemen posisi (SL, TP, Break Even, & Trailing Stop)"]
  },
  {
    id: "candlestick",
    label: "Candlestick dan Price Action",
    keys: ["candlestick", "candle", "price action", "aksi harga", "wick", "shadow", "body"],
    body: `**Candlestick** merangkum pertarungan antara pembeli dan penjual dalam satu periode waktu tertentu melalui empat data harga: **Open** (buka), **High** (tertinggi), **Low** (terendah), dan **Close** (tutup).

• **Body (Badan Candle):** Menunjukkan selisih antara harga buka dan harga tutup, yang mencerminkan kekuatan dominasi arah pada periode tersebut.
• **Wick / Shadow (Ekor Candle):** Menunjukkan batas harga ekstrem yang sempat dicapai namun ditolak sebelum periode candle berakhir.

Pendekatan **Price Action** membaca susunan candle beserta struktur pasar secara langsung. Satu bentuk candle tidak berdiri sendiri—maknanya selalu bergantung pada **di area mana** candle tersebut terbentuk.`,
    example: `Sebuah candle dengan ekor bawah yang sangat panjang (*pin bar / hammer*) akan memiliki makna jauh lebih kuat jika muncul tepat di **area Support utama**, dibandingkan jika muncul di tengah-tengah rentang harga yang kosong.`,
    closing: "Apakah Anda ingin mengenal pola-pola candlestick pembalikan arah yang paling sering digunakan sebagai konfirmasi entry?",
    related: ["Jelaskan pola candlestick Pin Bar dan Engulfing", "Support, Resistance, Supply, dan Demand", "Market Structure (Struktur Pasar)"]
  },
  {
    id: "pola-candlestick-reversal",
    label: "Pola Candlestick Pembalikan (Pin Bar, Engulfing, Doji, Morning Star)",
    keys: ["pola candlestick", "pin bar", "engulfing", "bullish engulfing", "bearish engulfing", "doji", "morning star", "evening star", "hammer", "shooting star"],
    body: `Pola candlestick pembalikan (*reversal candlestick patterns*) sering digunakan sebagai konfirmasi pemicu masuk pasar ketika harga menyentuh area Support, Resistance, atau Supply/Demand:

• **Pin Bar (Hammer / Shooting Star):** Candle dengan badan kecil dan ekor sangat panjang di satu sisi—menunjukkan penolakan harga yang kuat pada area kunci.
• **Bullish / Bearish Engulfing:** Pola dua candle di mana badan candle kedua menelan seluruh badan candle pertama ke arah berlawanan, menandakan pergantian dominasi momentum secara tiba-tiba.
• **Doji:** Harga buka dan harga tutup hampir sama sehingga badan candle sangat tipis—menandakan keraguan pasar (*indecision*) setelah pergerakan tren.
• **Morning Star & Evening Star:** Formasi tiga candle pembalikan yang terdiri dari candle tren kuat, candle kecil di ujung (jeda momentum), dan candle impulsif ke arah sebaliknya.`,
    example: `Ketika harga turun menyentuh **area Support H4**, munculnya **Bullish Engulfing** pada timeframe M15/H1 memberikan bukti bahwa pembeli mulai mengambil alih kendali di area tersebut.`,
    closing: "Apakah Anda ingin membahas bagaimana menggabungkan pola candle ini dengan area Support/Resistance dan Confluence?",
    related: ["Apa itu Confluence dalam analisis teknikal?", "Support, Resistance, Supply, dan Demand", "Candlestick dan Price Action"]
  },
  {
    id: "snr-snd",
    label: "Support, Resistance, Supply, dan Demand",
    keys: ["support", "resistance", "supply", "demand", "snr", "snd"],
    body: `**Support dan Resistance** adalah fondasi utama dalam memetakan area tempat harga berpotensi bereaksi pada grafik.

• **Support:** Area bawah tempat tekanan beli historis cukup kuat untuk menahan atau memperlambat penurunan harga.
• **Resistance:** Area atas tempat tekanan jual historis cukup kuat untuk menahan atau memperlambat kenaikan harga.
• **Supply & Demand:** Zona asal terjadinya pergerakan impulsif yang kuat, mencerminkan ketidakseimbangan besar antara pesanan beli dan jual.

Tips penting: Tandai level ini sebagai **zona atau area** (kotak tipis), bukan satu garis presisi, karena harga sering kali memantul sedikit sebelum atau sesudah menyentuh garis tersebut.`,
    example: `Apabila sebuah **area Resistance** berhasil ditembus ke atas dengan penutupan candle yang tegas, area tersebut sering kali berubah peran menjadi **Support baru** (*role reversal*) ketika harga kembali mengujinya.`,
    closing: "Apakah Anda ingin mengetahui cara membedakan penembusan area yang valid dengan fakeout?",
    related: ["Breakout, Retest, dan Fakeout", "Trendline dan Price Channel", "Apa itu Confluence dalam analisis teknikal?"]
  },
  {
    id: "confluence",
    label: "Confluence (Pertemuan Beberapa Konfirmasi Teknikal)",
    keys: ["confluence", "konfluensi", "pertemuan area", "multi konfirmasi"],
    body: `**Confluence** adalah kondisi ketika dua atau lebih alat analisis teknikal yang independen saling bertemu dan mengarah pada kesimpulan yang sama di satu area harga.

Mengapa *confluence* penting? Karena satu sinyal tunggal memiliki tingkat kegagalan lebih tinggi dibandingkan area yang didukung oleh beberapa bukti objektif sekaligus—tanpa harus memenuhi grafik dengan puluhan indikator.`,
    example: `Contoh setup dengan **Confluence tinggi**:
1. Tren utama H4 sedang **Bullish** (struktur Higher High & Higher Low).
2. Harga terkoreksi tepat ke **area bekas Resistance yang menjadi Support** (*role reversal*).
3. Area tersebut berhimpitan dengan level **61,8% Fibonacci Retracement** dan garis dinamis **EMA 50**.
4. Muncul pola candle **Bullish Engulfing** sebagai pemicu entry.`,
    closing: "Apakah Anda ingin membahas cara membedakan penembusan area kunci yang valid dengan jebakan fakeout?",
    related: ["Breakout, Retest, dan Fakeout", "Fibonacci Retracement dan Extension", "Bagaimana rutinitas pre-market dan checklist sebelum entry?"]
  },
  {
    id: "breakout-fakeout",
    label: "Breakout, Retest, dan Fakeout",
    keys: ["breakout", "retest", "fakeout", "false breakout", "break and retest"],
    body: `Saat harga menguji batas Support, Resistance, atau pola konsolidasi, terdapat dua skenario utama yang perlu Anda bedakan:

• **Breakout Valid:** Harga menembus area kunci dengan **penutupan badan candle (*candle close*)** yang tegas di luar area tersebut, lalu sering kali kembali menguji area yang baru ditembus (*Retest*) sebelum melanjutkan perjalanannya.
• **Fakeout (False Breakout):** Harga menembus area kunci hanya menggunakan ekor candle (*wick*) atau segera ditutup kembali masuk ke dalam rentang sebelumnya, menjebak trader yang terburu-buru masuk saat penembusan.`,
    example: `Untuk menghindari jebakan *fakeout*, banyak trader menerapkan aturan **Break & Retest**: menunggu harga menembus Resistance terlebih dahulu, lalu baru mencari konfirmasi Buy ketika harga turun kembali menyentuh area bekas Resistance tersebut.`,
    closing: "Apakah Anda ingin membahas bagaimana konsep liquidity sweep berkaitan erat dengan fenomena fakeout ini?",
    related: ["Liquidity dan Liquidity Sweep", "Support, Resistance, Supply, dan Demand", "Volume Trading dan Indikator Volatilitas (ATR)"]
  },
  {
    id: "trendline",
    label: "Trendline dan Price Channel",
    keys: ["trendline", "channel", "garis tren", "ascending", "descending"],
    body: `**Trendline** adalah garis diagonal yang ditarik menghubungkan titik-titik lembah pada tren naik (*uptrend*) atau titik-titik puncak pada tren turun (*downtrend*) untuk melihat kemiringan momentum tren.

Aturan praktis menggambar trendline agar objektif:
• Gunakan minimal **dua titik swing** untuk menarik garis awal, dan jadikan **titik sentuh ketiga** sebagai validasi.
• Jangan memaksakan garis memotong badan candle hanya agar terlihat rapi.
• Jika terdapat dua garis sejajar yang membatasi pergerakan atas dan bawah harga, formasi tersebut disebut **Price Channel**.`,
    example: `Pada tren naik yang sehat, setiap kali harga terkoreksi menyentuh **trendline naik** dan memunculkan reaksi candle bullish, area tersebut dapat menjadi referensi peluang mengikuti tren utama.`,
    closing: "Apakah Anda ingin mengenal berbagai pola grafik klasik seperti Double Top, Head and Shoulders, atau Flag?",
    related: ["Chart Pattern (Pola Grafik Klasik)", "Market Structure (Struktur Pasar)", "Apa itu Confluence dalam analisis teknikal?"]
  },
  {
    id: "chart-pattern",
    label: "Chart Pattern (Pola Grafik Klasik)",
    keys: ["chart pattern", "pola grafik", "double top", "double bottom", "head and shoulders", "flag", "pennant", "triangle", "wedge"],
    body: `**Chart pattern** adalah formasi geometris berulang pada grafik yang mencerminkan psikologi pertarungan antara pembeli dan penjual:

1. **Pola Pembalikan (*Reversal Patterns*):** Menandakan tren saat ini mulai kehabisan tenaga. Contohnya **Double Top / Double Bottom** (dua puncak/lembah sejajar) dan **Head and Shoulders** (tiga puncak dengan puncak tengah tertinggi).
2. **Pola Kelanjutan (*Continuation Patterns*):** Menandakan fase istirahat sementara sebelum harga melanjutkan tren utamanya. Contohnya **Bullish/Bearish Flag**, **Pennant**, dan **Triangle**.`,
    example: `Pada pola **Double Top** (menyerupai huruf M), sinyal konfirmasi pembalikan turun baru dianggap valid apabila harga berhasil menembus batas bawah di antara kedua puncak tersebut yang disebut **neckline**.`,
    closing: "Apakah Anda ingin membahas indikator teknikal seperti Moving Average, RSI, MACD, atau Bollinger Bands?",
    related: ["Indikator Teknikal Populer (MA, RSI, MACD)", "Jelaskan Bollinger Bands dan Stochastic", "Divergence dalam Analisis Teknikal"]
  },
  {
    id: "indikator",
    label: "Indikator Teknikal Populer (MA, RSI, MACD)",
    keys: ["indikator", "indicator", "moving average", "ma", "ema", "sma", "rsi", "macd"],
    body: `**Indikator teknikal** adalah alat bantu berbasis perhitungan matematis dari data harga historis untuk membaca arah tren, momentum, dan volatilitas:

• **Moving Average (SMA / EMA):** Menghitung rata-rata harga selama periode tertentu (seperti EMA 20, EMA 50, atau SMA 200) untuk menyaring kebisingan harga dan melihat arah tren dinamis.
• **RSI (Relative Strength Index):** Mengukur kecepatan momentum harga dalam skala 0–100. Area di atas 70 sering dipandang sebagai jenuh beli (*overbought*) dan di bawah 30 sebagai jenuh jual (*oversold*).
• **MACD:** Mengamati hubungan antara dua garis EMA untuk mendeteksi perubahan kekuatan serta arah momentum tren.

Ingat bahwa mayoritas indikator bersifat *lagging* (mengikuti harga yang sudah terjadi), sehingga paling efektif digunakan sebagai alat konfirmasi, bukan satu-satunya dasar masuk pasar.`,
    example: `Saat harga berada di atas **EMA 200** dan garis EMA 20 berada di atas EMA 50, indikator tersebut mengonfirmasi bahwa tren jangka menengah sedang berada dalam fase **bullish**.`,
    closing: "Apakah Anda ingin mengenal indikator volatilitas dan osilator lainnya seperti Bollinger Bands, Stochastic, atau ATR?",
    related: ["Jelaskan Bollinger Bands dan Stochastic", "Apa itu indikator ATR dan Volume trading?", "Divergence dalam Analisis Teknikal"]
  },
  {
    id: "bollinger-stochastic",
    label: "Bollinger Bands dan Stochastic Oscillator",
    keys: ["bollinger", "bollinger bands", "stochastic", "oscillator", "overbought", "oversold", "squeeze"],
    body: `Dua indikator teknikal klasik ini sangat populer untuk membaca batas volatilitas serta titik kejenuhan ayunan harga jangka pendek:

• **Bollinger Bands:** Terdiri dari tiga garis—garis tengah (*SMA 20*) serta pita atas dan bawah (*standar deviasi*). Ketika pita atas dan bawah menyempit rapat (**Bollinger Squeeze**), kondisi itu menandakan volatilitas sedang sangat rendah dan berpotensi segera disusul ledakan pergerakan harga (*breakout*).
• **Stochastic Oscillator:** Indikator momentum berskala 0–100 yang membandingkan harga penutupan saat ini dengan rentang harganya selama periode tertentu. Area di atas **80** menandakan *overbought* dan di bawah **20** menandakan *oversold*.`,
    example: `Pada kondisi pasar mendatar (*ranging*), ketika harga menyentuh pita bawah **Bollinger Bands** di area Support bersamaan dengan garis **Stochastic** berpotongan naik dari bawah level 20, hal itu memberi konfirmasi pantulan naik yang lebih terukur.`,
    closing: "Apakah Anda ingin membahas bagaimana indikator ATR dan Volume digunakan untuk mengukur kekuatan pergerakan harga?",
    related: ["Apa itu indikator ATR dan Volume trading?", "Indikator Teknikal Populer (MA, RSI, MACD)", "Apa itu Confluence dalam analisis teknikal?"]
  },
  {
    id: "volume-atr",
    label: "Volume Trading dan Indikator Volatilitas (ATR)",
    keys: ["volume trading", "atr", "average true range", "volatilitas", "tick volume", "indikator atr"],
    body: `Selain arah harga, mengukur **seberapa besar minat transaksi** dan **seberapa lebar fluktuasi normal pasar** sangat membantu penempatan Stop Loss:

• **Volume (Tick Volume pada Forex/CFD):** Mengukur banyaknya aktivitas perubahan harga dalam satu candle. Breakout yang disertai lonjakan volume tinggi memiliki peluang berlanjut jauh lebih besar dibandingkan breakout dengan volume tipis.
• **ATR (Average True Range):** Indikator yang mengukur rata-rata rentang pergerakan harga (dalam pip atau poin) selama *N* candle terakhir (standar 14 periode). ATR tidak menunjukkan arah naik/turun, melainkan menunjukkan seberapa "liar" atau "tenang" pasar saat ini.`,
    example: `Jika nilai **ATR (14)** pada grafik H1 EUR/USD adalah **15 pip**, maka meletakkan Stop Loss hanya sejauh 5 pip sangat berisiko tersentuh oleh fluktuasi normal pasar. Banyak trader menetapkan jarak Stop Loss minimal **1× hingga 1,5× nilai ATR** di luar area kunci.`,
    closing: "Apakah Anda ingin melanjutkan ke pembahasan mengenai Fibonacci Retracement dan Extension?",
    related: ["Fibonacci Retracement dan Extension", "Breakout, Retest, dan Fakeout", "Apa itu risk management dan position sizing?"]
  },
  {
    id: "fibonacci",
    label: "Fibonacci Retracement dan Extension",
    keys: ["fibonacci", "fibo", "retracement", "extension", "golden ratio", "61.8"],
    body: `**Fibonacci Retracement** adalah alat bantu untuk mengukur seberapa dalam potensi koreksi (*pullback*) harga sebelum melanjutkan arah tren utamanya.

Cara menggunakannya secara sistematis:
1. Pada tren naik, tarik garis Fibonacci dari titik terendah (**Swing Low**) ke titik tertinggi (**Swing High**). Pada tren turun, tarik dari **Swing High** ke **Swing Low**.
2. Amati area koreksi kunci pada rasio **38,2%**, **50,0%**, dan **61,8%** (*Golden Ratio*).
3. Gunakan **Fibonacci Extension** (level **127,2%** dan **161,8%**) sebagai referensi proyeksi target keuntungan.`,
    example: `Level **61,8% Fibonacci** akan menjadi area pantulan yang jauh lebih meyakinkan apabila posisinya berhimpitan langsung dengan **area Support historis** atau garis **EMA 50** (*confluence*).`,
    closing: "Apakah Anda ingin melihat bagaimana konsep ICT mengembangkan Fibonacci ke dalam zona Premium/Discount dan OTE?",
    related: ["Jelaskan zona Premium dan Discount", "Apa itu Optimal Trade Entry (OTE)?", "Apa itu Confluence dalam analisis teknikal?"]
  },
  {
    id: "divergence",
    label: "Divergence dalam Analisis Teknikal",
    keys: ["divergence", "bullish divergence", "bearish divergence", "rsi divergence"],
    body: `**Divergence** terjadi ketika arah pergerakan harga pada grafik bertentangan dengan arah pergerakan indikator momentum (seperti RSI atau MACD). Ini menjadi petunjuk awal bahwa tenaga tren yang sedang berjalan mulai melemah.

• **Bullish Divergence:** Harga mencetak lembah yang lebih rendah (*Lower Low*), namun indikator RSI justru membentuk lembah yang lebih tinggi (*Higher Low*). Menandakan tekanan jual mulai berkurang.
• **Bearish Divergence:** Harga mencetak puncak yang lebih tinggi (*Higher High*), namun indikator RSI membentuk puncak yang lebih rendah (*Lower High*). Menandakan dorongan beli mulai melemah.`,
    example: `Jika XAU/USD mencetak harga tertinggi baru di grafik H1, tetapi puncak **RSI** justru lebih rendah dari puncak sebelumnya, kondisi *bearish divergence* ini memperingatkan Anda untuk tidak terburu-buru mengejar posisi Buy di pucuk harga.`,
    closing: "Apakah Anda ingin membahas bagaimana cara mengonfirmasi perubahan arah harga melalui struktur pasar (BOS dan CHoCH)?",
    related: ["Break of Structure (BOS) dan CHoCH", "Indikator Teknikal Populer (MA, RSI, MACD)", "Chart Pattern (Pola Grafik Klasik)"]
  },
  {
    id: "market-structure",
    label: "Market Structure (Struktur Pasar)",
    keys: ["market structure", "struktur pasar", "swing high", "swing low", "trend", "uptrend", "downtrend"],
    body: `**Market structure** adalah kerangka membaca arah kecenderungan pasar dengan mengamati urutan titik puncak (*Swing High*) dan titik lembah (*Swing Low*) yang terbentuk:

• **Uptrend (Tren Naik):** Rangkaian puncak yang semakin tinggi (**Higher High / HH**) dan lembah yang semakin tinggi (**Higher Low / HL**).
• **Downtrend (Tren Turun):** Rangkaian lembah yang semakin rendah (**Lower Low / LL**) dan puncak yang semakin rendah (**Lower High / LH**).
• **Ranging (Konsolidasi):** Harga bergerak mendatar di antara batas atas dan batas bawah tanpa membentuk tren yang jelas.`,
    example: `Selama harga dalam kondisi **Uptrend** terus membentuk *Higher Low* baru dan tidak menembus *Higher Low* sebelumnya ke bawah, maka fokus utama trader adalah mencari peluang **Buy** pada saat terjadi koreksi.`,
    closing: "Apakah Anda ingin membahas istilah lanjutan dari struktur pasar seperti BOS (Break of Structure) dan CHoCH?",
    related: ["Break of Structure (BOS) dan CHoCH", "Analisis Multi-Timeframe (Top-Down)", "Smart Money Concept (SMC) dan ICT"]
  },
  {
    id: "bos-choch",
    label: "Break of Structure (BOS) dan CHoCH",
    keys: ["bos", "break of structure", "choch", "change of character", "mss"],
    body: `**BOS** dan **CHoCH** digunakan untuk memetakan apakah struktur tren sedang berlanjut atau mulai menunjukkan tanda pergeseran arah:

• **Break of Structure (BOS):** Harga menembus titik swing sebelumnya yang **searah** dengan tren utama (misalnya menembus *Higher High* pada uptrend), yang menandakan kelanjutan tren.
• **Change of Character (CHoCH / MSS):** Harga menembus titik swing internal yang **berlawanan** dengan tren sebelumnya (misalnya menembus *Lower High* terakhir setelah tren turun), yang menjadi sinyal awal potensi pembalikan arah.`,
    example: `Setelah tren turun membentuk rangkaian *Lower Low* dan *Lower High*, kemunculan **CHoCH** ke atas memberi sinyal bagi trader untuk mulai mengalihkan fokus dari mencari posisi Sell menjadi mencari peluang Buy saat harga terkoreksi.`,
    closing: "Apakah Anda ingin mendalami komponen SMC/ICT lainnya seperti Order Block, FVG, Zona Premium/Discount, atau OTE?",
    related: ["Smart Money Concept (SMC) dan ICT", "Jelaskan zona Premium dan Discount", "Liquidity dan Liquidity Sweep"]
  },
  {
    id: "smc-ict",
    label: "Smart Money Concept (SMC) dan ICT",
    keys: ["smc", "smart money concept", "smart money", "ict", "order block", "ob", "fair value gap", "fvg", "imbalance"],
    body: `**Smart Money Concept (SMC)** dan pendekatan **ICT** (*Inner Circle Trader*) berfokus membaca pergerakan harga melalui struktur pasar, area likuiditas, serta ketidakseimbangan pesanan:

• **Order Block (OB):** Area candle terakhir sebelum terjadinya dorongan impulsif yang menembus struktur pasar, yang dipandang sebagai zona potensi reaksi ketika harga kembali.
• **Fair Value Gap (FVG / Imbalance):** Celah ketidakseimbangan pada formasi tiga candle beruntun akibat pergerakan harga yang sangat cepat sehingga ekor candle pertama dan ketiga tidak saling bersentuhan.
• **Liquidity:** Area konsentrasi pesanan pasar, umumnya berada di atas swing high atau di bawah swing low.`,
    example: `Ketika harga melakukan pergerakan naik yang sangat cepat hingga meninggalkan **Fair Value Gap (FVG)** di bawahnya, trader sering menunggu harga turun kembali menutup sebagian celah FVG tersebut untuk mencari titik masuk Buy yang lebih efisien.`,
    closing: "Apakah Anda ingin mendalami konsep lanjutan SMC/ICT seperti Zona Premium & Discount, OTE, atau Breaker Block?",
    related: ["Jelaskan zona Premium dan Discount", "Apa itu Optimal Trade Entry (OTE)?", "Jelaskan Breaker Block dan Mitigation Block"]
  },
  {
    id: "premium-discount",
    label: "Zona Premium dan Discount (SMC/ICT)",
    keys: ["premium", "discount", "equilibrium", "zona premium", "zona discount", "mahal dan murah"],
    body: `Dalam konsep **SMC/ICT**, sebelum mencari peluang masuk pada sebuah rentang *swing* (dari Swing Low ke Swing High), grafik dibagi dua tepat di titik tengah **50% (Equilibrium)**:

• **Zona Discount (Di bawah 50%):** Area harga "murah" pada suatu rentang tren naik. Trader mencari peluang **Buy** hanya ketika harga terkoreksi masuk ke zona Discount (misalnya di area Order Block atau FVG bagian bawah).
• **Zona Premium (Di atas 50%):** Area harga "mahal" pada suatu rentang tren turun. Trader mencari peluang **Sell** hanya ketika harga naik terkoreksi masuk ke zona Premium.`,
    example: `Jika tren H4 sedang **Bullish** dengan Swing Low di 1,0800 dan Swing High di 1,0900, maka titik tengah (*Equilibrium*) berada di **1,0850**. Membeli di atas 1,0850 berarti membeli di harga mahal (*Premium*), sehingga lebih bijak menunggu harga turun di bawah 1,0850 (**Zona Discount**).`,
    closing: "Apakah Anda ingin mengetahui area presisi di dalam zona Premium/Discount yang disebut Optimal Trade Entry (OTE)?",
    related: ["Apa itu Optimal Trade Entry (OTE)?", "Smart Money Concept (SMC) dan ICT", "Fibonacci Retracement dan Extension"]
  },
  {
    id: "ote-ict",
    label: "Optimal Trade Entry (OTE) dalam Konsep ICT",
    keys: ["ote", "optimal trade entry", "0.62", "0.705", "0.79"],
    body: `**Optimal Trade Entry (OTE)** adalah zona koreksi presisi dalam metodologi ICT yang digunakan untuk masuk mengikuti arah tren utama setelah terjadinya *Break of Structure* atau *Market Structure Shift*.

Level Fibonacci khusus yang digunakan pada zona OTE berada di dalam area **Discount** (untuk Buy) atau **Premium** (untuk Sell), yakni pada rentang **62% (0,62) hingga 79% (0,79)** dengan titik tengah ideal di **70,5% (0,705)**.`,
    example: `Setelah harga membentuk dorongan naik yang menembus struktur (*BOS*), Anda menarik Fibonacci dari Swing Low ke Swing High tersebut. Jika di rentang **62%–79%** terdapat *Fair Value Gap* atau *Order Block*, area itulah yang disebut zona **OTE** dengan rasio Risk/Reward yang sangat efisien.`,
    closing: "Apakah Anda ingin membahas konsep waktu dalam ICT yaitu Killzone dan Power of Three (AMD)?",
    related: ["Jelaskan Killzone dan Power of Three (AMD)", "Jelaskan zona Premium dan Discount", "Smart Money Concept (SMC) dan ICT"]
  },
  {
    id: "killzone-po3",
    label: "Killzone dan Power of Three (AMD)",
    keys: ["killzone", "power of three", "po3", "amd", "accumulation", "manipulation", "distribution", "judas swing"],
    body: `Dalam pendekatan ICT, pergerakan harga harian tidak terjadi secara acak, melainkan mengikuti siklus waktu (**Killzone**) dan pola tiga fase (**Power of Three / AMD**):

• **Killzone:** Jendela waktu paling aktif saat likuiditas institusional masuk ke pasar—terutama **London Open Killzone** (sekitar pukul 14.00–17.00 WIB) dan **New York Open Killzone** (sekitar pukul 19.00–22.00 WIB).
• **Power of Three (AMD):**
  1. **Accumulation (Akumulasi):** Konsolidasi sempit pada sesi Asia tempat pesanan menumpuk.
  2. **Manipulation (Manipulasi / *Judas Swing*):** Gerakan palsu saat pembukaan sesi London untuk menyapu likuiditas di atas/bawah rentang Asia.
  3. **Distribution (Distribusi):** Pergerakan tren sesungguhnya ke arah berlawanan dari fase manipulasi.`,
    example: `Sering kali pada pembukaan sesi London pukul 14.30 WIB, harga menembus batas atas sesi Asia sesaat (fase **Manipulation**), menjebak trader yang membuka posisi Buy, lalu berbalik turun kencang sepanjang sisa hari (fase **Distribution**).`,
    closing: "Apakah Anda ingin mengenal konsep Inducement dan perbedaan Internal vs External Liquidity?",
    related: ["Apa itu Inducement dalam SMC?", "Liquidity dan Liquidity Sweep", "Sesi pasar trading global"]
  },
  {
    id: "inducement-liquidity",
    label: "Inducement dan Internal vs External Liquidity",
    keys: ["inducement", "idm", "internal liquidity", "external liquidity"],
    body: `Dalam pemetaan likuiditas lanjutan pada SMC, tidak semua area *Order Block* akan bertahan—banyak di antaranya justru berfungsi sebagai pancingan likuiditas sebelum harga mencapai area utama:

• **Inducement (IDM):** Titik *pullback* minor atau area kunci terdekat sebelum zona Order Block utama. Inducement berfungsi "memancing" trader ritel untuk masuk terlalu cepat sehingga Stop Loss mereka menjadi bahan bakar likuiditas ketika harga menyapu area tersebut sebelum menyentuh zona utama.
• **Internal vs External Liquidity:** *External Liquidity* adalah titik puncak tertinggi (Swing High) dan lembah terendah (Swing Low) dari rentang struktur utama; sedangkan *Internal Liquidity* adalah area FVG dan titik swing kecil di dalam rentang tersebut.`,
    example: `Ketika harga terkoreksi menuju Order Block utama di bagian bawah, harga sering berhenti sesaat di dekatnya, memantul sedikit untuk memancing pembeli cepat (**Inducement**), lalu turun menyapu titik tersebut hingga menyentuh **Order Block utama** sebelum benar-benar naik.`,
    closing: "Apakah Anda ingin mengetahui apa yang terjadi ketika sebuah Order Block gagal menahan harga, yaitu Breaker Block dan Mitigation Block?",
    related: ["Jelaskan Breaker Block dan Mitigation Block", "Liquidity dan Liquidity Sweep", "Smart Money Concept (SMC) dan ICT"]
  },
  {
    id: "breaker-mitigation",
    label: "Breaker Block dan Mitigation Block",
    keys: ["breaker block", "breaker", "mitigation block", "mitigation", "order block gagal"],
    body: `Ketika sebuah area *Order Block* ditembus secara tegas oleh momentum yang berlawanan, area tersebut tidak selalu dibuang, melainkan dapat berubah fungsi:

• **Breaker Block:** Terjadi ketika harga menyapu likuiditas (*liquidity sweep* membentuk puncak/lembah baru), lalu berbalik arah secara impulsif menembus *Order Block* yang sebelumnya menahan harga. Area bekas Order Block yang tertembus itu berubah menjadi **Breaker Block** untuk peluang retest.
• **Mitigation Block:** Mirip dengan Breaker Block, namun terjadi ketika harga **gagal** mencetak puncak/lembah baru sebelum berbalik menembus struktur dan Order Block sebelumnya.`,
    example: `Jika sebuah *Bullish Order Block* ditembus ke bawah oleh candle impulsif yang menciptakan *Change of Character (CHoCH)* bearish, maka ketika harga naik kembali menyentuh zona bekas Order Block tersebut, zona itu kini berperan sebagai **Bearish Breaker Block** untuk mencari peluang Sell.`,
    closing: "Apakah Anda ingin beralih ke pilar terpenting dalam mengelola eksposur pasar, yaitu Manajemen Risiko dan perhitungan ukuran lot?",
    related: ["Apa itu risk management dan position sizing?", "Break of Structure (BOS) dan CHoCH", "Smart Money Concept (SMC) dan ICT"]
  },
  {
    id: "liquidity",
    label: "Liquidity dan Liquidity Sweep",
    keys: ["liquidity", "liquidity sweep", "sweep", "liquidity grab", "stop hunt", "likuiditas"],
    body: `Dalam pasar keuangan, **likuiditas** merujuk pada ketersediaan volume pesanan beli dan jual. Dalam analisis teknis, area tepat di atas *Swing High* dan di bawah *Swing Low* sering menjadi tempat terkumpulnya pesanan Stop Loss maupun pending order breakout.

• **Liquidity Sweep:** Kondisi ketika harga bergerak melewati level swing tersebut untuk menyerap pesanan yang tersedia, namun gagal melanjutkan tren dan segera berbalik kembali ke dalam rentang sebelumnya.`,
    example: `Sering kali harga tampak menembus titik terendah hari kemarin (*Previous Day Low*), membuat trader panik membuka posisi Sell, lalu dalam beberapa candle berikutnya harga justru berbalik naik kencang. Pola inilah yang dikenal sebagai **bullish liquidity sweep**.`,
    closing: "Apakah Anda ingin membahas bagaimana Inducement dan Killzone berkaitan dengan sapuan likuiditas ini?",
    related: ["Apa itu Inducement dalam SMC?", "Jelaskan Killzone dan Power of Three (AMD)", "Breakout, Retest, dan Fakeout"]
  },
  {
    id: "risk-management",
    label: "Manajemen Risiko dan Position Sizing",
    keys: ["risk management", "manajemen risiko", "position sizing", "risk reward", "rr", "drawdown", "rasio risiko", "hitung lot"],
    body: `**Manajemen risiko** adalah fondasi utama yang menjaga agar modal Anda tetap bertahan dalam jangka panjang, sekalipun sedang menghadapi serangkaian kerugian.

Empat pilar utamanya meliputi:
1. **Batas Risiko per Transaksi:** Batasi potensi kerugian maksimal sebesar **0,5% hingga 2%** dari total saldo akun per transaksi.
2. **Position Sizing (Perhitungan Ukuran Lot):** Ukuran lot tidak dipilih berdasarkan perasaan, melainkan dihitung dari nominal risiko dibagi dengan jarak Stop Loss.
3. **Rasio Risk/Reward (R:R):** Pastikan potensi keuntungan lebih besar daripada risiko (misalnya **1:2** atau **1:3**). Dengan rasio 1:2, Anda tetap meraih profit bersih meski tingkat kemenangan (*win rate*) hanya 40%–50%.
4. **Batas Drawdown:** Tetapkan batas kerugian harian atau mingguan agar emosi tetap terkendali.`,
    example: `**Simulasi Perhitungan Lot:** Misalkan modal Anda **$1.000** dan batas risiko per transaksi adalah **1% ($10)**. Jika jarak Stop Loss pada EUR/USD adalah **20 pip**, maka ukuran lot yang tepat adalah **0,05 lot** (karena $10 ÷ 20 pip = $0,50 per pip). Jika terkena Stop Loss, kerugian Anda pas di $10 (1%).`,
    closing: "Apakah Anda ingin mengetahui bagaimana cara mengelola posisi setelah transaksi berjalan, seperti penggunaan Break Even dan Trailing Stop?",
    related: ["Manajemen posisi (SL, TP, Break Even, & Trailing Stop)", "Bagaimana cara menghitung lot dan pip di XAU/USD?", "Apa itu Prop Firm dan aturan challenge-nya?"]
  },
  {
    id: "manajemen-posisi",
    label: "Manajemen Posisi (SL, TP, Break Even, & Trailing Stop)",
    keys: ["manajemen posisi", "trade management", "stop loss", "take profit", "break even", "bep", "trailing stop", "partial close", "sl"],
    body: `Mengelola transaksi yang sedang berjalan secara objektif sama pentingnya dengan menentukan titik masuk:

• **Stop Loss (SL):** Batas keluar otomatis apabila harga bergerak berlawanan dengan analisis. Hindari menggeser SL menjadi lebih lebar hanya karena berharap harga berbalik.
• **Take Profit (TP):** Target penguncian keuntungan otomatis pada area struktur yang telah direncanakan.
• **Break Even Point (BEP / SL+):** Menggeser Stop Loss ke titik harga masuk setelah harga bergerak searah mencapai rasio tertentu (misalnya 1:1) sehingga transaksi menjadi bebas risiko modal.
• **Partial Close & Trailing Stop:** Menutup sebagian volume lot di target pertama dan membiarkan sisanya mengikuti tren dengan menggeser SL di belakang titik swing baru.`,
    example: `Misalnya Anda Buy EUR/USD dengan target rasio 1:3. Ketika harga sudah naik mencapai rasio **1:1,5**, Anda dapat memindahkan Stop Loss ke harga masuk (**BEP**). Dengan begitu, skenario terburuknya adalah impas tanpa kehilangan modal.`,
    closing: "Apakah Anda ingin mengetahui mengapa metode Averaging, Martingale, dan Hedging justru sering membahayakan akun?",
    related: ["Jelaskan risiko Averaging, Martingale, dan Hedging", "Apa itu risk management dan position sizing?", "Backtesting, Forward Testing, dan Ekspektansi"]
  },
  {
    id: "averaging-martingale-hedging",
    label: "Averaging, Martingale, dan Hedging (Serta Risikonya)",
    keys: ["averaging", "martingale", "hedging", "grid", "cost averaging", "kunci posisi"],
    body: `Ketiga teknik ini sering ditemui pada robot trading maupun trader yang enggan menerima kerugian (*Stop Loss*), namun memiliki risiko struktural yang tinggi jika tidak dipahami:

• **Averaging (Dollar/Price Cost Averaging):** Membuka posisi tambahan searah saat harga bergerak berlawanan untuk menurunkan harga rata-rata masuk. Tanpa batas maksimal, *floating loss* akan menumpuk cepat saat pasar mengalami tren satu arah yang panjang.
• **Martingale:** Melipatgandakan ukuran lot setiap kali mengalami kerugian (misalnya 0,01 → 0,02 → 0,04 → 0,08) agar satu kali kemenangan menutup seluruh kerugian sebelumnya. Strategi ini sangat berisiko menghabiskan seluruh modal (*Margin Call*) hanya karena 6–8 kali kekalahan beruntun.
• **Hedging:** Membuka posisi Buy dan Sell pada instrumen yang sama secara bersamaan untuk "mengunci" kerugian sementara. Meskipun menahan fluktuasi, biaya spread/swap tetap berjalan dan melepas kunci posisi tanpa merusak akun membutuhkan keahlian tinggi.`,
    example: `Pada teknik **Martingale**, jika Anda mulai dari 0,05 lot dan mengalami 7 kali kerugian beruntun, pada transaksi ke-8 Anda terpaksa membuka **6,40 lot** hanya demi menutup kerugian awal—beban risiko yang jauh melampaui ketahanan saldo akun normal.`,
    closing: "Apakah Anda ingin mengenal bagaimana perusahaan pendanaan trader (Prop Firm) menerapkan aturan ketat terhadap drawdown?",
    related: ["Apa itu Prop Firm dan aturan challenge-nya?", "Apa itu risk management dan position sizing?", "Kesalahan umum trader pemula"]
  },
  {
    id: "prop-firm",
    label: "Prop Firm dan Aturan Tantangan (Challenge)",
    keys: ["prop firm", "proprietary trading", "funded account", "akun funded", "ftmo", "daily drawdown", "max drawdown", "challenge"],
    body: `**Prop Firm** (*Proprietary Trading Firm*) adalah perusahaan yang menyediakan modal trading besar kepada trader yang berhasil lulus tahap evaluasi (*challenge*) dengan mematuhi aturan manajemen risiko yang ketat.

Aturan utama yang wajib dipahami pada hampir semua Prop Firm:
• **Target Profit Evaluasi:** Umumnya 8%–10% pada tahap pertama dan 5% pada tahap kedua tanpa melanggar batas kerugian.
• **Maximum Daily Drawdown (Batas Rugi Harian):** Batas maksimal kerugian dalam satu hari (umumnya **4%–5%** dari ekuitas/saldo awal hari tersebut). Jika tersentuh, akun langsung gugur.
• **Maximum Overall Drawdown:** Batas maksimal penurunan total akun dari modal awal (umumnya **8%–10%**).
• **Aturan Tambahan:** Sebagian prop firm membatasi trading tepat saat rilis berita *High Impact*, melarang strategi Martingale/arbitrase, atau mewajibkan konsistensi ukuran lot.`,
    example: `Jika Anda mengelola akun Prop Firm senilai **$10.000** dengan batas *Daily Drawdown* **5% ($500)**, maka risiko per transaksi sebaiknya dibatasi maksimal **0,5% hingga 1% ($50–$100)** agar Anda memiliki ruang napas yang aman meskipun mengalami 3–4 kali loss beruntun dalam sehari.`,
    closing: "Apakah Anda ingin membahas bagaimana cara menguji kelayakan strategi Anda melalui Backtesting dan Forward Testing?",
    related: ["Backtesting, Forward Testing, dan Ekspektansi", "Apa itu risk management dan position sizing?", "Jurnal Trading dan Evaluasi Berkala"]
  },
  {
    id: "backtest",
    label: "Backtesting, Forward Testing, dan Ekspektansi",
    keys: ["backtest", "backtesting", "forward test", "ekspektansi", "expectancy", "win rate", "uji strategi"],
    body: `Sebelum menggunakan dana riil pada suatu metode, Anda perlu memastikan bahwa aturan trading plan Anda memiliki keunggulan statistik (*edge*):

• **Backtesting:** Menguji aturan strategi pada data grafik historis di masa lalu (minimal 50–100 sampel transaksi) untuk mengetahui *win rate* dan *drawdown* maksimalnya.
• **Forward Testing:** Menjalankan strategi yang sama pada pergerakan pasar langsung (*real-time*) menggunakan akun demo untuk melatih eksekusi dan kesabaran.
• **Ekspektansi Sistem:** Profitabilitas jangka panjang ditentukan oleh perpaduan antara *win rate* dan rasio *Risk/Reward*, bukan sekadar mencari win rate 90% tanpa batas risiko.`,
    example: `Jika dari 100 kali transaksi *backtest*, Anda menang 45 kali dengan rasio 1:2 (+90R) dan kalah 55 kali (-55R), maka sistem Anda memiliki ekspektansi bersih positif sebesar **+35R**.`,
    closing: "Apakah Anda ingin membahas bagaimana cara mencatat hasil latihan tersebut ke dalam jurnal trading?",
    related: ["Jurnal Trading dan Evaluasi Berkala", "Apa itu risk management dan position sizing?", "Psikologi Trading dan Disiplin Eksekusi"]
  },
  {
    id: "jurnal",
    label: "Jurnal Trading dan Evaluasi Berkala",
    keys: ["jurnal", "journal", "evaluasi", "konsistensi"],
    body: `**Jurnal trading** adalah catatan lengkap dari setiap transaksi yang Anda lakukan—baik yang berakhir profit maupun loss—sebagai bahan evaluasi objektif.

Empat hal penting yang sebaiknya dicatat:
• **Detail Teknis:** Pair, tanggal, sesi waktu, arah posisi, titik entry, SL, TP, dan rasio R:R.
• **Alasan Setup:** Alasan singkat mengapa transaksi tersebut memenuhi aturan trading plan Anda.
• **Kondisi Emosi:** Catatan perasaan Anda saat mengambil keputusan (tenang, ragu, atau terburu-buru).
• **Dokumentasi Grafik (*Screenshot*):** Gambar grafik sebelum dan sesudah transaksi untuk ditinjau setiap akhir pekan.`,
    example: `Melalui evaluasi jurnal akhir pekan, Anda mungkin menyadari bahwa 80% kerugian Anda ternyata terjadi saat Anda memaksakan entry di **sesi Asia** yang sepi, sementara transaksi di **sesi London** jauh lebih konsisten.`,
    closing: "Apakah Anda ingin membahas sisi psikologi trading seperti cara mengatasi FOMO dan revenge trading?",
    related: ["Psikologi Trading dan Disiplin Eksekusi", "Kesalahan umum trader pemula", "Backtesting, Forward Testing, dan Ekspektansi"]
  },
  {
    id: "psikologi",
    label: "Psikologi Trading dan Disiplin Eksekusi",
    keys: ["psikologi", "psikologi trading", "fomo", "revenge", "overtrading", "emosi", "disiplin"],
    body: `**Psikologi trading** adalah kemampuan menjaga ketenangan dan objektivitas dalam menghadapi ketidakpastian pasar. Tiga jebakan emosi yang paling sering merusak akun adalah:

• **FOMO (*Fear of Missing Out*):** Mengejar harga yang sudah bergerak jauh karena takut ketinggalan peluang, tanpa menunggu harga kembali ke area rencana.
• **Revenge Trading:** Langsung membuka posisi baru secara emosional setelah mengalami kerugian dengan niat membalas kekalahan secepatnya—sering kali sambil memperbesar lot.
• **Overtrading:** Terus-menerus masuk pasar di luar rencana karena bosan atau ingin selalu berada dalam posisi.`,
    example: `Cara praktis memutus siklus emosi: terapkan aturan **jeda wajib (*cooling-off*)** selama 1–2 jam—atau berhenti trading untuk hari itu—apabila Anda mengalami **2 kali kerugian beruntun** dalam satu hari.`,
    closing: "Apakah Anda ingin mengetahui kesalahan-kesalahan umum lain yang sering dialami pemula agar bisa dihindari sejak awal?",
    related: ["Kesalahan umum trader pemula", "Jurnal Trading dan Evaluasi Berkala", "Bias Psikologis dalam Keuangan (Herd Mentality & Sunk Cost)"]
  },
  {
    id: "kesalahan-pemula",
    label: "Kesalahan Umum Trader Pemula",
    keys: ["kesalahan", "pemula", "gagal", "rugi terus", "loss terus", "strategy hopping", "sering mc", "mc"],
    body: `Sebagian besar kegagalan di tahap awal bukan disebabkan oleh kurangnya indikator, melainkan kebiasaan eksekusi dan pengelolaan risiko yang keliru:

• **Over-Leveraging & Pakai Uang Panas:** Memasang lot terlalu besar dibandingkan saldo akun atau memakai uang kebutuhan hidup demi mengejar profit cepat, sehingga satu atau dua kerugian langsung menggerus modal secara drastis (*Margin Call*).
• **Trading Tanpa Stop Loss:** Membiarkan kerugian mengambang tanpa batas dengan harapan harga akan kembali berbalik.
• **Strategy Hopping:** Terus berganti-ganti metode analisis setiap kali mengalami beberapa kerugian beruntun, padahal setiap strategi memiliki fase *drawdown* alami.
• **Mencari Kepastian Mutlak:** Pasar adalah permainan probabilitas. Tujuannya bukan benar 100%, melainkan menjaga kerugian tetap kecil saat salah dan memaksimalkan keuntungan saat benar.`,
    example: `Pelaku pasar yang bertahan lama bukanlah mereka yang tidak pernah mengalami *loss*, melainkan mereka yang memastikan bahwa setiap kali mengalami *loss*, dampaknya tidak lebih dari **1% dari total modal** sehingga akun tetap sehat untuk peluang berikutnya.`,
    closing: "Apakah ada bagian dari kebiasaan di atas yang sedang Anda evaluasi saat ini? Kita bisa diskusikan langkah praktisnya.",
    related: ["Apa itu risk management dan position sizing?", "Perbedaan uang dingin dan uang panas", "Cara pandang dasar dalam dunia finansial"]
  },
];
