import styles from "../styles/Loader.module.scss";

function Loader() {
    return <div data-testid="loader" className={styles["lds-dual-ring"]}></div>;
}

export default Loader;
