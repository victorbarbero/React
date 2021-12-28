

export const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: string[] = ['Volar', 'Super fuerza', 'Velocidad'];
    poderes.push('Ver a través de las paredes');
    
    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }, { estaActivo ? 'activo' : 'no activo' }
            <br/>
            { poderes.join(', ') }
        </>
    )
}
