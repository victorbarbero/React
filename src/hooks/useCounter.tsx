import { useState } from 'react';

// El parámetro inicial es opcional, si no nos pasan nada, se toma el valor por defecto (10)
export const useCounter = (inicial: number = 10 ) => {
    
    const [valor, setValor] = useState(inicial);

    const acumular = ( numero: number) => {
        setValor( valor + numero);
    }

    return {
       valor,
       acumular 
    }
}
