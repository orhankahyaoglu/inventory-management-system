import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [stats, setStats] = useState({
        total_products: 0, total_categories: 0, total_stock: 0, critical_stock: 0
    });

    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/api/stats')
            .then(res => setStats(res.data))
            .catch(err => console.log("Veri çekilemedi"));
    }, []);


    const styles = {
        container: { padding: '30px', backgroundColor: '#f8f9fc', minHeight: '100vh' },
        cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
        card: (color) => ({
            background: '#fff',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            borderLeft: `5px solid ${color}`,
            transition: 'transform 0.2s'
        }),
        label: { fontSize: '12px', fontWeight: 'bold', color: '#5a5c69', textTransform: 'uppercase', marginBottom: '10px' },
        value: { fontSize: '28px', fontWeight: '700', color: '#3a3b45', margin: 0 },
        alert: {
            marginTop: '30px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: stats.critical_stock > 0 ? '#fff3cd' : '#d4edda',
            color: stats.critical_stock > 0 ? '#856404' : '#155724',
            border: '1px solid',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={{ color: '#3a3b45', marginBottom: '25px' }}>📈 Genel Bakış</h2>
            
            <div style={styles.cardGrid}>
                {/* Toplam Ürün */}
                <div style={styles.card('#4e73df')}>
                    <div style={styles.label}>Toplam Ürün Çeşidi</div>
                    <p style={styles.value}>{stats.total_products}</p>
                </div>

                {/* Toplam Kategori */}
                <div style={styles.card('#1cc88a')}>
                    <div style={styles.label}>Aktif Kategoriler</div>
                    <p style={styles.value}>{stats.total_categories}</p>
                </div>

                {/* Toplam Stok */}
                <div style={styles.card('#36b9cc')}>
                    <div style={styles.label}>Depodaki Toplam Adet</div>
                    <p style={styles.value}>{stats.total_stock}</p>
                </div>

                {/* Kritik Stok */}
                <div style={styles.card('#e74a3b')}>
                    <div style={styles.label}>Kritik Stok Uyarıları</div>
                    <p style={styles.value}>{stats.critical_stock}</p>
                </div>
            </div>

            {/* Durum Bildirimi */}
            <div style={styles.alert}>
                <span>{stats.critical_stock > 0 ? '⚠️ Dikkat:' : '✅ Durum:'}</span>
                <span>
                    {stats.critical_stock > 0 
                        ? `${stats.critical_stock} adet ürünün stoğu kritik seviyenin (10 adet) altında!` 
                        : 'Sistemdeki tüm ürünlerin stok seviyeleri ideal durumda.'}
                </span>
            </div>
        </div>
    );
}

export default Dashboard;