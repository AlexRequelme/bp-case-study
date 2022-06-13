import { useState } from "react";
import { ReactComponent as AddIcon } from "../assets/icons/plus.svg";
import ConfirmationMsg from "../components/ConfirmationMsg";
import Modal from "../components/Modal";
import SearchForm from "../components/SearchForm";
import styles from "../styles/HomeLayout.module.scss";
import { Pokemon } from "../types/pokemon";
import PokemonForm from "./PokemonForm";
import PokemonTable from "./PokemonTable";

type FormModalType = {
    show: boolean;
    pokemon: Pokemon | null;
};

const pokemones: Pokemon[] = [
    { name: "Ivysaur", image: "", attack: 65, defense: 38 },
    { name: "Pikachu", image: "", attack: 100, defense: 38 },
    { name: "Bulbasur", image: "", attack: 20, defense: 50 },
    { name: "Ivysaur", image: "", attack: 55, defense: 15 },
];

function HomeLayout() {
    const [showModal, setShowModal] = useState(false);
    const [showFormModal, setShowFormModal] = useState<FormModalType>({
        show: false,
        pokemon: null,
    });

    const handleModalForm = (show: boolean, pokemon = null) => {
        setShowFormModal({ show, pokemon });
    };

    const savePokemon = (isUpdateMode: boolean, data: Pokemon) => {
        console.log(data);
        if (isUpdateMode) {
            console.log("Actualizando");
        } else {
            console.log("Creando");
        }
        handleModalForm(false);
    };

    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["head-section"]}>
                    <SearchForm />
                    <button
                        type="button"
                        onClick={() => handleModalForm(true)}
                        className="button-base button-primary"
                    >
                        <AddIcon className="svg-size" />
                        Nuevo
                    </button>
                </div>
                <PokemonTable
                    pokemons={pokemones}
                    handleEdit={handleModalForm}
                    handleDelete={() => setShowModal(true)}
                />
            </div>
            <Modal
                title="Eliminar Pokemon"
                show={showModal}
                handleClose={() => setShowModal(false)}
                children={
                    <ConfirmationMsg
                        handleCancel={() => setShowModal(false)}
                        handleConfirm={() => setShowModal(false)}
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
                show={showFormModal["show"]}
                handleClose={() => handleModalForm(false)}
                children={
                    <PokemonForm
                        pokemon={showFormModal["pokemon"]}
                        handleClose={() => handleModalForm(false)}
                        handleSave={savePokemon}
                    />
                }
            />
        </>
    );
}

export default HomeLayout;
