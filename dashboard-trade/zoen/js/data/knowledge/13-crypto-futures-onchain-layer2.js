// Bagian materi 13. Isi objek dipertahankan dari file sumber.
export const part13 = [
{
    id: "perpetual-futures-cross-isolated-mark-price",
    label: "Mekanisme Crypto Perpetual Futures: Cross vs Isolated Margin & Mark Price",
    keys: ["perpetual futures", "cross margin", "isolated margin", "mark price", "last price", "likuidasi futures", "auto deleveraging", "adl"],
    body: `Berbeda dari kontrak *futures* tradisional yang memiliki tanggal kedaluwarsa, **Perpetual Futures** di pasar kripto dapat ditahan tanpa batas waktu selama margin mencukupi. Memahami tiga pengaturan dasar berikut wajib dilakukan sebelum membuka posisi:

• **Isolated Margin vs Cross Margin:** Pada mode **Isolated**, risiko kerugian dibatasi hanya sebesar margin yang dialokasikan khusus untuk satu posisi tersebut—jika terlikuidasi, sisa saldo di dompet *futures* tetap aman. Pada mode **Cross**, seluruh saldo tersedia di dompet *futures* digunakan bersama-sama untuk menahan posisi dari likuidasi, sehingga satu posisi tanpa *stop loss* dapat menguras seluruh akun.
• **Mark Price vs Last Price:** *Last Price* adalah harga transaksi terakhir di buku order bursa tersebut, sedangkan **Mark Price** adalah harga acuan wajar yang dihitung dari rata-rata indeks harga *spot* beberapa bursa utama. Bursa memakai *Mark Price* untuk memicu likuidasi agar trader tidak terlikuidasi secara tidak adil akibat *wick* manipulasi sesaat pada satu bursa saja.
• **Auto-Deleveraging (ADL):** Mekanisme darurat bursa saat volatilitas ekstrem ketika dana asuransi (*Insurance Fund*) tidak cukup menutup likuidasi besar, sehingga sebagian profit posisi ber-leverage tinggi milik trader lawan dikurangi otomatis.`,
    example: `Bagi trader ritel, menggunakan mode **Isolated Margin** yang dipadukan dengan order **Stop Loss berdasarkan Mark Price** mencegah satu kesalahan analisis atau lonjakan *wick* sesaat menyapu bersih seluruh saldo dompet *futures* Anda.`,
    closing: "Apakah Anda ingin mempelajari bagaimana bursa menjaga harga Perpetual Futures tetap selaras dengan harga Spot melalui Funding Rate?",
    related: ["Cara Membaca Funding Rate dalam Crypto Futures (Sentimen Long vs Short)", "Perbedaan Pasar Crypto Spot dan Crypto Futures (Derivatif)", "Manajemen Risiko Khusus Kripto: Volatilitas Ekstrem, Wick Hunt, & Aturan Leverage"]
  },
  {
    id: "funding-rate-crypto-futures",
    label: "Cara Membaca Funding Rate dalam Crypto Futures (Sentimen Long vs Short)",
    keys: ["funding rate", "funding fee", "biaya pendanaan", "sentimen long short", "overleveraged", "arbitrase funding"],
    body: `Karena kontrak *Perpetual Futures* tidak pernah kedaluwarsa, bursa menggunakan mekanisme pembayaran berkala antar-trader (umumnya setiap 8 jam) yang disebut **Funding Rate** agar harga kontrak *futures* tidak melenceng jauh dari harga pasar *spot*:

• **Funding Rate Positif (+):** Terjadi ketika harga *futures* lebih tinggi daripada harga *spot* karena mayoritas trader membuka posisi **Long**. Akibatnya, trader **Long wajib membayar biaya pendanaan kepada trader Short**. *Funding rate* positif yang terlalu ekstrem menandakan pasar terlalu penuh *leverage Long* dan rentan mengalami koreksi tajam (*long squeeze*).
• **Funding Rate Negatif (−):** Terjadi ketika tekanan jual mendominasi sehingga harga *futures* di bawah harga *spot*. Trader **Short wajib membayar biaya pendanaan kepada trader Long**—sering menjadi sinyal bahwa penjual sudah terlalu padat dan berpotensi memicu pantulan keras (*short squeeze*).`,
    example: `Jika sebuah altcoin sedang reli kencang namun **Funding Rate** melonjak hingga **+0,15% per 8 jam** (setara lebih dari 160% per tahun), artinya biaya menahan posisi *Long* menjadi sangat mahal dan posisi tersebut rawan terkena *long squeeze* mendadak.`,
    closing: "Apakah Anda ingin mengenal indikator aliran modal derivatif terpenting berikutnya, yaitu Open Interest (OI)?",
    related: ["Open Interest (OI) dan Cara Menggabungkannya dengan Pergerakan Harga & Volume", "Strategi Delta-Neutral & Cash-and-Carry Arbitrage di Pasar Kripto", "Mekanisme Crypto Perpetual Futures: Cross vs Isolated Margin & Mark Price"]
  },
  {
    id: "open-interest-crypto-derivatif",
    label: "Open Interest (OI) dan Cara Menggabungkannya dengan Pergerakan Harga & Volume",
    keys: ["open interest", "oi kripto", "kontrak terbuka", "analisis derivatif", "short covering", "long unwind"],
    body: `**Open Interest (OI)** adalah total nilai atau jumlah kontrak derivatif (*Futures* dan *Options*) yang **masih aktif terbuka** dan belum ditutup maupun terlikuidasi pada suatu waktu. Berbeda dengan *Volume* yang menghitung seluruh transaksi keluar-masuk, OI mengukur **arus uang baru yang benar-benar masuk atau keluar dari pasar derivatif**.

Empat kombinasi pembacaan Harga dan *Open Interest*:
1. **Harga Naik + OI Naik:** Uang baru mengalir masuk membuka posisi *Long* agresif—mengonfirmasi tren naik didukung partisipasi kuat.
2. **Harga Naik + OI Turun:** Kenaikan harga dipicu oleh penutupan posisi *Short* (*short covering / squeeze*), bukan masuknya pembeli baru—tren naik berisiko cepat kehabisan tenaga.
3. **Harga Turun + OI Naik:** Penjual baru agresif membuka posisi *Short*—menandakan tekanan turun yang kuat.
4. **Harga Turun + OI Turun:** Pemegang posisi *Long* menyerah menutup posisi atau terkena likuidasi (*long liquidation*)—sering menandai fase pembersihan *leverage* menjelang titik jenuh jual.`,
    example: `Ketika harga Bitcoin bergerak mendatar (*sideways*) selama berhari-hari sementara **Open Interest** terus mencetak rekor tertinggi baru, itu pertanda tumpukan kontrak ber-leverage sedang menggunung dan **ledakan volatilitas besar** tinggal menunggu pemicu.`,
    closing: "Apakah Anda ingin melihat bagaimana titik-titik likuidasi tersebut dipetakan dalam Liquidation Heatmap?",
    related: ["Liquidation Heatmap, Long/Short Ratio, dan Fenomena Liquidation Cascade", "Cara Membaca Funding Rate dalam Crypto Futures (Sentimen Long vs Short)", "Volume Trading dan Indikator Volatilitas (ATR)"]
  },
  {
    id: "liquidation-heatmap-cascade",
    label: "Liquidation Heatmap, Long/Short Ratio, dan Fenomena Liquidation Cascade",
    keys: ["liquidation heatmap", "peta likuidasi", "liquidation cascade", "long short ratio", "coinglass", "buru likuidasi"],
    body: `Di pasar kripto yang didominasi transaksi ber-leverage, klaster titik likuidasi trader berfungsi layaknya kolam likuiditas besar yang sering menjadi magnet pergerakan harga:

• **Liquidation Heatmap:** Visualisasi area harga di atas maupun di bawah harga saat ini yang diperkirakan menyimpan konsentrasi likuidasi posisi *Short* maupun *Long* ber-leverage tinggi (seperti 25×, 50×, hingga 100×).
• **Liquidation Cascade (Efek Domino Likuidasi):** Ketika harga menyentuh klaster likuidasi *Long*, sistem bursa otomatis melepas *Market Sell Order* untuk menutup posisi-posisi tersebut—yang menekan harga turun lebih dalam dan memicu klaster likuidasi berikutnya dalam hitungan detik (*flash crash*).
• **Long/Short Ratio:** Perbandingan jumlah akun atau volume yang memegang posisi *Long* versus *Short*. Ketika rasio ritel terlalu berat sebelah ke satu arah, pasar sering bergerak berlawanan untuk membersihkan posisi mayoritas yang rapuh.`,
    example: `Penurunan cepat sebesar 5%–8% dalam beberapa menit pada Bitcoin tanpa ada berita fundamental besar sering kali merupakan **Liquidation Cascade** yang membersihkan posisi *Long* ber-leverage tinggi sebelum pasar kembali stabil.`,
    closing: "Apakah Anda ingin mengenal strategi institusional yang memanfaatkan selisih harga Spot dan Futures tanpa menebak arah pasar, yaitu Delta-Neutral?",
    related: ["Strategi Delta-Neutral & Cash-and-Carry Arbitrage di Pasar Kripto", "Open Interest (OI) dan Cara Menggabungkannya dengan Pergerakan Harga & Volume", "Liquidity dan Liquidity Sweep"]
  },
  {
    id: "delta-neutral-cash-and-carry-crypto",
    label: "Strategi Delta-Neutral & Cash-and-Carry Arbitrage di Pasar Kripto",
    keys: ["delta neutral", "cash and carry", "funding rate arbitrage", "basis trade", "hedging crypto", "ethena"],
    body: `**Strategi Delta-Neutral** adalah pendekatan manajemen portofolio di mana total eksposur terhadap naik-turunnya harga pasar dibuat mendekati **nol**, sehingga keuntungan diperoleh dari sumber imbal hasil non-arah seperti *Funding Rate* atau selisih harga *futures* (*basis*).

Mekanisme dasar **Cash-and-Carry / Funding Rate Arbitrage**:
1. Investor membeli aset kripto (misalnya 1 BTC) di **pasar Spot**.
2. Pada saat yang sama, investor membuka posisi **Short 1 BTC (leverage 1×)** di **pasar Perpetual Futures**.
3. Jika harga BTC naik $5.000, posisi *Spot* untung $5.000 dan posisi *Short* rugi $5.000 (nilai bersih tetap impas). Jika harga turun $5.000, posisi *Spot* rugi $5.000 dan *Short* untung $5.000.
4. Selama *Funding Rate* bernilai positif, pemegang posisi *Short* terus menerima pembayaran *funding fee* berkala dari trader *Long*.

Risiko yang tetap wajib dikelola: pembalikan *Funding Rate* menjadi negatif berkepanjangan, biaya transaksi masuk-keluar, serta risiko bursa (*exchange counterparty risk*).`,
    example: `Banyak dana lindung nilai (*crypto hedge funds*) menjalankan strategi **Cash-and-Carry** saat sentimen pasar sedang sangat *bullish* dan *Funding Rate* positif tinggi untuk menghasilkan imbal hasil dolar yang stabil tanpa terpapar volatilitas harga koin.`,
    closing: "Apakah Anda ingin beralih ke pengelolaan portofolio Crypto Spot yang terstruktur bagi investor jangka menengah dan panjang?",
    related: ["Strategi Spot Kripto: DCA Terukur, Take Profit Bertahap, & Rebalancing", "Cara Membaca Funding Rate dalam Crypto Futures (Sentimen Long vs Short)", "Perbedaan Pasar Crypto Spot dan Crypto Futures (Derivatif)"]
  },
  {
    id: "strategi-spot-kripto-dca-tp-rebalancing",
    label: "Strategi Spot Kripto: DCA Terukur, Take Profit Bertahap, & Rebalancing",
    keys: ["strategi spot crypto", "dca crypto", "take profit bertahap", "rebalancing crypto", "moonbag", "kelola portofolio kripto"],
    body: `Karena pasar kripto mengalami siklus kenaikan tajam (*bull market*) yang selalu diikuti koreksi dalam (*bear market* 70%–85% pada altcoin), membeli tanpa rencana keluar (*exit plan*) sering membuat keuntungan di atas kertas menguap kembali.

Empat pilar pengelolaan portofolio **Crypto Spot**:
1. **Akumulasi DCA Saat Fase Lesu:** Membeli secara berkala pada aset fundamental utama (seperti BTC dan ETH) saat sentimen pasar sepi atau ketakutan tinggi, bukan mengejar harga setelah naik ratusan persen.
2. **Alokasi Inti vs Spekulatif:** Menempatkan mayoritas modal (misalnya 60%–80%) pada aset berkapitalisasi besar yang sudah teruji melewati beberapa siklus, dan membatasi porsi altcoin kecil berisiko tinggi.
3. **Take Profit Bertahap (*Scaling Out*):** Menjual sebagian kepemilikan di target kenaikan tertentu—misalnya menarik kembali 100% modal awal setelah aset naik 2× lipat, sehingga sisa posisi menjadi *risk-free* (*moonbag*).
4. **Rebalancing Berkala:** Mengunci sebagian keuntungan dari koin yang melonjak terlalu tinggi ke *Stablecoin* atau Bitcoin untuk menjaga bobot risiko portofolio tetap seimbang.`,
    example: `Jika Anda membeli aset *Spot* senilai $1.000 dan nilainya naik menjadi $2.500, menjual $1.000 (40% posisi) ke *Stablecoin* mengamankan seluruh modal awal Anda—apa pun yang terjadi di pasar setelahnya, Anda tidak mungkin lagi mengalami kerugian modal.`,
    closing: "Apakah Anda ingin memahami bagaimana siklus rotasi dana antara Bitcoin dan Altcoin dibaca melalui Bitcoin Dominance (BTC.D)?",
    related: ["Bitcoin Dominance (BTC.D), ETH/BTC, dan Siklus Rotasi Altcoin Season", "Kapitalisasi Pasar Kripto: TOTAL, TOTAL2, TOTAL3, & Likuiditas Stablecoin (USDT.D)", "Dollar Cost Averaging (DCA) dan Lump Sum"]
  },
  {
    id: "bitcoin-dominance-altcoin-season",
    label: "Bitcoin Dominance (BTC.D), ETH/BTC, dan Siklus Rotasi Altcoin Season",
    keys: ["bitcoin dominance", "btc.d", "altcoin season", "altseason", "eth btc", "rotasi altcoin", "dominasi btc"],
    body: `**Bitcoin Dominance (BTC.D)** mengukur persentase kapitalisasi pasar Bitcoin dibandingkan total seluruh kapitalisasi pasar aset kripto global. Bersama pasangan grafik **ETH/BTC**, indikator ini membantu membaca ke mana likuiditas utama sedang mengalir:

• **BTC.D Naik + Harga BTC Naik:** Fase awal siklus *bullish*—likuiditas institusional dan ritel mengalir masuk ke Bitcoin terlebih dahulu sementara mayoritas altcoin tertinggal.
• **BTC.D Naik + Harga BTC Turun:** Kondisi pasar ketakutan (*risk-off* internal kripto)—investor menjual altcoin berisiko tinggi untuk berlindung ke Bitcoin atau *Stablecoin*.
• **BTC.D Turun + Harga BTC Stabil/Naik + ETH/BTC Menguat:** Tanda klasik mulainya **Altcoin Season**—keuntungan dari Bitcoin mulai dirotasikan ke Ethereum dan altcoin berkapitalisasi besar hingga menengah.

Catatan penting: seiring bertambahnya jumlah token baru dan *stablecoin* setiap tahun, pembacaan BTC.D harus selalu digabungkan dengan grafik **TOTAL2/TOTAL3** dan tren pasangan **ETH/BTC**.`,
    example: `Membeli altcoin spekulatif secara agresif ketika **BTC.D sedang menembus tren naik kuat** dan **ETH/BTC masih turun** sering membuat portofolio altcoin tergerus nilainya meskipun harga Bitcoin terlihat naik.`,
    closing: "Apakah Anda ingin mengenal indeks kapitalisasi pasar keseluruhan kripto seperti TOTAL, TOTAL2, TOTAL3, dan USDT Dominance?",
    related: ["Kapitalisasi Pasar Kripto: TOTAL, TOTAL2, TOTAL3, & Likuiditas Stablecoin (USDT.D)", "Bitcoin Dominance (BTC.D), ETH/BTC, dan Siklus Rotasi Altcoin Season", "Stablecoin (USDT, USDC), Altcoin, dan Siklus Halving Kripto"]
  },
  {
    id: "total-market-cap-usdt-dominance",
    label: "Kapitalisasi Pasar Kripto: TOTAL, TOTAL2, TOTAL3, & Likuiditas Stablecoin (USDT.D)",
    keys: ["total market cap crypto", "total2", "total3", "usdt.d", "usdt dominance", "likuiditas kripto", "kapitalisasi altcoin"],
    body: `Selain memantau grafik harga koin individual, analis kripto memantau empat indeks agregat kapitalisasi pasar untuk melihat kesehatan likuiditas ekosistem secara menyeluruh:

• **TOTAL:** Total kapitalisasi pasar seluruh aset kripto digabungkan (termasuk Bitcoin, Ethereum, Altcoin, dan Stablecoin).
• **TOTAL2:** Total kapitalisasi pasar kripto **di luar Bitcoin**—mengukur kekuatan gabungan Ethereum dan seluruh altcoin.
• **TOTAL3:** Total kapitalisasi pasar kripto **di luar Bitcoin dan Ethereum**—barometer paling murni untuk melihat arus dana masuk ke sektor altcoin menengah dan kecil.
• **USDT.D / Stablecoin Dominance:** Persentase kapitalisasi *stablecoin* terhadap total pasar kripto. Karena *stablecoin* merupakan "uang tunai" di dalam ekosistem kripto, **penurunan USDT.D** menandakan dana tunai sedang dibelanjakan ke aset kripto (*bullish*), sedangkan **lonjakan USDT.D** menandakan investor sedang menjual aset kembali ke uang tunai (*bearish*).`,
    example: `Ketika **USDT.D** memantul naik dari area *support* kuat sementara **TOTAL3** gagal menembus *resistance*, itu menjadi sinyal peringatan bahwa likuiditas sedang ditarik keluar dari altcoin kembali ke bentuk *stablecoin*.`,
    closing: "Apakah Anda ingin mempelajari cara melacak pergerakan dompet besar dan arus koin di bursa menggunakan Analisis On-Chain?",
    related: ["Analisis On-Chain Dasar: Exchange Inflow/Outflow, Whale Wallet, & Active Addresses", "Bitcoin Dominance (BTC.D), ETH/BTC, dan Siklus Rotasi Altcoin Season", "Stablecoin (USDT, USDC), Altcoin, dan Siklus Halving Kripto"]
  },
  {
    id: "analisis-on-chain-dasar-exchange-flow",
    label: "Analisis On-Chain Dasar: Exchange Inflow/Outflow, Whale Wallet, & Active Addresses",
    keys: ["on chain analysis", "analisis on chain", "exchange inflow", "exchange outflow", "whale alert", "cadangan bursa", "exchange reserve"],
    body: `Keunggulan unik blockchain publik dibandingkan pasar tradisional adalah seluruh catatan transaksi dan saldo dompet dapat diaudit secara transparan dan *real-time* melalui **Analisis On-Chain**:

• **Exchange Netflow (Inflow vs Outflow):** *Exchange Inflow* (lonjakan transfer koin dari dompet pribadi masuk ke dompet bursa) sering menandakan kesiapan pelaku pasar untuk **menjual** asetnya. Sebaliknya, *Exchange Outflow* (penarikan koin besar-besaran dari bursa ke *cold wallet* pribadi) menandakan **akumulasi jangka panjang** dan berkurangnya pasokan siap jual di bursa (*Exchange Reserve* menurun).
• **Whale Wallet Tracking:** Memantau perilaku kelompok dompet beraset besar—apakah mereka sedang menambah saldo saat harga turun (*accumulation*) atau mendistribusikan koin saat harga melonjak.
• **Active Addresses & Transaction Volume:** Mengukur pertumbuhan penggunaan jaringan riil oleh pengguna dibandingkan sekadar spekulasi harga di bursa terpusat.`,
    example: `Jika cadangan Bitcoin di seluruh bursa (**Exchange Reserve**) terus turun ke titik terendah multi-tahun karena penarikan ke penyimpanan pribadi, pasokan likuid di bursa menipis sehingga lonjakan permintaan baru dapat mendorong harga naik lebih cepat.`,
    closing: "Apakah Anda ingin mengenal metrik valuasi on-chain klasik yang sering dipakai menilai zona murah atau mahal Bitcoin?",
    related: ["Metrik Valuasi On-Chain Bitcoin: MVRV Ratio, SOPR, NVT, & Puell Multiple", "Analisis On-Chain Dasar: Exchange Inflow/Outflow, Whale Wallet, & Active Addresses", "Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee"]
  },
  {
    id: "metrik-valuasi-on-chain-mvrv-sopr",
    label: "Metrik Valuasi On-Chain Bitcoin: MVRV Ratio, SOPR, NVT, & Puell Multiple",
    keys: ["mvrv", "mvrv z score", "sopr", "nvt ratio", "puell multiple", "realized cap", "valuasi bitcoin"],
    body: `Karena Bitcoin tidak memiliki laporan laba rugi maupun dividen seperti saham perusahaan, analis *on-chain* mengembangkan rasio valuasi berbasis harga terakhir kali setiap koin berpindah tangan di blockchain (**Realized Cap**):

• **MVRV Ratio (*Market Value to Realized Value*):** Membandingkan kapitalisasi pasar saat ini dengan total nilai modal riil yang dibayarkan pemegang koin saat terakhir memindahkan koinnya. Nilai **MVRV sangat tinggi** menandakan mayoritas pemegang sedang memegang keuntungan besar yang belum direalisasikan dan rawan aksi ambil untung (*zona puncak siklus*); nilai **MVRV di bawah 1,0** menandakan rata-rata pasar sedang berada di posisi rugi (*zona akumulasi historis*).
• **SOPR (*Spent Output Profit Ratio*):** Mengukur apakah koin yang dijual/dipindahkan hari ini dilepas dalam kondisi **untung (> 1,0)** atau **rugi (< 1,0)**.
• **NVT Ratio (*Network Value to Transactions*):** Sering dijuluki "rasio PER-nya jaringan kripto"—membandingkan kapitalisasi pasar dengan volume nilai transaksi yang benar-benar terjadi di jaringan blockchain.
• **Puell Multiple:** Membandingkan nilai penerbitan koin harian oleh penambang (*miners*) dengan rata-rata bergerak tahunannya untuk menilai tekanan jual penambang.`,
    example: `Dalam pasar *bullish* yang sehat, setiap kali indikator **SOPR** turun menyentuh garis **1,0** (artinya pemegang jangka pendek berhenti menjual rugi), level tersebut sering bertindak sebagai titik pantulan harga sebelum melanjutkan kenaikan.`,
    closing: "Apakah Anda ingin memahami bagaimana masuknya produk ETF Spot Institusional mengubah struktur likuiditas pasar kripto?",
    related: ["Bitcoin ETF Spot Institusional, Custody, dan Dampaknya pada Likuiditas Pasar", "Analisis On-Chain Dasar: Exchange Inflow/Outflow, Whale Wallet, & Active Addresses", "Mengenal ETF (Exchange-Traded Fund) dan Reksa Dana Indeks"]
  },
  {
    id: "bitcoin-etf-spot-institusional",
    label: "Bitcoin ETF Spot Institusional, Custody, dan Dampaknya pada Likuiditas Pasar",
    keys: ["bitcoin etf", "etf spot", "etf kripto", "etf inflow", "institutional crypto", "ethereum etf", "kustodian institusional"],
    body: `Persetujuan dan perdagangan **Spot Crypto ETF** di bursa saham utama dunia menjadi jembatan utama yang menghubungkan modal institusional tradisional (dana pensiun, manajer kekayaan, perusahaan publik) dengan aset kripto tanpa kerumitan mengelola *private key* sendiri:

• **Perbedaan ETF Spot vs ETF Futures:** *Spot ETF* mewajibkan penerbit dana membeli dan menyimpan **aset kripto fisik asli** di lembaga kustodian teregulasi sesuai jumlah unit ETF yang dibeli investor, sedangkan *Futures ETF* hanya melacak kontrak berjangka dan rentan terkena biaya *rollover*.
• **Dampak Data Net Inflow/Outflow Harian:** Aliran dana masuk bersih (*Net Inflow*) ke produk *Spot ETF* menciptakan permintaan pembelian langsung di pasar *spot* setiap hari kerja bursa saham, sehingga data arus ETF harian menjadi salah satu katalis makro utama pergerakan harga kripto modern.`,
    example: `Ketika manajer aset global membeli unit **Spot Bitcoin ETF** melalui akun broker tradisional mereka, penerbit ETF wajib menyerap pasokan BTC asli dari pasar untuk disimpan di kustodian—menjadikan kripto semakin sensitif terhadap kondisi suku bunga dan likuiditas Wall Street.`,
    closing: "Apakah Anda ingin membahas aturan manajemen risiko khusus menghadapi volatilitas ekstrem dan wick hunting di pasar kripto?",
    related: ["Manajemen Risiko Khusus Kripto: Volatilitas Ekstrem, Wick Hunt, & Aturan Leverage", "Mengenal ETF (Exchange-Traded Fund) dan Reksa Dana Indeks", "Bitcoin ETF Spot Institusional, Custody, dan Dampaknya pada Likuiditas Pasar"]
  },
  {
    id: "manajemen-risiko-khusus-kripto-leverage",
    label: "Manajemen Risiko Khusus Kripto: Volatilitas Ekstrem, Wick Hunt, & Aturan Leverage",
    keys: ["risiko crypto", "leverage crypto", "wick hunt", "stop loss crypto", "margin futures", "risiko altcoin", "berapa leverage aman"],
    body: `Pasar kripto buka **24 jam sehari, 7 hari seminggu** tanpa batas *auto-rejection* harian seperti bursa saham, dengan volatilitas 3× hingga 10× lebih tinggi daripada forex maupun indeks saham. Menerapkan aturan risiko standar tanpa penyesuaian sangat berisiko:

1. **Bedakan Leverage Posisi dengan Ukuran Risiko (1% Rule):** Leverage tinggi (misalnya 20× atau 50×) membuat jarak harga likuidasi menjadi sangat sempit sehingga *wick* normal 1%–2% saja langsung melikuidasi posisi. Praktisi berpengalaman menjaga **effective leverage** tetap rendah (1× hingga maksimal 3×–5×) dan selalu menghitung ukuran posisi dari jarak *Stop Loss*, bukan dari maksimal leverage yang disediakan bursa.
2. **Beri Ruang Napas untuk Volatilitas (*ATR Buffer*):** Menempatkan *stop loss* terlalu menempel pada garis *support/resistance* membuat posisi mudah tersapu *wick* likuiditas sebelum harga bergerak ke arah yang benar.
3. **Kurangi Ukuran Posisi pada Altcoin Kecil:** Jika risiko standar Anda pada BTC adalah 1% modal, turunkan menjadi **0,25%–0,5%** saat bertransaksi pada altcoin berkapitalisasi kecil yang dapat bergerak 20%–30% dalam sehari.`,
    example: `Jika jarak *Stop Loss* Anda pada sebuah altcoin adalah **8%** dari titik *entry* dan batas risiko per transaksi Anda adalah **$50** (1% dari modal $5.000), maka nilai posisi total Anda maksimal adalah **$50 ÷ 8% = $625**—bukan $5.000 dikali leverage 10×.`,
    closing: "Apakah Anda ingin mengenal fitur-fitur tipe order lanjutan di bursa kripto seperti Post-Only, Reduce-Only, dan OCO?",
    related: ["Order Lanjutan di Bursa Kripto: Post-Only, Reduce-Only, OCO, & Trailing Stop", "Mekanisme Crypto Perpetual Futures: Cross vs Isolated Margin & Mark Price", "Manajemen Risiko dan Position Sizing"]
  },
  {
    id: "order-lanjutan-crypto-post-only-reduce-only-oco",
    label: "Order Lanjutan di Bursa Kripto: Post-Only, Reduce-Only, OCO, & Trailing Stop",
    keys: ["post only", "reduce only", "oco order", "one cancels the other", "maker fee", "taker fee", "twap crypto"],
    body: `Menguasai fitur-fitur order lanjutan di terminal bursa kripto membantu menghemat biaya transaksi (*fee*) sekaligus mencegah kesalahan eksekusi teknis yang fatal:

• **Post-Only (Limit Order):** Memastikan order Anda masuk ke buku order sebagai **Maker** (menambah likuiditas dengan biaya *maker fee* yang jauh lebih murah atau bahkan mendapat *rebate*), dan otomatis dibatalkan jika harganya langsung mengeksekusi antrean pasar sebagai *Taker*.
• **Reduce-Only:** Fitur pengaman wajib pada order *Take Profit* maupun *Stop Loss* di pasar *futures*—memastikan order tersebut **hanya boleh mengurangi atau menutup posisi yang ada**, dan tidak akan pernah secara tidak sengaja membuka posisi baru ke arah berlawanan setelah posisi utama tertutup.
• **OCO (*One-Cancels-the-Other*):** Menggabungkan dua order bersyarat sekaligus (misalnya *Take Profit Limit* di atas dan *Stop Loss* di bawah); begitu salah satu tereksekusi, order pasangannya otomatis dibatalkan.
• **Trailing Stop:** *Stop loss* dinamis yang otomatis bergeser mengikuti kenaikan harga sejauh persentase/jarak tertentu untuk mengunci profit saat tren berlanjut.`,
    example: `Selalu centang kotak **Reduce-Only** saat memasang order *Take Profit* terpisah pada posisi *Futures*—tanpa *Reduce-Only*, jika *Stop Loss* Anda lebih dulu tersentuh lalu harga berbalik menyentuh *Take Profit* lama, order tersebut akan membuka posisi *Short* baru tanpa Anda sadari.`,
    closing: "Apakah Anda ingin membandingkan kelebihan dan risiko bertransaksi di bursa terpusat (CEX) versus bursa terdesentralisasi (DEX & Perp DEX)?",
    related: ["CEX (Centralized Exchange) vs DEX (Decentralized Exchange) & Perp DEX", "Jenis Order dalam Trading", "Manajemen Risiko Khusus Kripto: Volatilitas Ekstrem, Wick Hunt, & Aturan Leverage"]
  },
  {
    id: "cex-vs-dex-perp-dex",
    label: "CEX (Centralized Exchange) vs DEX (Decentralized Exchange) & Perp DEX",
    keys: ["cex vs dex", "centralized exchange", "decentralized exchange", "perp dex", "hyperliquid", "dydx", "uniswap", "non custodial trading"],
    body: `Pelaku pasar kripto dapat memperdagangkan aset melalui dua jenis infrastruktur bursa dengan karakter kustodi dan likuiditas yang berbeda:

• **CEX (*Centralized Exchange*):** Bursa terpusat yang dikelola perusahaan (seperti bursa global maupun bursa lokal berizin). Kelebihannya: antarmuka ramah pemula, likuiditas sangat dalam, eksekusi instan bebas *gas fee* per transaksi, dan dukungan *fiat on/off ramp*. Risikonya: aset disimpan secara kustodial oleh bursa (*counterparty risk*).
• **DEX (*Decentralized Exchange*) & Perp DEX:** Bursa berbasis *smart contract* di atas blockchain di mana pengguna bertransaksi langsung dari dompet pribadi (**Self-Custody**) tanpa menyerahkan dana ke pihak ketiga—meliputi DEX *Spot* (berbasis AMM) maupun **Perp DEX** generasi baru berkinerja tinggi berbasis *on-chain order book*. Risikonya: tanggung jawab penuh atas keamanan dompet, *gas fee* jaringan, dan risiko *bug smart contract*.`,
    example: `Banyak trader profesional memadukan keduanya: menggunakan **CEX** berlikuiditas tinggi untuk transaksi harian berfrekuensi aktif dengan modal secukupnya, lalu menyimpan mayoritas tabungan aset jangka panjang di **Cold Wallet** atau berinteraksi lewat **DEX** tepercaya.`,
    closing: "Apakah Anda ingin mengetahui cara mengecek transparansi cadangan aset sebuah bursa terpusat melalui Proof of Reserves?",
    related: ["Proof of Reserves (PoR), Merkle Tree, dan Transparansi Solvabilitas Bursa Kripto", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)", "Decentralized Finance (DeFi), AMM, Liquidity Pool, & Impermanent Loss"]
  },
  {
    id: "proof-of-reserves-merkle-tree-exchange",
    label: "Proof of Reserves (PoR), Merkle Tree, dan Transparansi Solvabilitas Bursa Kripto",
    keys: ["proof of reserves", "por", "merkle tree", "audit bursa kripto", "solvabilitas exchange", "cadangan 1:1"],
    body: `Pasca-runtuhnya beberapa bursa kripto besar di masa lalu akibat penyalahgunaan dana nasabah, standar industri menuntut bursa terpusat membuktikan bahwa mereka benar-benar memegang aset nasabah secara **1:1** melalui **Proof of Reserves (PoR)**:

• **Cara Kerja Proof of Reserves & Merkle Tree:** Bursa memublikasikan alamat dompet *on-chain* publik mereka agar siapa pun dapat memverifikasi total saldo asetnya, lalu menggunakan struktur kriptografi **Merkle Tree** sehingga setiap pengguna dapat memverifikasi secara independen bahwa saldo akun pribadinya ikut tercatat dalam total kewajiban audit tersebut tanpa membocorkan privasi pengguna lain.
• **Keterbatasan PoR yang Perlu Dipahami:** *Proof of Reserves* hanya membuktikan sisi **aset** di blockchain pada satu waktu pemotretan (*snapshot*). Tanpa audit penuh atas **liabilitas di luar jaringan (*off-chain liabilities / utang korporasi*)**, PoR saja belum membuktikan solvabilitas 100%—sehingga menyimpan aset inti jangka panjang di *Self-Custody* tetap menjadi standar keamanan tertinggi.`,
    example: `Pastikan bursa tempat Anda bertransaksi menyediakan verifikasi **Proof of Reserves berkala** dengan rasio cadangan minimal **100%+** untuk aset utama seperti BTC, ETH, dan USDT, serta hindari menumpuk seluruh kekayaan di satu bursa saja.`,
    closing: "Apakah Anda ingin beralih ke arsitektur teknologi blockchain modern, dimulai dari perbedaan Layer 1 dan Layer 2 (Rollups)?",
    related: ["Ekosistem Layer 1 vs Layer 2: Rollups (Optimistic & ZK-Rollup) dan Skalabilitas", "CEX (Centralized Exchange) vs DEX (Decentralized Exchange) & Perp DEX", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)"]
  },
  {
    id: "layer-1-vs-layer-2-rollups",
    label: "Ekosistem Layer 1 vs Layer 2: Rollups (Optimistic & ZK-Rollup) dan Skalabilitas",
    keys: ["layer 1", "layer 2", "l1 vs l2", "rollup", "optimistic rollup", "zk rollup", "arbitrum", "optimism", "base", "blockchain trilemma"],
    body: `Dalam desain jaringan blockchain dikenal **Blockchain Trilemma**: sulit memaksimalkan **Desentralisasi**, **Keamanan**, dan **Skalabilitas (kecepatan & biaya murah)** secara bersamaan dalam satu lapisan tunggal. Solusinya dibagi ke dalam arsitektur berlapis:

• **Layer 1 (L1 — Jaringan Utama):** Blockchain dasar yang memvalidasi dan menyelesaikan transaksi secara mandiri (contoh: Bitcoin, Ethereum, Solana, Avalanche). L1 yang sangat terdesentralisasi seperti Ethereum cenderung memiliki kapasitas transaksi terbatas dan *gas fee* lebih mahal saat jaringan padat.
• **Layer 2 (L2 — Jaringan Penskalaan):** Jaringan yang dibangun di atas L1 untuk memproses ribuan transaksi di luar rantai utama (*off-chain*) dengan biaya sangat murah dan cepat, lalu menggabungkan bukti transaksinya kembali ke L1 demi mewarisi keamanan L1.
• **Optimistic Rollup vs ZK-Rollup:** *Optimistic Rollup* mengasumsikan transaksi valid kecuali ada yang membuktikan kecurangan dalam masa sanggah (*fraud proof*), sedangkan *ZK-Rollup (Zero-Knowledge)* menggunakan bukti matematika kriptografi instan (*validity proof*) tanpa masa tunggu penarikan yang lama.`,
    example: `Bertransaksi di jaringan **Layer 2 Ethereum** (seperti Arbitrum, Optimism, atau Base) memungkinkan pengguna mengirim aset dan berinteraksi di aplikasi DeFi dengan biaya hanya sepersekian sen dolar sambil tetap berlindung di balik keamanan jaringan utama Ethereum.`,
    closing: "Apakah Anda ingin mengenal perkembangan arsitektur blockchain berikutnya, yaitu Blockchain Modular vs Monolitik?",
    related: ["Blockchain Modular vs Monolitik: Execution, Settlement, Consensus, & Data Availability", "Cross-Chain Bridge, Wrapped Tokens, dan Risiko Keamanan Antar-Jaringan", "Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee"]
  },
  {
    id: "blockchain-modular-vs-monolitik",
    label: "Blockchain Modular vs Monolitik: Execution, Settlement, Consensus, & Data Availability",
    keys: ["blockchain modular", "monolitik", "data availability", "celestia", "execution layer", "settlement layer", "arsitektur blockchain"],
    body: `Perkembangan infrastruktur Web3 memunculkan dua filosofi utama dalam membangun jaringan berkinerja tinggi:

• **Blockchain Monolitik (Terintegrasi):** Satu jaringan tunggal menangani seluruh empat fungsi inti blockchain secara bersamaan—**Execution** (menjalankan transaksi & *smart contract*), **Settlement** (penyelesaian akhir & resolusi sengketa), **Consensus** (kesepakatan urutan transaksi), dan **Data Availability (DA)** (memastikan data transaksi tersedia untuk diverifikasi semua node). Contoh pendekatan terintegrasi tinggi adalah Solana.
• **Blockchain Modular (Terspesialisasi):** Memisahkan keempat fungsi tersebut ke lapisan khusus yang berbeda—misalnya *Rollup* fokus penuh pada eksekusi cepat, Ethereum sebagai lapisan *Settlement*, dan lapisan khusus *Data Availability* untuk menekan biaya penyimpanan data transaksi secara drastis.`,
    example: `Analogi sederhananya: blockchain **monolitik** ibarat satu restoran yang menanam bahan baku, memasak, mengantar, dan menagih pembayaran sendiri; sedangkan blockchain **modular** membagi tiap tugas ke spesialis terbaiknya agar kapasitas total ekosistem meningkat berkali-kali lipat.`,
    closing: "Apakah Anda ingin memahami cara memindahkan aset antar-jaringan berbeda melalui Cross-Chain Bridge beserta risikonya?",
    related: ["Cross-Chain Bridge, Wrapped Tokens, dan Risiko Keamanan Antar-Jaringan", "Ekosistem Layer 1 vs Layer 2: Rollups (Optimistic & ZK-Rollup) dan Skalabilitas", "Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee"]
  },
  {
    id: "cross-chain-bridge-wrapped-tokens",
    label: "Cross-Chain Bridge, Wrapped Tokens, dan Risiko Keamanan Antar-Jaringan",
    keys: ["cross chain bridge", "bridge crypto", "wrapped token", "wbtc", "weth", "interoperabilitas", "risiko bridge"],
    body: `Setiap jaringan blockchain pada dasarnya adalah ekosistem tertutup yang tidak dapat berkomunikasi langsung dengan jaringan lain—Bitcoin tidak dapat berjalan langsung di atas jaringan Ethereum tanpa mekanisme penghubung:

• **Cross-Chain Bridge:** Protokol yang memungkinkan pengguna memindahkan nilai aset atau pesan dari satu blockchain ke blockchain lain—umumnya dengan cara **mengunci (*lock*) aset asli** di jaringan asal dan **mencetak (*mint*) token representasi** di jaringan tujuan (atau melalui kolam likuiditas lintas rantai).
• **Wrapped Tokens (Contoh: WBTC, WETH):** Token yang nilainya dipatok 1:1 terhadap aset aslinya agar dapat digunakan di dalam ekosistem *smart contract* atau jaringan lain.
• **Risiko Keamanan Bridge:** Secara historis, *Cross-Chain Bridge* merupakan salah satu target peretasan terbesar di industri kripto karena menyimpan tumpukan aset asli dalam jumlah raksasa di satu kontrak pengunci—jika kontrak jembatan diretas, token representasi di jaringan tujuan kehilangan jaminannya.`,
    example: `Saat ingin memindahkan aset antar-jaringan, menggunakan **jembatan resmi (*native/canonical bridge*)** atau mengirim aset langsung melalui fitur penarikan multi-jaringan di bursa terpercaya umumnya jauh lebih aman daripada memakai jembatan pihak ketiga baru yang belum teruji auditnya.`,
    closing: "Part 1 (Modul #236–#253) selesai! Apakah Anda siap melanjutkan ke Part 2 (Modul #254–#270) untuk membahas Staking & Restaking, DeFi Lending, MEV, Narasi AI & DePIN, Keamanan Web3, & DYOR?",
    related: ["Staking Kripto, Liquid Staking (LST), dan Perbedaan APR vs APY", "Ekosistem Layer 1 vs Layer 2: Rollups (Optimistic & ZK-Rollup) dan Skalabilitas", "Keamanan Web3 Praktis: Salah Jaringan, Memo/Tag, & Bahaya Unlimited Token Approval"]
  },
];
