import styles from "../styles/PokemonItem.module.scss";

type PokemonItemProps = {
    name: string;
    imgUrl: string;
    attack: number;
    defense: number;
    onEdit: any;
    onDelete: any;
};

function PokemonItem(props: PokemonItemProps) {
    return (
        <tr>
            <td>{props.name}</td>
            <td className={styles["flex-center"]}>
                <img
                    className={styles["pokemon-img"]}
                    src={
                        props.imgUrl ||
                        "http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
                    }
                    alt={`pokemon-${props.name}`}
                />
            </td>
            <td>{props.attack}</td>
            <td>{props.defense}</td>
            <td>actions</td>
        </tr>
    );
}

export default PokemonItem;
