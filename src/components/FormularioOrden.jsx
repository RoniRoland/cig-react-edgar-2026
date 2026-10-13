import { useState } from "react";
import Campo from "./Campo.jsx";
import { DEPARTAMENTOS, CATEGORIAS } from "../data/catalogos.js";
import "./FormularioOrden.css";

// Valores iniciales. Fuera del componente porque se reutilizan para limpiar.
// Todos son texto: un input siempre entrega texto, aunque sea type="number".
const VACIO = {
    cliente: "", nit: "", departamento: "", categoria: "",
    tecnico: "", fecha: "", horas: "", monto: "",
};

// Devuelve un objeto con un mensaje por cada campo invalido.
function validar(datos) {
    const errores = {};
    if (datos.cliente.trim() === "") errores.cliente = "Cliente obligatorio.";
    // COMPLETAR: nit, departamento, categoria, tecnico, fecha, horas, monto
    return errores;
}

function FormularioOrden({ onAgregar }) {
    const [datos, setDatos] = useState(VACIO);
    const [errores, setErrores] = useState({});

    function manejarCambio(evento) {
        // COMPLETAR: un solo manejador para todos los campos, usando el atributo name
    }

    function manejarEnvio(evento) {
        // COMPLETAR: 1. evitar la recarga  2. validar y guardar errores
        //            3. si hay errores, salir  4. entregar la orden con numeros
        //            5. limpiar el formulario
    }

    return (
        <form className="formulario" onSubmit={manejarEnvio} noValidate>
            <Campo etiqueta="Cliente" error={errores.cliente}>
                <input className="campo__control" name="cliente"
                    value={datos.cliente} onChange={manejarCambio} />
            </Campo>

            {/* COMPLETAR: NIT, Departamento, Categoria, Tecnico, Fecha, Horas, Monto (Q) */}

            <div className="formulario__acciones">
                <button className="boton" type="submit">Registrar orden</button>
            </div>
        </form>
    );
}

export default FormularioOrden;
