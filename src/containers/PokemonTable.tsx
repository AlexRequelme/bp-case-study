import PokemonItem from "../components/PokemonItem";
import styles from "../styles/PokemonTable.module.scss";
import { Pokemon } from "../types/pokemon";

type PokemonTableProps = {
    pokemons: Pokemon[];
    handleEdit: any;
    handleDelete: any;
    filters: any;
};

function PokemonTable({
    pokemons,
    handleDelete,
    handleEdit,
    filters,
}: PokemonTableProps) {
    const columns = ["Nombre", "Imagen", "Ataque", "Defensa", "Acciones"];

    return (
        <div className={styles["container"]}>
            <table data-testid="table">
                <thead>
                    <tr>
                        {columns.map((name) => (
                            <th key={name}>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody data-testid="table-body">
                    {pokemons.length > 0 ? (
                        pokemons.map((pokemon, index) => (
                            <PokemonItem
                                key={`${pokemon.name}-${index}`}
                                {...(filters?.search.trim() &&
                                pokemon.name
                                    .toLowerCase()
                                    .includes(filters?.search) === false
                                    ? {
                                          className: "hidden",
                                      }
                                    : {})}
                                {...pokemon}
                                onEdit={() => handleEdit("form", pokemon)}
                                onDelete={() =>
                                    handleDelete("confirm", pokemon)
                                }
                            />
                        ))
                    ) : (
                        <tr data-testid="not-pokemons">
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
