import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import styles from "../styles/SearchForm.module.scss";

function SearchForm() {
    return (
        <label className={styles["container"]}>
            Listado de Pokemon
            <div className={styles["search-wrapper"]}>
                <SearchIcon className={`svg-size ${styles["icon"]}`} />
                <input placeholder="Buscar" />
            </div>
        </label>
    );
}

export default SearchForm;
