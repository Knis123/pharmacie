import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../Assets/banner2.jpg'
import './Home.css';


const Home = () => {

  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src ={banner} alt='banner' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src ={banner} alt='banner' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src ={banner} alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
     
     
     
     {/* Pharmacy Welcome Text */}
     <div className="pharmacy-welcome">
        <h2>Bienvenue dans notre pharmacie !</h2>
        <p>
          Nous sommes dévoués à fournir des produits pharmaceutiques de haute qualité et un excellent service client à notre communauté. Avec une équipe de pharmaciens et de personnel expérimentés, nous visons à garantir le bien-être de nos clients en offrant une large gamme de médicaments, de conseils santé et de produits de bien-être.
        </p>
        <p>
          Notre mission est de promouvoir la santé et le bien-être en offrant des soins attentionnés et personnalisés à chaque client. N'hésitez pas à nous rendre visite pour tous vos besoins en matière de santé, notre équipe sera ravie de vous aider.
        </p>
      </div>
   
   
   
   
   
   
   
   {/* SERVICE CARD ............................................................. */}
     <div className="service-container">
     <div class="service-row">
      <div className="service-card">
        <div className="service-card__image-container">
        </div>

        <svg className="service-card__svg" viewBox="0 0 800 500">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
          <path className="service-card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"></path>
        </svg>

        <div className="service-card__content">
          <p className="service-card__title">Lorem ipsum</p>
          <p>Soluta dolor praesentium at quod autem omnis, amet earum nesciunt porro.</p>
        </div>
      </div>
      <div className="service-card">
        <div className="service-card__image-container">
        </div>

        <svg className="service-card__svg" viewBox="0 0 800 500">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
          <path className="service-card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"></path>
        </svg>

        <div className="service-card__content">
          <p className="service-card__title">Lorem ipsum</p>
          <p>Soluta dolor praesentium at quod autem omnis, amet earum nesciunt porro.</p>
        </div>
      </div>
      </div>
      <div class="service-row">
      <div className="service-card">
        <div className="service-card__image-container">
        </div>

        <svg className="service-card__svg" viewBox="0 0 800 500">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
          <path className="service-card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"></path>
        </svg>

        <div className="service-card__content">
          <p className="service-card__title">Lorem ipsum</p>
          <p>Soluta dolor praesentium at quod autem omnis, amet earum nesciunt porro.</p>
        </div>
      </div>

      <div className="service-card">
        <div className="service-card__image-container">
        </div>

        <svg className="service-card__svg" viewBox="0 0 800 500">
          <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
          <path className="service-card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"></path>
        </svg>

        <div className="service-card__content">
          <p className="service-card__title">Lorem ipsum</p>
          <p>Soluta dolor praesentium at quod autem omnis, amet earum nesciunt porro.</p>
        </div>
      </div>
      </div>
    </div>
   
  </div>
    
);
};


export default Home;
