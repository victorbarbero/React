import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {

    // usuarios sería el estado y setUsuarios sería la función para actualizar los usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
        // Llamada a la API
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if(resp.data.data.length > 0){
            // Al hacer esto, le damos el valor a usuarios
            setUsuarios( resp.data.data );
        } else {
            paginaRef.current --;
            alert('No hay más registros.')
        }

    }

    const paginaAnterior = () => {
        cargarUsuarios();
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
