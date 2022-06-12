import PokemonTable from "./PokemonTable";
import styles from "../styles/HomeLayout.module.scss";
import PokemonForm from "./PokemonForm";
import { ReactComponent as AddIcon } from "../assets/icons/plus.svg";

function HomeLayout() {
    return (
        <div className={styles["container"]}>
            <div className={styles["head-section"]}>
                <label>
                    Listado de Pokemon
                    <input placeholder="Buscar" />
                </label>

                <button type="button" className="button-base button-primary">
                    <AddIcon className="svg-size" />
                    Nuevo
                </button>
            </div>
            <PokemonTable />
            <PokemonForm />
        </div>
    );
}

export default HomeLayout;
