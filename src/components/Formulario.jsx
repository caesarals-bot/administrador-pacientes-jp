import { useState, useEffect } from 'react';
import { Error } from './Error';

export const Formulario = ({ setPacientes, pacientes }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([nombre, propietario, email, fecha, sintomas ].includes('')){
            console.log('Hay un campo vacio')
            setError(true)
            return;
        }

        setError(false)
        //objeto pacientes
        const objetoPacientes = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }
        setPacientes([    
            ...pacientes,
            objetoPacientes
        ])

        //Reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
           <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className=" text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold" >Administralos</span>
            </p>

            <form
              className="bg-white shadow-md rounded-lg py-10 px-5 mx-5"
              onSubmit={handleSubmit}>
                {error && (
                    <Error 
                        mensaje='Todos los Campos Son Obligatorios'
                    />
                    )
                }
                <div className="mb-5">
                    <label 
                        className="block text-gray-700 uppercase font-bold" 
                        htmlFor="mascota"
                    >Nombre Mascota</label>

                    <input
                        id="mascota" 
                        type="text"
                        placeholder="Nombre Mascota"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre( e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        className="block text-gray-700 uppercase font-bold" 
                        htmlFor="propietario"
                    >Nombre Propietario</label>

                    <input
                        id="propietario" 
                        type="text"
                        placeholder="Nombre Proietario"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario( e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        className="block text-gray-700 uppercase font-bold" 
                        htmlFor="email"
                    >Email</label>

                    <input
                        id="email" 
                        type="email"
                        placeholder="Email Propietario"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail( e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        className="block text-gray-700 uppercase font-bold" 
                        htmlFor="alta"
                    >Alta</label>

                    <input
                        id="alta" 
                        type="date"
                        className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha( e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                        className="block text-gray-700 uppercase font-bold" 
                        htmlFor="sintomas"
                    >Síntomas</label>

                    <textarea
                      id="sintomas" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={sintomas}
                      onChange={(e) => setSintomas( e.target.value)}
                      placeholder="Describe Los Síntomas"
                      />

                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all "
                    value="Agregar Paciente"
                />
            </form>

        </div>
    )
}
