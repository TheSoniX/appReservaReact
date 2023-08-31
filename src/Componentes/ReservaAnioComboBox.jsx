// rsc
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReservaAnioComboBox = () => {

    const [anio, setAnio] = useState(0)
    const [lista, setLista] = useState([])

    // método que almacene el resultado del servicio web
    // en la variable lista (setLista) 
    const traerReservaAnio = async(anio) =>{
        // back sticks = ALT + 96 = `
        //const consulta = 
        //await fetch("https://localhost:44310/api/ReservaAPI/GetReservasAnio/"+anio)   
        const consulta = 
        await fetch(`https://localhost:44310/api/ReservaAPI/GetReservasAnio/${anio}`)             
        //
        const resultado = await consulta.json()
        //
        setLista(resultado)
    }

    useEffect( ()=>{
        traerReservaAnio(anio)
    }, [anio])

    const handlerAnio = (e) =>{
        setAnio(e.target.value)
    }

    const cantidad = lista.length

    // definir un arreglo de enteros con los valores de los años
    const lista_anios = [2020, 2021, 2022]

    return (
        <div>
            <h2>Consulta de Reservas por Año - ComboBox</h2>
            <div>
                Seleccione Año de Reserva:
                <select name='cboAnios'
                        value={anio}
                        className='form-select'
                        onChange={handlerAnio}>
                    <option value={0}>Seleccione</option>                        
                    {
                        lista_anios.map( item => {
                            return <option key={item} 
                                           value={item}>{item}</option>
                        })
                    }
                </select>
            </div>
            <hr/>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nro. Reserva</th>
                        <th>Fecha</th>
                        <th>Pago</th>
                        <th>Cliente</th>
                        <th>Usuario</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       lista.map( item => {
                        return <tr key={item.nroreservas}>
                            <td>{item.nroreservas}</td>
                            <td>{item.fecha}</td>
                            <td>{item.pago}</td>
                            <td>{item.nomcliente}</td>
                            <td>{item.nomusuario}</td>
                            <td>{item.descrip}</td>
                        </tr>
                       })     
                    }
                </tbody>
            </table>    
            <div className='alert alert-info'>
                 <p>Cantidad de Reservas: {cantidad}</p>   
            </div>
        </div>
    );
};

export default ReservaAnioComboBox;