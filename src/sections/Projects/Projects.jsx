import styles from './ProjectsStyles.module.css';
import echoReads from '../../assets/audiobook.png';
import ProjectCard from '../../common/ProjectCard';
import chainSync from '../../assets/crypto.png';
import tripTrails from '../../assets/trip.png';
import marketPulse from '../../assets/stocks.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle"> Projects </h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={echoReads} 
            link="https://github.com/"
            h3="EchoReads"
            p="Audiobooks App"
            />
            <ProjectCard 
            src={chainSync} 
            link="https://github.com/"
            h3="Chain-Sync"
            p="Blockchain based App"
            />
            <ProjectCard 
            src={marketPulse} 
            link="https://github.com/"
            h3="Market Pulse"
            p="Stock-Market App"
            />
            <ProjectCard 
            src={tripTrails} 
            link="https://github.com/"
            h3="Trip Trails"
            p="Tourist App"
            />
        </div>
    </section>
  );
  
}

export default Projects