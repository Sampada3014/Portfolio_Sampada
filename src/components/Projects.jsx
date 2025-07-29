import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  // Sample project data - replace with actual projects
  const projects = [
    {
      id: 1,
      title: 'Fort Jadhavgadh',
      category: 'web',
     image: '/src/assets/Images/Home-page-image (1).webp',
      description: 'My first individual project, built from scratch using HTML, CSS, JavaScript, and Bootstrap. I independently led the design and development and successfully delivered it to the client, who appreciated the quality and professionalism.',
      technologies: ['HTML', 'CSS', 'JavaScript', ' Bootstrap'],
      liveLink: 'https://www.fortjadhavgadh.com'
    },
    {
      id: 2,
      title: 'Orchid Toyam',
      category: 'web',
      image: '/src/assets/Images/SparetreatsinPune.webp',
      description: 'This project came as a result of the appreciation I received for Fort Jadhavgadh. I led the project along with two interns—designed and developed the Hero and important pages myself, and guided the interns through the remaining parts.We delivered the site successfully and received positive feedback from the client.',
      technologies: ['HTML', 'CSS', 'JavaScript', ' Bootstrap'],
     liveLink: 'https://orchidtoyam.com/'
    },
    {
      id: 3,
      title: 'Orchid Resort Goa',
      category: 'web',
       image: '/src/assets/Images/couple-spa-thumbnail.webp',
      description: 'Developed in collaboration with the designer, this website features an impressive water effect, which is the key highlight of the project. The design and interactivity enhance user experience significantly.',
      technologies: ['HTML', 'CSS', 'JavaScript', ' Bootstrap', 'jQuery'],
      liveLink: 'https://orchidresortgoa.com/'
    },
    {
      id: 4,
      title: 'The Family Farmer',
      category: 'web',
       image: '/src/assets/Images/aeriel-view-farm_693838-1240.jpg',
      description: 'This was my starting project when I began my journey into web development. I focused on the front-end design part of the website using HTML, CSS, JavaScript, Bootstrap, and PHP.',
      technologies: ['HTML', 'CSS', 'JavaScript', ' Bootstrap', 'PHP'],
     liveLink: 'https://thefamilyfarmermangaon.com/'
    },
    {
      id: 5,
      title: 'Kolsite Group Of Companies',
      category: 'web',
     image: '/src/assets/Images/company-banner.png',
      description: 'Developed this project in just one month, delivering a fully mobile-responsive website ahead of schedule. The client appreciated the timely delivery and the quality of the work.',
     technologies: ['HTML', 'CSS', 'JavaScript', ' Bootstrap', 'PHP'],
     liveLink: 'https://kolsite.com/'
    },
    {
      id: 6,
      title: 'Geon Energy - Sustainability Commitment',
      category: 'web',
       image: '/src/assets/Images/sustainability-banner.webp',
      description: ' Created this page as part of a team, starting with HTML, CSS, and JavaScript, and then integrated it into WordPress for better content management. I have worked on many pages for this website, and this was a key project showcasing collaboration and technical skill.',
      technologies: ['HTML', 'CSS',  'WordPress Integration', 'JavaScript'],
       liveLink: 'https://www.geon-energy.com/sustainability-commitment/'
    },
     {
      id: 7,
      title: 'BC Webwise Studio',
      category: 'web',
       image: '/src/assets/Images/5U4A1641.png',
      description: 'Designed and developed the studio page for my company as a single developer using HTML, CSS, JavaScript, and Bootstrap.This project reflects my ability to create professional company pages with clean UI.',
      technologies: ['HTML', 'CSS',  'Bootstrap', 'JavaScript'],
       liveLink: 'https://devop.bcwebwise.com:8081/bcwebwise/bcwebwise-studio/"'
    },
       {
      id: 8,
      title: 'SIWS College',
      category: 'web',
       image: '/src/assets/Images/siws.jpg',
      description: 'Worked on the menu bar and internal pages of the college website, handling both frontend development and WordPress integration. I also visited the college for client meetings, which helped me understand the requirements better and deliver accordingly. This project remains one of the best parts of my portfolio.',
      technologies: ['HTML', 'CSS',  'Bootstrap', 'JavaScript','WordPress Integration'],
       liveLink: 'https://www.siwscollege.edu.in/"'
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
      
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
             <div className="project-image">
  {project.image ? (
    <img src={project.image} alt={project.title} className="project-img" />
  ) : (
    <div className="placeholder-image">
      <span>{project.title.charAt(0)}</span>
    </div>
  )}
  <div className="project-links">
  
    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
      <FaExternalLinkAlt />
    </a>
  </div>
</div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Projects styles are in index.css */}
    </section>
  )
}

export default Projects