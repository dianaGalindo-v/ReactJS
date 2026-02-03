import ContenedorTarjeta from "./ContenedorTarjeta";
import Encabezado from "./Encabezado";

function App(){
  return (
    <div>
      <Encabezado />
      <ContenedorTarjeta />
      <h1>5A EVND</h1>
      <h2>Profesor:</h2>
      <h3>M.T.I. Ricardo Luna Santos</h3>
      <h3>Alumnos</h3>
      <h3>Diego</h3>
      <h3>Diana</h3>
      <h3>Moni</h3>
      <h3>Pao</h3>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </div>
  );
}


function UserComponent(){
  const nombre = 'Diana';
  const apellidos = 'Galindo Vergara';
  const nombrecompleto = <h2>El nombre es: {nombre} y sus apellidos {apellidos}</h2>;
  return <h1>User Component {nombrecompleto}</h1>
}


function ProfileComponent(){
  const users =[
    { id: 1, name: 'Diego', role: 'Wep Developer'},
    { id: 2, name: 'Andrea', role: 'Wep Designer'},
    { id: 3, name: 'Paola', role: 'Team Leader'}
  ]
  return (
    <>
    <p>Lista de usuarios del sistema</p>
    <ul>
      {
      users.map(function(user,index){
        return (
          <li key={index}>{user.name} es un {user.role}</li>
        )
      })
    }
    </ul>
  </>
  );
}

function FeedComponent(){
  const materiales =[
    {id: 1, name: 'Cemento', role: 'Pegamento'},
    {id: 2, name: 'Arena', role: 'Ingrediente'},
    {id: 3, name: 'Alambre', role: 'Sujetar'},
    {id: 4, name: 'Clavos', role: 'Asegurar'},
    {id: 5, name: 'Martillo', role: 'Clavar'}
  ]
  return (
    <>
    <p>Lista de materiales</p>
    <ul>
      {
      materiales.map(function(materiales,index){
        return (
          <li key={index}>{materiales.name} es un {materiales.role}</li>
        )
      })
    }
    </ul>
    </>
  );
}




export default App
