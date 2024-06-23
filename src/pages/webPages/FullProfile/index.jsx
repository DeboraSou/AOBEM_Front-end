import styles from "./FullProfile.module.css"
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios";
import toast, { Toaster } from 'react-hot-toast';

function FullProfile() {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const { id } = useParams();
    const [psychologist, setPsychologist] = useState(null);

    useEffect(() => {
        const fetchPsychologist = async () => {
            try {
                // Mude para a rota do formulário do especialista.
                const response = await axios.get(`/full-profile/${id}`);
                setPsychologist(response.data);
                toast.success("Especialista carregado!", {
                    position: 'top-right !important',
                    style: {
                        background: '#001908',
                        color: '#F7F6FB',
                        width: '260px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #00ff52',
                    }

                });
                console.log("%cEspecialista carregado!", 'color: #00ff52; background-color: #001908');
            } catch (error) {
                console.error('Erro ao buscar informações do especialista:', error);
                toast.error("Erro ao buscar informações do especialista.", {
                    position: "top-right !important",
                    style: {
                        background: '#140000',
                        color: '#F7F6FB',
                        width: '350px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #cc0000',
                    }

                });
                console.log("%cErro ao buscar informações do especialista.", 'color: #cc0000; background-color: #140000');
            }
        };

        fetchPsychologist();
    }, [id]);

    if (!psychologist) {
        return <div>Carregando perfil...</div>;
    }

    return (
        <section className={styles.full_profile}>
            <div className={styles.full_profile_container}>
                <div className={styles.full_profile_text}>
                    <h2 className={styles.full_profile_title}>{psychologist.name}</h2>
                    <img className={styles.full_profile_image} src={psychologist.image} alt={psychologist.name} />
                    <p title='Especialidade' className={styles.full_profile_spec}> {psychologist.specialty}</p>
                    <p title='Registro Profissional no Conselho Regional de Psicologia (CRP)'> {psychologist.rcp}</p>
                    <p title='Abordagem'> {psychologist.approach}</p>
                    <p title='Biografia'> {psychologist.bio}</p>
                    <ul title='Serviços'>
                        {psychologist.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <p title='Gênero'> {psychologist.gender}</p>
                    <p title='Estado'> {psychologist.state}</p>
                    <p title='Cidade'> {psychologist.city}</p>
                    <p title='Atendimento Online'>Atendimento Online: {psychologist.online ? 'Sim' : 'Não'}</p>
                    <p title='Acessibilidade'>Atende em Libras: {psychologist.accessibility ? 'Sim' : 'Não'}</p>
                    <p title='Experiência'> {psychologist.experience}</p>
                    <p title='Avaliação'> {psychologist.userReviews}</p>
                    <div className={styles.full_profile_button_container}>
                        <button className={styles.full_profile_primary_button}>
                            <NavLink className={styles.full_profile_link} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Agende a sua consulta">Agendar</NavLink>
                        </button>
                        <button onClick={goBack} className={styles.full_profile_primary_button}>
                            <Link className={styles.full_profile_link} aria-label="Voltar para a tela anterior">Voltar</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FullProfile;