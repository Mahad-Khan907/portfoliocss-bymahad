import React from 'react';
import Image from 'next/image';
import "../styles/education.css";
import Hero from '@/components/Hero';

function Education() {
  return (
    <div>
      <Hero/>
    <div className="education-container">
      <h1 className="education-title">
        <b className="title-bg">My Education</b>
      </h1>

      <div className="education-cards">
        <div className="education-card">
          <div className="education-content">
            <Image
              src="/rafischool.jpg"
              width={200}
              height={150}
              alt="Rafi School"
              className="education-image"
            />
            <div className="education-text">
              <h1 className="education-heading">Matriculation</h1>
              <h2 className="school-name"><b>From: Rafi Public Sec. School</b></h2>
              <h3 className="completion-status"><b>Completed in 2024</b></h3>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-content">
            <Image
              src="/adamjee.jpg"
              width={200}
              height={150}
              alt="Adamjee College"
              className="education-image"
            />
            <div className="education-text">
              <h1 className="education-heading">Intermediate</h1>
              <h2 className="school-name"><b>From: Adamjee Govt. Science College</b></h2>
              <h3 className="completion-status"><b>Ongoing in 2024</b></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Education;
