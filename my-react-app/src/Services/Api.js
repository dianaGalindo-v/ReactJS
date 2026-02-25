import axios from 'axios';

// Usar sólo el origin (dominio) de la variable de entorno.
// Así, si el usuario pone una ruta como https://fakestoreapi.com/carts
// el origin será https://fakestoreapi.com y api.get('/users') seguirá
// apuntando a https://fakestoreapi.com/users.
const rawBase = import.meta.env.VITE_FAKESTORE_API_KEY || '';
let base = '';
try {
    if (rawBase) {
        const parsed = new URL(rawBase);
        base = parsed.origin;
    }
} catch (e) {
    // Si rawBase no es una URL válida, intentar limpiarlo quitando cualquier path.
    if (rawBase.includes('://')) {
        // formato extraño, quitar todo después del dominio
        const parts = rawBase.split('/');
        base = parts[0] + '//' + parts[2];
    } else {
        base = rawBase;
    }
}

if (!base) base = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: base,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;