import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token JWT a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ==================== USUARIOS ====================
export const usuariosAPI = {
  crear: (datos) => api.post('/usuarios', datos),
  listar: () => api.get('/usuarios'),
  buscar: (id) => api.get(`/usuarios/${id}`),
  actualizar: (id, datos) => api.put(`/usuarios/${id}`, datos),
  eliminar: (id) => api.delete(`/usuarios/${id}`),
  login: (email, password) => api.post('/login', { email, password }),
};

// ==================== CATEGORÍAS ====================
export const categoriasAPI = {
  crear: (datos) => api.post('/categorias', datos),
  listar: () => api.get('/categorias'),
  buscar: (nombre) => api.get(`/categorias/${nombre}`),
  actualizar: (id, datos) => api.put(`/categorias/${id}`, datos),
  eliminar: (id) => api.delete(`/categorias/${id}`),
};

// ==================== PRODUCTOS ====================
export const productosAPI = {
  crear: (datos) => api.post('/productos', datos),
  listar: () => api.get('/productos'),
  buscar: (nombre) => api.get(`/productos/${nombre}`),
  actualizar: (id, datos) => api.put(`/productos/${id}`, datos),
  eliminar: (id) => api.delete(`/productos/${id}`),
};

// ==================== CARRITOS ====================
export const carritosAPI = {
  crear: (datos) => api.post('/carritos', datos),
  listar: (params) => api.get('/carritos', { params }),
  buscar: (id) => api.get(`/carritos/${id}`),
  actualizar: (id, datos) => api.put(`/carritos/${id}`, datos),
  eliminar: (id) => api.delete(`/carritos/${id}`),
};

// ==================== CARRITO DETALLE ====================
export const carritoDetalleAPI = {
  crear: (datos) => api.post('/carrito-detalle', datos),
  listar: (params) => api.get('/carrito-detalle', { params }),
  buscar: (id) => api.get(`/carrito-detalle/${id}`),
  actualizar: (id, datos) => api.put(`/carrito-detalle/${id}`, datos),
  eliminar: (id) => api.delete(`/carrito-detalle/${id}`),
};

export default api;