import styles from './Credits.module.css'
import { NavLink } from 'react-router-dom';
import ScrollTop from '../../../components/ScrollTop';

function Credits() {

    const creditsData = [
        { title: "Mental health illustrations by Storyset", url: "https://storyset.com/mental-health" },
        { title: "Mental health illustrations by Storyset", url: "https://storyset.com/mental-health" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "Work illustrations by Storyset", url: "https://storyset.com/work" },
        { title: "Work illustrations by Storyset", url: "https://storyset.com/work" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "Online illustrations by Storyset", url: "https://storyset.com/online" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "Work illustrations by Storyset", url: "https://storyset.com/work" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "Growth illustrations by Storyset", url: "https://storyset.com/growth" },
        { title: "Business illustrations by Storyset", url: "https://storyset.com/business" },
        { title: "Together illustrations by Storyset", url: "https://storyset.com/together" },
        { title: "Education illustrations by Storyset", url: "https://storyset.com/education" },
        { title: "Health illustrations by Storyset", url: "https://storyset.com/health" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "Data illustrations by Storyset", url: "https://storyset.com/data" },
        { title: "Work illustrations by Storyset", url: "https://storyset.com/work" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "People illustrations by Storyset", url: "https://storyset.com/people" },
        { title: "Business illustrations by Storyset", url: "https://storyset.com/business" },
        { title: "Imagem de upklyak no Freepik", url: "https://br.freepik.com/vetores-gratis/sessao-de-terapia-online-com-psicologo_24076143.htm" },
        { title: "Imagem de upklyak no Freepik", url: "https://br.freepik.com/vetores-gratis/sessao-de-terapia-online-com-psicologo_24076143.htm#fromView=search&page=1&position=26&uuid=c3f0131e-f806-44af-9b84-a41e5b1acdb3" },
        { title: "Imagem de vectorjuice no Freepik", url: "https://br.freepik.com/vetores-gratis/usuario-praticando-meditacao-mindfulness-na-pose-de-lotus-meditacao-consciente-calma-mental-e-autoconsciencia-focando-e-liberando-o-conceito-de-estresse-ilustracao-isolada-em-vetor_11668764.htm#fromView=search&page=1&position=40&uuid=8012eadb-8af4-4c58-9ed8-9b1e602732fe" },
        { title: "Kamara Beats", url: "https://www.youtube.com/channel/UC61rUdC5nx6CWrhSJiDICqg" }
    ];

    return (
        <>
            <ScrollTop />
            {/* Hero. */}
            <section className={styles.credits_hero}>
                <article className={styles.credits_hero_container}>
                    <img src="src/assets/credits_hero.png" alt="Construção da interface do site" title='Construção da interface do site' className={styles.credits_hero_img} />
                    <h2 className={styles.credits_hero_title}>Gratulação</h2>
                    <h3 className={styles.credits_hero_caption}>Agradecimentos especiais aos criadores e colaboradores por disponibilizarem seu trabalho de forma gratuita.</h3>
                </article>
            </section>

            {/* Cards. */}
            <section className={styles.credits_cards_section}>
                <article className={styles.credits_cards_container}>
                    <div className={styles.credits_cards}>
                        <div className={styles.credit_container}>
                            {creditsData.map((credit, index) => (
                                <div key={index} className={styles.credit_card}>
                                    <h3 className={styles.credit_card_title}>{credit.title}</h3>
                                    <a
                                        className={styles.credit_card_link}
                                        href={credit.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Link para ${credit.title}`}
                                    >
                                        {credit.url}
                                    </a>
                                </div>
                            ))}
                        </div><br /><br />
                        <div>
                            <button className={styles.credits_btn}>
                                <NavLink className={styles.credits_btn_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#FFDD02" } : {}; }} aria-label="Ir para a página inicial">Início</NavLink>
                            </button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Credits