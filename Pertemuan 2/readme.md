Untuk **Pertemuan 2**, kita akan fokus pada pengenalan dan pemahaman React secara lebih mendalam serta penerapan Git untuk manajemen versi dalam proyek React. Berikut adalah rincian materi untuk Pertemuan 2:

### **Pertemuan 2: Pengenalan React dan Penggunaan Git dalam Proyek React**

#### 1. **Pengenalan React**
   - **Apa Itu React?**
     - **React Overview:** Library JavaScript untuk membangun antarmuka pengguna. React memungkinkan pembuatan komponen UI yang dapat digunakan kembali dan efisien.
     - **React vs. Framework Lain:** Perbandingan dengan Angular dan Vue.js.
     - **Komponen Utama:**
       - **Komponen:** Unit terkecil dari UI di React, bisa berupa komponen fungsi atau komponen kelas.
       - **JSX:** Sintaks yang digunakan di React untuk menulis HTML di dalam JavaScript.
       - **Virtual DOM:** Representasi memori dari DOM yang memungkinkan React untuk memperbarui UI secara efisien.
   
   - **Membuat Komponen Pertama:**
     - **Komponen Fungsi:** Pengenalan kepada komponen fungsi menggunakan React Hooks.
     - **Contoh Kode:**
       ```jsx
       import React from 'react';

       function Greeting() {
         return <h1>Hello, World!</h1>;
       }

       export default Greeting;
       ```
     - **JSX Syntax:**
       - Penggunaan tanda kurung `{}` untuk menyisipkan ekspresi JavaScript di dalam JSX.
       - Contoh penggunaan variabel di JSX:
         ```jsx
         const name = 'John';
         const element = <h1>Hello, {name}</h1>;
         ```
   
   - **State dan Props:**
     - **State:** Data internal dari komponen yang dapat berubah seiring waktu. 
     - **Props:** Data yang diteruskan dari komponen induk ke komponen anak.
     - **Contoh Kode:**
       ```jsx
       import React, { useState } from 'react';

       function Counter() {
         const [count, setCount] = useState(0);

         return (
           <div>
             <p>You clicked {count} times</p>
             <button onClick={() => setCount(count + 1)}>
               Click me
             </button>
           </div>
         );
       }

       export default Counter;
       ```

   - **Referensi:**
     - [React Official Documentation - Introducing JSX](https://react.dev/learn/introducing-jsx)
     - [React Official Documentation - Components and Props](https://react.dev/learn/components-and-props)
     - [React Official Documentation - State and Lifecycle](https://react.dev/learn/state-a-components-life)

#### 2. **Penggunaan Git dalam Proyek React**
   - **Membuat Repository Git untuk Proyek React:**
     - **Langkah-Langkah:**
       - Buka terminal dan arahkan ke direktori proyek React.
       - Inisialisasi repository Git:
         ```bash
         git init
         ```
       - Tambahkan file ke staging area:
         ```bash
         git add .
         ```
       - Commit perubahan pertama:
         ```bash
         git commit -m "Initial commit with Vite and React setup"
         ```
     - **Membuat Branch Baru:**
       - Membuat branch baru untuk fitur atau perubahan tertentu:
         ```bash
         git checkout -b feature/new-feature
         ```
     - **Merge dan Resolve Conflicts:**
       - Menggabungkan branch dan menyelesaikan konflik jika ada:
         ```bash
         git checkout main
         git merge feature/new-feature
         ```

   - **Menampilkan Status dan Riwayat:**
     - **Melihat Status Repository:**
       ```bash
       git status
       ```
     - **Melihat Riwayat Commit:**
       ```bash
       git log
       ```

   - **Menggunakan GitHub untuk Hosting dan Kolaborasi:**
     - **Membuat Repository di GitHub:**
       - Buat repository baru di GitHub dan ikuti petunjuk untuk menghubungkan repository lokal ke GitHub:
         ```bash
         git remote add origin https://github.com/username/repository.git
         git push -u origin main
         ```
     - **Kolaborasi dengan Pull Request:**
       - Menjelaskan bagaimana membuat pull request di GitHub untuk review dan integrasi kode.

   - **Referensi:**
     - [Git Official Documentation - Getting Started](https://git-scm.com/book/en/v2/Getting-Started)
     - [GitHub Documentation - Hello World](https://docs.github.com/en/get-started/quickstart/hello-world)

#### 3. **Praktikum dan Aktivitas**
   - **Praktikum Membuat Komponen:**
     - Mahasiswa membuat komponen React sederhana yang menampilkan informasi dan menerima props.
   - **Aktivitas Git:**
     - Menginisialisasi repository Git untuk proyek React, melakukan commit, dan mendorong perubahan ke GitHub.
   - **Diskusi dan Tanya Jawab:**
     - Sesi tanya jawab tentang tantangan yang dihadapi selama pengembangan komponen React dan penggunaan Git.

### **Referensi Tambahan:**
- **React Documentation - Functional Components:** [React Hooks Overview](https://react.dev/learn/hooks)
- **Git Documentation - Branching and Merging:** [Git Branching](https://git-scm.com/book/en/v2/Git-Branching)
- **GitHub Guides:** [GitHub Guides](https://guides.github.com/)

Materi ini akan memberikan mahasiswa pemahaman mendalam tentang dasar-dasar React dan cara menggunakan Git untuk manajemen versi dalam proyek React.