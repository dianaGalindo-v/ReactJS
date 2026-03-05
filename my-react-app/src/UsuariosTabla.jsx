import './Usuario.css';
import { useEffect, useState } from 'react';
import api from './Services/Api';
import RegistrarUsuarios from './RegistrarUsuarios';

function Usuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get('/users');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios', error);
      } finally {
        setCargando(false);
      }
    };
    obtenerUsuarios();
  }, []);

  const handleActualizacion = (usuarioActualizado) => {
    // 🔄 Actualiza la tabla inmediatamente
    setUsuarios((prev) =>
      prev.map((u) => (u.id === usuarioActualizado.id ? usuarioActualizado : u))
    );
  };

  if (cargando) return <p>Cargando usuarios.......</p>;

  return (
    <div className="usuarios">
      <RegistrarUsuarios
        usuarioEditado={usuarioSeleccionado}
        limpiarSeleccion={() => setUsuarioSeleccionado(null)}
        onActualizacionExitosa={handleActualizacion}
      />

      <h1>Usuarios Registrados</h1>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Username</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.name.firstname}</td>
              <td>{usuario.name.lastname}</td>
              <td>{usuario.address.street}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>
                <button
                  className="editar"
                  onClick={() => setUsuarioSeleccionado(usuario)}
                >
                  Editar
                </button>
              </td>
              <td>
                <button className="eliminar">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuario;