import ScrollTop from '../../../components/ScrollTop';
import styles from './Experts.module.css'
import { NavLink } from "react-router-dom";

function Experts() {
    return (
        <>
            <ScrollTop />
            <section className={styles.notFound_section}>
                <div className={styles.notFound_container}>
                    {/* <h1 className={styles.notFound_title}>404</h1> */}

                    <h2 className={styles.notFound_caption}>Desculpe, a página que você está procurando está em construção.</h2>

                    <p className={styles.notFound_paragraph}>Estamos trabalhando para tornar sua experiência ainda melhor! Enquanto isso, você pode voltar para a tela inicial</p>

                    <div>
                        <button className={styles.notFound_btn}>
                            <NavLink className={styles.notFound_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Início</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experts