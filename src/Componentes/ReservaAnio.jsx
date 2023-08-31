//rsc
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReservaAnio = () => {

    const [anio, setAnio] = useState(0)
    const [lista, setLista] = useState([])

    //metodo que almacene el resultado del servicio we en la variable lista(setLista)
    const traerReservaAnio = async(anio) => {
        // back sticks = ALT + 96 = `
        //const consulta = 
        //await fetch("https://localhost:44310/api/ReservaAPI/GetReservasAnio/2022/"+anio)
        const consulta = await fetch(`https://localhost:44310/api/ReservaAPI/GetReservasAnio/${anio}`)
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

    return (
        <div>
            <h2>Consultas de Reservas por año</h2>
            <div>
                Año de la reserva a consultar: <input type='text'
                                                      name='anio'
                                                      value={anio}
                                                      className='form-control-sm'
                                                      onChange={handlerAnio} />

            </div>
            <hr/>
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <td>Fecha</td>
                    <td>Pago</td>
                    <td>Cliente</td>
                    <td>Usuario</td>
                    <td>Descripcion</td>
                    </tr>                    
                </thead>
                <tbody>
                    {
                        lista.map(item => {
                            return <tr key ={item.nroreservas}>
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

export default ReservaAnio;