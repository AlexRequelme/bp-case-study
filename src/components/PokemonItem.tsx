import styles from "../styles/PokemonItem.module.scss";
import { ReactComponent as EditIcon } from "../assets/icons/edit.svg";
import { ReactComponent as TrashIcon } from "../assets/icons/trash.svg";

type PokemonItemProps = {
    name: string;
    image: string;
    attack: number;
    defense: number;
    onEdit: any;
    onDelete: any;
    className?: string;
};

function PokemonItem(props: PokemonItemProps) {
    return (
        <tr className={props.className}>
            <td>{props.name}</td>
            <td className={styles["flex-center"]}>
                <img
                    className={styles["pokemon-img"]}
                    src={
                        props.image ||
                        "https://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
                    }
                    alt={`pokemon-${props.name}`}
                    onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg";
                    }}
                />
            </td>
            <td>{props.attack}</td>
            <td>{props.defense}</td>
            <td>
                <div className={styles["icon-wrapper"]}>
                    <button
                        onClick={props.onEdit}
                        type="button"
                        className={styles["icon-button"]}
                    >
                        <EditIcon className="svg-size" />
                    </button>
                    <button
                        onClick={props.onDelete}
                        type="button"
                        className={styles["icon-button"]}
                    >
                        <TrashIcon className="svg-size" />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default PokemonItem;
