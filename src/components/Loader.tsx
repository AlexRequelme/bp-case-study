import styles from "../styles/Loader.module.scss";

function Loader() {
    return <div className={styles["lds-dual-ring"]}></div>;
}

export default Loader;
