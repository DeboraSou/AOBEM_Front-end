import styles from './ExpertHomePage.module.css';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from '../../../api/axios';

const ExpertHomePage = () => {
    const { user, logout_expert } = useAuth(); // Vai recuperar o especialista do authContext.
    const navigateExpert = useNavigate();

    useEffect(() => {
        if (!user) {
            // navigateExpert("/entrar?type=especialista");

            // Só para estilizar.
            navigateExpert("/especialista");
        }
    }, [user, navigateExpert]);

    if (!user) {
        return null; // Vai renderizar nulo se o especialista não estiver definido.
    }

    return (
        <>
            {/* NAV */}
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <Link to="/ExpertHomePage">
                            <span className={styles.iconlogo}>
                                <img src="/dark_logotipo.png" height={70} width={220} alt="" />
                            </span>
                            {/* <span className={styles.title}>Painel</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/ExpertHomePage">
                            <span className={styles.icon}>
                                <i class="fa-solid fa-sliders"></i>
                            </span>
                            <span className={styles.title}>Painel de Consultas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ExpertProfilePage">
                            <span className={styles.icon}>
                                <i className="fa-solid fa-user"></i>
                            </span>
                            <span className={styles.title}>Perfil</span>
                        </Link>
                    </li>
                    {/* <li>
                        <a href="/ExpertProfilePage">
                            <span className={styles.icon}>
                              <i class="fa-regular fa-circle-question"></i>
                            </span>
                            <span className={styles.title}>Ajuda & Suporte</span>
                        </a>
                    </li> */}
                    <li>
                        <Link to="/">
                            <span className={styles.icon}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </span>
                            <span className={styles.title}>Sair</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* MAIN CONTENT */}
            <div className={styles.main}>

                {/* CARDS */}
                <div className={styles.allpagecenter}>
                    <div className={styles.cardBox}>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.numbers}>50</div>
                                <div className={styles.cardName}>Consultas Aceitas</div>
                            </div>
                            <div className={styles.iconBx}>
                                <i class="fa-solid fa-user-check"></i>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.numbers}>25</div>
                                <div className={styles.cardName}>Consultas Pendentes</div>
                            </div>
                            <div className={styles.iconBx}>
                                <i className="fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <div className={styles.numbers}>15</div>
                                <div className={styles.cardName}>Consultas Recusadas</div>
                            </div>
                            <div className={styles.iconBx}>
                                <i class="fa-solid fa-user-xmark"></i>
                            </div>

                        </div>
                        <div className={styles.profile}>

                            <img src="src/assets/ana_p.png" alt="Foto de Perfil" className={styles.profileImg} />
                            <h1 className={styles.profileTitle}>Ana Albani</h1>
                            <p className={styles.profileExpert}>(Psicólogo)</p>
                            <p className={styles.profileEmail}>anaoficial@gmail.com</p>
                        </div>
                    </div>

                    {/* ORDER DETAILS */}
                    <div className={styles.details}>
                        <div className={styles.recentOrders}>
                            <div className={styles.cardHeader}>
                                <h2>Consultas Pendentes</h2>
                            </div>
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nome do Paciente</td>
                                        <td>Telefone</td>
                                        <td>E-mail</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva da Costa Machado</td>
                                        <td>+55-11911231272</td>
                                        <td>henrique@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>+55-11911231272</td>
                                        <td>lucasoriginial123@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Otavio</td>
                                        <td>+55-11911231272</td>
                                        <td>otaviodosantos@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Alexaandren Henrique Pinto</td>
                                        <td>+55-11911231272</td>
                                        <td>alexandre1237@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Luana da Costa da Silva</td>
                                        <td>+55-11911231272</td>
                                        <td>luana@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Roger Pinheiro Machado</td>
                                        <td>+55-11911231272</td>
                                        <td>rogermartis@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Ribeiro do Santos</td>
                                        <td>+55-11911231272</td>
                                        <td>gabrieldosantosmartins@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>José Guilherme da Silva Neto</td>
                                        <td>+55-11911231272</td>
                                        <td>joseguilherme@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <input type="submit" className={styles.inputAccept} value="Aceitar" />
                                            <input type="submit" className={styles.inputRecuse} value="Recusar" />
                                        </span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className={styles.recentOrders}>
                            <div className={styles.cardHeader}>
                                <h2>Consultas Aceitadas</h2>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nome do Paciente</td>
                                        <td>Telefone</td>
                                        <td>E-mail</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva da Costa Machado</td>
                                        <td>+55-11911231272</td>
                                        <td>henribatmam@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>+55-11911231272</td>
                                        <td>lucasoriginial123@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Otavio</td>
                                        <td>+55-11911231272</td>
                                        <td>otaviodosantos@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Alexaandren Henrique Pinto</td>
                                        <td>+55-11911231272</td>
                                        <td>alexandre1237@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Luana da Costa da Silva</td>
                                        <td>+55-11911231272</td>
                                        <td>luana@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Roger Pinheiro Machado</td>
                                        <td>+55-11911231272</td>
                                        <td>rogermartis@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Ribeiro do Santos</td>
                                        <td>+55-11911231272</td>
                                        <td>gabrieldosantosmartins@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>José Guilherme da Silva Neto</td>
                                        <td>+55-11911231272</td>
                                        <td>joseguilherme@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className={styles.recentOrders}>
                            <div className={styles.cardHeader}>
                                <h2>Consultas Recusadas</h2>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nome do Paciente</td>
                                        <td>Telefone</td>
                                        <td>E-mail</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva da Costa Machado</td>
                                        <td>+55-11911231272</td>
                                        <td>henribatmam@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>+55-11911231272</td>
                                        <td>lucasoriginial123@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Otavio</td>
                                        <td>+55-11911231272</td>
                                        <td>otaviodosantos@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Alexaandren Henrique Pinto</td>
                                        <td>+55-11911231272</td>
                                        <td>alexandre1237@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Luana da Costa da Silva</td>
                                        <td>+55-11911231272</td>
                                        <td>luana@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Roger Pinheiro Machado</td>
                                        <td>+55-11911231272</td>
                                        <td>rogermartis@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Ribeiro do Santos</td>
                                        <td>+55-11911231272</td>
                                        <td>gabrieldosantosmartins@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpertHomePage;