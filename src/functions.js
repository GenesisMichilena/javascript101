/**
 * @fileoverview Funciones de utilidad para manipular el DOM.
 * @author Profesor
 */

/**
 * Establece el contenido de texto de un elemento HTML identificado por su ID.
 *
 * @param {string} id - El ID del elemento HTML al que se desea establecer el texto.
 * @param {string} text - El texto que se desea mostrar dentro del elemento.
 * @returns {void}
 * @example
 * // Supongamos que existe un elemento <h1 id="main-title"></h1>
 * setTitle("main-title", "Bienvenidos al sitio web");
 */
const setTitle = (id, text) => {

    // 1. Obtener la referencia al elemento por su ID.
    let refTitle = document.getElementById(id);
    
    // 2. Verificar si el elemento existe antes de intentar manipularlo.
    if (refTitle) {
        // 3. Usar textContent para insertar texto de forma segura (evita XSS).
        refTitle.textContent = text;
    } else {
        // 4. Advertir en la consola si el elemento no se encuentra.
        console.warn(`No se encontró un elemento con el ID "${id}".`);
    }

}

/**
 * Agrega una nueva fila a una tabla HTML con los datos proporcionados.
 *
 * @param {Object} data - Un objeto que contiene los datos del framework.
 * @param {string} idBodyTable - El ID del cuerpo de la tabla donde se agregará la fila.
 * @returns {void}
 * @example
 * // Supongamos que tenemos un objeto con los datos del framework
 * const frameworkData = { ... };
 * addRow(frameworkData, "data-frameworks");
 */
const addRow = (data, idBodyTable) => {

    // 1. Validación de datos: verificar que todas las propiedades existan y no estén vacías.
    // Se usa el encadenamiento opcional (?.) para evitar errores si 'data' no es un objeto.
    if (
        !data?.frameworkName?.trim() ||
        !data?.releaseDate?.trim() ||
        !data?.usersName?.trim() ||
        !data?.popularityPercentage?.trim()
    ) {
        console.warn("El objeto 'data' no tiene las propiedades esperadas o están vacías.");
        return;
    }

    // 2. Creación de la plantilla HTML para la fila.
    // ¡Usar template literals es una excelente práctica!
    let template = `
    <tr class="border-b border-blue-gray-100 bg-blue-gray-50">
        <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white py-2">${data.frameworkName}</td>
        <td>${data.releaseDate}</td>
        <td>${data.usersName}</td>
        <td>${data.popularityPercentage}</td>
    </tr>`;

    // 3. Obtener la referencia al cuerpo de la tabla.
    let refBodyTable = document.getElementById(idBodyTable);
    
    // 4. Insertar la fila si el cuerpo de la tabla existe.
    if (refBodyTable) {
        // 'beforeend' inserta el HTML como el último hijo dentro del elemento. ¡Bien hecho!
        refBodyTable.insertAdjacentHTML('beforeend', template);
    } else {
        console.warn(`No se encontró un elemento con el ID "${idBodyTable}".`);
    }
}

// 5. Exportar las funciones para que puedan ser utilizadas en otros módulos.
export { setTitle, addRow };
