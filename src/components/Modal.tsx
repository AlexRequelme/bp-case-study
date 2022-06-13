import styles from "../styles/Modal.module.scss";

type ModalProps = {
    title: string;
    show: boolean;
    handleClose: any;
    children: JSX.Element | JSX.Element[];
};

function Modal(props: ModalProps) {
    const parentStyle = `${styles["modal-background"]} ${
        !props.show ? styles["modal-background--hidden"] : ""
    }`;

    return (
        <div data-testid="modal-parent" className={parentStyle}>
            <div className={styles["modal"]}>
                <div className={styles["modal-header"]}>
                    <h3>{props.title}</h3>
                    <label htmlFor="modal" onClick={props.handleClose}>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC"
                            width="16"
                            height="16"
                            alt="cross-modal"
                        />
                    </label>
                </div>
                <div className={styles["modal-content"]}>{props.children}</div>
            </div>
        </div>
    );
}

export default Modal;
