import styles from "./FullProfile.module.css"

function FullProfile() {

    const psychologist = {
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
        ]
    };

    return (
        <>
            <div className={styles.profileContainer}>
                <img src={psychologist.image} alt={`Imagem de ${psychologist.name}`} className={styles.profileImage} />
                <h1 className={styles.profileName}>{psychologist.name}</h1>
                <p className={styles.profileSpecialty}>{psychologist.specialty}</p>
                <p className={styles.profileRCP}>CRP: {psychologist.rcp}</p>
                <div className={styles.profileRating}>
                    <span>Rating: {psychologist.rating}</span>
                    <span className={styles.stars}>
                        {'★'.repeat(Math.floor(psychologist.rating))}{'☆'.repeat(5 - Math.floor(psychologist.rating))}
                    </span>
                </div>
                <p className={styles.profileApproach}>Abordagem: {psychologist.approach}</p>
                <p className={styles.profileBio}>{psychologist.bio}</p>
                <div className={styles.profileServices}>
                    <h2>Serviços oferecidos:</h2>
                    <ul>
                        {psychologist.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FullProfile