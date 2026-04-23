import './Usuario.css';
import { useEffect, useState } from 'react';
import { usuariosAPI } from './Services/api';
import RegistrarUsuarios from './RegistrarUsuarios';

function Usuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await usuariosAPI.listar();
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
    setUsuarios((prev) => {
      const existe = prev.some((u) => u.id === usuarioActualizado.id);
      if (existe) {
        return prev.map((u) => (u.id === usuarioActualizado.id ? usuarioActualizado : u));
      }
      return [...prev, usuarioActualizado];
    });
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
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.email}</td>
              <td>{usuario.rol}</td>
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