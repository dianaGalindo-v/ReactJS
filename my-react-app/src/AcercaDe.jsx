import { useCallback } from "react"
import './AcercaDe.css';

function AcercaDe() {
    return (
        <div className="vista">
            <h2>Acerca de Maison Bag</h2>
            <p>
                Maison Bag nace con la idea de crear bolsos que combinen elegancia,
                minimalismo y las últimas tendencias de la moda.
                Nuestra marca se inspira en un estilo limpio y sofisticado,
                pensado para acompañar cualquier ocasión.
            </p>
            <p>
                Cada diseño está cuidadosamente planeado para personas que buscan
                estilo sin exceso, priorizando la funcionalidad, la comodidad y
                la estética. Creemos que un bolso no solo es un accesorio,
                sino una extensión de la personalidad.
            </p>
            <p>
                En Maison Bag trabajamos con una paleta de colores neutros,
                materiales seleccionados y detalles sutiles que hacen de cada
                pieza un producto atemporal. Nuestro objetivo es ofrecer bolsos
                versátiles que se adapten tanto al día a día como a momentos especiales.
            </p>
            <p className="frase">
                Maison Bag: simplicidad, elegancia y estilo en cada detalle.
            </p>
        </div>
    );
}

export default AcercaDe;