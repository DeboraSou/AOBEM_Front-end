import ScrollTop from '../../../components/ScrollTop';
import styles from './Experts.module.css'
import { useState } from 'react';
import { FaStar } from "react-icons/fa"; <FaStar />
import { FaStarHalfAlt } from "react-icons/fa"; <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa"; <FaRegStar />
import { Link } from 'react-router-dom';

function Experts() {

    const [searchTerm, setSearchTerm] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [approachFilter, setApproachFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');
    const [accessibilityFilter, setAccessibilityFilter] = useState(false);
    const [serviceTypeFilter, setServiceTypeFilter] = useState('all');

    const experts = [
        {
            id: 1,
            name: 'Ana Albani',
            specialty: 'Psicóloga Clínica',
            approach: 'Cognitivo-Comportamental',
            gender: 'feminino',
            state: 'SP',
            city: 'São Paulo',
            online: true,
            accessibility: true,
            rating: 4.8,
            experience: 'Mais de 10 anos de experiência como psicóloga clínica.',
            userReviews: 120,
            patientFeedback: 'A Dra. Ana é incrível! Ela me ajudou a superar minha ansiedade de uma forma que eu nunca pensei ser possível.',
            bio: 'Sou uma psicóloga clínica com mais de 10 anos de experiência no tratamento de transtornos de ansiedade e depressão.',
            image: 'src/assets/ana_p.png'
        },
        {
            id: 2,
            name: 'Takeshi Taddini',
            specialty: 'Psicólogo do Esporte',
            approach: 'Desempenho de Atletas',
            gender: 'masculino',
            state: 'RJ',
            city: 'Rio de Janeiro',
            online: false,
            accessibility: false,
            rating: 4.7,
            experience: 'Experiência profissional como psicólogo do esporte.',
            userReviews: 95,
            patientFeedback: 'O tratamento com o Dr. Taddini melhorou significativamente meu desempenho no esporte. Ele é incrível!',
            bio: 'Trabalho com atletas de alto rendimento, auxiliando-os a alcançar seu potencial máximo.',
            image: 'src/assets/takeshi_p.png'
        },
        {
            id: 3,
            name: 'Veronika Vogel',
            specialty: 'Psicóloga Jurídica',
            approach: 'Psicanálise',
            gender: 'feminina',
            state: 'PR',
            city: 'Curitiba',
            online: true,
            accessibility: true,
            rating: 4.5,
            experience: 'Mais de 10 anos de experiência como psicóloga jurídica.',
            userReviews: 140,
            patientFeedback: 'A Dra. Vogel é uma profissional incrível! Seu apoio em processos legais faz toda a diferença.',
            bio: 'Atuo como psicóloga jurídica há mais de 10 anos, oferecendo suporte a clientes envolvidos em questões legais.',
            image: 'src/assets/veronika_p.png'
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        return (
            <>
                {Array(fullStars).fill(<FaStar className={styles.star} />)}
                {halfStar && <FaStarHalfAlt className={styles.star} />}
                {Array(emptyStars).fill(<FaRegStar className={styles.star} />)}
            </>
        );
    };

    const filteredExperts = experts.filter(expert => {
        const matchesSearchTerm = expert.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = specialtyFilter === 'all' || expert.specialty === specialtyFilter;
        const matchesApproach = approachFilter === 'all' || expert.approach === approachFilter;
        const matchesGender = genderFilter === 'all' || expert.gender === genderFilter;
        const matchesLocation = locationFilter === 'all' || expert.state === locationFilter || expert.city === locationFilter;
        const matchesServiceType = serviceTypeFilter === 'all' || (serviceTypeFilter === 'online' ? expert.online : !expert.online);
        const matchesAccessibility = !accessibilityFilter || expert.accessibility;

        return matchesSearchTerm && matchesSpecialty && matchesApproach && matchesGender && matchesLocation && matchesServiceType && matchesAccessibility;
    });

    return (
        <>
            <ScrollTop />
            <div>
                <section className={styles.expert_hero}>
                    <div className={styles.expert_container}>
                        <div className={styles.all_experts_container}>
                            <header className={styles.header}>
                                <h1>Todos os Especialistas</h1>
                                <p>Encontre o especialista certo para você entre todos os profissionais cadastrados.</p>
                            </header>

                            <div className={styles.filters}>
                                <input
                                    type="text"
                                    placeholder="Buscar por nome..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <select value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)}>
                                    <option value="all">Todas as Especialidades</option>
                                    <option value="Psicóloga Clínica">Psicóloga Clínica</option>
                                    <option value="Psicólogo do Esporte">Psicólogo do Esporte</option>
                                    <option value="Psicóloga Jurídica">Psicóloga Jurídica</option>
                                </select>
                                <select value={approachFilter} onChange={(e) => setApproachFilter(e.target.value)}>
                                    <option value="all">Todas as Abordagens</option>
                                    <option value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>
                                    <option value="Humanista">Humanista</option>
                                    <option value="Psicanálise">Psicanálise</option>
                                </select>
                                <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
                                    <option value="all">Todos os Gêneros</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Feminino</option>
                                </select>
                                <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                                    <option value="all">Todas as Localizações</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="MG">Minas Gerais</option>
                                </select>
                                <select value={serviceTypeFilter} onChange={(e) => setServiceTypeFilter(e.target.value)}>
                                    <option value="all">Todos os Tipos de Atendimento</option>
                                    <option value="online">Atende Online</option>
                                    <option value="presencial">Atende Presencial</option>
                                </select>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={accessibilityFilter}
                                        onChange={() => setAccessibilityFilter(!accessibilityFilter)}
                                    />
                                    Atende em Libras
                                </label>
                            </div>

                            <div className={styles.experts_list}>
                                {filteredExperts.map(expert => (
                                    <div className={styles.expert_card} key={expert.id}>
                                        <img src={expert.image} alt={expert.name} className={styles.expert_image} />
                                        <div className={styles.expert_info}>
                                            <h3>{expert.name}</h3>
                                            <p><strong>Especialidade:</strong> {expert.specialty}</p>
                                            <p><strong>Abordagem:</strong> {expert.approach}</p>
                                            <p><strong>Experiência:</strong> {expert.experience}</p>
                                            <p><strong>Avaliações dos Usuários:</strong> {expert.userReviews}</p>
                                            <p><strong>Avaliação:</strong> {renderStars(expert.rating)} {expert.rating.toFixed(1)}</p>
                                            <p><strong>Localização:</strong> {expert.city}, {expert.state}</p>
                                            <p><strong>Feedback dos Pacientes:</strong> {expert.patientFeedback}</p>
                                            <p>{expert.bio}</p>
                                            <div className={styles.buttons}>
                                                <Link to={`/especialista/${expert.id}`} className={styles.primary_button}>Ver Perfil</Link>
                                                <Link to="/cadastrar" className={styles.secondary_button}>Agendar Consulta</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Experts

    // <section className ={ styles.notFound_section } >
    //     <div className={styles.notFound_container}>
    //         <h2 className={styles.notFound_caption}>Desculpe, a página que você está procurando está em construção.</h2>
    //         <p className={styles.notFound_paragraph}>Estamos trabalhando para tornar sua experiência ainda melhor! Enquanto isso, você pode voltar para a tela inicial</p>
    //         <div>
    //             <button className={styles.notFound_btn}>
    //                 <NavLink className={styles.notFound_link} to="/" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Página Inicial">Início</NavLink>
    //             </button>
    //         </div>
    //     </div>
    // </section>