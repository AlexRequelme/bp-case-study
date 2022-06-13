import { useForm } from "react-hook-form";
import { ReactComponent as CrossIcon } from "../assets/icons/cross.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import styles from "../styles/SearchForm.module.scss";

type SearchFormProps = {
    handleSearch: any;
    handleReset: any;
};

function SearchForm({ handleSearch, handleReset }: SearchFormProps) {
    const { register, handleSubmit, watch, setValue } = useForm();
    const watchValue = watch("search");

    const onSubmit = handleSubmit((data) => {
        handleSearch(data);
    });

    const onReset = () => {
        setValue("search", "");
        handleReset();
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search" className={styles["container"]}>
                Listado de Pokemon
            </label>
            <div className={styles["search-wrapper"]}>
                <button
                    data-testid="search-icon"
                    type="submit"
                    className={`${styles["icon"]}`}
                >
                    <SearchIcon className="svg-size" />
                </button>
                <input
                    type="search"
                    placeholder="Buscar"
                    {...register("search", { required: true })}
                />
                {watchValue && (
                    <button
                        data-testid="reset-icon"
                        onClick={onReset}
                        type="button"
                        className={`${styles["cross"]}`}
                    >
                        <CrossIcon className="svg-size" />
                    </button>
                )}
            </div>
        </form>
    );
}

export default SearchForm;
