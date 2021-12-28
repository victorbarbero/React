import { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

// Lo que nos dice si está autenticado es el token
// Si tiene algo, está autenticado. Si no tiene nada, no está autenticado.
const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: string;
    nombre: string
}

// El AuthAction puede ser de logout o de login
type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }

        case 'login':
            // Hacemos esto para no tener que usar abajo nombre: action.payload.nombre y action.payload.username
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username
            }
    
        default:
            return state;
    }

}

export const Login = () => {
    
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'})
        }, 1500);
    }, []);

    // Función para hacer login
    const login = () => {
        dispatch({
             type: 'login',
             payload: {
                 nombre: 'Víctor',
                 username: 'barbercheff'
             }
        })
    }

    // Función para hacer logout
    const logout = () => {
        dispatch({type: 'logout'})
    }
    
    if( validando ) {
        return (
           <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
           </> 
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                    // Si el token existe
                    ? <div className="alert alert-success">Autenticado como: { nombre } </div>
                    // Si el token no existe
                    : <div className="alert alert-danger">No autenticado</div>
            }     

            {
                ( token )
                ? (
                    <button 
                        className="btn btn-danger"
                        // Aquí llamamos a la función de logout que hemos definido más arriba
                        onClick={ logout }    
                    >
                        Logout
                    </button>
                )
                : (
                    <button 
                        className="btn btn-primary"
                        // Aquí llamamos a la función de login que hemos definido más arriba
                        onClick={ login }
                    >
                        Login
                    </button>
                )
            }



            
        </>
    )
}
