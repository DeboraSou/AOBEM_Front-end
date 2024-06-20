import styles from "./HangOn.module.css"
import { NavLink } from "react-router-dom";

function HangOn() {

    return (
        <>
            <section className={styles.hangOn_section}>
                <div className={styles.hangOn_shape}></div>
                <div className={styles.hangOn_shape1}></div>
                <div className={styles.hangOn_shape2}></div>
                <div className={styles.hangOn_container}>
                    <h1 className={styles.hangOn_title}>OBRIGADO</h1>
                    <h2 className={styles.hangOn_caption}>Verificaremos o seu CRP e enviaremos um e-mail da situação do seu cadastro.</h2>
                    <p className={styles.hangOn_paragraph}>A verificação será realizada e enviada em até 7 dias, quando aceita você poderá acessar seu painel ao fazer seu login.</p>
                    <div>
                        <button className={styles.hangOn_btn}>
                            <NavLink className={styles.hangOn_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Início</NavLink>
                        </button>
                    </div>
                </div>
            </section >
        </>
    )
}

export default HangOn