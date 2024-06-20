import styles from './Map.module.css'
import { NavLink } from 'react-router-dom';

function Map() {
    return (
        <>
            <section className={styles.map_section}>
                <div className={styles.map_container}>
                    <h1 className={styles.map_title}>Obrigado pela comunicação</h1>

                    <h2 className={styles.map.caption}>Em breve entraremos em contato!</h2>

                    <div>
                        <button className={styles.map_btn}>
                            <NavLink className={styles.map_btn_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} aria-label="Ir para a página inicial">Início</NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Map