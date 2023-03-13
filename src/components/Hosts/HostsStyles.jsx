import styled from "styled-components";

export const HostsStyles = styled.section`
  display: block;
  margin: auto;
  position: relative;
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: var(--bg-eigengrau);

  h2 {
    text-align: center;
  }
`;

export const HostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
  min-width: 100%;
  min-height: 55vh;

  @media (max-width: 1130px) {
    flex-direction: column;
  }
}
.card {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 40px;
    background: var(--background);
    border-radius: 10px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
    transition: 1s;
    border-style: solid;
    border-width: 2px;
    border-color: transparent ;
  }

  .imgBox {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media (min-width: 700px) {
    .card:hover {
        transform: translateX(50%);
    }
    
    .card:hover .imgBox {
        transform: rotateY(-180deg);
    }
  }
  
  .card .imgBox {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 10px;
    transform-origin: left;
    transform-style: preserve-3d;
    background: var(--background);
    transition: 1s;
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
  }
  
  .card .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  
  .card .imgBox img:nth-child(2) {
    transform: rotateY(180deg);
  }
  
  .card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card .details .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .card .details .content h2 {
    text-align: center;
    font-weight: 700;
    line-height: 1em;
  }
  
  .card .details .content h2{
    color: #fff;
    font-size: 0.9em;
  }
  .card .details .content p{
    font-family: "Hind", sans-serif;
    font-size: 0.9rem;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    text-transform: none;
    color: var(--primary-text);
  }

  @media (max-width: 700px) {
    .card .details {
        z-index: 1; 
    }

    .card .details .content p {
        opacity: 0
    }

    .card .imgBox img {
        border-radius: 0px;
    }

    .card:hover {
        border-radius: 0px;
        border-color: var(--blood-red);
    }
    
    .card .details:hover {
        background-color: rgb(0, 0, 0, 0.8);
        transition: background-color 1s ease;
        
        p {
            opacity: 1;
            color: #aaa;
        }
    }
  }
`;
