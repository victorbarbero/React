
import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    // Desestructuramos el usuario para poder utilizar las propiedades directamente
    // Si lo dejamos como en la línea comentada, tendríamos que usar usuario.id, usuario.avatar, etc.
    // const renderItem = ( usuario: Usuario ) => {
    const renderItem = ( { id, first_name, last_name, email, avatar }: Usuario ) => {
        return (
            // Si no ponemos el key, nos saldrá un warning diciendo que cada elemento de la lista debe tenerlo.
            <tr key={ id.toString() }>
                <td>
                    <img
                        src={ avatar } 
                        alt={ first_name } 
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{ first_name.toString() } {last_name.toString() }</td>
                <td>{ email.toString() }</td>
            </tr>
        )
    }   

    return (
        <>
            <h3>Usuarios:</h3>

            <table className='table'>
                <thead>
                    <tr>
                        <td>Avatar</td>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button 
                className="btn btn-primary"
                onClick={ paginaAnterior }
            >
                Anteriores
            </button>

            &nbsp;

            <button 
                className="btn btn-primary"
                onClick={ paginaSiguiente }
            >
                Siguientes
            </button>
        </>
    )
}
