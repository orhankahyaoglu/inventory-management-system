import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Ürünler çekilemedi:", error);
        return [];
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData);
        return response.data;
    } catch (error) {
        console.error("Ürün eklenirken hata oluştu:", error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Ürün silinemedi:", error);
        throw error;
    }
};

export const updateProduct = async (id, productData) => {
    try {
        const response = await axios.put(`${API_URL}/products/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error("Ürün güncellenemedi:", error);
        throw error;
    }
};