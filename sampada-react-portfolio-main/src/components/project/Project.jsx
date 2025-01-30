import React from "react";
import "./project.css";
import cover1 from "../../assets/t1 (1).webp";
import cover2 from "../../assets/123.png";
import cover3 from "../../assets/beach resort in goa-passaroes by orchid (1).webp";
import cover4 from "../../assets/landutilisation (1).webp";
import cover5 from "../../assets/photo-high-quality-details-rustic-wooden-sign-directing-farm-market_933496-16779 (1) (1).webp";
import cover6 from "../../assets/7_trend_wwgh_thumbnail.webp";

// IMAGES FOR PRIVATE USE ONLY (NO CREATIVE COMMONS)

const data = [
  {
    id: 1,
    image: cover1,
    title: "Fort Jadhavgadh",
 
    demo: "https://www.fortjadhavgadh.com/",
  },
  {
    id: 2,
    image: cover2,
    title: "Orchid Toyam",

    demo: "https://orchidtoyam.com/",
  },
  {
    id: 3,
    image: cover3,
    title: "The Orchid Passaros Goa",
    
    demo: "https://orchidresortgoa.com/",
  },
  {
    id: 4,
    image: cover4,
    title: "Rudram Realty",
  
    demo: "https://rudramrealty.com/",
  },
  {
    id: 5,
    image: cover5,
    title: "The Family Farmer, Mangaon",
   
    demo: "https://thefamilyfarmermangaon.com/",
  },
  {
    id: 6,
    image: cover6,
    title: "awestruck",
   
    demo: "https://awestruck.gifts/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
