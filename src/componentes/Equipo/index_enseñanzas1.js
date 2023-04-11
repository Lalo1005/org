import "./Equipo.css"

/*Otra forma de usar el style es
  const obj = {
  backgroundColor:backgroundColor: props.datos.colorSecundario
}
y para llamarlos ponemos sytle={obj}
*/
//*Destructuración

const Equipo = (props) => {
    return <section className="equipo" style={{backgroundColor: props.datos.colorSecundario}}>
      <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo