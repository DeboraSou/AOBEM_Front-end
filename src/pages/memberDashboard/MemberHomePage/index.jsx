import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './MemberHomePage.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useLocation } from 'react-router-dom'
const MemberHomePage = () => {
    const { user, logout_patient } = useAuth(); // Vai recuperar o membro do authContext.
    const navigatePatient = useNavigate();

    useEffect(() => {
        if (!user) {
            navigatePatient("/entrar?type=membro");
        }
    }, [user, navigatePatient]);

    if (!user) {
        return null; // Vai renderizar nulo se o membro não estiver definido.
    }

    return (
        <>
            {/* NAV */}
            <div className={styles.navigation}>
                <ul>
                    <li>

                        <Link to="/MemberHomePage">
                            <span className={styles.iconlogo}>
                                <img src="/dark_logotipo.png" height={70} width={220} alt="" />
                            </span>
                            {/* <span className={styles.title}>Painel</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="/MemberHomePage">
                            <span className={styles.icon}>
                                <i class="fa-solid fa-sliders"></i>
                            </span>
                            <span className={styles.title}>Painel de Consultas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/MemberProfilePage">
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
                                <div className={styles.cardName}>Consultas Enviadas</div>
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
                            <img src="src/assets/bernardo_p.png" alt="Foto de Perfil" className={styles.profileImg} />
                            <h1 className={styles.profileTitle}>Bernardo Dmitry</h1>
                            <p className={styles.profileExpert}>(Paciente)</p>
                            <p className={styles.profileEmail}>bernardinho.@gmail.com</p>
                        </div>

                    </div>



                    {/* ORDER DETAILS */}
                    <div className={styles.details}>
                        <div className={styles.recentOrders}>
                            <div className={styles.expertConsults}>
                                <h1>Solicite sua Consulta!</h1>

                                <Link to="/formulario-consulta">
                                    <button>Formulário de Consulta</button>
                                </Link>
                                <br />
                                <Link to="/especialistas">
                                    <button>Especialistas</button>
                                </Link>
                            </div>
                        </div>
                        <br />

                        <div className={styles.recentOrders}>

                            <div className={styles.cardHeader}>
                                <h2>Consultas Enviadas</h2>
                            </div>
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <td>Nome do Psicólogo</td>
                                        <td>Especialidade</td>
                                        <td>E-mail</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva da Costa Machado</td>
                                        <td>Ansiedade</td>
                                        <td>henribatmam@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>Depressão</td>
                                        <td>lucasoriginial123@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Otavio</td>
                                        <td>Conflito Familiar</td>
                                        <td>otaviodosantos@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Alexaandren Henrique Pinto</td>
                                        <td>Depressão</td>
                                        <td>alexandre1237@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Luana da Costa da Silva</td>
                                        <td>TDAH</td>
                                        <td>luana@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Roger Pinheiro Machado</td>
                                        <td>Timidez</td>
                                        <td>rogermartis@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Ribeiro do Santos</td>
                                        <td>Vícios</td>
                                        <td>gabrieldosantosmartins@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
                                        </span></td>
                                    </tr>
                                    <tr>
                                        <td>José Guilherme da Silva Neto</td>
                                        <td>Ansiedade</td>
                                        <td>joseguilherme@gmail.com</td>
                                        <td><span className={styles.statusdelivered}>
                                            <Link to="/MemberHomePage">
                                                <input type="submit" className={styles.inputAccept} value="Ver Perfil" />
                                            </Link>
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
                                        <td>Nome do Psicólogo</td>
                                        <td>Especialidade</td>
                                        <td>E-mail</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva da Costa Machado</td>
                                        <td>Distúrbios Mentais</td>
                                        <td>henribatmam@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>Criatividade</td>
                                        <td>lucasoriginial123@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Otavio</td>
                                        <td>Traumas</td>
                                        <td>otaviodosantos@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Alexaandren Henrique Pinto</td>
                                        <td>Síndrome do Pânico</td>
                                        <td>alexandre1237@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Luana da Costa da Silva</td>
                                        <td>TOC</td>
                                        <td>luana@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Roger Pinheiro Machado</td>
                                        <td>Ansiedade</td>
                                        <td>rogermartis@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Ribeiro do Santos</td>
                                        <td>Controle de Raiva</td>
                                        <td>gabrieldosantosmartins@gmail.com</td>
                                        <td><span className={styles.statusdelivereda}>Aceita</span></td>
                                    </tr>
                                    <tr>
                                        <td>José Guilherme da Silva Neto</td>
                                        <td>Terapia de Casal</td>
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
                                        <td>Nome do Psicólogo</td>
                                        <td>Especialidade</td>
                                        <td>E-mail</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>João Silva da Costa Machado</td>
                                        <td>Ansiedade</td>
                                        <td>henribatmam@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>Burnout</td>
                                        <td>lucasoriginial123@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Otavio</td>
                                        <td>Dislexia</td>
                                        <td>otaviodosantos@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Alexaandren Henrique Pinto</td>
                                        <td>Depressão</td>
                                        <td>alexandre1237@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Luana da Costa da Silva</td>
                                        <td>Violência Sexual</td>
                                        <td>luana@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Roger Pinheiro Machado</td>
                                        <td>Distúbio do Sono</td>
                                        <td>rogermartis@gmail.com</td>
                                        <td><span className={styles.statusdeliveredr}>Recusada</span></td>
                                    </tr>
                                    <tr>
                                        <td>Gabriel Ribeiro do Santos</td>
                                        <td>Ansiedade</td>
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

export default MemberHomePage;