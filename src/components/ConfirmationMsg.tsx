import styles from "../styles/ConfirmationMsg.module.scss";

type ConfirmationMsgProps = {
    handleCancel: any;
    handleConfirm: any;
    msg: string;
};

function ConfirmationMsg(props: ConfirmationMsgProps) {
    return (
        <>
            <p className={styles["mobile-width"]}>{props.msg}</p>
            <div className={styles["container"]}>
                <button
                    onClick={props.handleCancel}
                    type="button"
                    className="button-base button-secondary"
                >
                    Cancelar
                </button>
                <button
                    onClick={props.handleConfirm}
                    type="button"
                    className="button-base button-primary"
                >
                    Confirmar
                </button>
            </div>
        </>
    );
}

export default ConfirmationMsg;
