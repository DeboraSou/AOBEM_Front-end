import styles from './ExpertProfilePage.module.css';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from '../../../api/axios';

const ExpertProfilePage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        rcp: '',
        approach: '',
        specialty: '',
        specialty2: '',
        specialty3: '',
        education: '',
        educationArea: '',
        educationArea2: '',
        service: '',
        service2: '',
        service3: '',
        image: '',
        gender: '',
        modality: '',
        sign_language: '',
        brief_bio: '',
        bio: ''
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
            const response = await axios.post('http://localhost:3003/full-profile', formData);
            toast.success("Dados enviados com sucesso!", {
                icon: '👏',
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
            console.log("%cDados enviados com sucesso!", 'color: #00ff52; background-color: #001908', response.data);
            setFormData({
                name: '',
                email: '',
                phone: '',
                state: '',
                rcp: '',
                approach: '',
                specialty: '',
                specialty2: '',
                specialty3: '',
                education: '',
                educationArea: '',
                educationArea2: '',
                service: '',
                service2: '',
                service3: '',
                image: '',
                gender: '',
                modality: '',
                sign_language: '',
                brief_bio: '',
                bio: ''
            });

        } catch (error) {
            console.error('Erro ao enviar dados. Tente novamente mais tarde:', error);
            toast.error("Erro ao enviar dados. Tente novamente mais tarde.", {
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
            console.log("%cErro ao enviar dados. Tente novamente mais tarde.", 'color: #ffff00; background-color: #191900');
        }
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            state: '',
            rcp: '',
            approach: '',
            specialty: '',
            specialty2: '',
            specialty3: '',
            education: '',
            educationArea: '',
            educationArea2: '',
            service: '',
            service2: '',
            service3: '',
            image: '',
            gender: '',
            modality: '',
            sign_language: '',
            brief_bio: '',
            bio: ''
        });
        toast.success("Ação de cancelamento realizada!", {
            position: 'top-right !important',
            icon: '😉',
            style: {
                background: '#040d14',
                color: '#F7F6FB',
                width: '320px',
                height: '50px',
                fontSize: '16px',
                borderLeft: '5px solid #2986cc',
            }

        });
        console.log("%cAção de cancelamento realizada!", 'color: #2986cc; background-color: #040d14');
    };

    return (
        <>
            {/* NAV */}
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <a href="/ExpertHomePage">
                            <span className={styles.iconlogo}>
                                <img src="/dark_logotipo.png" height={70} width={220} alt="" />
                            </span>
                            <span className={styles.title}>Painel</span>
                        </a>
                    </li>
                    <li>
                        <a href="/ExpertHomePage">
                            <span className={styles.icon}>
                                <i class="fa-solid fa-sliders"></i>
                            </span>
                            <span className={styles.title}>Painel de Consultas</span>
                        </a>
                    </li>
                    <li>
                        <a href="/ExpertProfilePage">
                            <span className={styles.icon}>
                                <i className="fa-solid fa-user"></i>
                            </span>
                            <span className={styles.title}>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="/ExpertProfilePage">
                            <span className={styles.icon}>
                                <i class="fa-regular fa-circle-question"></i>
                            </span>
                            <span className={styles.title}>Ajuda & Suporte</span>
                        </a>
                    </li>
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
                            <img src="src/assets/ana_p.png" alt="profile" className={styles.profileImg} />
                            <div className={styles.round}>
                                <input type="file" />
                                <i class="fa-solid fa-camera"></i>
                            </div>
                        </div>

                        <br />
                        <div className={styles.profileTextContainer}>
                            <h1 className={styles.profileTitle}>Ana Albani</h1>
                            <p className={styles.profileExpert}>(Psicólogo)</p>
                            <p className={styles.profileEmail}>anaoficial@gmail.com</p>
                        </div>
                    </div>

                    {/* <div className={styles.menu}>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-user" id={styles.menuIcon} ></i>Conta</Link>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-bell" id={styles.menuIco}></i> Notificações</Link>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-gear" id={styles.menuIco}></i>Configurações</Link>
                <Link className={styles.menuLink} to="/"><i class="fa-solid fa-right-from-bracket" id={styles.menuIco}></i>Logout</Link>
               </div> */}
                </div>

                <form action="" className={styles.account} onSubmit={handleSubmit}>
                    <div className={styles.accountHeader}>
                        <h1 className={styles.accountTitle}>Configurações da Conta</h1>
                        <div className={styles.btnContainer}>
                            <button type='button' className={styles.btnCancel} onClick={handleCancel}>Cancelar</button>
                            <button type='submit' className={styles.btnSave}>Salvar</button>
                        </div>
                    </div>
                    {/* NAME */}
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label>Nome Completo</label>
                            <input type="text" name="name" placeholder='Nome Completo' required onChange={handleChange} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Email</label>
                            <input type="email" name="email" placeholder='Email' required onChange={handleChange} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Telefone</label>
                            <input type="tel" name="phone" placeholder='Telefone' required onChange={handleChange} />
                        </div>
                    </div>

                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label>Estado</label>
                            <select name="state" id={styles.selects} required onChange={handleChange}>
                                <option value="">Selecione o estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>

                        <div className={styles.inputContainer}>
                            <label>CRP</label>
                            <input type="number" name="rcp" placeholder='CRP' required onChange={handleChange} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Abordagem</label>
                            <select name="approach" id={styles.selects} required onChange={handleChange}>
                                <option value="">Selecione a sua abordagem</option>
                                <option value="Psicanalitica">Psicanalítica</option>
                                <option value="Comportamental">Comportamental</option>
                                <option value="Cognitiva">Cognitiva</option>
                                <option value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>
                                <option value="Humanista">Humanista</option>
                                <option value="Existencial">Existencial</option>
                                <option value="Sistemica">Sistêmica/Familiar</option>
                                <option value="Psicodinamica">Psicodinâmica</option>
                                <option value="Gestalt">Gestalt</option>
                                <option value="Psicobiologica">Psicobiologica</option>
                                <option value="Transpessoa">Transpessoal</option>
                                <option value="Analitica">Analítica</option>
                                <option value="Feminista">Feminista</option>
                                <option value="Multicultural">Multicultural</option>
                                <option value="Construtivista">Construtivista</option>
                                <option value="Integral">Integral</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label>Especialidade</label>
                            <select name="specialty" id={styles.selects} required onChange={handleChange}>
                                <option value="all" disable selected >Selecione a sua especialidade</option>
                                <option class="opcoes" value="Psicologia Clínica">Psicologia Clínica</option>
                                <option value="Psicologia Organizacional">Psicologia Organizacional e do Trabalho</option>
                                <option value="Psicologia Escolar">Psicologia Escolar e Educacional</option>
                                <option value="Psicologia Social">Psicologia Social</option>
                                <option value="Psicologia do Esporte">Psicologia do Esporte</option>
                                <option value="Psicologia do Trafego">Psicologia do Tráfego</option>
                                <option value="Psicologia Hostpitalar">Psicologia Hospitalar</option>
                                <option value="Psicologia Juridica">Psicologia Jurídica</option>
                                <option value="Psicologia do Desenvolvimento">Psicologia do Desenvolvimento</option>
                                <option value="Neuropsicologia">Neuropsicologia</option>
                                <option value="Psicologia Comportamental">Psicologia Clínica Comportamental</option>
                                <option value="Psicologia da Saude">Psicologia da Saúde</option>
                                <option value="Psicologia Familiar">Psicologia Familiar e de Casais</option>
                                <option value="Psicologia Positiva">Psicologia Positiva</option>
                                <option value="Psicologia Gerontologica">Psicologia Gerontológica</option>
                                <option value="Psicologia do Consumidor">Psicologia do Consumidor</option>
                                <option value="Psicologia Transcultural">Psicologia Transcultural</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Especialidade 2 (Opcional)</label>
                            <select name="specialty2" id={styles.selects} onChange={handleChange}>
                                <option value="all" disable selected >Selecione a sua especialidade</option>
                                <option class="opcoes" value="Psicologia Clínica">Psicologia Clínica</option>
                                <option value="Psicologia Organizacional">Psicologia Organizacional e do Trabalho</option>
                                <option value="Psicologia Escolar">Psicologia Escolar e Educacional</option>
                                <option value="Psicologia Social">Psicologia Social</option>
                                <option value="Psicologia do Esporte">Psicologia do Esporte</option>
                                <option value="Psicologia do Trafego">Psicologia do Tráfego</option>
                                <option value="Psicologia Hostpitalar">Psicologia Hospitalar</option>
                                <option value="Psicologia Juridica">Psicologia Jurídica</option>
                                <option value="Psicologia do Desenvolvimento">Psicologia do Desenvolvimento</option>
                                <option value="Neuropsicologia">Neuropsicologia</option>
                                <option value="Psicologia Comportamental">Psicologia Clínica Comportamental</option>
                                <option value="Psicologia da Saude">Psicologia da Saúde</option>
                                <option value="Psicologia Familiar">Psicologia Familiar e de Casais</option>
                                <option value="Psicologia Positiva">Psicologia Positiva</option>
                                <option value="Psicologia Gerontologica">Psicologia Gerontológica</option>
                                <option value="Psicologia do Consumidor">Psicologia do Consumidor</option>
                                <option value="Psicologia Transcultural">Psicologia Transcultural</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Especialidade 3 (Opcional)</label>
                            <select name="specialty3" id={styles.selects} onChange={handleChange}>
                                <option value="all" disable selected >Selecione a sua especialidade</option>
                                <option class="opcoes" value="Psicologia Clínica">Psicologia Clínica</option>
                                <option value="Psicologia Organizacional">Psicologia Organizacional e do Trabalho</option>
                                <option value="Psicologia Escolar">Psicologia Escolar e Educacional</option>
                                <option value="Psicologia Social">Psicologia Social</option>
                                <option value="Psicologia do Esporte">Psicologia do Esporte</option>
                                <option value="Psicologia do Trafego">Psicologia do Tráfego</option>
                                <option value="Psicologia Hostpitalar">Psicologia Hospitalar</option>
                                <option value="Psicologia Juridica">Psicologia Jurídica</option>
                                <option value="Psicologia do Desenvolvimento">Psicologia do Desenvolvimento</option>
                                <option value="Neuropsicologia">Neuropsicologia</option>
                                <option value="Psicologia Comportamental">Psicologia Clínica Comportamental</option>
                                <option value="Psicologia da Saude">Psicologia da Saúde</option>
                                <option value="Psicologia Familiar">Psicologia Familiar e de Casais</option>
                                <option value="Psicologia Positiva">Psicologia Positiva</option>
                                <option value="Psicologia Gerontologica">Psicologia Gerontológica</option>
                                <option value="Psicologia do Consumidor">Psicologia do Consumidor</option>
                                <option value="Psicologia Transcultural">Psicologia Transcultural</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label>Formação</label>
                            <select name="education" id={styles.selects} onChange={handleChange}>
                                <option value="">Selecione sua formação</option>
                                <option value="Bacharel">Bacharel</option>
                                <option value="Pós-Graduado">Pós-Graduado</option>
                                <option value="Mestre">Mestre</option>
                                <option value="Doutor">Doutor</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Área de Formação</label>
                            <select name="educationArea" id={styles.selects} onChange={handleChange}>
                                <option value="">Selecione sua área de formação</option>
                                <option value="Psicologia Clínica">Psicologia Clínica</option>
                                <option value="Psicologia Hospitalar">Psicologia Hospitalar</option>
                                <option value="Psicologia Forense">Psicologia Forense</option>
                                <option value="Psicologia do Esporte">Psicologia do Esporte</option>
                                <option value="Psicologia Socia">Psicologia Social</option>
                                <option value="Psicopedagogia">Psicopedagogia</option>
                                <option value="Psicologia Organizacional e do Trabalho">Psicologia Organizacional e do Trabalho</option>
                                <option value="Psicologia de Trânsito">Psicologia de Trânsito</option>
                                <option value="Psicologia Escolar">Psicologia Escolar</option>
                                <option value="Psicologia da Saúde">Psicologia da Saúde</option>
                                <option value="Psicologia Comunitária">Psicologia Comunitária</option>
                                <option value="Psicologia Gerontológica">Psicologia Gerontológica</option>
                                <option value="Psicologia da Família">Psicologia da Família</option>
                                <option value="Psicologia do Desenvolvimento">Psicologia do Desenvolvimento</option>
                                <option value="Psicologia Transpessoal">Psicologia Transpessoal</option>
                                <option value="Psicologia Cognitiva">Psicologia Cognitiva</option>
                                <option value="Psicologia Existencial">Psicologia Existencial</option>
                                <option value="Psicologia Positiva">Psicologia Positiva</option>
                                <option value="Psicologia da Personalidade">Psicologia da Personalidade</option>
                                <option value="Psicologia da Sexualidade">Psicologia da Sexualidade</option>

                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Área de Formação 2 (Opcional)</label>
                            <select name="educationArea2" id={styles.selects} onChange={handleChange}>
                                <option value="">Selecione sua área de formação</option>
                                <option value="Psicologia Clínica">Psicologia Clínica</option>
                                <option value="Psicologia Hospitalar">Psicologia Hospitalar</option>
                                <option value="Psicologia Forense">Psicologia Forense</option>
                                <option value="Psicologia do Esporte">Psicologia do Esporte</option>
                                <option value="Psicologia Socia">Psicologia Social</option>
                                <option value="Psicopedagogia">Psicopedagogia</option>
                                <option value="Psicologia Organizacional e do Trabalho">Psicologia Organizacional e do Trabalho</option>
                                <option value="Psicologia de Trânsito">Psicologia de Trânsito</option>
                                <option value="Psicologia Escolar">Psicologia Escolar</option>
                                <option value="Psicologia da Saúde">Psicologia da Saúde</option>
                                <option value="Psicologia Comunitária">Psicologia Comunitária</option>
                                <option value="Psicologia Gerontológica">Psicologia Gerontológica</option>
                                <option value="Psicologia da Família">Psicologia da Família</option>
                                <option value="Psicologia do Desenvolvimento">Psicologia do Desenvolvimento</option>
                                <option value="Psicologia Transpessoal">Psicologia Transpessoal</option>
                                <option value="Psicologia Cognitiva">Psicologia Cognitiva</option>
                                <option value="Psicologia Existencial">Psicologia Existencial</option>
                                <option value="Psicologia Positiva">Psicologia Positiva</option>
                                <option value="Psicologia da Personalidade">Psicologia da Personalidade</option>
                                <option value="Psicologia da Sexualidade">Psicologia da Sexualidade</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}  >
                            <label>Serviço </label>
                            <select name="service" id={styles.selects} required onChange={handleChange}>
                                <option value="all" disabled selected>Coloque aqui o tipo do seu serviço</option>
                                <option class="opcoes" value="Abuso Infantil">Abuso Infantil</option>
                                <option value="Acompanhamento Psicológico">Acompanhamento Psicológico</option>
                                <option value="Acompanhamento Terapêutico">Acompanhamento Terapêutico</option>
                                <option value="Adoção de Filhos">Adoção de Filhos</option>
                                <option value="Adolescência">Adolescência</option>
                                <option value="Agorafobia">Agorafobia</option>
                                <option value="Agressão">Agressão</option>
                                <option value="Agressividade">Agressividade</option>
                                <option value="Alterações no Humor">Alterações no Humor</option>
                                <option value="Angústia">Angústia</option>
                                <option value="Anorexia Nervosa">Anorexia Nervosa</option>
                                <option value="Ansiedade">Ansiedade</option>
                                <option value="Aposentadoria">Aposentadoria</option>
                                <option value="Aprendizagem">Aprendizagem</option>
                                <option value="Assédio Moral">Assédio Moral</option>
                                <option value="Assertividade">Assertividade</option>
                                <option value="Assessoramento Acadêmico">Assessoramento Acadêmico</option>
                                <option value="Autismo">Autismo</option>
                                <option value="Autoaceitação">Autoaceitação</option>
                                <option value="Autocobrança">Autocobrança</option>
                                <option value="Autoconhecimento">Autoconhecimento</option>
                                <option value="Autoconfiança">Autoconfiança</option>
                                <option value="Autocuidade">Autocuidade</option>
                                <option value="Autoestima">Autoestima</option>
                                <option value="Automutilação">Automutilação</option>
                                <option value="Autonomia">Autonomia</option>
                                <option value="Avaliação Neuropsicológica">Avaliação Neuropsicológica</option>
                                <option value="Avaliação Psicológica">Avaliação Psicológica</option>
                                <option value="Baby Blues">Baby Blues</option>
                                <option value="Borderline">Borderline</option>
                                <option value="Bulimia">Bulimia</option>
                                <option value="Bullying">Bullying</option>
                                <option value="Câncer">Câncer</option>
                                <option value="Casais">Casais</option>
                                <option value="Casamento">Casamento</option>
                                <option value="Ciúmes">Ciúmes</option>
                                <option value="Claustrofobia">Claustrofobia</option>
                                <option value="Cleptomania">Cleptomania</option>
                                <option value="Coaching">Coaching</option>
                                <option value="Compulsão Alimentar">Compulsão Alimentar</option>
                                <option value="Compulsão por Compras">Compulsão por Compras</option>
                                <option value="Compulsões">Compulsões</option>
                                <option value="Conflitos Amorosos">Conflitos Amorosos</option>
                                <option value="Conflitos Familiares">Conflitos Familiares</option>
                                <option value="Conflitos Legais">Conflitos Legais</option>
                                <option value="Coronavírus">Coronavírus</option>
                                <option value="Criatividade">Criatividade</option>
                                <option value="Cuidados Paliativos">Cuidados Paliativos</option>
                                <option value="Culpa">Culpa</option>
                                <option value="Cyberbulling">Cyberbulling</option>
                                <option value="Dependência em Jogos">Dependência em Jogos</option>
                                <option value="Dependência Emocional">Dependência Emocional</option>
                                <option value="Dependência Química">Dependência Química</option>
                                <option value="Depressão">Depressão</option>
                                <option value="Depressão pós-parto">Depressão pós-parto</option>
                                <option value="Desenvolvimento Pessoal">Desenvolvimento Pessoal</option>
                                <option value="Desenvolvimento de Competências">Desenvolvimento de Competências</option>
                                <option value="Dificuldade de Aprendizagem">Dificuldade de Aprendizagem</option>
                                <option value="Discalculia">Discalculia</option>
                                <option value="Disfunções Sexuais">Disfunções Sexuais</option>
                                <option value="Dislexia">Dislexia</option>
                                <option value="Divórcio">Divórcio</option>
                                <option value="Doenças Crônicas">Doenças Crônicas</option>
                                <option value="Doenças Psicossomáticas">Doenças Psicossomáticas</option>
                                <option value="Dor">Dor</option>
                                <option value="Educação Escolar">Educação Escolar</option>
                                <option value="Educação Financeira">Educação Financeira</option>
                                <option value="Emagrecimento">Emagrecimento</option>
                                <option value="Empoderamento">Empoderamento</option>
                                <option value="Encoprese">Encoprese</option>
                                <option value="Endividamento">Endividamento</option>
                                <option value="Entrevistas Psicológicas">Entrevistas Psicológicas</option>
                                <option value="Envelhecimento">Envelhecimento</option>
                                <option value="Enurese">Enurese</option>
                                <option value="Esquizofrenia">Esquizofrenia</option>
                                <option value="Estresse">Estresse</option>
                                <option value="Estresse Pós-Traumático">Estresse Pós-Traumático</option>
                                <option value="Falta de Foco">Falta de Foco</option>
                                <option value="Família">Família</option>
                                <option value="Felicidade">Felicidade</option>
                                <option value="Filhos">Filhos</option>
                                <option value="Fobia Social">Fobia Social</option>
                                <option value="Fobias">Fobias</option>
                                <option value="Frustação">Frustação</option>
                                <option value="Gravidez">Gravidez</option>
                                <option value="Habilidades Sociais">Habilidades Sociais</option>
                                <option value="Hiperatividade">Hiperatividade</option>
                                <option value="Hipocondria">Hipocondria</option>
                                <option value="HIV">HIV</option>
                                <option value="Identidade">Identidade</option>
                                <option value="Identidade de Gênero">Identidade de Gênero</option>
                                <option value="Incertezas">Incertezas</option>
                                <option value="Problemas na Infância">Problemas na Infância</option>
                                <option value="Infertilidade/Esterilidade">Infertilidade/Esterilidade</option>
                                <option value="Insegurança">Insegurança</option>
                                <option value="Insônia">Insônia</option>
                                <option value="Inteligência Emocional">Inteligência Emocional</option>
                                <option value="Isolamento Social">Isolamento Social</option>
                                <option value="Laudos Bariátricos">Laudos Bariátricos</option>
                                <option value="Laudos de Esterilidade">Laudos de Esterilidade</option>
                                <option value="LGBTQIA+">LGBTQIA+</option>
                                <option value="Libido">Libido</option>
                                <option value="Libras">Libras</option>
                                <option value="Luto Perinatal">Luto Perinatal</option>
                                <option value="Maternidade">Maternidade</option>
                                <option value="Meditação">Meditação</option>
                                <option value="Medo de Dirigir">Medo de Dirigir</option>
                                <option value="Medo de falar em público">Medo de falar em público</option>
                                <option value="Medos">Medos</option>
                                <option value="Menopausa">Menopausa</option>
                                <option value="Mindfulness">Mindfulness</option>
                                <option value="Morte e Luto">Morte e Luto</option>
                                <option value="Mudança de País">Mudança de País</option>
                                <option value="Narcisismo">Narcisismo</option>
                                <option value="Negritude">Negritude</option>
                                <option value="Neuropsicologia">Neuropsicologia</option>
                                <option value="Neuropsicologia do Idoso">Neuropsicologia do Idoso</option>
                                <option value="Obesidade">Obesidade</option>
                                <option value="Obsessão">Obsessão</option>
                                <option value="Orientação de Educadores">Orientação de Educadores</option>
                                <option value="Orientação de Pais">Orientação de Pais</option>
                                <option value="Orientação para cirurgia bariátrica">Orientação para cirurgia bariátrica</option>
                                <option value="Orientação Profissional">Orientação Profissional</option>
                                <option value="Orientação Psicológica">Orientação Psicológica</option>
                                <option value="Orientação Psicopedagógica">Orientação Psicopedagógica</option>
                                <option value="Orientação Sexual">Orientação Sexual</option>
                                <option value="Orientação Vocacional">Orientação Vocacional</option>
                                <option value="Parar de Fumar">Parar de Fumar</option>
                                <option value="Paternidade">Paternidade</option>
                                <option value="Perfeccionismo">Perfeccionismo</option>
                                <option value="Pessoas com deficiência - PCD">Pessoas com deficiência - PCD</option>
                                <option value="Piromania">Piromania</option>
                                <option value="Planejamento Psicopedagógico">Planejamento Psicopedagógico</option>
                                <option value="Posvenção">Posvenção</option>
                                <option value="Preconceito">Preconceito</option>
                                <option value="Prevenção ao Abuso Sexual Infantil">Prevenção ao Abuso Sexual Infantil</option>
                                <option value="Problemas de Aprendizagem">Problemas de Aprendizagem</option>
                                <option value="Problemas Financeiros">Problemas Financeiros</option>
                                <option value="Procrastinação">Procrastinação</option>
                                <option value="Psicologia Esportiva">Psicologia Esportiva</option>
                                <option value="Psicologia Infantil">Psicologia Infantil</option>
                                <option value="Psicologia Jurídica">Psicologia Jurídica</option>
                                <option value="Puerpério">Puerpério</option>
                                <option value="Quarentena">Quarentena</option>
                                <option value="Racismo">Racismo</option>
                                <option value="Raiva">Raiva</option>
                                <option value="Reabilitação Cognitiva">Reabilitação Cognitiva</option>
                                <option value="Reabilitação Neuropsicológica">Reabilitação Neuropsicológica</option>
                                <option value="Relacionamento Abusivo">Relacionamento Abusivo</option>
                                <option value="Relacionamentos">Relacionamentos</option>
                                <option value="Reprodução Assistida">Reprodução Assistida</option>
                                <option value="Saúde do Trabalhador">Saúde do Trabalhador</option>
                                <option value="Saúde Mental">Saúde Mental</option>
                                <option value="Sexualidade">Sexualidade</option>
                                <option value="Síndromes">Síndromes</option>
                                <option value="Síndrome de Abstinência de Nicotina">Síndrome de Abstinência de Nicotina</option>
                                <option value="Síndrome de Asperger">Síndrome de Asperger</option>
                                <option value="Síndrome de Burnout">Síndrome de Burnout</option>
                                <option value="Síndrome do Pânico">Síndrome do Pânico</option>
                                <option value="Suicídio">Suicídio</option>
                                <option value="Supervisão Clínica em Psicologia">Supervisão Clínica em Psicologia</option>
                                <option value="Tabagismo">Tabagismo</option>
                                <option value="Tanatologia">Tanatologia</option>
                                <option value="Terapia Sexual">Terapia Sexual</option>
                                <option value="Terapia Familiar">Terapia Familiar</option>
                                <option value="Terceira Idade">Terceira Idade</option>
                                <option value="Timidez">Timidez</option>
                                <option value="Transição de Carreiras">Transição de Carreiras</option>
                                <option value="Transições">Transições</option>
                                <option value="Transtorno Afetivo Bipolar - TAB">Transtorno Afetivo Bipolar - TAB</option>
                                <option value="Transtorno Bipolar">Transtorno Bipolar</option>
                                <option value="Transtornos de Ansiedade">Transtornos de Ansiedade</option>
                                <option value="Transtorno de Ansiedade Generalizada - TAG">Transtorno de Ansiedade Generalizada - TAG</option>
                                <option value="Transtorno de Déficit de Atenção/Hiperatividade - TDA/TDAH">Transtorno de Déficit de Atenção/Hiperatividade - TDA/TDAH</option>
                                <option value="Transtorno de Estresse Pós Traumático - TEPT">Transtorno de Estresse Pós Traumático - TEPT</option>
                                <option value="Transtorno de Pânico ou Síndrome do Pânico">Transtorno de Pânico ou Síndrome do Pânico</option>
                                <option value="Transtorno de Personalidade">Transtorno de Personalidade</option>
                                <option value="Transtorno de Processamento Sensorial - TPS">Transtorno de Processamento Sensorial - TPS</option>
                                <option value="Transtorno Depressivo Persistente - TDP (Distimia)">Transtorno Depressivo Persistente - TDP (Distimia)</option>
                                <option value="Transtorno do Controle dos Impulsos">Transtorno do Controle dos Impulsos</option>
                                <option value="Transtorno do Espectro Autista - TEA">Transtorno do Espectro Autista - TEA</option>
                                <option value="Transtorno do Sono">Transtorno do Sono</option>
                                <option value="Transtorno Obsessivo Compulsivo - TOC">Transtorno Obsessivo Compulsivo - TOC</option>
                                <option value="Transtorno Opositor Desafiador - TOD">Transtorno Opositor Desafiador - TOD</option>
                                <option value="Transtorno por Uso de Álcool">Transtorno por Uso de Álcool</option>
                                <option value="Transtornos Alimentares">Transtornos Alimentares</option>
                                <option value="Transtornos Cognitivos">Transtornos Cognitivos</option>
                                <option value="Transtornos Psiquiátricos">Transtornos Psiquiátricos</option>
                                <option value="Transtornos Somatoformes">Transtornos Somatoformes</option>
                                <option value="Tratamento de Memória">Tratamento de Memória</option>
                                <option value="Traumas">Traumas</option>
                                <option value="Tricotilomania">Tricotilomania</option>
                                <option value="Tripofobia">Tripofobia</option>
                                <option value="Tristeza">Tristeza</option>
                                <option value="Vícios">Vícios</option>
                                <option value="Violência Doméstica">Violência Doméstica</option>
                                <option value="Violência Sexual">Violência Sexual</option>
                                <option value="Xenofobia">Xenofobia</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Serviço 2 (Opcional)</label>
                            <select name="service2" id={styles.selects} onChange={handleChange}>
                                <option value="all" disabled selected>Coloque aqui o tipo do seu serviço</option>
                                <option class="opcoes" value="Abuso Infantil">Abuso Infantil</option>
                                <option value="Acompanhamento Psicológico">Acompanhamento Psicológico</option>
                                <option value="Acompanhamento Terapêutico">Acompanhamento Terapêutico</option>
                                <option value="Adoção de Filhos">Adoção de Filhos</option>
                                <option value="Adolescência">Adolescência</option>
                                <option value="Agorafobia">Agorafobia</option>
                                <option value="Agressão">Agressão</option>
                                <option value="Agressividade">Agressividade</option>
                                <option value="Alterações no Humor">Alterações no Humor</option>
                                <option value="Angústia">Angústia</option>
                                <option value="Anorexia Nervosa">Anorexia Nervosa</option>
                                <option value="Ansiedade">Ansiedade</option>
                                <option value="Aposentadoria">Aposentadoria</option>
                                <option value="Aprendizagem">Aprendizagem</option>
                                <option value="Assédio Moral">Assédio Moral</option>
                                <option value="Assertividade">Assertividade</option>
                                <option value="Assessoramento Acadêmico">Assessoramento Acadêmico</option>
                                <option value="Autismo">Autismo</option>
                                <option value="Autoaceitação">Autoaceitação</option>
                                <option value="Autocobrança">Autocobrança</option>
                                <option value="Autoconhecimento">Autoconhecimento</option>
                                <option value="Autoconfiança">Autoconfiança</option>
                                <option value="Autocuidade">Autocuidade</option>
                                <option value="Autoestima">Autoestima</option>
                                <option value="Automutilação">Automutilação</option>
                                <option value="Autonomia">Autonomia</option>
                                <option value="Avaliação Neuropsicológica">Avaliação Neuropsicológica</option>
                                <option value="Avaliação Psicológica">Avaliação Psicológica</option>
                                <option value="Baby Blues">Baby Blues</option>
                                <option value="Borderline">Borderline</option>
                                <option value="Bulimia">Bulimia</option>
                                <option value="Bullying">Bullying</option>
                                <option value="Câncer">Câncer</option>
                                <option value="Casais">Casais</option>
                                <option value="Casamento">Casamento</option>
                                <option value="Ciúmes">Ciúmes</option>
                                <option value="Claustrofobia">Claustrofobia</option>
                                <option value="Cleptomania">Cleptomania</option>
                                <option value="Coaching">Coaching</option>
                                <option value="Compulsão Alimentar">Compulsão Alimentar</option>
                                <option value="Compulsão por Compras">Compulsão por Compras</option>
                                <option value="Compulsões">Compulsões</option>
                                <option value="Conflitos Amorosos">Conflitos Amorosos</option>
                                <option value="Conflitos Familiares">Conflitos Familiares</option>
                                <option value="Conflitos Legais">Conflitos Legais</option>
                                <option value="Coronavírus">Coronavírus</option>
                                <option value="Criatividade">Criatividade</option>
                                <option value="Cuidados Paliativos">Cuidados Paliativos</option>
                                <option value="Culpa">Culpa</option>
                                <option value="Cyberbulling">Cyberbulling</option>
                                <option value="Dependência em Jogos">Dependência em Jogos</option>
                                <option value="Dependência Emocional">Dependência Emocional</option>
                                <option value="Dependência Química">Dependência Química</option>
                                <option value="Depressão">Depressão</option>
                                <option value="Depressão pós-parto">Depressão pós-parto</option>
                                <option value="Desenvolvimento Pessoal">Desenvolvimento Pessoal</option>
                                <option value="Desenvolvimento de Competências">Desenvolvimento de Competências</option>
                                <option value="Dificuldade de Aprendizagem">Dificuldade de Aprendizagem</option>
                                <option value="Discalculia">Discalculia</option>
                                <option value="Disfunções Sexuais">Disfunções Sexuais</option>
                                <option value="Dislexia">Dislexia</option>
                                <option value="Divórcio">Divórcio</option>
                                <option value="Doenças Crônicas">Doenças Crônicas</option>
                                <option value="Doenças Psicossomáticas">Doenças Psicossomáticas</option>
                                <option value="Dor">Dor</option>
                                <option value="Educação Escolar">Educação Escolar</option>
                                <option value="Educação Financeira">Educação Financeira</option>
                                <option value="Emagrecimento">Emagrecimento</option>
                                <option value="Empoderamento">Empoderamento</option>
                                <option value="Encoprese">Encoprese</option>
                                <option value="Endividamento">Endividamento</option>
                                <option value="Entrevistas Psicológicas">Entrevistas Psicológicas</option>
                                <option value="Envelhecimento">Envelhecimento</option>
                                <option value="Enurese">Enurese</option>
                                <option value="Esquizofrenia">Esquizofrenia</option>
                                <option value="Estresse">Estresse</option>
                                <option value="Estresse Pós-Traumático">Estresse Pós-Traumático</option>
                                <option value="Falta de Foco">Falta de Foco</option>
                                <option value="Família">Família</option>
                                <option value="Felicidade">Felicidade</option>
                                <option value="Filhos">Filhos</option>
                                <option value="Fobia Social">Fobia Social</option>
                                <option value="Fobias">Fobias</option>
                                <option value="Frustação">Frustação</option>
                                <option value="Gravidez">Gravidez</option>
                                <option value="Habilidades Sociais">Habilidades Sociais</option>
                                <option value="Hiperatividade">Hiperatividade</option>
                                <option value="Hipocondria">Hipocondria</option>
                                <option value="HIV">HIV</option>
                                <option value="Identidade">Identidade</option>
                                <option value="Identidade de Gênero">Identidade de Gênero</option>
                                <option value="Incertezas">Incertezas</option>
                                <option value="Problemas na Infância">Problemas na Infância</option>
                                <option value="Infertilidade/Esterilidade">Infertilidade/Esterilidade</option>
                                <option value="Insegurança">Insegurança</option>
                                <option value="Insônia">Insônia</option>
                                <option value="Inteligência Emocional">Inteligência Emocional</option>
                                <option value="Isolamento Social">Isolamento Social</option>
                                <option value="Laudos Bariátricos">Laudos Bariátricos</option>
                                <option value="Laudos de Esterilidade">Laudos de Esterilidade</option>
                                <option value="LGBTQIA+">LGBTQIA+</option>
                                <option value="Libido">Libido</option>
                                <option value="Libras">Libras</option>
                                <option value="Luto Perinatal">Luto Perinatal</option>
                                <option value="Maternidade">Maternidade</option>
                                <option value="Meditação">Meditação</option>
                                <option value="Medo de Dirigir">Medo de Dirigir</option>
                                <option value="Medo de falar em público">Medo de falar em público</option>
                                <option value="Medos">Medos</option>
                                <option value="Menopausa">Menopausa</option>
                                <option value="Mindfulness">Mindfulness</option>
                                <option value="Morte e Luto">Morte e Luto</option>
                                <option value="Mudança de País">Mudança de País</option>
                                <option value="Narcisismo">Narcisismo</option>
                                <option value="Negritude">Negritude</option>
                                <option value="Neuropsicologia">Neuropsicologia</option>
                                <option value="Neuropsicologia do Idoso">Neuropsicologia do Idoso</option>
                                <option value="Obesidade">Obesidade</option>
                                <option value="Obsessão">Obsessão</option>
                                <option value="Orientação de Educadores">Orientação de Educadores</option>
                                <option value="Orientação de Pais">Orientação de Pais</option>
                                <option value="Orientação para cirurgia bariátrica">Orientação para cirurgia bariátrica</option>
                                <option value="Orientação Profissional">Orientação Profissional</option>
                                <option value="Orientação Psicológica">Orientação Psicológica</option>
                                <option value="Orientação Psicopedagógica">Orientação Psicopedagógica</option>
                                <option value="Orientação Sexual">Orientação Sexual</option>
                                <option value="Orientação Vocacional">Orientação Vocacional</option>
                                <option value="Parar de Fumar">Parar de Fumar</option>
                                <option value="Paternidade">Paternidade</option>
                                <option value="Perfeccionismo">Perfeccionismo</option>
                                <option value="Pessoas com deficiência - PCD">Pessoas com deficiência - PCD</option>
                                <option value="Piromania">Piromania</option>
                                <option value="Planejamento Psicopedagógico">Planejamento Psicopedagógico</option>
                                <option value="Posvenção">Posvenção</option>
                                <option value="Preconceito">Preconceito</option>
                                <option value="Prevenção ao Abuso Sexual Infantil">Prevenção ao Abuso Sexual Infantil</option>
                                <option value="Problemas de Aprendizagem">Problemas de Aprendizagem</option>
                                <option value="Problemas Financeiros">Problemas Financeiros</option>
                                <option value="Procrastinação">Procrastinação</option>
                                <option value="Psicologia Esportiva">Psicologia Esportiva</option>
                                <option value="Psicologia Infantil">Psicologia Infantil</option>
                                <option value="Psicologia Jurídica">Psicologia Jurídica</option>
                                <option value="Puerpério">Puerpério</option>
                                <option value="Quarentena">Quarentena</option>
                                <option value="Racismo">Racismo</option>
                                <option value="Raiva">Raiva</option>
                                <option value="Reabilitação Cognitiva">Reabilitação Cognitiva</option>
                                <option value="Reabilitação Neuropsicológica">Reabilitação Neuropsicológica</option>
                                <option value="Relacionamento Abusivo">Relacionamento Abusivo</option>
                                <option value="Relacionamentos">Relacionamentos</option>
                                <option value="Reprodução Assistida">Reprodução Assistida</option>
                                <option value="Saúde do Trabalhador">Saúde do Trabalhador</option>
                                <option value="Saúde Mental">Saúde Mental</option>
                                <option value="Sexualidade">Sexualidade</option>
                                <option value="Síndromes">Síndromes</option>
                                <option value="Síndrome de Abstinência de Nicotina">Síndrome de Abstinência de Nicotina</option>
                                <option value="Síndrome de Asperger">Síndrome de Asperger</option>
                                <option value="Síndrome de Burnout">Síndrome de Burnout</option>
                                <option value="Síndrome do Pânico">Síndrome do Pânico</option>
                                <option value="Suicídio">Suicídio</option>
                                <option value="Supervisão Clínica em Psicologia">Supervisão Clínica em Psicologia</option>
                                <option value="Tabagismo">Tabagismo</option>
                                <option value="Tanatologia">Tanatologia</option>
                                <option value="Terapia Sexual">Terapia Sexual</option>
                                <option value="Terapia Familiar">Terapia Familiar</option>
                                <option value="Terceira Idade">Terceira Idade</option>
                                <option value="Timidez">Timidez</option>
                                <option value="Transição de Carreiras">Transição de Carreiras</option>
                                <option value="Transições">Transições</option>
                                <option value="Transtorno Afetivo Bipolar - TAB">Transtorno Afetivo Bipolar - TAB</option>
                                <option value="Transtorno Bipolar">Transtorno Bipolar</option>
                                <option value="Transtornos de Ansiedade">Transtornos de Ansiedade</option>
                                <option value="Transtorno de Ansiedade Generalizada - TAG">Transtorno de Ansiedade Generalizada - TAG</option>
                                <option value="Transtorno de Déficit de Atenção/Hiperatividade - TDA/TDAH">Transtorno de Déficit de Atenção/Hiperatividade - TDA/TDAH</option>
                                <option value="Transtorno de Estresse Pós Traumático - TEPT">Transtorno de Estresse Pós Traumático - TEPT</option>
                                <option value="Transtorno de Pânico ou Síndrome do Pânico">Transtorno de Pânico ou Síndrome do Pânico</option>
                                <option value="Transtorno de Personalidade">Transtorno de Personalidade</option>
                                <option value="Transtorno de Processamento Sensorial - TPS">Transtorno de Processamento Sensorial - TPS</option>
                                <option value="Transtorno Depressivo Persistente - TDP (Distimia)">Transtorno Depressivo Persistente - TDP (Distimia)</option>
                                <option value="Transtorno do Controle dos Impulsos">Transtorno do Controle dos Impulsos</option>
                                <option value="Transtorno do Espectro Autista - TEA">Transtorno do Espectro Autista - TEA</option>
                                <option value="Transtorno do Sono">Transtorno do Sono</option>
                                <option value="Transtorno Obsessivo Compulsivo - TOC">Transtorno Obsessivo Compulsivo - TOC</option>
                                <option value="Transtorno Opositor Desafiador - TOD">Transtorno Opositor Desafiador - TOD</option>
                                <option value="Transtorno por Uso de Álcool">Transtorno por Uso de Álcool</option>
                                <option value="Transtornos Alimentares">Transtornos Alimentares</option>
                                <option value="Transtornos Cognitivos">Transtornos Cognitivos</option>
                                <option value="Transtornos Psiquiátricos">Transtornos Psiquiátricos</option>
                                <option value="Transtornos Somatoformes">Transtornos Somatoformes</option>
                                <option value="Tratamento de Memória">Tratamento de Memória</option>
                                <option value="Traumas">Traumas</option>
                                <option value="Tricotilomania">Tricotilomania</option>
                                <option value="Tripofobia">Tripofobia</option>
                                <option value="Tristeza">Tristeza</option>
                                <option value="Vícios">Vícios</option>
                                <option value="Violência Doméstica">Violência Doméstica</option>
                                <option value="Violência Sexual">Violência Sexual</option>
                                <option value="Xenofobia">Xenofobia</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Serviço 3 (Opcional)</label>
                            <select name="service3" id={styles.selects} onChange={handleChange}>
                                <option value="all" disabled selected>Coloque aqui o tipo do seu serviço</option>
                                <option class="opcoes" value="Abuso Infantil">Abuso Infantil</option>
                                <option value="Acompanhamento Psicológico">Acompanhamento Psicológico</option>
                                <option value="Acompanhamento Terapêutico">Acompanhamento Terapêutico</option>
                                <option value="Adoção de Filhos">Adoção de Filhos</option>
                                <option value="Adolescência">Adolescência</option>
                                <option value="Agorafobia">Agorafobia</option>
                                <option value="Agressão">Agressão</option>
                                <option value="Agressividade">Agressividade</option>
                                <option value="Alterações no Humor">Alterações no Humor</option>
                                <option value="Angústia">Angústia</option>
                                <option value="Anorexia Nervosa">Anorexia Nervosa</option>
                                <option value="Ansiedade">Ansiedade</option>
                                <option value="Aposentadoria">Aposentadoria</option>
                                <option value="Aprendizagem">Aprendizagem</option>
                                <option value="Assédio Moral">Assédio Moral</option>
                                <option value="Assertividade">Assertividade</option>
                                <option value="Assessoramento Acadêmico">Assessoramento Acadêmico</option>
                                <option value="Autismo">Autismo</option>
                                <option value="Autoaceitação">Autoaceitação</option>
                                <option value="Autocobrança">Autocobrança</option>
                                <option value="Autoconhecimento">Autoconhecimento</option>
                                <option value="Autoconfiança">Autoconfiança</option>
                                <option value="Autocuidade">Autocuidade</option>
                                <option value="Autoestima">Autoestima</option>
                                <option value="Automutilação">Automutilação</option>
                                <option value="Autonomia">Autonomia</option>
                                <option value="Avaliação Neuropsicológica">Avaliação Neuropsicológica</option>
                                <option value="Avaliação Psicológica">Avaliação Psicológica</option>
                                <option value="Baby Blues">Baby Blues</option>
                                <option value="Borderline">Borderline</option>
                                <option value="Bulimia">Bulimia</option>
                                <option value="Bullying">Bullying</option>
                                <option value="Câncer">Câncer</option>
                                <option value="Casais">Casais</option>
                                <option value="Casamento">Casamento</option>
                                <option value="Ciúmes">Ciúmes</option>
                                <option value="Claustrofobia">Claustrofobia</option>
                                <option value="Cleptomania">Cleptomania</option>
                                <option value="Coaching">Coaching</option>
                                <option value="Compulsão Alimentar">Compulsão Alimentar</option>
                                <option value="Compulsão por Compras">Compulsão por Compras</option>
                                <option value="Compulsões">Compulsões</option>
                                <option value="Conflitos Amorosos">Conflitos Amorosos</option>
                                <option value="Conflitos Familiares">Conflitos Familiares</option>
                                <option value="Conflitos Legais">Conflitos Legais</option>
                                <option value="Coronavírus">Coronavírus</option>
                                <option value="Criatividade">Criatividade</option>
                                <option value="Cuidados Paliativos">Cuidados Paliativos</option>
                                <option value="Culpa">Culpa</option>
                                <option value="Cyberbulling">Cyberbulling</option>
                                <option value="Dependência em Jogos">Dependência em Jogos</option>
                                <option value="Dependência Emocional">Dependência Emocional</option>
                                <option value="Dependência Química">Dependência Química</option>
                                <option value="Depressão">Depressão</option>
                                <option value="Depressão pós-parto">Depressão pós-parto</option>
                                <option value="Desenvolvimento Pessoal">Desenvolvimento Pessoal</option>
                                <option value="Desenvolvimento de Competências">Desenvolvimento de Competências</option>
                                <option value="Dificuldade de Aprendizagem">Dificuldade de Aprendizagem</option>
                                <option value="Discalculia">Discalculia</option>
                                <option value="Disfunções Sexuais">Disfunções Sexuais</option>
                                <option value="Dislexia">Dislexia</option>
                                <option value="Divórcio">Divórcio</option>
                                <option value="Doenças Crônicas">Doenças Crônicas</option>
                                <option value="Doenças Psicossomáticas">Doenças Psicossomáticas</option>
                                <option value="Dor">Dor</option>
                                <option value="Educação Escolar">Educação Escolar</option>
                                <option value="Educação Financeira">Educação Financeira</option>
                                <option value="Emagrecimento">Emagrecimento</option>
                                <option value="Empoderamento">Empoderamento</option>
                                <option value="Encoprese">Encoprese</option>
                                <option value="Endividamento">Endividamento</option>
                                <option value="Entrevistas Psicológicas">Entrevistas Psicológicas</option>
                                <option value="Envelhecimento">Envelhecimento</option>
                                <option value="Enurese">Enurese</option>
                                <option value="Esquizofrenia">Esquizofrenia</option>
                                <option value="Estresse">Estresse</option>
                                <option value="Estresse Pós-Traumático">Estresse Pós-Traumático</option>
                                <option value="Falta de Foco">Falta de Foco</option>
                                <option value="Família">Família</option>
                                <option value="Felicidade">Felicidade</option>
                                <option value="Filhos">Filhos</option>
                                <option value="Fobia Social">Fobia Social</option>
                                <option value="Fobias">Fobias</option>
                                <option value="Frustação">Frustação</option>
                                <option value="Gravidez">Gravidez</option>
                                <option value="Habilidades Sociais">Habilidades Sociais</option>
                                <option value="Hiperatividade">Hiperatividade</option>
                                <option value="Hipocondria">Hipocondria</option>
                                <option value="HIV">HIV</option>
                                <option value="Identidade">Identidade</option>
                                <option value="Identidade de Gênero">Identidade de Gênero</option>
                                <option value="Incertezas">Incertezas</option>
                                <option value="Problemas na Infância">Problemas na Infância</option>
                                <option value="Infertilidade/Esterilidade">Infertilidade/Esterilidade</option>
                                <option value="Insegurança">Insegurança</option>
                                <option value="Insônia">Insônia</option>
                                <option value="Inteligência Emocional">Inteligência Emocional</option>
                                <option value="Isolamento Social">Isolamento Social</option>
                                <option value="Laudos Bariátricos">Laudos Bariátricos</option>
                                <option value="Laudos de Esterilidade">Laudos de Esterilidade</option>
                                <option value="LGBTQIA+">LGBTQIA+</option>
                                <option value="Libido">Libido</option>
                                <option value="Libras">Libras</option>
                                <option value="Luto Perinatal">Luto Perinatal</option>
                                <option value="Maternidade">Maternidade</option>
                                <option value="Meditação">Meditação</option>
                                <option value="Medo de Dirigir">Medo de Dirigir</option>
                                <option value="Medo de falar em público">Medo de falar em público</option>
                                <option value="Medos">Medos</option>
                                <option value="Menopausa">Menopausa</option>
                                <option value="Mindfulness">Mindfulness</option>
                                <option value="Morte e Luto">Morte e Luto</option>
                                <option value="Mudança de País">Mudança de País</option>
                                <option value="Narcisismo">Narcisismo</option>
                                <option value="Negritude">Negritude</option>
                                <option value="Neuropsicologia">Neuropsicologia</option>
                                <option value="Neuropsicologia do Idoso">Neuropsicologia do Idoso</option>
                                <option value="Obesidade">Obesidade</option>
                                <option value="Obsessão">Obsessão</option>
                                <option value="Orientação de Educadores">Orientação de Educadores</option>
                                <option value="Orientação de Pais">Orientação de Pais</option>
                                <option value="Orientação para cirurgia bariátrica">Orientação para cirurgia bariátrica</option>
                                <option value="Orientação Profissional">Orientação Profissional</option>
                                <option value="Orientação Psicológica">Orientação Psicológica</option>
                                <option value="Orientação Psicopedagógica">Orientação Psicopedagógica</option>
                                <option value="Orientação Sexual">Orientação Sexual</option>
                                <option value="Orientação Vocacional">Orientação Vocacional</option>
                                <option value="Parar de Fumar">Parar de Fumar</option>
                                <option value="Paternidade">Paternidade</option>
                                <option value="Perfeccionismo">Perfeccionismo</option>
                                <option value="Pessoas com deficiência - PCD">Pessoas com deficiência - PCD</option>
                                <option value="Piromania">Piromania</option>
                                <option value="Planejamento Psicopedagógico">Planejamento Psicopedagógico</option>
                                <option value="Posvenção">Posvenção</option>
                                <option value="Preconceito">Preconceito</option>
                                <option value="Prevenção ao Abuso Sexual Infantil">Prevenção ao Abuso Sexual Infantil</option>
                                <option value="Problemas de Aprendizagem">Problemas de Aprendizagem</option>
                                <option value="Problemas Financeiros">Problemas Financeiros</option>
                                <option value="Procrastinação">Procrastinação</option>
                                <option value="Psicologia Esportiva">Psicologia Esportiva</option>
                                <option value="Psicologia Infantil">Psicologia Infantil</option>
                                <option value="Psicologia Jurídica">Psicologia Jurídica</option>
                                <option value="Puerpério">Puerpério</option>
                                <option value="Quarentena">Quarentena</option>
                                <option value="Racismo">Racismo</option>
                                <option value="Raiva">Raiva</option>
                                <option value="Reabilitação Cognitiva">Reabilitação Cognitiva</option>
                                <option value="Reabilitação Neuropsicológica">Reabilitação Neuropsicológica</option>
                                <option value="Relacionamento Abusivo">Relacionamento Abusivo</option>
                                <option value="Relacionamentos">Relacionamentos</option>
                                <option value="Reprodução Assistida">Reprodução Assistida</option>
                                <option value="Saúde do Trabalhador">Saúde do Trabalhador</option>
                                <option value="Saúde Mental">Saúde Mental</option>
                                <option value="Sexualidade">Sexualidade</option>
                                <option value="Síndromes">Síndromes</option>
                                <option value="Síndrome de Abstinência de Nicotina">Síndrome de Abstinência de Nicotina</option>
                                <option value="Síndrome de Asperger">Síndrome de Asperger</option>
                                <option value="Síndrome de Burnout">Síndrome de Burnout</option>
                                <option value="Síndrome do Pânico">Síndrome do Pânico</option>
                                <option value="Suicídio">Suicídio</option>
                                <option value="Supervisão Clínica em Psicologia">Supervisão Clínica em Psicologia</option>
                                <option value="Tabagismo">Tabagismo</option>
                                <option value="Tanatologia">Tanatologia</option>
                                <option value="Terapia Sexual">Terapia Sexual</option>
                                <option value="Terapia Familiar">Terapia Familiar</option>
                                <option value="Terceira Idade">Terceira Idade</option>
                                <option value="Timidez">Timidez</option>
                                <option value="Transição de Carreiras">Transição de Carreiras</option>
                                <option value="Transições">Transições</option>
                                <option value="Transtorno Afetivo Bipolar - TAB">Transtorno Afetivo Bipolar - TAB</option>
                                <option value="Transtorno Bipolar">Transtorno Bipolar</option>
                                <option value="Transtornos de Ansiedade">Transtornos de Ansiedade</option>
                                <option value="Transtorno de Ansiedade Generalizada - TAG">Transtorno de Ansiedade Generalizada - TAG</option>
                                <option value="Transtorno de Déficit de Atenção/Hiperatividade - TDA/TDAH">Transtorno de Déficit de Atenção/Hiperatividade - TDA/TDAH</option>
                                <option value="Transtorno de Estresse Pós Traumático - TEPT">Transtorno de Estresse Pós Traumático - TEPT</option>
                                <option value="Transtorno de Pânico ou Síndrome do Pânico">Transtorno de Pânico ou Síndrome do Pânico</option>
                                <option value="Transtorno de Personalidade">Transtorno de Personalidade</option>
                                <option value="Transtorno de Processamento Sensorial - TPS">Transtorno de Processamento Sensorial - TPS</option>
                                <option value="Transtorno Depressivo Persistente - TDP (Distimia)">Transtorno Depressivo Persistente - TDP (Distimia)</option>
                                <option value="Transtorno do Controle dos Impulsos">Transtorno do Controle dos Impulsos</option>
                                <option value="Transtorno do Espectro Autista - TEA">Transtorno do Espectro Autista - TEA</option>
                                <option value="Transtorno do Sono">Transtorno do Sono</option>
                                <option value="Transtorno Obsessivo Compulsivo - TOC">Transtorno Obsessivo Compulsivo - TOC</option>
                                <option value="Transtorno Opositor Desafiador - TOD">Transtorno Opositor Desafiador - TOD</option>
                                <option value="Transtorno por Uso de Álcool">Transtorno por Uso de Álcool</option>
                                <option value="Transtornos Alimentares">Transtornos Alimentares</option>
                                <option value="Transtornos Cognitivos">Transtornos Cognitivos</option>
                                <option value="Transtornos Psiquiátricos">Transtornos Psiquiátricos</option>
                                <option value="Transtornos Somatoformes">Transtornos Somatoformes</option>
                                <option value="Tratamento de Memória">Tratamento de Memória</option>
                                <option value="Traumas">Traumas</option>
                                <option value="Tricotilomania">Tricotilomania</option>
                                <option value="Tripofobia">Tripofobia</option>
                                <option value="Tristeza">Tristeza</option>
                                <option value="Vícios">Vícios</option>
                                <option value="Violência Doméstica">Violência Doméstica</option>
                                <option value="Violência Sexual">Violência Sexual</option>
                                <option value="Xenofobia">Xenofobia</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer}>
                            <label>Foto</label>
                            <input type="file" name="image" accept="image/*" onChange={handleChange} />
                        </div>

                        <div className={styles.inputContainer}>
                            <label>Gênero</label>
                            <select name="gender" id={styles.selects} onChange={handleChange} required>
                                <option value="" disabled selected>Escolha o Gênero</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Modalidade de Atendimento</label>
                            <select name="modality" id={styles.selects} onChange={handleChange} required>
                                <option value="" disabled selected>Escolha a Modalidade de Atendimento</option>
                                <option value="Online">Online</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Hibrido">Híbrido</option>
                            </select>
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Atende em Libras</label>
                            <select name="sign_language" id={styles.selects} onChange={handleChange} required>
                                <option value="" disabled selected>Escolha a Acessibilidade</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer} id={styles.bio}>
                            <label>Biografia Resumida</label>
                            <textarea name="brief_bio" placeholder='Fale sobre você' maxLength={300} required onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className={styles.accountEdit}>
                        <div className={styles.inputContainer} id={styles.bioComplete}>
                            <label>Biografia Completa</label>
                            <textarea name="bio" placeholder='Fale mais sobre você' maxLength={1355} onChange={handleChange}></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ExpertProfilePage