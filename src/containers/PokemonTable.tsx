import PokemonItem from "../components/PokemonItem";
import styles from "../styles/PokemonTable.module.scss";

function PokemonTable() {
    return (
        <div className={styles["container"]}>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <PokemonItem
                        name="Ivysaur"
                        imgUrl=""
                        attack={65}
                        defense={38}
                        onEdit={() => console.log("Edit....")}
                        onDelete={() => console.log("Delete...")}
                    />
                    <PokemonItem
                        name="Ivysaur"
                        imgUrl=""
                        attack={65}
                        defense={38}
                        onEdit={() => console.log("Edit....")}
                        onDelete={() => console.log("Delete...")}
                    />
                    <PokemonItem
                        name="Ivysaur"
                        imgUrl=""
                        attack={65}
                        defense={38}
                        onEdit={() => console.log("Edit....")}
                        onDelete={() => console.log("Delete...")}
                    />
                </tbody>
            </table>
        </div>
    );
}

export default PokemonTable;
