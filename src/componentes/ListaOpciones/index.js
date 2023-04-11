import './ListaOpciones.css'

const ListaDeOpciones = (props) => {
    //* Método map - > arreglo.map( (equipo, indez) => {
    //                  return <option></option>
    //})
    // Al conjunto de reglas en la etiqueta select equipos.map 
    // se puede transformar en una sóla línea.
    //<select>
    //        {equipos.map( (equipo, index) => {
    //            return <option key={index}>{equipo}</option>
    //        } ) }
    //    </select>*/

    
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaDeOpciones