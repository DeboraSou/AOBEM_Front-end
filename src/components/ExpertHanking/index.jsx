import styles from './ExpertHanking.module.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaStar } from "react-icons/fa"; <FaStar />
import { FaStarHalfAlt } from "react-icons/fa"; <FaStarHalfAlt />
import { FaRegStar } from "react-icons/fa"; <FaRegStar />


function ExpertHanking() {

  const expertsHanking = [
    {
      id: 1,
      image: 'src/assets/ana_p.png',
      name: 'Ana Albani',
      rating: 4.8,
      specialty: 'Psicóloga Clínica',
      bio: 'Sou uma psicóloga clínica com mais de 10 anos de experiência no tratamento de transtornos de ansiedade e depressão.',
      services: [
        'Consultas Psicológicas',
        'Terapia Cognitivo-Comportamental (TCC)',
        'Tratamento da Depressão',
        'Tratamento de Transtornos de Ansiedade',
        'Sessões de Aconselhamento para Estresse',
        'Terapia de Habilidades Sociais',
        'Programas de Bem-Estar Emocional'
      ]
    },
    {
      id: 2,
      image: 'src/assets/takeshi_p.png',
      name: 'Takeshi Taddini',
      rating: 4.7,
      specialty: 'Psicólogo do Esporte',
      bio: 'Trabalho com atletas de alto rendimento, auxiliando-os a alcançar seu potencial máximo.',
      services: [
        'Desempenho de Atletas',
        'Gestão de Pressão Competitiva',
        'Bem-Estar Mental no Esporte',
        'Treinamento Mental para Competição',
        'Recuperação Psicológica de Lesões',
        'Construção de Confiança e Motivação'
      ]
    },
    {
      id: 3,
      image: 'src/assets/veronika_p.png',
      name: 'Veronika Vogel',
      rating: 4.5,
      specialty: 'Psicóloga Jurídica',
      bio: 'Atuo como psicóloga jurídica há mais de 10 anos, oferecendo suporte a clientes envolvidos em questões legais.',
      services: [
        'Avaliação Psicológica em Processos Legais',
        'Mediação de Conflitos',
        'Apoio a Vítimas de Crimes',
        'Consultoria para Advogados e Tribunais',
        'Aconselhamento para Processos Legais',
        'Intervenção em Crises'
      ]
    }
  ];

  // Ordena os especialistas pela avaliação.
  expertsHanking.sort((a, b) => b.rating - a.rating);

  // Renderiza as estrelas.
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars).fill(<FaStar icon={FaStar} className={styles.expert_hanking_star} />)}
        {halfStar && <FaStarHalfAlt icon={FaStarHalfAlt} className={styles.expert_hanking_star} />}
        {Array(emptyStars).fill(<FaRegStar icon={FaRegStar} className={styles.expert_hanking_star} />)}
      </>
    );
  };

  return (
    <>
      {/* Ranking. */}
      <section>
        <div className={styles.expert_hanking_cards_container}>
          {expertsHanking.map((expert, index) => (
            <div
              className={`${styles.expert_hanking_info_container} ${index === 0
                ? styles.expert_hanking_center
                : index === 1
                  ? styles.expert_hanking_left
                  : styles.expert_hanking_right
                }`}
              key={expert.id}
            >
              <img src={expert.image} alt={expert.name} className={styles.expert_hanking_image} />
              <div className={styles.expert_hanking_info}>
                <h3 className={styles.expert_hanking_name}> {expert.name}</h3>
                <p className={styles.expert_hanking_paragraph}>
                  <span>
                    {renderStars(expert.rating)}
                    <span>{expert.rating.toFixed(1)}</span>
                  </span>
                </p>
                <p className={styles.expert_hanking_paragraph}><span className={styles.expert_hanking_span}>Especialidade:</span> {expert.specialty}</p>
                <p className={styles.expert_hanking_paragraph}><span className={styles.expert_hanking_span}>Biografia:</span> {expert.bio}</p>
                <p className={styles.expert_hanking_paragraph}><span className={styles.expert_hanking_span}>Serviços:</span></p>
                <ul className={styles.expert_hanking_ul}>
                  {expert.services.map((service, index) => (
                    <li className={styles.expert_hanking_li} key={index}>{service}</li>
                  ))}
                </ul>
                <div className={styles.expert_hanking_button_container}>
                  <button className={styles.expert_hanking_primary_button}>
                    <NavLink className={styles.expert_hanking_link} to="/cadastrar" end style={({ isActive }) => { return isActive ? { color: "#fb1653" } : {}; }} aria-label="Agende a sua consulta">Agendar</NavLink>
                  </button>
                  <button className={styles.expert_hanking_button}>
                    <Link className={styles.expert_hanking_link} to="#" aria-label="Ver mais detalhes do especialista">Ver Mais</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ExpertHanking