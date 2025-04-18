import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards } from '../../Code';
import { projects } from '../../Code';
import CatCard from '../../components/catCart/CatCard';
import ProjectCard from '../../components/projectsCart/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} slidesToScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item  ={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title"> 
              <img src="./img/check.png" alt="" />
               The best for every budget
            </div>
            <p>
              Find High quality services at every price point. No hourly 
              rates, just project based pricing.
            </p>
           
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>

        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiver Business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven Business
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/2321104e0c585cceea525419551d3a7c-1721984733469/fiverr-pro_2x.png" 
            alt="" 
            />
          </div>

        </div>
      </div>
      <Slide slidesToShow={4} slidesToScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
