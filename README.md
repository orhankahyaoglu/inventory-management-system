# 📦 Inventory Management System (Stok Takip Sistemi)

[English](#english) | [Turkish](#turkish)

---

<a name="english"></a>
## 🌍 English

### 🚀 Overview
This is a modern **Full-Stack** Inventory Management System built with **Laravel 10** and **React.js (Vite)**. It provides a seamless experience for tracking products, categories, and stock movements with a focus on security and real-time statistics.

### ✨ Key Features
*   **Dynamic Dashboard:** Real-time stats including total products, stock levels, and **Critical Stock Alerts**.
*   **Product Management (CRUD):** Full ability to Create, Read, Update, and Delete products.
*   **Category System:** Logical grouping of products for better organization.
*   **Secure Authentication:** Powered by **Laravel Sanctum** for token-based API security.
*   **Automated Tracking:** Stock levels update automatically based on movements.

### 🛠 Tech Stack
*   **Backend:** Laravel 10 (PHP), Sanctum (Auth), Eloquent ORM.
*   **Frontend:** React.js, Vite, Axios (API Client), Modern CSS.
*   **Database:** MySQL (via XAMPP).

---

<a name="turkish"></a>
## 🇹🇷 Turkish

### 🚀 Genel Bakış
Bu proje, **Laravel 10** ve **React.js (Vite)** kullanılarak geliştirilmiş modern bir **Full-Stack** Stok Takip Sistemi'dir. Güvenlik ve anlık istatistiklere odaklanarak ürünlerin, kategorilerin ve stok hareketlerininkolayca yönetilmesini sağlar.

### ✨ Temel Özellikler
*   **Dinamik Dashboard:** Toplam ürün sayısı, stok seviyeleri ve **Kritik Stok Uyarıları**'nın anlık izlendiği gösterge paneli.
*   **Ürün Yönetimi (CRUD):** Ürün ekleme, listeleme, güncelleme ve silme işlemlerinin tamamı.
*   **Kategori Sistemi:** Ürünlerin daha iyi organize edilmesi için mantıksal gruplandırma.
*   **Güvenli Kimlik Doğrulama:** Token tabanlı API güvenliği için **Laravel Sanctum** entegrasyonu.
*   **Otomatik Takip:** Hareketlere göre dinamik olarak güncellenen stok seviyeleri.

### 🛠 Kullanılan Teknolojiler
*   **Backend:** Laravel 10 (PHP), Sanctum (Güvenlik), Eloquent ORM.
*   **Frontend:** React.js, Vite, Axios (API İletişimi), Modern CSS.
*   **Veritabanı:** MySQL (XAMPP).

---

## 📂 Project Structure / Proje Yapısı

*   `app/Http/Controllers/ProductController.php`: API Logic & Stats / API Mantığı ve İstatistikler.
*   `src/pages/Dashboard.jsx`: Dashboard UI / Dashboard Arayüzü.
*   `src/api/apiService.js`: API Bridge / Frontend-Backend Köprüsü.

## ⚙️ Setup / Kurulum

1.  **Backend:**
    ```bash
    composer install
    php artisan migrate --seed
    php artisan serve
    ```
2.  **Frontend:**
    ```bash
    npm install
    npm run dev
    ```

> **Note / Not:** Ensure **XAMPP** (Apache & MySQL) is running before starting the serversHarika bir fikir! 
---

<img width="1918" height="1018" alt="Ekran görüntüsü 2026-05-02 190647" src="https://github.com/user-attachments/assets/913118ae-3700-48f4-b7b8-52c69aefb286" />

<img width="1919" height="1018" alt="Ekran görüntüsü 2026-05-02 184932" src="https://github.com/user-attachments/assets/ffd40b54-ad11-4db6-89ca-d289d95c8080" />

<img width="1919" height="1009" alt="Ekran görüntüsü 2026-05-02 185020" src="https://github.com/user-attachments/assets/3d0de624-133b-4643-a5d3-8c0310607c3a" />


<img width="1919" height="1015" alt="Ekran görüntüsü 2026-05-02 184946" src="https://github.com/user-attachments/assets/e0a3f16f-851c-48d8-80e8-568f93d94e20" />
