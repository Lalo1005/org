import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: 'Front End',
    foto: 'https://github.com/harlandlohora.png',
    nombre: 'Harland Lohora',
    puesto: 'Instructor',
    fav:true
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/genesysaluralatam.png',
    nombre: 'Genesys Rondón',
    puesto: 'Desarrolladora de software e Instructora',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'UX y Diseño',
    foto: 'https://github.com/JeanmarieAluraLatam.png',
    nombre: 'Jeanmarie',
    puesto: 'Instructora de Alura Latam',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'Data Science',
    foto: 'https://github.com/christianpva.png',
    nombre: 'Christian',
    puesto: 'Head de Alura e Instructor',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'Móvil',
    foto: 'https://github.com/JoseDarioGonzalezCha.png',
    nombre: 'José Gonzalez',
    puesto: 'Dev Fullstack',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/JoseDarioGonzalezCha.png',
    nombre: 'José Gonzalez',
    puesto: 'Dev Fullstack',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'Innovación y Gestión',
    foto: 'https://github.com/lalo1005.png',
    nombre: 'Eduardo Jarama',
    puesto: 'Lic. Administración e Instructor',
    fav:true
  }])

  const [equipos, actualizarEquipos] = useState([
    { id: uuid(), titulo:"Programación", colorPrimario:"#57C278", colorSecundario:"#D9F7E9" },
    { id: uuid(),titulo:"Front End", colorPrimario:"#82CFFA", colorSecundario:"#E8F8FF" },
    { id: uuid(),titulo: "Devops", colorPrimario:"#E06B69", colorSecundario:"#FDE7E8" },
    { id: uuid(),titulo: "Data Science", colorPrimario:"#A6D157", colorSecundario:"#F0F8E2" },
    { id: uuid(),titulo: "UX y Diseño", colorPrimario:"#DB6EBF", colorSecundario:"#FAE9F5" },
    { id: uuid(),titulo: "Móvil", colorPrimario:"#FFBA05", colorSecundario:"#FFF5D9" },
    { titulo:"Innovación y Gestión", colorPrimario:"#FF8A29", colorSecundario:"#FFEEDF" }
  ])
  
  //Ternario - - > condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator // ... cuando veas los 3 puntos seguidos, la instrucción 
    // es que va ha hacer una copia de los valores que existen actualmente.
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipos
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id) {
        equipo.colorPrimario = color
    }
    return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Lista de equipos

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }
   
  //Like
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/*{mostrarFormulario === true ? <Formulario /> : <div></div>}*/}
      {/*{mostrarFormulario ? <Formulario /> : <></>}*/}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
