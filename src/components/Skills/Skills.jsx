import React from 'react'
import "./skills.scss"

const Skills = () => {
const skillsData = [
  { id: 1, name: 'HTML', progress: 90 },
  { id: 2, name: 'CSS/SASS', progress: 85 },
  { id: 3, name: 'JavaScript/jQuery', progress: 80 },
  { id: 4, name: 'React js', progress: 60 },
];

return (
    <div className='skills'>
      {skillsData.map((skill) => (
        <div  className='skill-item' key={skill.id} data-aos="fade-up" data-aos-duration="1500">
          <span><p>{skill.name}</p><p>{skill.progress}%</p></span>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Skills
