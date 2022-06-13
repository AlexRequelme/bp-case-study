import PokemonItem from "../components/PokemonItem";
import styles from "../styles/PokemonTable.module.scss";
import { Pokemon } from "../types/pokemon";

type PokemonTableProps = {
    pokemons: Pokemon[];
    handleEdit: any;
    handleDelete: any;
};

function PokemonTable(props: PokemonTableProps) {
    const columns = ["Nombre", "Imagen", "Ataque", "Defensa", "Acciones"];

    return (
        <div className={styles["container"]}>
            <table>
                <thead>
                    <tr>
                        {columns.map((name) => (
                            <th key={name}>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.pokemons.length > 0 ? (
                        props.pokemons.map((pokemon, index) => (
                            <PokemonItem
                                key={`${pokemon.name}-${index}`}
                                {...pokemon}
                                onEdit={() => props.handleEdit(true, pokemon)}
                                onDelete={props.handleDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length}>
                                No se encontraron pokemones registrados.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default PokemonTable;
