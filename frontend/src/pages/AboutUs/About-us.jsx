import React from "react";
import TeamCard from "@components/TeamCard/TeamCard";
import Carousel from "react-bootstrap/Carousel";
import "./About-us.css";

export default function AboutUs() {
  const teamMembers = [
    {
      fullName: "Cláudia Almeida",
      src: "https://i.imgur.com/tsbuMRF.png",
      linkedinUrl: "https://www.linkedin.com/in/cl%C3%A1udia-almeida-339b51185/",
      description: "From translator to junior developer, Cláudia Almeida joined the NutriPals team to help turn the company's vision of making healthy eating easy into a reality - a task she finds much more satisfying than simply translating «eat your veggies» into multiple languages."
    },
    {
      fullName: "Simão Bastos",
      src: "https://i.imgur.com/8kvJo5W.png",
      linkedinUrl: "https://www.linkedin.com/in/sim%C3%A3o-bastos-205a41221/",
      description: "Introducing Simão, a language enthusiast with a diverse background and a passion for programming and real-world languages. As a part of the Nutripals team, he's working to turn our vision of easy, healthy eating into a reality."
    },
    {
      fullName: "Sinde Correia",
      src: "https://i.imgur.com/eAif7Um.png",
      linkedinUrl: "https://www.linkedin.com/in/sinde-correia-64256a19a/",
      description: "As an Agronomy expert, Sinde brings a wealth of knowledge and experience in agriculture to the table, helping NutriPals to develop innovative and sustainable approaches to healthy eating."
    }
  ];

  return (
    <div className="about-us-container">
      <div className="founding-story">
      <h1>Our Founding Story</h1>
      <ul>
        <li>NutriPals founders came together to simplify healthy eating for everyone</li>
        <li>With a database of thousands of recipes and the ability to sort by dietary preferences, NutriPals quickly became a go-to app for health-conscious individuals.</li>
        <li>Today, NutriPals continues to innovate and expand its offerings to make healthy eating more accessible and enjoyable than ever before.</li>
      </ul>
      <img className="about-us-img" src="https://i.imgur.com/qdcdNWe.png" alt="image of a jar with colorful food" title="Cooking Healthy" />
      </div>
      <div className="meet-the-team">
        <h2>The People Making it Happen</h2>
        <Carousel>
          {teamMembers.map((member, index) => (
            <Carousel.Item key={index}>
              <TeamCard className="team-card" fullName={member.fullName} src={member.src} linkedinUrl={member.linkedinUrl} description={member.description} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
