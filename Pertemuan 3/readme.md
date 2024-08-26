Untuk **Pertemuan 3**, kita akan melanjutkan dengan topik yang lebih mendalam tentang komponen React dan pengenalan tentang manajemen state menggunakan React Hooks, serta melanjutkan penggunaan Git dalam konteks pengembangan aplikasi.

### **Pertemuan 3: Manajemen State dan React Hooks**

#### 1. **Manajemen State di React**
   - **Apa Itu State?**
     - **Definisi State:** State adalah objek yang menyimpan data atau informasi mengenai komponen. State memungkinkan komponen untuk merender ulang secara dinamis ketika data berubah.
     - **Penggunaan State dalam Komponen:**
       - **Komponen Fungsi:** Menggunakan React Hooks untuk mengelola state.
       - **Komponen Kelas:** Menggunakan metode `this.setState()` untuk mengelola state (masih penting untuk pemahaman tetapi lebih jarang digunakan dengan Hooks).

   - **React Hooks untuk Manajemen State:**
     - **useState Hook:**
       - **Deskripsi:** `useState` adalah Hook yang memungkinkan Anda menambahkan state ke komponen fungsi.
       - **Contoh Penggunaan:**
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
       - **Referensi:** [React Official Documentation - useState](https://react.dev/learn/state)

     - **useEffect Hook:**
       - **Deskripsi:** `useEffect` digunakan untuk efek samping seperti fetching data, manipulasi DOM, atau pengaturan timer.
       - **Contoh Penggunaan:**
         ```jsx
         import React, { useState, useEffect } from 'react';

         function DataFetcher() {
           const [data, setData] = useState(null);

           useEffect(() => {
             fetch('https://api.example.com/data')
               .then(response => response.json())
               .then(data => setData(data));
           }, []); // Kosong array berarti efek ini hanya dijalankan sekali setelah render pertama

           return (
             <div>
               {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
             </div>
           );
         }

         export default DataFetcher;
         ```
       - **Referensi:** [React Official Documentation - useEffect](https://react.dev/learn/effect-hook)

   - **Pengenalan Context API:**
     - **Apa Itu Context API?**
       - **Deskripsi:** Context API adalah fitur React untuk berbagi data antar komponen tanpa harus meneruskan props melalui setiap tingkat hirarki.
       - **Contoh Penggunaan:**
         ```jsx
         import React, { createContext, useContext, useState } from 'react';

         const ThemeContext = createContext();

         function ThemeProvider({ children }) {
           const [theme, setTheme] = useState('light');

           return (
             <ThemeContext.Provider value={{ theme, setTheme }}>
               {children}
             </ThemeContext.Provider>
           );
         }

         function ThemedComponent() {
           const { theme, setTheme } = useContext(ThemeContext);

           return (
             <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
               <p>The current theme is {theme}</p>
               <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                 Toggle Theme
               </button>
             </div>
           );
         }

         export default function App() {
           return (
             <ThemeProvider>
               <ThemedComponent />
             </ThemeProvider>
           );
         }
         ```
       - **Referensi:** [React Official Documentation - Context](https://react.dev/learn/context)

#### 2. **Penggunaan Git dalam Pengembangan Aplikasi**
   - **Branching dan Merging:**
     - **Penggunaan Branch untuk Fitur Baru:**
       - Membuat branch baru untuk fitur atau perbaikan tertentu dan melakukan commit:
         ```bash
         git checkout -b feature/new-feature
         git add .
         git commit -m "Add new feature"
         ```
     - **Menggabungkan Branch ke Main:**
       - Melakukan merge dari branch fitur ke branch utama (main):
         ```bash
         git checkout main
         git merge feature/new-feature
         ```

   - **Resolusi Konflik:**
     - **Apa Itu Konflik?** Konflik terjadi ketika dua branch yang digabungkan memiliki perubahan yang bertentangan pada baris yang sama.
     - **Cara Menyelesaikan Konflik:**
       - Git akan menandai konflik di file yang bermasalah. Anda harus menyelesaikan konflik ini secara manual dan kemudian melakukan commit.
       - **Contoh Resolusi Konflik:**
         ```bash
         # Edit file yang mengalami konflik
         git add <file>
         git commit -m "Resolve merge conflict"
         ```

   - **Referensi Git:**
     - [Git Official Documentation - Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
     - [Pro Git Book - Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

#### 3. **Praktikum dan Aktivitas**
   - **Praktikum Membuat Komponen dengan State dan Effect:**
     - Mahasiswa membuat komponen React yang menggunakan `useState` dan `useEffect` untuk mengelola data dinamis.
   - **Aktivitas Git:**
     - Menggunakan branch untuk fitur baru, melakukan commit, dan menggabungkan perubahan ke branch utama.
   - **Diskusi dan Tanya Jawab:**
     - Diskusikan pengalaman mahasiswa dengan manajemen state di React dan penyelesaian konflik Git yang mungkin terjadi selama praktik.

### **Referensi Tambahan:**
- **React Documentation - Using the Effect Hook:** [Effect Hook](https://react.dev/learn/effect-hook)
- **Git Documentation - Branching and Merging:** [Git Branching](https://git-scm.com/book/en/v2/Git-Branching)

Materi ini akan membantu mahasiswa memahami konsep manajemen state di React dan praktik terbaik menggunakan Git dalam proyek pengembangan aplikasi.