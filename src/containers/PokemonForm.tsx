import styles from "../styles/PokemonForm.module.scss";
import { ReactComponent as SaveIcon } from "../assets/icons/save.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/cross.svg";

function PokemonForm() {
    return (
        <div className={styles["container"]}>
            <span className={styles["container-title"]}>Nuevo Pokemon</span>
            <div className={styles["section-wrapper"]}>
                <div className={styles["section-align"]}>
                    <label>
                        Nombre:
                        <input />
                    </label>
                    <label>
                        Imagen:
                        <input />
                    </label>
                </div>
                <div className={styles["section-align"]}>
                    <label>
                        Ataque:
                        <input
                            className="slider"
                            type="range"
                            min="1"
                            max="100"
                            defaultValue="50"
                        />
                    </label>
                    <label>
                        Defensa:
                        <input
                            className="slider"
                            type="range"
                            min="1"
                            max="100"
                            defaultValue="50"
                        />
                    </label>
                </div>
            </div>
            <div className={styles["button-container"]}>
                <button type="submit" className="button-base button-primary">
                    <SaveIcon className="svg-size" />
                    Guardar
                </button>
                <button type="button" className="button-base button-secondary">
                    <DeleteIcon className="svg-size" />
                    Cancelar
                </button>
            </div>
        </div>
    );
}

export default PokemonForm;
