import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './FormConsult.module.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useLocation } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HiDevicePhoneMobile } from "react-icons/hi2";

function FormConsult() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3003/contact-expert', formData);
            toast.success("Sua solicitação foi enviada com sucesso!", {
                duration: 5000,
                position: 'top-right',
                style: {
                    background: '#001908',
                    color: '#F7F6FB',
                    width: '350px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #00ff52',
                }
            });

            console.log('%cSua solicitação foi enviada com sucesso:', 'color: #00ff52; background-color: #001908', response.data);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('Erro ao enviar solicitação:', error);
            toast.error("Erro ao enviar sua solicitação. Tente novamente mais tarde.", {
                icon: '😞',
                duration: 5000,
                position: 'top-right',
                style: {
                    background: '#191900',
                    color: '#F7F6FB',
                    width: '300px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #ffff00',
                },
                iconSize: '20px',
            });
            console.log("%cErro ao enviar sua solicitação. Tente novamente mais tarde.", 'color: #ffff00; background-color: #191900');
        }
    };

    return (
        <>
            {/* NAV */}
            <div className={styles.all}>
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

                <section className={styles.contactSection}>
                    <div className={styles.contactContainer}>
                        <form className={styles.contactForm} action="" method="post" onSubmit={handleSubmit}>

                            <legend>
                                <h2 className={styles.contactTitle}>Envie sua solicitação de consulta</h2>
                            </legend>

                            <div className={styles.contactParagraphContainer}>
                                <p className={styles.contactParagraph}>Suas informações serão enviadas e avaliadas pelo psicólogo escolhido.</p>
                                <p className={styles.contactParagraph}></p>
                            </div>

                            <div className={styles.contactContainerInput}>
                                <label htmlFor="name_consult">
                                    <input type="text" name="name" id='name_consult' placeholder="Nome Completo" required aria-label="Digite seu nome completo aqui" role="textbox" autoComplete="name" value={formData.name} onChange={handleChange} className={styles.contactInput} />
                                    <FaRegUser className={styles.contactIcon} aria-hidden="true" />
                                </label>

                                <label htmlFor="email_consult">
                                    <input type="email" name="email" id='email_consult' placeholder="exemplo@exemplo.com" required aria-label="Digite seu e-mail aqui" role="textbox" autoComplete="email" value={formData.email}
                                        onChange={handleChange} className={styles.contactInput} />
                                    <MdAlternateEmail className={styles.contactIcon} aria-hidden="true" />
                                </label>

                                <label htmlFor="tel_consult">
                                    <input type="tel" name="phone" id='tel_consult' placeholder="Número de celular" required aria-label="Digite seu telefone aqui" role="textbox" autoComplete="tel" value={formData.phone}
                                        onChange={handleChange} className={styles.contactInput} />
                                    <HiDevicePhoneMobile className={styles.contactIcon} />
                                </label>

                                <label htmlFor="message_consult">
                                    <textarea name="message" id='message_consult' cols="30" rows="10" placeholder="Explique o motivo da sua consulta..." required aria-label="Digite sua a mensagem para o psicólogo" role="textbox" value={formData.message} onChange={handleChange} className={styles.contactAreatext}></textarea>
                                </label>

                            </div>
                            <button type="submit" className={`${styles.contactBtn} ${styles.contactBtnLink}`} aria-label="Enviar formulário de contato">Enviar</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
export default FormConsult;