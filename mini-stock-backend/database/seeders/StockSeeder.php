<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Önce Kategoriyi Oluştur
        $elektronik = Category::create([
            'name' => 'Elektronik',
            'description' => 'Bilgisayar ve yan ürünleri'
        ]);

        // 2. Bu Kategoriye Bağlı Ürünleri Oluştur
        Product::create([
            'category_id' => $elektronik->id,
            'name' => 'Logitech Mouse',
            'sku' => 'LOG-001',
            'quantity' => 50,
            'price' => 750.00
        ]);

        Product::create([
            'category_id' => $elektronik->id,
            'name' => 'Asus Monitör',
            'sku' => 'ASUS-002',
            'quantity' => 15,
            'price' => 4500.00
        ]);
    }
}