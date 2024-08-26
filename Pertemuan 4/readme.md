Untuk **Pertemuan 4**, kita akan fokus pada pemahaman dan penggunaan **Routing** di React menggunakan React Router dan **Pengelolaan State Global** dengan Context API atau library seperti Redux. Selain itu, kita akan melanjutkan praktik Git dalam pengembangan aplikasi React.

### **Pertemuan 4: Routing dan Pengelolaan State Global di React**

#### 1. **Pengantar Routing dengan React Router**
   - **Apa Itu React Router?**
     - **Deskripsi:** React Router adalah library untuk menangani routing dalam aplikasi React, memungkinkan navigasi antara berbagai komponen halaman tanpa me-reload seluruh halaman.
     - **Fitur Utama:**
       - Menyediakan cara untuk menangani URL dan mengarahkan ke komponen yang sesuai.
       - Mendukung navigasi dinamis, parameter URL, dan nested routes.

   - **Penggunaan Dasar React Router:**
     - **Instalasi React Router:**
       ```bash
       npm install react-router-dom
       ```
     - **Contoh Kode:**
       ```jsx
       import React from 'react';
       import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

       function Home() {
         return <h2>Home Page</h2>;
       }

       function About() {
         return <h2>About Page</h2>;
       }

       function App() {
         return (
           <Router>
             <nav>
               <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
               </ul>
             </nav>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
             </Routes>
           </Router>
         );
       }

       export default App;
       ```
     - **Referensi:**
       - [React Router Documentation](https://reactrouter.com/docs/en/v6)
       - **Buku:** "React Router: Declarative Routing for React.js" oleh Michael Chan (terbaru).

#### 2. **Pengelolaan State Global dengan Context API atau Redux**
   - **Context API:**
     - **Deskripsi:** Context API menyediakan cara untuk berbagi data di seluruh komponen tanpa harus meneruskan props secara manual.
     - **Contoh Penggunaan:**
       ```jsx
       import React, { createContext, useContext, useState } from 'react';

       const AuthContext = createContext();

       function AuthProvider({ children }) {
         const [auth, setAuth] = useState(false);

         return (
           <AuthContext.Provider value={{ auth, setAuth }}>
             {children}
           </AuthContext.Provider>
         );
       }

       function Login() {
         const { auth, setAuth } = useContext(AuthContext);

         return (
           <button onClick={() => setAuth(!auth)}>
             {auth ? 'Logout' : 'Login'}
           </button>
         );
       }

       export default function App() {
         return (
           <AuthProvider>
             <Login />
           </AuthProvider>
         );
       }
       ```
     - **Referensi:**
       - [React Official Documentation - Context](https://react.dev/learn/context)
       - **Buku:** "React Context API: Managing State in React" oleh Jason Brown.

   - **Pengelolaan State dengan Redux:**
     - **Deskripsi:** Redux adalah library untuk pengelolaan state yang sering digunakan dalam aplikasi React yang besar, dengan prinsip-prinsip state management yang terpusat.
     - **Instalasi Redux dan React-Redux:**
       ```bash
       npm install redux react-redux
       ```
     - **Contoh Kode:**
       ```jsx
       import React from 'react';
       import { createStore } from 'redux';
       import { Provider, useSelector, useDispatch } from 'react-redux';

       const initialState = { count: 0 };

       function reducer(state = initialState, action) {
         switch (action.type) {
           case 'INCREMENT':
             return { count: state.count + 1 };
           default:
             return state;
         }
       }

       const store = createStore(reducer);

       function Counter() {
         const count = useSelector((state) => state.count);
         const dispatch = useDispatch();

         return (
           <div>
             <p>Count: {count}</p>
             <button onClick={() => dispatch({ type: 'INCREMENT' })}>
               Increment
             </button>
           </div>
         );
       }

       function App() {
         return (
           <Provider store={store}>
             <Counter />
           </Provider>
         );
       }

       export default App;
       ```
     - **Referensi:**
       - [Redux Official Documentation](https://redux.js.org/)
       - **Buku:** "Redux Essentials" oleh Dan Abramov dan Andrew Clark.

#### 3. **Penggunaan Git dalam Pengembangan Aplikasi**
   - **Menangani Branch Merge Conflicts:**
     - **Mengidentifikasi dan Menyelesaikan Konflik:**
       - Git menandai konflik dalam file yang perlu diselesaikan secara manual. Gunakan alat seperti GitHub Desktop atau editor teks untuk memudahkan proses resolusi.
       - **Contoh Resolusi:**
         ```bash
         git status
         # Edit file yang mengalami konflik
         git add <file>
         git commit -m "Resolve merge conflict"
         ```

   - **Review dan Collaboration:**
     - **Code Review:**
       - Proses meninjau kode oleh anggota tim lain untuk memastikan kualitas dan fungsionalitas sebelum menggabungkan ke branch utama.
     - **Pull Request:**
       - Membuat pull request di GitHub untuk kolaborasi dan review.
     - **Referensi:**
       - [GitHub Documentation - Pull Requests](https://docs.github.com/en/pull-requests)

#### 4. **Praktikum dan Aktivitas**
   - **Praktikum Routing dengan React Router:**
     - Mahasiswa membuat aplikasi dengan beberapa halaman menggunakan React Router, termasuk routing dinamis dan nested routes.
   - **Praktikum Pengelolaan State:**
     - Mengimplementasikan Context API atau Redux dalam aplikasi untuk mengelola state global.
   - **Aktivitas Git:**
     - Menyelesaikan konflik merge, melakukan review kode, dan menggunakan pull request untuk kolaborasi.

### **Referensi Tambahan:**
- **React Router Documentation:** [React Router](https://reactrouter.com/docs/en/v6)
- **Context API Documentation:** [React Context](https://react.dev/learn/context)
- **Redux Documentation:** [Redux Official Site](https://redux.js.org/)

Materi ini dirancang untuk memperkenalkan mahasiswa pada routing di React dan pengelolaan state global, serta memberikan pengalaman praktis dengan Git dalam konteks pengembangan aplikasi.