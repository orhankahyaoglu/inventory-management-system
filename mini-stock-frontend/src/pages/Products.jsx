import { useEffect, useState } from 'react';
// Tek bir import satırı yeterli
import { getProducts, createProduct, deleteProduct, updateProduct } from '../api/apiService';

function Products() {
    const [products, setProducts] = useState([]);
    
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        quantity: 0,
        price: 0,
        category_id: 1 
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(formData);
            alert("Ürün başarıyla eklendi!");
            setFormData({ name: '', sku: '', quantity: 0, price: 0, category_id: 1 });
            loadProducts(); 
        } catch (error) {
            alert("Hata oluştu, verileri kontrol edin.");
        }
    }; // handleSubmit burada bitmeliydi

    const handleDelete = async (id) => {
        if (window.confirm("Bu ürünü silmek istediğine emin misin?")) {
            try {
                await deleteProduct(id);
                loadProducts(); // Listeyi tazele
            } catch (error) {
                alert("Silme işlemi başarısız oldu.");
            }
        }
    };

    const handleAddStock = async (product) => {
        try {
            const newQuantity = parseInt(product.quantity) + 1;
            await updateProduct(product.id, { ...product, quantity: newQuantity });
            loadProducts();
        } catch (error) {
            alert("Stok güncellenemedi.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>➕ Yeni Ürün Ekle</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <input type="text" name="name" placeholder="Ürün Adı" value={formData.name} onChange={handleChange} required />
                <input type="text" name="sku" placeholder="SKU (Kod)" value={formData.sku} onChange={handleChange} required />
                <input type="number" name="quantity" placeholder="Stok" value={formData.quantity} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Fiyat" value={formData.price} onChange={handleChange} required />
                <button type="submit" style={{ background: 'green', color: 'white', cursor: 'pointer', marginLeft: '10px' }}>Kaydet</button>
            </form>

            <h2>📦 Ürün Listesi</h2>
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ background: '#eee' }}>
                        <th>Ürün Adı</th>
                        <th>SKU</th>
                        <th>Stok</th>
                        <th>Fiyat</th>
                        <th>İşlemler</th> {/* Başlık eklendi */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.sku}</td>
                            <td>
                                {p.quantity} 
                                <button onClick={() => handleAddStock(p)} style={{marginLeft: '10px', cursor: 'pointer'}}>+</button>
                            </td>
                            <td>{p.price} TL</td>
                            <td>
                                <button 
                                    onClick={() => handleDelete(p.id)} 
                                    style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
                                >
                                    Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;