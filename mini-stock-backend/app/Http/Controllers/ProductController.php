<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::all());
    }

    public function store(Request $request)
    {
        // React'tan gelen veriyi kaydeder
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }
    
    public function update(Request $request, $id)
    {
    $product = Product::findOrFail($id);
    $product->update($request->all());
    return response()->json($product);
    }

    public function destroy($id)
    {
    $product = Product::findOrFail($id);
    $product->delete();
    return response()->json(['message' => 'Ürün başarıyla silindi']);
    }
    public function getStats() {
    return response()->json([
        'total_products' => \App\Models\Product::count(),
        'total_categories' => \App\Models\Category::count(),
        'total_stock' => \App\Models\Product::sum('quantity'),
        'critical_stock' => \App\Models\Product::where('quantity', '<', 10)->count(),
    ]);
    }
}