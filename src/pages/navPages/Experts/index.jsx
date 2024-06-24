import styles from './Experts.module.css'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import ScrollTop from '../../../components/ScrollTop';
import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import axios from '../../../api/axios'
import toast, { Toaster } from 'react-hot-toast';

function Experts() {

    const navigate = useNavigate();
    const handleButtonClick = (id) => {
        navigate(`/perfil-completo/${id}`);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [approachFilter, setApproachFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');
    const [accessibilityFilter, setAccessibilityFilter] = useState(false);
    const [serviceTypeFilter, setServiceTypeFilter] = useState('all');
    const [modalityTypeFilter, setModalityTypeFilter] = useState('all');

    const [loading, setLoading] = useState(false);
    const [experts, setExperts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Mude para a rota do formulário do especialista, a mesma rota que está no FullProfile.jsx.
            const response = await axios.get('http://localhost:3003/full-profile');
            const uniqueExperts = removeDuplicates([...experts, ...response.data], 'id');
            setExperts(uniqueExperts);
            if (response.data.length > 0) {
                toast.success("Especialistas carregados!", {
                    position: 'top-right',
                    style: {
                        background: '#001908',
                        color: '#F7F6FB',
                        width: '260px',
                        height: '50px',
                        fontSize: '16px',
                        borderLeft: '5px solid #00ff52',
                    }
                });
                console.log("%cEspecialistas carregados!", 'color: #00ff52; background-color: #001908');
            } else {
                toast.error("Nenhum especialista encontrado.", {
                    icon: '⚠️',
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
                console.log("%cNenhum especialista encontrado.", 'color: #ffff00; background-color: #191900');
            }
        } catch (error) {
            console.error('Erro ao buscar especialistas:', error);
            toast.error("Erro ao buscar especialistas.", {
                icon: '⚠️',
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
            console.log("%cErro ao buscar especialistas.", 'color: #ffff00; background-color: #191900');
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && !loading && hasMore) {
            setPage(prevPage => prevPage + 1);
            fetchMoreExperts();
        }
    };

    const fetchMoreExperts = async () => {
        setLoading(true);
        try {
            // Mude para a rota do formulário do especialista, a mesma rota que está no FullProfile.jsx.
            const response = await axios.get('http://localhost:3003/full-profile', {
                params: { _page: page + 1, _limit: 10 }
            });
            const uniqueExperts = removeDuplicates([...experts, ...response.data], 'id');
            setExperts(uniqueExperts);
            if (response.data.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Erro ao carregar mais especialistas:', error);
            toast.error("Erro ao carregar mais especialistas.", {
                icon: '😢',
                position: 'top-right',
                style: {
                    background: '#19040b',
                    color: '#F7F6FB',
                    width: '350px',
                    height: '50px',
                    fontSize: '16px',
                    borderLeft: '5px solid #ff2975',
                },
                iconSize: '20px',
            });
            console.log("%cErro ao carregar mais especialistas.", 'color: #ff2975; background-color: #19040b');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    const removeDuplicates = (arr, key) => {
        return [...new Map(arr.map(item => [item[key], item])).values()];
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredExperts = experts.filter((expert) => {
        const matchesSearchTerm = expert.name && expert.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = specialtyFilter === 'all' || expert.specialty === specialtyFilter;
        const matchesApproach = approachFilter === 'all' || expert.approach === approachFilter;
        const matchesGender = genderFilter === 'all' || expert.gender === genderFilter;
        const matchesLocation = locationFilter === 'all' || expert.state === locationFilter || expert.city === locationFilter;
        const matchesServiceType = serviceTypeFilter === 'all' || (serviceTypeFilter === 'online' ? expert.online : !expert.online);
        const matchesAccessibility = !accessibilityFilter || expert.accessibility;
        // const matchesAccessibility = accessibilityFilter === 'all' || expert.accessibility === (accessibilityFilter === 'yes');
        const matchesModalityTypeFilter = modalityTypeFilter === 'all' || expert.modality === modalityTypeFilter;

        return matchesSearchTerm && matchesSpecialty && matchesApproach && matchesGender && matchesLocation && matchesServiceType && matchesAccessibility && matchesModalityTypeFilter;
    });

    // const renderStars = (rating) => {
    //     const fullStars = Math.floor(rating);
    //     const halfStar = rating % 1 !== 0;
    //     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    //     return (
    //         <>
    //             {Array(fullStars).fill(<FaStar className={styles.expert_all_star} />)}
    //             {halfStar && <FaStarHalfAlt className={styles.expert_all_star} />}
    //             {Array(emptyStars).fill(<FaRegStar className={styles.expert_all_star} />)}
    //         </>
    //     );
    // };    

    return (
        <>
            <ScrollTop />
            <div>

                {/* Hero. */}
                <section className={styles.expert_hero}>
                    <article className={styles.expert_container}>
                        <img src="src/assets/experts_hero.png" alt="Encontrar o especialista" title='Encontrar o especialista' className={styles.home_hero_img} />
                        <h2 className={styles.home_hero_title}>Encontre o Especialista Certo para Você</h2>
                        <h3 className={styles.home_hero_caption}>Conectamos você aos melhores profissionais de diversas especialidades.</h3>
                    </article>
                </section>

                {/* Experts: Animated introduction. */}
                <section className={styles.expert_intro}>
                    <div className={styles.expert_intro_container}>
                        <div className={styles.expert_intro_caption}>
                            <h3 className={styles.expert_animated_intro}>Saúde Mental é <span className={styles.expert_animated_intro_span}></span>
                            </h3>
                        </div>
                    </div>
                </section>

                {/* Search. */}
                <div className={styles.expert_search}>
                    <div className={styles.expert_search_container}>
                        <div className={styles.expert_search_text}>
                            <div className={styles.expert_search_bar_container}>
                                <input
                                    type="text"
                                    placeholder="Buscar por nome..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className={styles.expert_search_bar}
                                />
                                <div className={styles.expert_search_glass_container}>
                                    <FaSearch className={styles.expert_search_glass_icon} />
                                </div>
                                <button
                                    className={styles.expert_search_filters_button}
                                    onClick={() => setShowFilters(!showFilters)}
                                >
                                    <MdFilterAlt className={styles.expert_search_icon} />
                                </button>
                            </div>
                            {showFilters && (
                                <div className={styles.expert_search_filter}>
                                    <div className={styles.expert_search_filters}>
                                        <label>
                                            <select
                                                value={specialtyFilter}
                                                onChange={e => setSpecialtyFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha a Especialidade</option>
                                                <option value="all">Todas as especialidades</option>
                                                <option value="Psicologia Clínica">Psicologia Clínica</option>
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
                                        </label>
                                        <label>
                                            <select
                                                value={approachFilter}
                                                onChange={e => setApproachFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha a Abordagem</option>
                                                <option value="all">Todas as abordagens</option>
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
                                        </label>
                                        <label>
                                            <select
                                                value={genderFilter}
                                                onChange={e => setGenderFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha o Gênero</option>
                                                <option value="all">Todos os gêneros</option>
                                                <option value="Feminino">Feminino</option>
                                                <option value="Masculino">Masculino</option>
                                            </select>
                                        </label>
                                        <label>
                                            <select
                                                value={locationFilter}
                                                onChange={e => setLocationFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha o Estado</option>
                                                <option value="all">Todos os estados</option>
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
                                        </label>
                                        <label>
                                            <select
                                                value={serviceTypeFilter}
                                                onChange={e => setServiceTypeFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha o Serviço</option>
                                                <option value="all">Todos os serviços</option>
                                                <option value="Abuso Infantil">Abuso Infantil</option>
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
                                        </label>
                                        <label>
                                            <select
                                                value={modalityTypeFilter}
                                                onChange={e => setModalityTypeFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha a Modalidade de Atendimento</option>
                                                <option value="all">Todas as modalidades</option>
                                                <option value="Online">Online</option>
                                                <option value="Presencial">Presencial</option>
                                                <option value="Hibrido">Híbrido</option>
                                            </select>
                                        </label>
                                        {/* <label>
                                            <select
                                                value={accessibilityFilter}
                                                onChange={(e) => setAccessibilityFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all" disabled selected>Escolha a Acessibilidade</option>
                                                <option value="all">Todas</option>
                                                <option value="yes">Sim</option>
                                                <option value="no">Não</option>
                                            </select>
                                        </label> */}
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={accessibilityFilter}
                                                onChange={() => setAccessibilityFilter(!accessibilityFilter)}
                                                className={styles.expert_search_checkbox}
                                            /> Atende em Libras
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* All Cards. */}
                <section className={styles.expert_all_cards}>
                    <div className={styles.expert_all_cards_container}>
                        <div className={styles.expert_all_container}>
                            <div className={styles.expert_all_card}>
                                {loading ? (
                                    <p className={styles.expert_all_loading}>Carregando mais especialistas...</p>
                                ) : filteredExperts.length > 0 ? (
                                    filteredExperts.map((experts) => (
                                        <div key={experts.id}>
                                            <div className={styles.expert_all_info}>
                                                <img src={experts.image} alt={experts.name} className={styles.expert_all_image} />
                                                <h3 className={styles.expert_all_name}>{experts.name}</h3>
                                                <div className={styles.expert_all_spec_rcp}>
                                                    <p title='Especialidade' className={styles.expert_all_spec}> {experts.specialty}</p>
                                                    <p title='Registro Profissional no Conselho Regional de Psicologia (CRP)' className={styles.expert_all_rcp}> {experts.rcp}</p>
                                                </div>
                                                <div className={styles.expert_all_p}>
                                                    {/* <p title='Avaliação' className={styles.expert_all_paragraph}>
                                                        <span>
                                                            {renderStars(experts.rating)}
                                                            <span>{experts.rating.toFixed(1)}</span>
                                                        </span>
                                                    </p> */}
                                                    <p title='Abordagem' className={`${styles.expert_all_paragraph} ${styles.expert_all_approach}`}> {experts.approach}</p>
                                                    <p title='Breve Biografia' className={styles.expert_all_paragraph}> {experts.brief_bio}</p>
                                                </div>
                                                <ul title='Serviços' className={styles.expert_all_ul}>
                                                    <li className={styles.expert_all_li}> {experts.service}</li>
                                                    <li className={styles.expert_all_li}> {experts.service2}</li>
                                                    <li className={styles.expert_all_li}> {experts.service3}</li>
                                                </ul>
                                                <div className={styles.expert_all_button_container}>
                                                    <button className={styles.expert_all_primary_button}>
                                                        <NavLink className={styles.expert_all_link} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Agende a sua consulta">Agendar</NavLink>
                                                    </button>
                                                    <button onClick={() => handleButtonClick(experts.id)} className={styles.expert_all_button}>
                                                        <Link className={styles.expert_all_link} aria-label="Ver mais detalhes do especialista">Ver Mais</Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className={styles.expert_all_negative_loading}>Nenhum especialista encontrado com o nome ou os filtros selecionados!</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        </>
    );
}

export default Experts;