import axios from '../../../api/axios';
import ScrollTop from '../../../components/ScrollTop';
import styles from './Experts.module.css'
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa"; <FaStar />
import { FaStarHalfAlt } from "react-icons/fa"; <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa"; <FaRegStar />
import { MdFilterAlt } from "react-icons/md"; <MdFilterAlt />
import { FaSliders } from "react-icons/fa6"; <FaSliders />
import { FaSearch } from "react-icons/fa"; <FaSearch />
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Experts() {

    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [approachFilter, setApproachFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');
    const [accessibilityFilter, setAccessibilityFilter] = useState(false);
    const [serviceTypeFilter, setServiceTypeFilter] = useState('all');

    const [loading, setLoading] = useState(false);
    const [experts, setExperts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData();
    }, []);

    // Real API.
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get('http://localhost:/all_experts');
    //             setExperts(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Erro ao buscar especialistas:', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [specialtyFilter, approachFilter, genderFilter, locationFilter, serviceTypeFilter, accessibilityFilter, experts]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:/all_experts');
            setExperts(response.data);
        } catch (error) {
            console.error('Erro ao buscar especialistas:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && !loading) {
            setPage(prevPage => prevPage + 1);
            fetchMoreExperts();
        }
    };

    const fetchMoreExperts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:/all_experts');
            const newExperts = response.data;
            setExperts(prevExperts => [...prevExperts, ...newExperts]);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao carregar mais especialistas:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {Array(fullStars).fill(<FaStar className={styles.expert_all_star} />)}
                {halfStar && <FaStarHalfAlt className={styles.expert_all_star} />}
                {Array(emptyStars).fill(<FaRegStar className={styles.expert_all_star} />)}
            </>
        );
    };

    // const filteredExperts = experts.filter(expert => {
    //     const matchesSearchTerm = expert.name.toLowerCase().includes(searchTerm.toLowerCase());
    //     const matchesSpecialty = specialtyFilter === 'all' || expert.specialty === specialtyFilter;
    //     const matchesApproach = approachFilter === 'all' || expert.approach === approachFilter;
    //     const matchesGender = genderFilter === 'all' || expert.gender === genderFilter;
    //     const matchesLocation = locationFilter === 'all' || expert.state === locationFilter || expert.city === locationFilter;
    //     const matchesServiceType = serviceTypeFilter === 'all' || (serviceTypeFilter === 'online' ? expert.online : !expert.online);
    //     const matchesAccessibility = !accessibilityFilter || expert.accessibility;

    //     return matchesSearchTerm && matchesSpecialty && matchesApproach && matchesGender && matchesLocation && matchesServiceType && matchesAccessibility;
    // });

    // Falsa Apagar.
    const filteredExperts = experts.filter((expert) => {
        const matchesSearchTerm = expert.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = specialtyFilter === 'all' || expert.specialty === specialtyFilter;
        const matchesApproach = approachFilter === 'all' || expert.approach === approachFilter;
        const matchesGender = genderFilter === 'all' || expert.gender === genderFilter;
        const matchesLocation = locationFilter === 'all' || expert.state === locationFilter || expert.city === locationFilter;
        const matchesServiceType = serviceTypeFilter === 'all' || (serviceTypeFilter === 'online' ? expert.online : !expert.online);
        const matchesAccessibility = !accessibilityFilter || expert.accessibility;

        return matchesSearchTerm && matchesSpecialty && matchesApproach && matchesGender && matchesLocation && matchesServiceType && matchesAccessibility;
    });


    // Falsa Apagar.
    useEffect(() => {
        const storedExperts = JSON.parse(localStorage.getItem('experts'));
        if (storedExperts) {
            setExperts(storedExperts);
        } else {
            fetchExperts();
        }
    }, []);

    // Falsa Apagar.
    const fetchExperts = () => {
        setLoading(true);
        setTimeout(() => {
            const mockExperts = [
                {
                    id: 1,
                    image: 'src/assets/ana_p.png',
                    name: 'Ana Albani',
                    specialty: 'Psicóloga Clínica',
                    rcp: '000000 / 06',
                    rating: 4.8,
                    approach: 'Cognitivo-Comportamental',
                    bio: 'Sou uma psicóloga clínica com mais de 10 anos de experiência no tratamento de transtornos de ansiedade e depressão.',
                    services: [
                        'Terapia Cognitivo-Comportamental (TCC)',
                        'Depressão',
                        'Transtornos de Ansiedade'
                    ],
                    gender: 'feminino',
                    state: 'SP',
                    city: 'São Paulo',
                    online: true,
                    accessibility: true,
                    experience: 'Mais de 10 anos de experiência como psicóloga clínica.',
                    userReviews: 120
                },
                {
                    id: 2,
                    image: 'src/assets/takeshi_p.png',
                    name: 'Takeshi Taddini',
                    specialty: 'Psicólogo do Esporte',
                    rcp: '000000 / 18',
                    rating: 4.7,
                    approach: 'Desempenho de Atletas',
                    bio: 'Trabalho com atletas de alto rendimento, auxiliando-os a alcançar seu potencial máximo.',
                    services: [
                        'Desempenho de Atletas',
                        'Gestão de Pressão Competitiva',
                        'Bem-Estar Mental no Esporte'
                    ],
                    gender: 'masculino',
                    state: 'MT',
                    city: 'Cuiabá',
                    online: false,
                    accessibility: false,
                    experience: 'Experiência profissional como psicólogo do esporte.',
                    userReviews: 95
                },
                {
                    id: 3,
                    image: 'src/assets/veronika_p.png',
                    name: 'Veronika Vogel',
                    specialty: 'Psicóloga Jurídica',
                    rcp: '000000 / 12',
                    rating: 4.5,
                    approach: 'Psicanálise',
                    bio: 'Atuo como psicóloga jurídica há mais de 10 anos, oferecendo suporte a clientes envolvidos em questões legais.',
                    services: [
                        'Avaliação Psicológica em Processos Legais',
                        'Mediação de Conflitos',
                        'Apoio a Vítimas de Crimes'
                    ],
                    gender: 'feminino',
                    state: 'SC',
                    city: 'Florianópolis',
                    online: true,
                    accessibility: true,
                    experience: 'Mais de 10 anos de experiência como psicóloga jurídica.',
                    userReviews: 140
                }
            ];
            setExperts(mockExperts);
            localStorage.setItem('experts', JSON.stringify(mockExperts));
            setLoading(false);
        }, 1000);
    };

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
                                                <option value="all">Todas as Especialidades</option>
                                                <option value="Psicóloga Clínica">Psicóloga Clínica</option>
                                                <option value="Psicólogo do Esporte">Psicólogo do Esporte</option>
                                                <option value="Psicóloga Jurídica">Psicóloga Jurídica</option>
                                            </select>
                                        </label>
                                        <label>
                                            <select
                                                value={approachFilter}
                                                onChange={e => setApproachFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all">Todas as Abordagens</option>
                                                <option value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>
                                                <option value="Desempenho de Atletas">Desempenho de Atletas</option>
                                                <option value="Psicanálise">Psicanálise</option>
                                            </select>
                                        </label>
                                        <label>
                                            <select
                                                value={genderFilter}
                                                onChange={e => setGenderFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all">Todos os Gêneros</option>
                                                <option value="feminino">Feminino</option>
                                                <option value="masculino">Masculino</option>
                                            </select>
                                        </label>
                                        <label>
                                            <select
                                                value={locationFilter}
                                                onChange={e => setLocationFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all">Todos os Estados</option>
                                                <option value="SP">SP</option>
                                                <option value="MT">MT</option>
                                                <option value="SC">SC</option>
                                            </select>
                                        </label>
                                        <label>
                                            <select
                                                value={serviceTypeFilter}
                                                onChange={e => setServiceTypeFilter(e.target.value)}
                                                className={styles.expert_search_select}
                                            >
                                                <option value="all">Todos os Serviços</option>
                                                <option value="online">Online</option>
                                                <option value="presencial">Presencial</option>
                                            </select>
                                        </label>
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
                {/* <section className={styles.expert_all_cards}>
                    <div className={styles.expert_all_cards_container}>
                        <div className={styles.expert_all_container}>
                            <div className={styles.expert_all_card} >
                                {experts.map(expert => (
                                    <div key={expert.id}>
                                        <div className={styles.expert_all_info}>
                                            <img src={expert.image} alt={expert.name} className={styles.expert_all_image} />
                                            <h3 className={styles.expert_all_name}> {expert.name}</h3>
                                            <div className={styles.expert_all_spec_rcp}>
                                                <p title='Especialidade' className={styles.expert_all_spec}> {expert.specialty}</p>
                                                <p title='Registro Profissional no Conselho Regional de Psicologia (CRP)' className={styles.expert_all_rcp}> {expert.rcp}</p>
                                            </div>
                                            <div className={styles.expert_all_p}>
                                                <p title='Avaliação' className={styles.expert_all_paragraph}>
                                                    <span>
                                                        {renderStars(expert.rating)}
                                                        <span>{expert.rating.toFixed(1)}</span>
                                                    </span>
                                                </p>
                                                <p title='Abordagem' className={`${styles.expert_all_paragraph} ${styles.expert_all_approach}`}> {expert.approach}</p>
                                                <p title='Breve Biografia' className={styles.expert_all_paragraph}> {expert.bio}</p>
                                            </div>
                                            <ul title='Serviços' className={styles.expert_all_ul}>
                                                {expert.services.map((service, index) => (
                                                    <li className={styles.expert_all_li} key={index}>{service}</li>
                                                ))}
                                            </ul>
                                            <div className={styles.expert_all_button_container}>
                                                <button className={styles.expert_all_primary_button}>
                                                    <NavLink className={styles.expert_all_link} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Agende a sua consulta">Agendar</NavLink>
                                                </button>
                                                <button className={styles.expert_all_button}>
                                                    <Link className={styles.expert_all_link} to="#" aria-label="Ver mais detalhes do especialista">Ver Mais</Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {loading && (
                                    <p className={styles.expert_all_loading}>Carregando mais especialistas...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* All Cards. */}
                <section className={styles.expert_all_cards}>
                    <div className={styles.expert_all_cards_container}>
                        <div className={styles.expert_all_container}>
                            <div className={styles.expert_all_card}>
                                {loading ? (
                                    <p className={styles.expert_all_loading}>Carregando mais especialistas...</p>
                                ) : filteredExperts.length > 0 ? (
                                    filteredExperts.map((expert) => (
                                        <div key={expert.id}>
                                            <div className={styles.expert_all_info}>
                                                <img src={expert.image} alt={expert.name} className={styles.expert_all_image} />
                                                <h3 className={styles.expert_all_name}>{expert.name}</h3>
                                                <div className={styles.expert_all_spec_rcp}>
                                                    <p title='Especialidade' className={styles.expert_all_spec}> {expert.specialty}</p>
                                                    <p title='Registro Profissional no Conselho Regional de Psicologia (CRP)' className={styles.expert_all_rcp}> {expert.rcp}</p>
                                                </div>
                                                <div className={styles.expert_all_p}>
                                                    <p title='Avaliação' className={styles.expert_all_paragraph}>
                                                        <span>
                                                            {renderStars(expert.rating)}
                                                            <span>{expert.rating.toFixed(1)}</span>
                                                        </span>
                                                    </p>
                                                    <p title='Abordagem' className={`${styles.expert_all_paragraph} ${styles.expert_all_approach}`}> {expert.approach}</p>
                                                    <p title='Breve Biografia' className={styles.expert_all_paragraph}> {expert.bio}</p>
                                                </div>
                                                <ul title='Serviços' className={styles.expert_all_ul}>
                                                    {expert.services.map((service, index) => (
                                                        <li className={styles.expert_all_li} key={index}>{service}</li>
                                                    ))}
                                                </ul>
                                                <div className={styles.expert_all_button_container}>
                                                    <button className={styles.expert_all_primary_button}>
                                                        <NavLink className={styles.expert_all_link} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Agende a sua consulta">Agendar</NavLink>
                                                    </button>
                                                    <button className={styles.expert_all_button}>
                                                        <Link className={styles.expert_all_link} to={'/perfil-completo/${d.id}'} aria-label="Ver mais detalhes do especialista">Ver Mais</Link>
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