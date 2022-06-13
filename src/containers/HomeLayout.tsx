import { useEffect, useState } from "react";
import API from "../api";
import { ReactComponent as AddIcon } from "../assets/icons/plus.svg";
import ConfirmationMsg from "../components/ConfirmationMsg";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import SearchForm from "../components/SearchForm";
import styles from "../styles/HomeLayout.module.scss";
import { Pokemon } from "../types/pokemon";
import PokemonForm from "./PokemonForm";
import PokemonTable from "./PokemonTable";

type FormModalType = {
    show: string;
    pokemon: Pokemon | null;
};

function HomeLayout() {
    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [filters, setFilters] = useState<any>(null);
    const [showFormModal, setShowFormModal] = useState<FormModalType>({
        show: "",
        pokemon: null,
    });

    useEffect(() => {
        const getAllPokemons = async () => {
            const response = await API.get("?idAuthor=1");
            if (response && response.data) setPokemons(response.data);
        };

        getAllPokemons();
    }, []);

    const handleModalForm = (show = "", pokemon = null) => {
        setShowFormModal({ show, pokemon });
    };

    const deletePokemon = async () => {
        const pokemonToDelete = showFormModal.pokemon;
        if (pokemonToDelete) {
            const response = await API.delete(`${pokemonToDelete.id}`);
            if (response.data) {
                handleModalForm();
                setPokemons(
                    pokemons?.filter((pkm) => pkm.id !== pokemonToDelete.id)
                );
            }
        }
    };

    const savePokemon = async (
        isUpdateMode: boolean,
        targetPokemon: Pokemon
    ) => {
        if (isUpdateMode) {
            const response = await API.put(
                `${targetPokemon.id}`,
                targetPokemon
            );
            if (response.data) {
                const index = pokemons!.findIndex(
                    (pkm) => pkm.id === targetPokemon.id
                );

                if (index !== -1) {
                    const auxArray = Array.from(pokemons!);
                    auxArray[index] = response.data;
                    setPokemons(auxArray);
                }
            }
        } else {
            const response = await API.post("?idAuthor=1", {
                ...targetPokemon,
                idAuthor: 1,
                hp: 100,
                type: "normal",
            });

            if (response.data) {
                setPokemons((prev: any) => [...prev, response.data]);
            }
        }
        handleModalForm();
    };

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["head-section"]}>
                    <SearchForm
                        handleSearch={setFilters}
                        handleReset={() => setFilters(null)}
                    />
                    <button
                        type="button"
                        onClick={() => handleModalForm("form")}
                        className="button-base button-primary"
                    >
                        <AddIcon className="svg-size" />
                        Nuevo
                    </button>
                </div>
                {pokemons ? (
                    <PokemonTable
                        pokemons={pokemons}
                        handleEdit={handleModalForm}
                        handleDelete={handleModalForm}
                        filters={filters}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <Modal
                title="Eliminar Pokemon"
                show={showFormModal["show"] === "confirm"}
                handleClose={() => handleModalForm()}
                children={
                    <ConfirmationMsg
                        handleCancel={() => handleModalForm()}
                        handleConfirm={deletePokemon}
                        msg="Esta acción es irreversible. ¿Esta seguro que desea continuar?"
                    />
                }
            />
            <Modal
                title={
                    showFormModal["pokemon"]
                        ? "Actualizar Pokemon"
                        : "Nuevo Pokemon"
                }
                show={showFormModal["show"] === "form"}
                handleClose={() => handleModalForm()}
                children={
                    <PokemonForm
                        pokemon={showFormModal["pokemon"]}
                        handleClose={() => handleModalForm()}
                        handleSave={savePokemon}
                    />
                }
            />
        </>
    );
}

export default HomeLayout;
