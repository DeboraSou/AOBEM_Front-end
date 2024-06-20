import styles from './Credits.module.css'
import { NavLink } from 'react-router-dom';

function Credits() {
    return (
        <>
            <section className={styles.credits_section}>
                <div className={styles.credits_container}>
                    <h1 className={styles.credits_title}>Obrigado pela comunicação</h1>

                    <h2 className={styles.credits_caption}>Em breve entraremos em contato!</h2>

                    <div>
                        <button className={styles.credits_btn}>
                            <NavLink className={styles.credits_btn_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} aria-label="Ir para a página inicial">Início</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Credits