import React from 'react';
import Image from 'next/image';
import "../styles/project.css";
import Hero from '@/components/Hero';

function Project() {
  return (
    <div>
      <Hero/>
    <div className="project-section">
      <div className="project-container">
        <h1 className="project-title">My Projects</h1>

        <div className="project-grid">
          <div className="project-card">
            <a href="https:/portfolio-bymahad.vercel.app/" target='_blank'>
              <Image
                src="/portfolio.png"
                alt="portfolio"
                width={400}
                height={300}
                className="project-image"
              />
            </a>
            <h3 className="project-name">Portfolio</h3>
          </div>

          <div className="project-card">
            <a href="https://milestone-resume-bymahad.vercel.app/" target='_blank'>
              <Image
                src="/resumebuilder.png"
                alt="resume builder"
                width={400}
                height={300}
                className="project-image"
              />
            </a>
            <h3 className="project-name">Resume Builder</h3>
          </div>

          <div className="project-card">
            <a href="https://headerfooter-bymahad.vercel.app/" target='_blank'>
              <Image
                src="/headerfooter.png"
                alt="header footer"
                width={400}
                height={300}
                className="project-image"
              />
            </a>
            <h3 className="project-name">Header & Footer</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Project;
