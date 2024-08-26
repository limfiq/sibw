### **Materi: Pengenalan Pengembangan Web**
#### 1. **Pengantar Pengembangan Web**
   - **Definisi dan Ruang Lingkup Pengembangan Web:**
     - Pengembangan web mencakup proses pembuatan aplikasi atau situs web yang dapat diakses melalui internet atau intranet. Ini melibatkan beberapa aspek seperti desain web, pengembangan frontend, pengembangan backend, dan manajemen basis data.
     - **Frontend:** Bagian dari aplikasi web yang berinteraksi langsung dengan pengguna, biasanya dibangun menggunakan HTML, CSS, dan JavaScript.
     - **Backend:** Bagian dari aplikasi web yang mengelola data, otentikasi, dan logika bisnis, biasanya melibatkan server dan database.
     - **Fullstack:** Pengembang yang menguasai kedua aspek frontend dan backend.
   
   - **Pentingnya Pengembangan Web di Era Digital:**
     - Pengembangan web adalah keterampilan yang sangat dibutuhkan dalam dunia teknologi karena semakin banyak layanan dan bisnis yang bergantung pada platform berbasis web.

   - **Teknologi Web Modern:**
     - **HTML5, CSS3, dan JavaScript:** Fondasi dasar dari pengembangan web modern.
     - **Framework dan Library Modern:**
       - **Frontend:** React (JavaScript library untuk membangun antarmuka pengguna), Angular, Vue.js.
       - **Backend:** Node.js (JavaScript runtime untuk server), Express.js, Django.
       - **Database:** MySQL (Sistem manajemen basis data relasional), MongoDB, PostgreSQL.
     - **DevOps Tools:** Git (version control), Docker (containerization), CI/CD pipelines (automated deployment).

#### 2. **Pengenalan Teknologi yang Akan Digunakan**
   - **React:**
     - **Apa Itu React?**: React adalah library JavaScript untuk membangun antarmuka pengguna yang dinamis dan interaktif. Dengan pendekatan berbasis komponen, React memungkinkan pengembang membangun UI yang dapat digunakan kembali.
     - **React Ecosystem:** Termasuk React Router untuk navigasi, Redux atau Context API untuk manajemen state, dan React Hooks untuk pengelolaan logika komponen.
     - **Pembaruan Terbaru:**
       - Penggunaan React Hooks (`useState`, `useEffect`, dll.) sebagai standar dalam pengembangan komponen fungsi.
       - Pendekatan berbasis komponen fungsi menggantikan komponen kelas, yang kini jarang digunakan dalam dokumentasi dan praktik modern.
     - **Referensi:**
       - [React Official Documentation](https://react.dev)
       - **Buku:** "Learning React: Modern Patterns for Developing React Apps" oleh Alex Banks & Eve Porcello (edisi terbaru yang mencakup Hooks dan Context API).

   - **MySQL:**
     - **Apa Itu MySQL?**: MySQL adalah sistem manajemen basis data relasional yang digunakan secara luas dalam pengembangan aplikasi web. MySQL digunakan untuk menyimpan dan mengelola data aplikasi.
     - **Referensi:**
       - [MySQL Official Documentation](https://dev.mysql.com/doc/)
       - **Buku:** "Learning MySQL: Get a Handle on Your Data" oleh Seyed M.M. Hoseini.

   - **Tailwind CSS:**
     - **Apa Itu Tailwind CSS?**: Tailwind CSS adalah framework CSS berbasis utility-first yang memungkinkan pengembang membuat antarmuka pengguna yang responsif dengan cepat tanpa perlu menulis CSS kustom yang banyak.
     - **Referensi:**
       - [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
       - **Buku:** "Tailwind CSS: From Zero to Production" oleh Simon Vrachliotis (ebook, Tailwind Labs).

#### 3. **Instalasi dan Pengaturan Lingkungan Pengembangan**
   - **Node.js dan npm:**
     - **Node.js:** Runtime JavaScript di sisi server yang memungkinkan pengembangan backend menggunakan JavaScript.
     - **npm (Node Package Manager):** Alat untuk mengelola dependensi dan paket dalam proyek JavaScript, digunakan untuk menginstal library seperti React.
     - **Referensi:**
       - [Node.js Official Documentation](https://nodejs.org/en/docs/)
       - [npm Documentation](https://docs.npmjs.com/)
   
   - **Vite:**
     - **Apa Itu Vite?**: Vite adalah alat build frontend modern yang lebih cepat dan lebih efisien dibandingkan dengan alat tradisional seperti Webpack atau CRA. Vite memungkinkan proses pengembangan yang lebih cepat dengan hot module replacement (HMR) yang sangat cepat.
     - **Langkah-Langkah Menggunakan Vite untuk Membuat Proyek React:**
       - Buka terminal dan jalankan perintah berikut untuk membuat proyek baru dengan Vite:
         ```bash
         npm create vite@latest
         ```
       - Pilih template `react` saat diminta.
       - Masuk ke direktori proyek dan instal dependensi:
         ```bash
         cd nama-proyek
         npm install
         npm run dev
         ```
     - **Referensi:**
       - [Vite Official Documentation](https://vitejs.dev/guide/)

   - **Visual Studio Code:**
     - Editor kode sumber yang ringan dan memiliki integrasi kuat dengan alat pengembangan seperti Git, debugger, dan ekstensi yang mendukung React, MySQL, dan Tailwind CSS.
     - **Referensi:**
       - [VS Code Official Documentation](https://code.visualstudio.com/docs)

   - **MySQL Installation:**
     - Panduan untuk menginstal MySQL pada sistem operasi yang digunakan, serta pengenalan MySQL Workbench untuk manajemen database.
     - **Referensi:**
       - [MySQL Installation Guide](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

### **Aktivitas:**
1. **Orientasi Mata Kuliah:**
   - Menjelaskan apa yang akan dipelajari selama 16 minggu ke depan.
   - Diskusi mengenai tujuan pembelajaran dan harapan dari mahasiswa.

2. **Instalasi Alat-Alat Pengembangan:**
   - Panduan langkah demi langkah untuk menginstal Node.js, npm, MySQL, dan Visual Studio Code.
   - Membuat proyek pertama dengan Vite sesuai dengan dokumentasi terbaru.
   - Membuat database pertama di MySQL dan melakukan koneksi dasar dengan React.

3. **Diskusi Kelas dan Sesi Tanya Jawab:**
   - Menjawab pertanyaan mahasiswa terkait materi dan teknologi yang digunakan.
   - Diskusi mengenai tantangan yang mungkin dihadapi selama pengembangan aplikasi.

### **Referensi Tambahan:**
- **React Documentation (Terbaru):** [React Docs](https://react.dev)
- **Tailwind CSS Documentation:** [Tailwind CSS](https://tailwindcss.com/docs)
- **Vite Documentation:** [Vite Docs](https://vitejs.dev/guide/)
- **MySQL Documentation:** [MySQL Docs](https://dev.mysql.com/doc/)

Dengan materi ini, mahasiswa akan mendapatkan pemahaman yang lebih relevan dan up-to-date mengenai teknologi dan alat pengembangan modern yang akan mereka gunakan selama kursus.