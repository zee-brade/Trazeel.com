// Bagian materi 14. Isi objek dipertahankan dari file sumber.
export const part14 = [
{
    id: "staking-liquid-staking-apr-apy",
    label: "Staking Kripto, Liquid Staking (LST), dan Perbedaan APR vs APY",
    keys: ["staking kripto", "liquid staking", "lst", "steth", "proof of stake", "apr vs apy", "slashing", "validator"],
    body: `Pada jaringan blockchain berbasis **Proof-of-Stake (PoS)** (seperti Ethereum dan Solana), keamanan jaringan dijaga oleh para **Validator** yang mengunci koin sebagai jaminan dan memperoleh imbalan blok baru melalui mekanisme **Staking**.

Konsep penting yang wajib dipahami investor sebelum melakukan *staking*:
• **Native Staking vs Liquid Staking (LST):** Pada *Native Staking*, koin dikunci langsung di protokol validator sehingga tidak bisa diperdagangkan selama masa penguncian (*unbonding period* bisa memakan waktu berhari-hari hingga berminggu-minggu). Melalui **Liquid Staking**, pengguna menyetor koin ke protokol dan menerima token derivatif cair (**LST**, seperti *stETH*) yang tetap menghasilkan imbalan *staking* sekaligus bisa digunakan di ekosistem DeFi.
• **Perbedaan APR vs APY:** **APR (*Annual Percentage Rate*)** adalah bunga sederhana tahunan tanpa pemajemukan, sedangkan **APY (*Annual Percentage Yield*)** sudah memperhitungkan efek bunga berbunga (*compounding*) apabila imbalan diinvestasikan kembali secara berkala.
• **Risiko Slashing & Depeg:** Jika validator bertindak curang atau sering *offline*, sebagian koin jaminan dapat dipotong otomatis oleh protokol (**Slashing**). Selain itu, nilai token LST bisa menyimpang sementara (*depeg*) dari aset aslinya saat pasar panik.`,
    example: `Imbal hasil *staking* yang sehat pada jaringan Layer 1 utama umumnya berkisar antara **3% hingga 8% per tahun** (berasal dari biaya transaksi jaringan dan inflasi protokol terukur). Jika sebuah platform menjanjikan *staking* aset utama hingga 50%–100% per tahun, periksa dengan kritis dari mana sumber uang pembayarannya.`,
    closing: "Apakah Anda ingin mengenal perkembangan lanjutan dari Liquid Staking, yaitu Restaking dan risiko berlapisnya?",
    related: ["Restaking, Liquid Restaking (LRT), dan Risiko Slashing Berlapis", "Decentralized Finance (DeFi), AMM, Liquidity Pool, & Impermanent Loss", "Efek Compound Interest (Bunga Berbunga) & Time Horizon"]
  },
  {
    id: "restaking-avs-eigenlayer-risiko",
    label: "Restaking, Liquid Restaking (LRT), dan Risiko Slashing Berlapis",
    keys: ["restaking", "eigenlayer", "liquid restaking", "lrt", "avs", "actively validated services", "slashing berlapis"],
    body: `**Restaking** adalah inovasi infrastruktur DeFi yang memungkinkan aset yang sudah di-*stake* (atau token *Liquid Staking* seperti LST) digunakan kembali secara bersamaan untuk mengamankan protokol tambahan di luar jaringan utama yang disebut **AVS (*Actively Validated Services*)**—seperti jembatan lintas rantai, jaringan *oracle*, atau lapisan *data availability*.

Dua sisi mata uang *Restaking* dan **LRT (*Liquid Restaking Token*)**:
• **Potensi Imbal Hasil Tambahan:** Pemilik modal memperoleh imbalan dasar dari jaringan utama ditambah biaya keamanan dari protokol AVS yang didukungnya.
• **Risiko Slashing Berlapis (*Layered Risk*):** Satu modal yang sama kini terpapar pada beberapa aturan penalti (*slashing*) dari berbagai protokol sekaligus serta berlapis-lapis risiko *bug smart contract*. Jika terjadi kegagalan sistemik pada salah satu lapisan, harga token LRT dapat mengalami diskon likuiditas tajam di pasar sekunder.`,
    example: `Dalam keuangan tradisional, *Restaking* memiliki kemiripan konsep dengan penjaminan ulang agunan (*rehypothecation*)—meningkatkan efisiensi penggunaan modal di masa tenang, tetapi memperbesar kerentanan sistemik jika terjadi guncangan pasar.`,
    closing: "Apakah Anda ingin memahami cara kerja pinjam-meminjam aset kripto tanpa bank melalui DeFi Lending & Borrowing?",
    related: ["DeFi Lending & Borrowing: Collateral, LTV, Health Factor, & Flash Loan", "Staking Kripto, Liquid Staking (LST), dan Perbedaan APR vs APY", "Decentralized Finance (DeFi), AMM, Liquidity Pool, & Impermanent Loss"]
  },
  {
    id: "defi-lending-borrowing-ltv-health-factor",
    label: "DeFi Lending & Borrowing: Collateral, LTV, Health Factor, & Flash Loan",
    keys: ["defi lending", "borrowing defi", "aave", "compound", "health factor", "ltv defi", "overcollateralized", "flash loan"],
    body: `Protokol **DeFi Lending & Borrowing** (seperti Aave atau Compound) memungkinkan siapa pun meminjamkan aset kripto untuk memperoleh bunga variabel maupun meminjam likuiditas tanpa pemeriksaan skor kredit (*permissionless*), karena seluruh pinjaman dijamin secara berlebih (**Over-Collateralized**).

Parameter kunci yang wajib dipantau peminjam di DeFi:
• **LTV (*Loan-to-Value*):** Persentase maksimal pinjaman yang boleh ditarik dibandingkan nilai agunan (*collateral*) yang disetor (misalnya menyetor ETH senilai $1.000 dengan batas LTV 75% memungkinkan meminjam maksimal $750 USDC).
• **Health Factor & Likuidasi Otomatis:** Angka indikator keamanan pinjaman. Jika nilai agunan turun akibat kejatuhan harga pasar hingga **Health Factor menyentuh di bawah 1,0**, *smart contract* otomatis melelang agunan Anda kepada likuidator ditambah penalti denda likuidasi.
• **Flash Loan:** Fitur unik blockchain di mana pinjaman tanpa agunan bernilai jutaan dolar dapat dipinjam dan wajib dilunasi kembali **di dalam satu blok transaksi yang sama** (sering dipakai untuk arbitrase maupun sayangnya dieksploitasi peretas).`,
    example: `Banyak investor kripto jangka panjang menyetor Bitcoin atau Ethereum ke protokol *DeFi Lending* dengan **LTV konservatif (di bawah 30%–40%)** untuk meminjam *stablecoin* kebutuhan likuiditas tanpa harus menjual aset intinya dan tanpa memicu peristiwa penjualan aset.`,
    closing: "Apakah Anda ingin mengetahui fenomena tersembunyi di antrean transaksi blockchain yang sering merugikan trader DEX, yaitu MEV?",
    related: ["MEV (Maximal Extractable Value), Front-Running, & Sandwich Attack di DEX", "Decentralized Finance (DeFi), AMM, Liquidity Pool, & Impermanent Loss", "CEX (Centralized Exchange) vs DEX (Decentralized Exchange) & Perp DEX"]
  },
  {
    id: "mev-frontrunning-sandwich-attack",
    label: "MEV (Maximal Extractable Value), Front-Running, & Sandwich Attack di DEX",
    keys: ["mev", "maximal extractable value", "sandwich attack", "front running", "mempool", "slippage tolerance", "private rpc"],
    body: `Pada jaringan blockchain publik, transaksi yang baru dikirim pengguna tidak langsung masuk ke dalam blok—melainkan menunggu sementara di ruang antrean publik bernama **Mempool** yang dapat dilihat oleh seluruh validator dan bot otomatis.

Dari transparansi *Mempool* inilah muncul **MEV (*Maximal Extractable Value*)**—keuntungan ekstra yang diekstrak dengan mengatur urutan, menyisipkan, atau menunda transaksi di dalam sebuah blok:
• **Front-Running:** Bot MEV mendeteksi order pembelian besar milik pengguna di *Mempool*, lalu membayar *gas fee* lebih tinggi agar transaksi beli bot dieksekusi lebih dulu sebelum harga terdorong naik.
• **Sandwich Attack:** Bot MEV menjepit transaksi pengguna di DEX—bot membeli aset tepat **sebelum** transaksi Anda (mendorong harga naik hingga batas maksimal *slippage tolerance* Anda), lalu langsung menjualnya kembali tepat **setelah** transaksi Anda selesai untuk mengantongi selisih harga secara instan.`,
    example: `Untuk melindungi diri dari **Sandwich Attack** saat menukar token di DEX, hindari memasang **Slippage Tolerance** terlalu lebar (misalnya 5%–10%) pada token berlikuiditas besar, dan gunakan fitur perlindungan *Private RPC / MEV Protection* bila tersedia di dompet Anda.`,
    closing: "Apakah Anda ingin memahami bagaimana smart contract mengetahui harga aset dunia nyata di luar blockchain melalui Blockchain Oracle?",
    related: ["Blockchain Oracle (Chainlink, Pyth) dan Risiko Manipulasi Harga", "Decentralized Finance (DeFi), AMM, Liquidity Pool, & Impermanent Loss", "Cara Kerja Dasar Blockchain, Desentralisasi, dan Gas Fee"]
  },
  {
    id: "oracle-blockchain-chainlink-risiko-manipulasi",
    label: "Blockchain Oracle (Chainlink, Pyth) dan Risiko Manipulasi Harga",
    keys: ["blockchain oracle", "chainlink", "pyth network", "oracle manipulation", "price feed", "data off chain"],
    body: `Jaringan blockchain pada dasarnya terisolasi dari dunia luar—*smart contract* tidak dapat membuka situs web atau mengecek harga saham, emas, maupun kurs mata uang secara langsung. Jembatan yang menyuplai data eksternal ke dalam *smart contract* disebut **Blockchain Oracle**.

Peran dan risiko *Oracle* dalam ekosistem DeFi:
• **Decentralized Oracle Networks (Contoh: Chainlink, Pyth):** Mengumpulkan data harga dari puluhan sumber bursa tepercaya melalui banyak operator node independen agar *smart contract* lending, derivatif, dan asuransi mendapatkan referensi harga yang akurat dan tahan manipulasi.
• **Oracle Manipulation Attack:** Salah satu celah peretasan paling umum di DeFi terjadi ketika protokol baru mengambil acuan harga hanya dari **satu kolam likuiditas DEX yang dangkal**—penyerang memanipulasi harga di kolam kecil tersebut menggunakan *Flash Loan*, lalu menguras dana dari protokol peminjaman yang mempercayai harga palsu itu.`,
    example: `Sebelum berinteraksi dengan protokol DeFi peminjaman atau derivatif baru, pastikan protokol tersebut menggunakan **Oracle harga terdesentralisasi yang teruji** dan tidak bergantung pada harga *spot* tunggal dari kolam likuiditas kecil.`,
    closing: "Apakah Anda ingin mengenal teknologi dompet Web3 generasi baru yang menghilangkan kerumitan seed phrase melalui Account Abstraction?",
    related: ["Account Abstraction (ERC-4337), Smart Wallet, dan Pengalaman Web3 Tanpa Seed Phrase", "DeFi Lending & Borrowing: Collateral, LTV, Health Factor, & Flash Loan", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)"]
  },
  {
    id: "account-abstraction-smart-wallet-gasless",
    label: "Account Abstraction (ERC-4337), Smart Wallet, dan Pengalaman Web3 Tanpa Seed Phrase",
    keys: ["account abstraction", "erc 4337", "smart wallet", "passkey", "gasless transaction", "social recovery", "eoa"],
    body: `Selama bertahun-tahun, adopsi dompet *self-custody* terhambat oleh satu titik kegagalan fatal: jika pengguna kehilangan 12 atau 24 kata **Seed Phrase**, seluruh aset hilang selamanya tanpa opsi pemulihan. Teknologi **Account Abstraction (seperti standar ERC-4337)** mengubah akun pengguna menjadi **Smart Contract Wallet** yang dapat diprogram.

Fitur utama yang dihadirkan *Smart Wallet*:
• **Login Biometrik / Passkey:** Membuat dan mengakses dompet kripto menggunakan sidik jari atau pengenalan wajah perangkat tanpa harus mencatat rangkaian kata rumit di awal.
• **Social Recovery & Multi-Sig:** Kemampuan memulihkan akses dompet melalui wali tepercaya (*guardians* seperti perangkat cadangan, email terenkripsi, atau keluarga) apabila ponsel utama hilang.
• **Gasless & Flexible Gas Payment:** Pengguna dapat membayar biaya jaringan (*gas fee*) menggunakan *stablecoin* (USDC/USDT) atau bahkan disponsori penuh oleh aplikasi (*Paymaster*), tanpa harus selalu menyimpan token asli jaringan tersebut.
• **Session Keys & Batching:** Menggabungkan proses *approve* dan *swap* menjadi satu kali klik serta membatasi izin transaksi otomatis dengan batas nominal harian.`,
    example: `Dengan **Smart Wallet**, pengguna baru tidak lagi kebingungan saat saldo token *gas fee*-nya habis—biaya transaksi bisa langsung dipotong otomatis dari *stablecoin* yang sedang mereka kirim.`,
    closing: "Apakah Anda ingin melihat perkembangan ekosistem Bitcoin modern di luar fungsi penyimpanan nilai, seperti Lightning Network dan Bitcoin Layer 2?",
    related: ["Ekosistem Bitcoin Modern: Lightning Network, Bitcoin Layer 2, Ordinals, & Runes", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)", "Ekosistem Layer 1 vs Layer 2: Rollups (Optimistic & ZK-Rollup) dan Skalabilitas"]
  },
  {
    id: "bitcoin-layer-2-ordinals-runes",
    label: "Ekosistem Bitcoin Modern: Lightning Network, Bitcoin Layer 2, Ordinals, & Runes",
    keys: ["lightning network", "bitcoin layer 2", "ordinals", "runes", "brc 20", "taproot", "ekosistem bitcoin"],
    body: `Selain berfungsi sebagai emas digital dan aset cadangan terdesentralisasi, jaringan Bitcoin juga memiliki lapisan pengembangan pembayaran instan dan aset digital di atas arsitekturnya:

• **Lightning Network:** Solusi pembayaran *Layer 2* di atas Bitcoin yang membuka saluran pembayaran *off-chain* antar-pengguna untuk mengirim transaksi mikro Bitcoin secara **instan (hitungan milidetik)** dengan biaya mendekati nol sebelum saldo akhirnya diselesaikan di rantai utama Bitcoin.
• **Bitcoin Layer 2 & Sidechains:** Jaringan tambahan yang memungkinkan kontrak pintar (*smart contract*) dan aplikasi DeFi memanfaatkan keamanan jaringan Bitcoin.
• **Ordinals & Runes:** Protokol yang memanfaatkan pembaruan *Taproot* untuk menyematkan data digital (*inscriptions* / artefak digital) maupun menerbitkan token sepadan (*fungible tokens*) langsung di satuan terkecil Bitcoin (**Satoshi**). Lonjakan aktivitas ini sering meningkatkan pendapatan biaya transaksi bagi penambang Bitcoin.`,
    example: `Melalui **Lightning Network**, pembayaran kopi atau pengiriman remitansi lintas negara bernilai kecil dalam Bitcoin dapat diselesaikan seketika tanpa harus menunggu konfirmasi blok utama selama 10 menit.`,
    closing: "Apakah Anda ingin mengevaluasi dua narasi besar Web3 modern—yaitu AI + Crypto dan DePIN—secara objektif?",
    related: ["Narasi Web3 Modern: AI + Crypto (Decentralized Compute) & DePIN", "Ekosistem Layer 1 vs Layer 2: Rollups (Optimistic & ZK-Rollup) dan Skalabilitas", "Stablecoin (USDT, USDC), Altcoin, dan Siklus Halving Kripto"]
  },
  {
    id: "narasi-ai-crypto-depin",
    label: "Narasi Web3 Modern: AI + Crypto (Decentralized Compute) & DePIN",
    keys: ["ai crypto", "depin", "decentralized physical infrastructure", "decentralized compute", "gpu terdesentralisasi", "narasi kripto"],
    body: `Setiap siklus pasar kripto melahirkan narasi teknologi baru yang menarik aliran modal besar. Dua tema infrastruktur yang menonjol dalam beberapa tahun terakhir adalah **AI + Crypto** dan **DePIN**:

• **DePIN (*Decentralized Physical Infrastructure Networks*):** Penggunaan insentif token kripto untuk membangun dan mengoperasikan infrastruktur fisik dunia nyata secara gotong royong—seperti jaringan nirkabel/internet, penyimpanan data terdesentralisasi, pemetaan jalan, sensor cuaca, hingga jaringan energi terdistribusi.
• **AI + Crypto (*Decentralized Compute & Verifiable AI*):** Jaringan terdesentralisasi yang menyewakan kapasitas komputasi GPU global untuk melatih model kecerdasan buatan, pasar data terverifikasi, serta dompet mandiri bagi agen AI (*AI Agents*) untuk bertransaksi secara otomatis.
• **Cara Menilai Kualitasnya:** Pisahkan antara proyek yang sekadar menempelkan kata kunci "AI" demi pemasaran (*vaporware*) dengan protokol yang benar-benar memiliki **permintaan pengguna riil dan pendapatan biaya protokol (*protocol revenue*)** di luar cetak token baru.`,
    example: `Dalam mengevaluasi proyek **DePIN**, indikator kesehatan utamanya bukan sekadar berapa banyak perangkat keras yang dipasang demi mengejar hadiah token, melainkan berapa besar **pendapatan riil dari pelanggan non-kripto** yang membayar layanan infrastruktur tersebut.`,
    closing: "Apakah Anda ingin memahami mekanisme dan risiko ekstrem di balik fenomena Memecoin dan Bonding Curve?",
    related: ["Memecoin, Bonding Curve, dan Psikologi Spekulasi Ekstrem", "Tokenomics: Circulating Supply, FDV (Fully Diluted Valuation), Vesting, & Burn", "Ekonomi Kecerdasan Buatan (AI), Otomatisasi, & Pergeseran Produktivitas Global"]
  },
  {
    id: "memecoin-bonding-curve-psikologi-spekulasi",
    label: "Memecoin, Bonding Curve, dan Psikologi Spekulasi Ekstrem",
    keys: ["memecoin", "meme coin", "bonding curve", "pump fun", "koin micin", "spekulasi kripto", "survivorship bias kripto"],
    body: `**Memecoin** adalah aset kripto yang lahir dari budaya internet, humor, atau komunitas viral—umumnya tanpa arus kas bisnis maupun utilitas teknologi intrinsik, sehingga pergerakan harganya 100% digerakkan oleh **perhatian publik, likuiditas, dan momentum spekulasi**.

Realitas statistik yang wajib dipahami sebelum menyentuh sektor *Memecoin*:
• **Mekanisme Bonding Curve Launchpad:** Platform peluncuran instan memungkinkan siapa pun membuat token baru dalam hitungan detik di atas kurva harga matematika (*bonding curve*). Setelah kapitalisasi mencapai ambang tertentu, likuiditas otomatis dipindahkan ke DEX publik.
• **Survivorship Bias Ekstrem:** Media sosial hanya menyoroti segelintir kisah dompet yang mengubah $100 menjadi $100.000, sementara **lebih dari 98% token baru** jatuh mendekati nol dalam hitungan jam atau hari akibat aksi jual pembuat token dan distribusi orang dalam (*insider bundling*).
• **Aturan Isolasi Modal:** Jika tetap memilih berpartisipasi sebagai hiburan spekulatif, batasi alokasi hanya pada porsi sangat kecil (misalnya **1%–3% dari total portofolio kripto**) yang benar-benar siap dianggap hangus 100%.`,
    example: `Memperlakukan *Memecoin* dengan pola pikir investasi jangka panjang seperti memegang Bitcoin adalah kesalahan fatal—tanpa fundamental bisnis atau arus kas, begitu perhatian komunitas berpindah ke tren berikutnya, likuiditas dapat menghilang seketika.`,
    closing: "Apakah Anda ingin mengetahui mekanisme distribusi token lewat Airdrop Farming, sistem poin, serta risiko filter Sybil?",
    related: ["Airdrop Kripto, Sistem Poin, Kriteria Sybil, dan Biaya Peluang", "Overconfidence Bias, Illusion of Control, dan Hindsight Bias", "Perbedaan Uang Dingin dan Uang Panas"]
  },
  {
    id: "airdrop-farming-points-sybil",
    label: "Airdrop Kripto, Sistem Poin, Kriteria Sybil, dan Biaya Peluang",
    keys: ["airdrop kripto", "airdrop farming", "retroactive airdrop", "points program", "sybil attack", "sybil filter"],
    body: `**Airdrop** adalah mekanisme distribusi token gratis kepada pengguna awal suatu protokol blockchain atau aplikasi Web3 untuk mendorong desentralisasi kepemilikan sekaligus memberi penghargaan atas pengujian produk sejak dini.

Dinamika ekosistem *Airdrop* modern:
• **Retroactive Airdrop vs Points Program:** *Retroactive Airdrop* memberikan token secara mengejutkan kepada pengguna asli masa lalu tanpa pengumuman sebelumnya, sedangkan *Points Program* mengumumkan sistem pengumpulan poin transparan berdasarkan volume transaksi atau likuiditas yang dikunci.
• **Filter Anti-Sybil:** Protokol modern menyaring dan mendiskualifikasi pelaku **Sybil** (satu orang yang mengoperasikan puluhan hingga ribuan dompet palsu dengan pola transaksi seragam) agar distribusi token jatuh ke pengguna organik yang konsisten.
• **Biaya Peluang (*Opportunity Cost*) & Risiko:** Menghabiskan ratusan dolar untuk *gas fee* atau mengunci modal besar di protokol belum teraudit demi mengejar poin belum tentu menghasilkan imbalan lebih besar daripada biaya modal yang dikeluarkan.`,
    example: `Pendekatan paling sehat dalam mengejar *airdrop* adalah **menggunakan protokol berkualitas secara organik** untuk kebutuhan DeFi nyata dengan satu atau dua dompet utama bersejarah transaksi panjang, daripada memaksakan transaksi berulang yang menguras *gas fee*.`,
    closing: "Apakah Anda ingin masuk ke bagian krusial keamanan teknis Web3, dimulai dari pencegahan salah jaringan dan salah Memo/Tag?",
    related: ["Keamanan Web3 Praktis: Salah Jaringan, Memo/Tag, & Bahaya Address Poisoning", "Bahaya Unlimited Token Approval, Wallet Drainer, dan Cara Revoke Akses", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)"]
  },
  {
    id: "keamanan-web3-salah-jaringan-memo",
    label: "Keamanan Web3 Praktis: Salah Jaringan, Memo/Tag, & Bahaya Address Poisoning",
    keys: ["salah jaringan kripto", "memo tag", "destination tag", "address poisoning", "test transaction", "kirim kripto salah alamat", "erc20 trc20"],
    body: `Karena transaksi blockchain bersifat **irreversible (tidak dapat dibatalkan oleh pihak mana pun)** setelah terkonfirmasi, kesalahan teknis kecil saat mengirim aset dapat menyebabkan dana hilang permanen.

Tiga kesalahan pengiriman paling sering terjadi dan cara mencegahnya:
1. **Salah Pilih Jaringan (*Network Mismatch*):** Mengirim token melalui jaringan yang tidak didukung oleh alamat penerima (misalnya mengirim aset lewat jaringan Arbitrum ke alamat deposit bursa yang hanya mendukung jaringan Ethereum mainnet). Selalu pastikan **jaringan pengirim dan jaringan penerima 100% identik**.
2. **Lupa Mengisi Memo / Destination Tag:** Pengiriman aset tertentu ke bursa terpusat (seperti XRP, XLM, TON, ATOM, atau EOS) membutuhkan **Memo/Tag** unik untuk mengidentifikasi akun Anda di dalam dompet bersama milik bursa. Tanpa Memo, dana masuk ke dompet bursa tetapi tidak otomatis masuk ke saldo akun Anda.
3. **Address Poisoning (Racun Riwayat Alamat):** Penipu mengirim transaksi nol dolar dari alamat palsu yang **4–6 karakter awal dan akhirnya sengaja dibuat mirip** dengan alamat tujuan rutin Anda agar Anda keliru menyalinnya dari riwayat transaksi (*transaction history*).`,
    example: `Terapkan **Aturan Uji Kirim Nominal Kecil (*Test Transaction*)** setiap kali mengirim dana besar ke alamat atau jaringan baru: kirim $5–$10 terlebih dahulu, pastikan masuk dengan selamat, lalu kirim sisanya setelah memeriksa seluruh karakter alamat tujuan.`,
    closing: "Apakah Anda ingin mempelajari ancaman peretasan dompet Web3 paling marak saat ini, yaitu Unlimited Token Approval dan Wallet Drainer?",
    related: ["Bahaya Unlimited Token Approval, Wallet Drainer, dan Cara Revoke Akses", "Mengenali Rug Pull, Honeypot Token, dan Manipulasi Likuiditas DEX", "Keamanan Aset Kripto: Custodial vs Self-Custody (Hot & Cold Wallet)"]
  },
  {
    id: "smart-contract-approval-revoke-drainer",
    label: "Bahaya Unlimited Token Approval, Wallet Drainer, dan Cara Revoke Akses",
    keys: ["token approval", "unlimited approval", "revoke access", "revoke cash", "wallet drainer", "phishing web3", "permit signature"],
    body: `Banyak kasus dompet *self-custody* terkuras habis terjadi bukan karena *seed phrase* dicuri secara langsung, melainkan karena pemilik dompet menandatangani izin *smart contract* berbahaya pada situs tiruan (*phishing*).

• **Mekanisme Token Approval:** Saat Anda menukar token di DEX, Anda terlebih dahulu memberi izin (*Approve*) kepada *smart contract* DEX untuk memindahkan token dari dompet Anda. Banyak aplikasi meminta izin **Unlimited Approval** (batas tak terbatas) agar Anda tidak perlu membayar *gas fee* izin berulang kali—namun jika protokol tersebut diretas di kemudian hari, peretas dapat menarik seluruh saldo token tersebut.
• **Wallet Drainer & Tanda Tangan Permit:** Situs *phishing* (sering disebarkan lewat tautan iklan palsu atau akun media sosial yang diretas) memancing pengguna menandatangani pesan tanda tangan (*off-chain signature / Permit*) yang diam-diam memberikan izin penuh kepada kontrak penipu untuk menguras aset dalam hitungan detik.
• **Kebiasaan Revoke Berkala:** Gunakan alat pemeriksa izin kontrak (seperti *Revoke.cash* atau fitur bawaan dompet) untuk mencabut (*revoke*) izin *smart contract* lama yang sudah tidak digunakan, serta pisahkan **Burner Wallet** (dompet khusus eksplorasi situs baru) dari **Vault Wallet** (dompet penyimpanan aset utama).`,
    example: `Jangan pernah menghubungkan **dompet utama berisi tabungan kripto** ke situs klaim *airdrop* atau tautan acak di media sosial—selalu gunakan **Burner Wallet** terpisah berisi dana minimal untuk berinteraksi dengan aplikasi baru.`,
    closing: "Apakah Anda ingin mengetahui cara mendeteksi token jebakan di DEX seperti Rug Pull dan Honeypot sebelum membeli?",
    related: ["Mengenali Rug Pull, Honeypot Token, dan Manipulasi Likuiditas DEX", "Keamanan Web3 Praktis: Salah Jaringan, Memo/Tag, & Bahaya Address Poisoning", "Mengenali Ciri Investasi Bodong, Skema Ponzi, & Money Game"]
  },
  {
    id: "rug-pull-honeypot-deteksi-token-jebakan",
    label: "Mengenali Rug Pull, Honeypot Token, dan Manipulasi Likuiditas DEX",
    keys: ["rug pull", "honeypot token", "token jebakan", "liquidity lock", "mint function", "deteksi scam kripto", "token sniffer"],
    body: `Di bursa terdesentralisasi (DEX) yang bersifat terbuka tanpa kurasi daftar pencatatan, siapa pun dapat meluncurkan token baru beserta jebakan kode di dalamnya:

• **Hard Rug Pull (Penarikan Likuiditas / Celah Kode):** Pengembang proyek tiba-tiba menarik seluruh dana ETH/SOL/USDT dari *Liquidity Pool* sehingga harga token jatuh 99,9% seketika, atau menyembunyikan fungsi *mint* rahasia untuk mencetak miliaran token gratis lalu menjualnya ke pasar.
• **Soft Rug Pull:** Tim pengembang perlahan-lahan menjual seluruh alokasi token mereka ke pembeli ritel lalu meninggalkan proyek tanpa pengembangan lebih lanjut.
• **Honeypot Token:** Token yang kode *smart contract*-nya sengaja dimodifikasi agar **semua orang bisa membeli**, tetapi **hanya alamat pengembang yang diizinkan menjual** (atau pajak penjualan diatur sebesar 99%–100%)—sehingga grafik terlihat terus naik hijau karena tidak ada yang bisa menjual, padahal seluruh modal pembeli terkunci selamanya.`,
    example: `Sebelum membeli token baru di DEX, selalu periksa pemindai kontrak (*contract scanner*) untuk memastikan: **fungsi Mint dinonaktifkan**, **likuiditas dikunci (*LP Locked / Burned*)**, **tidak ada pajak jual ekstrem**, dan **10 dompet teratas tidak menguasai mayoritas pasokan**.`,
    closing: "Apakah Anda ingin memahami perkembangan regulasi kripto global serta prinsip dasar pelaporan pajak aset kripto?",
    related: ["Regulasi Kripto Global (MiCA, SEC, Travel Rule) dan Prinsip Pelaporan Pajak Kripto", "Bahaya Unlimited Token Approval, Wallet Drainer, dan Cara Revoke Akses", "Tokenomics: Circulating Supply, FDV (Fully Diluted Valuation), Vesting, & Burn"]
  },
  {
    id: "pajak-regulasi-kripto-global-travel-rule",
    label: "Regulasi Kripto Global (MiCA, SEC, Travel Rule) dan Prinsip Pelaporan Pajak Kripto",
    keys: ["regulasi kripto", "pajak kripto", "mica", "travel rule", "fatf", "kepatuhan kripto", "kyc kripto", "pelaporan pajak kripto"],
    body: `Seiring matangnya industri aset digital, negara-negara besar dan badan standar keuangan internasional menerapkan kerangka pengawasan untuk melindungi konsumen serta mencegah pencucian uang:

• **Kerangka Regulasi Global:** Uni Eropa memberlakukan **MiCA (*Markets in Crypto-Assets*)** sebagai regulasi komprehensif pertama bagi penerbit *stablecoin* dan penyedia layanan kripto; di AS pengawasan terbagi antara sekuritas (SEC) dan komoditas (CFTC); sementara di berbagai negara termasuk Indonesia perdagangan aset kripto diawasi otoritas keuangan berizin.
• **FATF Travel Rule & KYC:** Mewajibkan penyedia layanan aset virtual (*VASP / bursa berizin*) menerapkan verifikasi identitas (**KYC**) dan membagikan data pengirim-penerima untuk transfer di atas ambang batas tertentu guna memenuhi standar anti-pencucian uang internasional.
• **Prinsip Pelaporan Pajak Kripto:** Di banyak yurisdiksi, keuntungan penjualan kripto, penukaran antar-koin, maupun pendapatan *staking/airdrop* merupakan objek pajak (baik melalui skema pemotongan final di bursa lokal berizin maupun pelaporan *capital gains* mandiri pada bursa luar negeri/DeFi). Menyimpan catatan riwayat transaksi sangat penting untuk kepatuhan pajak.`,
    example: `Menggunakan aplikasi pencatat portofolio dan riwayat transaksi sejak transaksi pertama memudahkan Anda menghitung biaya perolehan (*cost basis*) serta melaporkan kepemilikan aset kripto secara rapi pada laporan pajak tahunan.`,
    closing: "Apakah Anda ingin memetakan gelombang emosi yang berulang di setiap siklus pasar kripto melalui Psikologi Siklus Pasar?",
    related: ["Psikologi Siklus Pasar Kripto: Dari Disbelief, Euphoria, hingga Capitulation", "Memahami Pajak dan Biaya Transaksi dalam Keuangan", "Pajak Keuntungan Modal (Capital Gains Tax), Pajak Dividen, & Tax-Loss Harvesting"]
  },
  {
    id: "psikologi-siklus-pasar-kripto-wall-street-cheat-sheet",
    label: "Psikologi Siklus Pasar Kripto: Dari Disbelief, Euphoria, hingga Capitulation",
    keys: ["siklus emosi pasar", "disbelief", "capitulation", "kapitulasi", "wall street cheat sheet", "psikologi bull market", "psikologi bear market"],
    body: `Siklus pasar kripto yang berlangsung cepat memperkuat ayunan emosi kolektif pelaku pasar mengikuti pola klasik psikologi siklus pasar:

1. **Disbelief (Ketidakpercayaan):** Harga mulai naik perlahan setelah *bear market* panjang, namun mayoritas publik menganggapnya sekadar *"reli palsu"* dan enggan masuk.
2. **Hope & Optimism:** Tren naik mulai terkonfirmasi; investor awal mulai percaya pemulihan benar-benar terjadi.
3. **Thrill & Euphoria (Euforia Puncak):** Media arus utama memberitakan rekor harga setiap hari, orang awam berbondong-bondong masuk memakai utang, dan muncul keyakinan bahwa harga tidak akan pernah turun lagi—titik risiko tertinggi siklus.
4. **Complacency & Anxiety:** Koreksi pertama dianggap *"diskon sementara untuk beli lebih banyak"*, hingga penurunan terus berlanjut dan berubah menjadi kecemasan.
5. **Capitulation & Depression (Kapitulasi):** Penjual menyerah dan menjual aset di harga terendah karena putus asa dan bosan—ironisnya sering menandai titik dasar siklus menjelang fase akumulasi baru.`,
    example: `Indikator kontrarian sederhana: ketika topik kripto menjadi bahan obrolan utama orang-orang di sekitar Anda yang sebelumnya tidak pernah tertarik berinvestasi (**fase Euphoria**), itulah saat paling bijak untuk mulai mengamankan profit bertahap daripada menambah risiko.`,
    closing: "Apakah Anda ingin menyatukan seluruh prinsip riset aset digital ke dalam kerangka praktis DYOR (Do Your Own Research)?",
    related: ["Kerangka Riset DYOR (Do Your Own Research) untuk Mengevaluasi Proyek Kripto", "Psikologi FOMO, Social Comparison, dan Dopamine Spending", "Metode Wyckoff: Fase Akumulasi, Mark-Up, Distribusi, & Mark-Down"]
  },
  {
    id: "kerangka-dyor-evaluasi-proyek-kripto",
    label: "Kerangka Riset DYOR (Do Your Own Research) untuk Mengevaluasi Proyek Kripto",
    keys: ["dyor", "do your own research", "cara riset kripto", "fundamental kripto", "evaluasi token", "checklist kripto"],
    body: `Istilah **DYOR (*Do Your Own Research*)** bukan sekadar slogan penafian, melainkan proses verifikasi sistematis sebelum menempatkan modal pada suatu proyek aset digital agar keputusan tidak bergantung pada promosi *influencer*:

Enam langkah utama **Checklist DYOR**:
1. **Masalah & Kegunaan Produk (*Product-Market Fit*):** Masalah nyata apa yang diselesaikan protokol ini, dan apakah tokennya benar-benar dibutuhkan dalam ekosistem tersebut atau sekadar tempelan?
2. **Struktur Tokenomics & Jadwal Unlock:** Bandingkan *Market Cap* vs *FDV*, cek persentase alokasi tim/investor awal, serta jadwal pembukaan kunci (*vesting*) dalam 6–12 bulan ke depan.
3. **Data On-Chain & Pendapatan Riil:** Cek total nilai terkunci (*TVL*), pengguna aktif harian, dan pendapatan biaya protokol (*fees/revenue*) dibandingkan subsidi inflasi token yang dibagikan.
4. **Kredibilitas Tim & Investor Pendukung:** Telusuri rekam jejak pendiri, transparansi pengembangan kode (*GitHub*), serta kualitas investor institusional di belakangnya.
5. **Audit Keamanan Smart Contract:** Pastikan kode telah diaudit oleh firma keamanan bereputasi dan tidak memiliki hak akses terpusat yang dapat membekukan atau mencetak token sembarangan.
6. **Valuasi Komparatif & Tren Makro:** Bandingkan valuasi proyek dengan kompetitor sejenis di sektor yang sama serta selaraskan dengan kondisi likuiditas makro pasar.`,
    example: `Jika sebuah proyek memiliki teknologi menarik tetapi **FDV-nya sudah sangat mahal** dengan jadwal *token unlock* besar bulan depan, hasil *DYOR* yang disiplin akan menyarankan Anda menunggu harga koreksi setelah tekanan pasokan mereda daripada terburu-buru masuk.`,
    closing: "Apakah Anda ingin melihat rangkuman peta lengkap seluruh 270 modul pengetahuan finansial yang kini tersedia di dalam sistem?",
    related: ["Peta Lengkap 270 Modul Literasi Finansial: Pribadi, Makro, Trading, Psikologi, & Kripto", "Tokenomics: Circulating Supply, FDV (Fully Diluted Valuation), Vesting, & Burn", "Locus of Control dan Bahaya Ketergantungan Sinyal (Signal Dependency)"]
  },
  {
    id: "kurikulum-lengkap-zoen-270-modul",
    label: "Peta Lengkap 270 Modul Literasi Finansial: Pribadi, Makro, Trading, Psikologi, & Kripto",
    keys: ["270 modul", "daftar modul", "kurikulum zoen", "semua topik", "peta materi", "daftar isi lengkap"],
    body: `Seluruh basis pengetahuan finansial telah tersusun utuh dalam **270 modul terstruktur** yang mencakup enam pilar utama dunia keuangan modern:

1. **Keuangan Pribadi, Keluarga, & Perencanaan Hidup:** Manajemen arus kas, *budgeting*, dana darurat, skor kredit (SLIK), simulasi KPR & utang, kartu kredit/PayLater, *sandwich generation*, dana pendidikan, dana pensiun (FIRE), asuransi, pajak pribadi, keuangan syariah, hingga perencanaan waris.
2. **Bisnis, UMKM, & Keuangan Korporasi:** Pemisahan keuangan usaha, HPP & BEP, laporan keuangan (Laba Rugi, Neraca, Arus Kas), *Unit Economics* (CAC, LTV, *Burn Rate*), struktur modal, WACC, ROIC, M&A, struktur pasar, hingga tata kelola perusahaan (GCG).
3. **Investasi Pasar Modal & Teori Portofolio:** Saham, dividen, rasio valuasi (PER, PBV, DCF, EV/EBITDA), obligasi/SBN, reksa dana & ETF, emas, properti/REITs, *Modern Portfolio Theory*, *Sharpe Ratio*, rotasi sektor, dan strategi *Core-Satellite*.
4. **Makroekonomi Global & Sejarah Krisis:** Siklus ekonomi, kebijakan fiskal & moneter, suku bunga riil, *Yield Curve*, US Treasuries, likuiditas M2, neraca perdagangan, kurs & *carry trade*, indeks VIX, hingga pelajaran krisis 1929, 1997, dan 2008.
5. **Trading, Teknikal, & Derivatif:** Manajemen risiko & *position sizing*, indikator teknikal klasik, *Price Action*, SMC/ICT, siklus Wyckoff, *Volume Profile*, mikrostruktur *Order Book*, kontrak *Futures & Options*, *Kelly Criterion*, dan *Monte Carlo Simulation*.
6. **Psikologi Keuangan & Ekosistem Kripto / Web3:** Bias kognitif (*Anchoring*, *Loss Aversion*, *FOMO*, *Mental Accounting*, *Outcome Bias*), *Crypto Spot & Perpetual Futures* (*Funding Rate*, *Open Interest*, *Liquidation*), analisis *On-Chain*, *Layer 2*, DeFi, *Tokenomics*, keamanan Web3, dan kerangka *DYOR*.`,
    example: `Anda dapat menanyakan topik spesifik apa pun—mulai dari cara mengatur gaji bulanan, menghitung risiko *stop loss*, membaca *Funding Rate* kripto, hingga dampak *Yield Curve* terhadap ekonomi global—dan sistem akan langsung menyajikan panduan praktisnya.`,
    closing: "Seluruh 270 modul pengetahuan finansial, trading, makroekonomi, psikologi, dan kripto telah lengkap! Topik apa yang ingin Anda tanyakan hari ini?",
    related: ["Peta Jalan Utuh Literasi Finansial: Mengintegrasikan Keuangan Pribadi, Investasi, & Makro", "Cara Pandang Dasar dalam Dunia Finansial & Pasar", "Kerangka Riset DYOR (Do Your Own Research) untuk Mengevaluasi Proyek Kripto"]
  }
];
