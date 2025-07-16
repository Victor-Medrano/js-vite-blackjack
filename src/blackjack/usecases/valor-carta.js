

/**
 * Funcion para retornar el valor de la carta
 * @param { String } carta es un string
 * @returns { Number } retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    if ( !carta || carta === 0) 
        throw new Error ('No hay cartas para asignar un valor')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}


