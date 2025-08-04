# 🌸 Clovera – Fashion E-Commerce Website

**Clovera** adalah proyek website e-commerce fashion berbasis React.js yang dikembangkan sebagai submission portofolio pribadi. Website ini dirancang untuk menyajikan pengalaman belanja fashion yang estetis, responsif, dan fungsional, dengan menyasar pengguna wanita remaja hingga dewasa muda yang menyukai gaya streetwear, editorial, dan playful.

---

## 📝 Description

Clovera menampilkan katalog produk fashion dinamis yang terintegrasi dengan Firebase dan dirancang menggunakan pendekatan editorial-minimalist. UI-nya memanfaatkan palet warna lembut seperti Dusty Rose, Cocoa, Light Stone, Soft Blue, Soft Lime, dan Tera Cotta, yang dikonfigurasi langsung melalui Tailwind CSS untuk menghasilkan tampilan modern dan konsisten.

---

## ⚙️ Technologies Used

- React.js (Vite)
- Tailwind CSS  
- JavaScript  
- Firebase (Authentication)  
- React Router DOM  
- React Context API  
- LocalStorage  
- Netlify (Deployment)

---

## ✨ Features
- Login & Register dengan Firebase Authentication (Email/Password & Google)
- Landing Page berisi pengenalan tentang Clovera
- Shop Page dengan daftar produk fashion dari Firestore (dinamis)
- Product Filtering berdasarkan nama (A-Z), warna, kategori, harga (Low to High dan High to Low)
- Product Detail Page dengan info lengkap dan aksi ke Cart/Wishlist
- Wishlist dan Cart
- Checkout Dummy Page yang menampilkan ringkasan pesanan
- Profile Page yang memuat informasi akun pengguna
- Responsif dan mobile-friendly UI dengan desain visual yang modern

## 🚀 Setup Instructions

1. Clone repo dan install dependencies:
   ```bash
   git clone https://github.com/meepwhoosh/clovera.git
   cd clovera
   npm install
   ```

2. Siapkan Firebase:

   * Buat project di [Firebase](https://console.firebase.google.com/)
   * Aktifkan Auth (Email/Password & Google)
   * Buat koleksi `products` di Firestore
   * Tambahkan konfigurasi Firebase ke file `firebase/firebaseConfig.js`

3. Jalankan proyek:

   ```bash
   npm run dev
   ```

---

## 🤖 AI Support Explanation

Selama pengembangan, AI IBM Granite digunakan untuk membantu menyusun dokumentasi & struktur folder modular, dan mempercepat proses penulisan komponen kode. Dukungan AI digunakan sebagai co-pilot kreatif, tanpa menggantikan pengambilan keputusan teknis dan desain.

--

## 🌐 Live Deployment

Website dapat diakses lewat link berikut:

🔗 https://clovera.netlify.app
