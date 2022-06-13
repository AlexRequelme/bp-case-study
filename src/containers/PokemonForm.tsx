import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as DeleteIcon } from "../assets/icons/cross.svg";
import { ReactComponent as SaveIcon } from "../assets/icons/save.svg";
import styles from "../styles/PokemonForm.module.scss";
import { Pokemon } from "../types/pokemon";

type PokemonFormProps = {
    pokemon: Pokemon | null;
    handleClose: any;
    handleSave: any;
};

function PokemonForm({ pokemon, handleClose, handleSave }: PokemonFormProps) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid },
        reset,
    } = useForm({ mode: "onChange" });
    const attackValue = watch("attack");
    const defenseValue = watch("defense");

    useEffect(() => {
        reset({
            name: pokemon?.name || "",
            image: pokemon?.image || "",
            attack: pokemon?.attack || "50",
            defense: pokemon?.defense || "50",
        });
    }, [pokemon, reset]);

    const onSubmit = handleSubmit((data) => {
        handleSave(Boolean(pokemon), data);
    });

    return (
        <form
            autoComplete="off"
            onSubmit={onSubmit}
            className={styles["container"]}
        >
            <div className={styles["section-wrapper"]}>
                <div className={styles["section-align"]}>
                    <label>
                        Nombre:
                        <input {...register("name", { required: true })} />
                    </label>
                    <label>
                        Imagen:
                        <input {...register("image", { required: true })} />
                    </label>
                </div>
                <div className={styles["section-align"]}>
                    <label className={styles["range-label"]}>
                        Ataque:
                        <input
                            {...register("attack", { required: true })}
                            className="slider"
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="50"
                        />
                        <span>{attackValue}</span>
                    </label>
                    <label className={styles["range-label"]}>
                        Defensa:
                        <input
                            {...register("defense", { required: true })}
                            className="slider"
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="50"
                        />
                        <span>{defenseValue}</span>
                    </label>
                </div>
            </div>
            <div className={styles["button-container"]}>
                <button
                    onClick={handleSave}
                    type="submit"
                    className="button-base button-primary"
                    disabled={!isValid}
                >
                    <SaveIcon className="svg-size" />
                    Guardar
                </button>
                <button
                    onClick={handleClose}
                    type="button"
                    className="button-base button-secondary"
                >
                    <DeleteIcon className="svg-size" />
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default PokemonForm;
