// Bagian materi 12. Isi objek dipertahankan dari file sumber.
export const part12 = [
{
    id: "present-bias-hyperbolic-discounting",
    label: "Present Bias dan Hyperbolic Discounting (Menunda Kepuasan Finansial)",
    keys: ["present bias", "hyperbolic discounting", "delayed gratification", "menunda kepuasan", "imbalan instan", "kesabaran investasi", "tutup profit cepat"],
    body: `**Present Bias** dan **Hyperbolic Discounting** adalah kecenderungan otak manusia menilai imbalan kecil yang bisa dinikmati **detik ini juga** jauh lebih tinggi daripada imbalan besar yang baru akan datang di masa depan.

Dampak nyata bias ini dalam keuangan dan pasar:
• **Dalam Keuangan Pribadi:** Lebih memilih menghabiskan gaji atau bonus untuk kesenangan instan hari ini daripada menyisihkannya ke instrumen investasi jangka panjang yang manfaat *compounding*-nya baru terasa 5–10 tahun lagi.
• **Dalam Eksekusi Trading:** Terburu-buru menutup transaksi yang baru untung tipis (+0,5R) karena ingin segera merasakan kepuasan uang masuk hari ini, padahal struktur tren masih valid menuju target utama (+2,5R atau +3R).`,
    example: `Banyak orang menolak tawaran imbal hasil investasi 15% per tahun karena terasa "terlalu lama", namun rela mengeluarkan uang yang sama hari ini untuk barang konsumtif atau spekulasi instan yang justru menggerus modalnya.`,
    closing: "Apakah Anda ingin memahami jebakan menilai kualitas keputusan hanya dari hasil akhir jangka pendek (Outcome Bias)?",
    related: ["Outcome Bias (Resulting): Menilai Keputusan dari Hasil, Bukan Proses", "Arsitektur Kebiasaan Finansial: Friction Design dan Otomasi Disiplin", "Efek Compound Interest (Bunga Berbunga) & Time Horizon"]
  },
  {
    id: "outcome-bias-resulting",
    label: "Outcome Bias (Resulting): Menilai Keputusan dari Hasil, Bukan Proses",
    keys: ["outcome bias", "resulting", "annie duke", "proses vs hasil", "menang beruntung", "kalah wajar", "evaluasi keputusan"],
    body: `**Outcome Bias** (atau sering disebut *Resulting* oleh mantan juara poker dan penulis keputusan Annie Duke) adalah kesalahan mengevaluasi kualitas suatu keputusan **semata-mata berdasarkan hasil akhirnya**, bukan berdasarkan kualitas proses dan informasi yang tersedia saat keputusan itu diambil.

Mengapa *Outcome Bias* sangat berbahaya di lingkungan probabilistik seperti pasar keuangan?
• **Keputusan Buruk yang Kebetulan Untung:** Masuk posisi tanpa *stop loss* dengan ukuran lot berlebihan lalu kebetulan selamat dan profit karena berita mendadak tetaplah **keputusan buruk**—jika diulang terus, kebangkrutan hanyalah soal waktu.
• **Keputusan Baik yang Kebetulan Rugi:** Mengambil peluang yang memenuhi seluruh syarat sistem dengan risiko terukur 1% lalu terkena *stop loss* normal tetaplah **keputusan baik**—mengubah aturan hanya karena satu kekalahan wajar justru merusak keunggulan statistik jangka panjang.`,
    example: `Saat mengevaluasi jurnal transaksi bulanan, pisahkan penilaian menjadi dua kolom: **apakah hasilnya untung/rugi** dan **apakah eksekusinya patuh aturan/melanggar aturan**. Fokus utama perbaikan diri ada pada kepatuhan proses.`,
    closing: "Apakah Anda ingin mengenal kebiasaan menghindari kenyataan angka keuangan saat kondisi sedang buruk (Ostrich Effect)?",
    related: ["Ostrich Effect dan Financial Denial (Menghindari Realitas Keuangan)", "Kerangka Pengambilan Keputusan Finansial: Pre-Mortem, Checklist, & Second-Order Thinking", "Jurnal Trading dan Evaluasi Berkala"]
  },
  {
    id: "ostrich-effect-financial-denial",
    label: "Ostrich Effect dan Financial Denial (Menghindari Realitas Keuangan)",
    keys: ["ostrich effect", "efek burung unta", "financial denial", "takut cek saldo", "takut lihat portofolio", "menghindar tagihan", "akun floating minus"],
    body: `**Ostrich Effect (Efek Burung Unta)** adalah kecenderungan psikologis untuk menghindar, menutup mata, dan menolak memeriksa informasi keuangan ketika kita menduga kabar yang ada di dalamnya tidak menyenangkan.

Bentuk umum *Financial Denial* di kehidupan sehari-hari:
• Enggan membuka aplikasi perbankan, rincian mutasi pengeluaran, atau tagihan kartu kredit/cicilan karena takut melihat angka yang membengkak.
• Tidak berani membuka aplikasi investasi atau terminal trading selama berminggu-minggu ketika portofolio sedang merah atau posisi terlanjur *floating loss* tanpa batas risiko.

Menghindari layar tidak menghentikan bunga utang berjalan dan tidak menahan harga berhenti turun—sebaliknya, hal itu merampas kemampuan Anda mengambil tindakan koreksi sejak dini saat kerugian masih kecil.`,
    example: `Menjadwalkan **15 menit setiap akhir pekan** untuk memeriksa seluruh saldo rekening, kewajiban cicilan, dan posisi terbuka secara jujur membantu memutus pola *Ostrich Effect* sebelum masalah kecil berubah menjadi krisis.`,
    closing: "Apakah Anda ingin memahami bagaimana tekanan kekurangan uang memicu Scarcity Mindset dan Tunnel Vision?",
    related: ["Scarcity Mindset dan Tunnel Vision dalam Keputusan Keuangan", "Loss Aversion, Endowment Effect, dan Disposition Effect dalam Investasi", "Audit dan Evaluasi Keuangan Pribadi Bulanan & Tahunan"]
  },
  {
    id: "scarcity-mindset-tunnel-vision",
    label: "Scarcity Mindset dan Tunnel Vision dalam Keputusan Keuangan",
    keys: ["scarcity mindset", "mentalitas kelangkaan", "tunnel vision", "abundance mindset", "terburu buru kaya", "uang mepet", "beban kognitif"],
    body: `Berdasarkan riset psikologi ekonomi Sendhil Mullainathan dan Eldar Shafir, **Scarcity Mindset (Mentalitas Kelangkaan)** terjadi ketika seseorang merasa terus-menerus kekurangan sumber daya (uang atau waktu) sehingga seluruh kapasitas mentalnya tersedot untuk bertahan hari ini (*Tunnel Vision*).

Dampak *Scarcity Mindset* terhadap kualitas keputusan finansial:
• **Penyempitan Jangkauan Berpikir (*Tunnel Vision*):** Otak sulit merencanakan investasi jangka panjang karena seluruh fokus terkunci pada tekanan tagihan jangka pendek.
• **Rentan Jalan Pintas & Skema Cepat Kaya:** Tekanan kebutuhan mendesak membuat seseorang mudah tergoda janji imbal hasil instan, investasi bodong, atau memaksa masuk ke pasar menggunakan uang kebutuhan pokok (*uang panas*).
• **Hilangnya Objektivitas di Grafik:** Jika Anda bertransaksi dengan harapan *"posisi ini harus profit untuk bayar cicilan minggu depan"*, rasa takut kehilangan akan merusak disiplin eksekusi.`,
    example: `Memisahkan 100% uang biaya hidup rutin dan dana darurat dari modal investasi atau trading membebaskan otak dari tekanan **Scarcity Mindset**, sehingga Anda dapat mengambil keputusan pasar dengan kepala dingin.`,
    closing: "Apakah Anda ingin menutup pembahasan psikologi ini dengan memahami perbedaan Locus of Control dan bahaya ketergantungan sinyal?",
    related: ["Locus of Control dan Bahaya Ketergantungan Sinyal (Signal Dependency)", "Perbedaan Uang Dingin dan Uang Panas", "Mengenali Ciri Investasi Bodong, Skema Ponzi, & Money Game"]
  },
  {
    id: "locus-of-control-signal-dependency",
    label: "Locus of Control dan Bahaya Ketergantungan Sinyal (Signal Dependency)",
    keys: ["locus of control", "internal locus of control", "external locus of control", "ketergantungan sinyal", "grup sinyal", "menyalahkan pasar", "tanggung jawab risiko"],
    body: `Konsep psikologi **Locus of Control** (Julian Rotter) membedakan sejauh mana seseorang meyakini bahwa hasil hidup dan keuangannya ditentukan oleh kendali dirinya sendiri dibandingkan faktor luar:

• **External Locus of Control:** Meyakini bahwa nasib keuangan sepenuhnya ditentukan faktor eksternal—mudah menyalahkan kondisi ekonomi, pemerintah, algoritma bursa, atau "bandar" setiap kali mengalami kerugian, serta terus mencari penyelamat dari luar seperti **grup sinyal berbayar atau ajakan influencer (*Signal Dependency*)**.
• **Internal Locus of Control:** Menyadari sepenuhnya bahwa kita memang **tidak bisa mengendalikan arah pasar**, tetapi kita memegang **kendali 100%** atas persiapan riset, pemilihan aset, ukuran posisi, penempatan *stop loss*, dan kepatuhan disiplin diri.

Ketergantungan sinyal menghambat perkembangan jangka panjang karena saat posisi bergerak berlawanan, Anda tidak memahami dasar analisisnya sehingga panik tanpa tahu kapan harus bertahan atau keluar.`,
    example: `Gunakan pandangan analis atau berita pasar sebatas **bahan pembanding riset**, namun pastikan setiap keputusan membeli atau menjual lahir dari kriteria tertulis Anda sendiri sehingga Anda bertanggung jawab penuh atas risikonya.`,
    closing: "Seluruh 235 modul literasi finansial, investasi, makroekonomi global, dan psikologi keuangan telah lengkap! Topik apa yang ingin Anda bahas sekarang?",
    related: ["Psikologi Trading dan Disiplin Eksekusi", "Kerangka Pengambilan Keputusan Finansial: Pre-Mortem, Checklist, & Second-Order Thinking", "Peta Jalan Utuh Literasi Finansial: Mengintegrasikan Keuangan Pribadi, Investasi, & Makro"]
  },
];
