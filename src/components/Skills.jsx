import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaSass, FaPaintBrush } from 'react-icons/fa'
import { SiTypescript, } from 'react-icons/si'

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 80 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
  
    { name: 'Sass', icon: <FaSass />, level: 80 },
  ]

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
    { name: 'Git', icon: <FaGitAlt />, level: 80 },
      { name: 'Canva', icon: <FaPaintBrush />, level: 90 },
    { name: 'Figma', icon: <FaFigma />, level: 85 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-card"
                  variants={itemVariants}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="skills-category">
            <h3>Backend & Tools</h3>
            
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-card"
                  variants={itemVariants}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills styles are in index.css */}
    </section>
  )
}

export default Skills