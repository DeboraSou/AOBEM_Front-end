import styles from './MemberProfilePage.module.css'
import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '@fortawesome/fontawesome-free/css/all.css';

const MemberProfilePage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3003/config-member', formData);
            console.log('Dados enviados com sucesso:', response.data);
            toast.success("Dados salvos com sucesso!", {
                position: 'top-right !important',
                style: {
                    background: '#001908',
                    color: '#F7F6FB',
                    width: '300px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #00ff52',
                }

            });
            console.log("%cDados salvos com sucesso!", 'color: #00ff52; background-color: #001908', response.data);
            setFormData({
                name: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
            toast.error("Erro ao salvar os dados. Tente novamente mais tarde.", {
                icon: '😞',
                position: 'top-right !important',
                style: {
                    background: '#191900',
                    color: '#F7F6FB',
                    width: '350px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #ffff00',
                },
                iconSize: '20px',
            });
            console.log("%cErro ao salvar os dados. Tente novamente mais tarde.", 'color: #ffff00; background-color: #191900');
        }
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            {/* NAV */}
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <a href="/MemberHomePage">
                            <span className={styles.iconlogo}>
                                <img src="/dark_logotipo.png" height={70} width={220} alt="" />
                            </span>
                            {/* <span className={styles.title}>Painel</span> */}
                        </a>
                    </li>
                    <li>
                        <a href="/MemberHomePage">
                            <span className={styles.icon}>
                                <i class="fa-solid fa-sliders"></i>
                            </span>
                            <span className={styles.title}>Painel de Consultas</span>
                        </a>
                    </li>
                    <li>
                        <a href="/MemberProfilePage">
                            <span className={styles.icon}>
                                <i className="fa-solid fa-user"></i>
                            </span>
                            <span className={styles.title}>Perfil</span>
                        </a>
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
                        <a href="/">
                            <span className={styles.icon}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </span>
                            <span className={styles.title}>Sair</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <div className={styles.upload}>
                        <div className={styles.profileHeader}>
                            <img src="src/assets/bernardo_p.png" alt="profile" className={styles.profileImg} />
                            <div className={styles.round}>
                                <input type="file" />
                                <i class="fa-solid fa-camera"></i>
                            </div>
                        </div>

                        <br />
                        <div className={styles.profileTextContainer}>
                            <h1 className={styles.profileTitle}>Bernardo Dmitry</h1>
                            <p className={styles.profileExpert}>(Paciente)</p>
                            <p className={styles.profileEmail}>bernardinho@gmail.com</p>
                        </div>
                    </div>
                    {/* <div className={styles.menu}>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-user" id={styles.menuIcon} ></i>Conta</Link>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-bell" id={styles.menuIco}></i> Notificações</Link>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-gear" id={styles.menuIco}></i>Configurações</Link>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-right-from-bracket" id={styles.menuIco}></i>Logout</Link>
               </div> */}
                </div>
                <form className={styles.account} onSubmit={handleSubmit} action="">
                    <div className={styles.accountHeader}>
                        <h1 className={styles.accountTitle}>Configurações da Conta</h1>
                        <div className={styles.btnContainer}>
                            <button type="button" className={styles.btnCancel} onClick={handleCancel}>Cancelar</button>
                            <button type="submit" className={styles.btnSave}>Salvar</button>
                        </div>
                    </div>

                    {/* Nome Completo. */}
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="name">Nome Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome Completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.accountInput}
                            />
                        </div>
                    </div>

                    {/* E-mail. */}
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.accountInput}
                            />
                        </div>
                    </div>

                    {/* Telefone. */}
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Telefone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Telefone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={styles.accountInput}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MemberProfilePage