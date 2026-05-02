# 📦 Inventory Management System (Stok Takip Sistemi)

[English](#english) | [Turkish](#turkish)

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

> **Note / Not:** Ensure **XAMPP** (Apache & MySQL) is running before starting the servers---
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

> **Note / Not:** Ensure **XAMPP** (Apache & MySQL) is running before starting the servers. / Sunucuları başlatmadan önce **XAMPP** (Apache & MySQL) modüllerinin çalıştığından emin olun.
---






