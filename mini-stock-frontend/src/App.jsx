import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
                {/* SOL MENÜ (SIDEBAR) */}
                <div style={{
                    width: '260px',
                    backgroundColor: '#4e73df',
                    backgroundImage: 'linear-gradient(180deg, #4e73df 10%, #224abe 100%)',
                    color: 'white',
                    padding: '20px 0',
                    position: 'fixed',
                    height: '100vh'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '1.2rem', margin: '0' }}>📦 STOK TAKİP</h2>
                        <p style={{ fontSize: '10px', opacity: '0.7' }}>v1.0 Admin Panel</p>
                    </div>
                    
                    <nav style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link to="/" style={linkStyle}>📊 Dashboard</Link>
                        <Link to="/products" style={linkStyle}>🛒 Ürün Yönetimi</Link>
                        <div style={linkStyle}>📁 Kategoriler (Yakında)</div>
                        <div style={linkStyle}>🔄 Hareketler (Yakında)</div>
                    </nav>
                </div>

                {/* SAĞ İÇERİK ALANI */}
                <div style={{ marginLeft: '260px', flex: 1, backgroundColor: '#f8f9fc' }}>
                    <header style={{ height: '60px', background: 'white', display: 'flex', alignItems: 'center', padding: '0 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', justifyContent: 'flex-end' }}>
                        <span>Hoş geldin, <strong style={{color: '#4e73df'}}>Admin</strong> 👋</span>
                    </header>
                    
                    <main style={{ padding: '20px' }}>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/products" element={<Products />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

const linkStyle = {
    padding: '15px 25px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    transition: '0.3s'
};

export default App;