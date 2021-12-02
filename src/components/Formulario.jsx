

export const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
           <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className=" text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold" >Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5" >
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