import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover the story behind our blog and the passion driving our content.</p>
      </header>
      <section className="about-intro">
        <div className="about-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1669686967932-8f66dfb74996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxvZ2dpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Our Journey"
          />
        </div>
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Welcome to our blog! We're here to share insights, inspire creativity, and
            connect with readers like you. Whether you're looking for lifestyle tips,
            travel stories, or the latest in tech, our content is crafted with you in mind.
          </p>
        </div>
      </section>
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://media.istockphoto.com/id/1248415310/photo/3d-illustration-of-startup-concept-and-business-teamwork-two-happy-men-with-laptops-sitting.webp?a=1&b=1&s=612x612&w=0&k=20&c=-K1vsYl6kObtG_gB_gX5eG5k0cE-U8LppSG-Rq8l19M="
              alt="Issac Macharia"
              className="member-image"
            />
            <h3>Issac Macharia</h3>
            <p className="member-role">Founder & Writer</p>
            <p>
            Issacis a passionate storyteller who loves sharing her adventures
              and unique insights with the world.
            </p>
          </div>
          <div className="team-member">
            <img
              src="https://media.istockphoto.com/id/96325588/photo/team-success.webp?a=1&b=1&s=612x612&w=0&k=20&c=rUoZzi7dPKBZXSoHNG7e0JVL8eMdl3LqtWQibEBTGbk="
              alt="John Smith"
              className="member-image"
            />
            <h3> Brian Kyalo </h3>
            <p className="member-role">Editor & Tech Enthusiast</p>
            <p>
              John ensures every piece of content is polished and insightful,
              bringing his tech expertise to the forefront.
            </p>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <p>
          Thank you for being part of our journey. Your support motivates us to
          continue creating meaningful content.
        </p>
      </footer>
    </div>
  );
};

export default About;