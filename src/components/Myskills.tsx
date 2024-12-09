import React from 'react';
import Image from 'next/image';
import "../app/styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">
        <div className='abc'>My Skills</div></h1>

      <div className="skills-grid">
        <div className="skill-item">
          <Image
            src="/htmllogo.png"
            alt="HTML logo"
            width={100}
            height={100}
            className="skill-logo"
          />
          <h3 className="skill-name">HTML</h3>
        </div>

        <div className="skill-item">
          <Image
            src="/csslogo.png"
            alt="CSS logo"
            width={100}
            height={100}
            className="skill-logo"
          />
          <h3 className="skill-name">CSS</h3>
        </div>

        <div className="skill-item">
          <Image
            src="/typescriptlogo.png"
            alt="TypeScript logo"
            width={100}
            height={100}
            className="skill-logo"
          />
          <h3 className="skill-name">TypeScript</h3>
        </div>

        <div className="skill-item">
          <Image
            src="/nextjslogo.png"
            alt="Next.js logo"
            width={100}
            height={100}
            className="skill-logo"
          />
          <h3 className="skill-name">Next.js</h3>
        </div>

        <div className="skill-item">
          <Image
            src="/phplogo.png"
            alt="PHP logo"
            width={100}
            height={100}
            className="skill-logo"
          />
          <h3 className="skill-name">PHP</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
