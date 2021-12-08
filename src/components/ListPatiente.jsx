
import { Paciente } from './Paciente'

export const ListPatiente = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll" >
            <h2 className="font-black text-3xl text-center" >Listado PacienteS</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus Paciente y {''}
                <span className="text-indigo-600 font-bold ">Citas</span>
            </p>

            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}
