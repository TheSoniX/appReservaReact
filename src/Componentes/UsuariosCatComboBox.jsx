//
import React, { useEffect, useState } from 'react';

const UsuariosCatComboBox = () => {

    const [categorias, setCategorias] = useState([])
    const [codcat, setCodCat] = useState("E00")
    const [listaUsuarios, setListaUsuarios] = useState([])

    // metodo que nos devuelve todas las especialidades
    const traerCategorias = async() =>{

        const consulta = 
             await fetch("https://localhost:44310/api/ReservaAPI/GetCategorias")
        //
        const resultado = await consulta.json()
        //
        setCategorias(resultado)
    }

    useEffect( ()=>{
        traerCategorias()
    }, [])

    // metodo que nos devuelve a los medicos de acuerdo a un codigo de especialidad
    const traerUsuariosCat = async(codcat) =>{

        const consulta = 
             await fetch(`https://localhost:44310/api/ReservaAPI/GetUsuariosCat/${codcat}`)
        //
        const resultado = await consulta.json()
        //
        setListaUsuarios(resultado)
    }

    useEffect( ()=>{
        traerUsuariosCat(codcat)
    }, [codcat])

    const handlerCodCat = (e) =>{
        setCodCat(e.target.value)
    }

    const cantidad = listaUsuarios.length

    return (
        <div>
            <h2>Consulta de Usuarios por Categoria - ComboBox</h2>
            <div>
                Categoria:
                <select name='cboCat' value={codcat} className='form-select'
                        onChange={handlerCodCat}>
                <option value={"E00"}>Seleccione</option>
                {
                    categorias.map( item =>{
                        return <option key={item.codcat} value={item.codcat}>
                            {item.nomcat}
                        </option>
                    })
                }
                </select>
            </div>
            <hr/>
            <table className='table table-striped'>
            <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Año de ingreso</th>
                        <th>Categoria</th>
                        <th>Distrito</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       listaUsuarios.map( item => {
                        return <tr key={item.codusuario}>
                            <td>{item.codusuario}</td>
                            <td>{item.nomusuario}</td>
                            <td>{item.anio_ingreso}</td>
                            <td>{item.nomcat}</td>
                            <td>{item.nomdis}</td>
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

export default UsuariosCatComboBox;