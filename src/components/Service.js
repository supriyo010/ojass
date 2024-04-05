import React from 'react'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import { Outlet, Link } from "react-router-dom";



const cards = [
    {
        title: "Smart-Parking",
        text: "Parking Made Simple with Smart Solutions",
        image: "car-parking-icon.png",
        active: false,
        id:"good",
    },
    {
        title: "Travel Buddy",
        text: "Stay Ahead of Conjestion with your Dedicated Travel Buddy",
        image: "hotel.png",
        active: false
    },
    {
        title: "WayFinder",
        text: "Smart Solution for Pedestrian Safety",
        image: "tour.png",
        active: false

    }
]


function Service() {
  return (
    <Container id='about-us'>
        <ServiceTitle>Our Services</ServiceTitle>
        <ServiceCardContainer>
            {
                cards.map((card) => (
                    <ServiceCard title={card.title} text={card.text} image={card.image} active={card.active} key={card.id} />
                ))
            }
            
        </ServiceCardContainer>
        <>
        <br></br>
        
        </>
        

          <div>
      
        <div class="d-inline-flex p-2 gap-36 ">
          <li>
          <button>  <Link to={"Next"}>click on </Link></button>
          </li>
          
          </div>
          </div>
          
      
   
    
      
    </Container>
  )
}

export default Service

const Container = styled.div`
  width: 100vw;
  display: flex;
  background: #333;
  flex-direction: column;
  height: 60vh;
  padding-top: 1vh;
  cursor: pointer;
  align-items: center;
  @media (max-width: 480px) {
    height: 100%;
    align-content: center;
    justify-content: center;
    // overflow: hidden;
}
`

const ServiceTitle = styled.div`
  width: 100%;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 7vh;
  font-weight: 600;
  font-size: 30px;
  color: rgb(240, 240, 240);
`
const Nav  = styled.ul`
     display: none;
     flex-direction: column;
     transition: 1s ease;
     align-items: center;
     flex:1;
     border-radius: 1rem;
     height: 50vh;
     width: 50%;
     background-color:rgba(0, 0, 0, 0.842);
     position: fixed;
     right: 0;
     top:12vh;
     margin: 0 2rem;
     
     @media (max-width:600px) {
        display: flex;
     }
     `

const ServiceCardContainer = styled.div`
    margin-top: 7.5vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        display: grid;
        padding: 0 32px;
      }
`
