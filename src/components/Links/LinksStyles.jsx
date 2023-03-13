import styled from "styled-components";
import img from "../../assets/images/bgf2.jpg";

export const LinkStyles = styled.footer`
  font-family: Hind;
  display: block;
  box-sizing: border-box;
  position: relative;
  line-height: 1.5em;
  background-position: 50% 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${img});

  .footer-widgets {
    position: relative;
    border-top: 1px solid #222;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: rgba(27, 27, 27, 0.85);
    z-index: 2;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .widget-columns {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 14px;

    @media (max-width: 768px) {
      margin-left: 40px;
      flex-direction: column;
    }
  }

  .widget-number {
    font-family: Montserrat;
    color: #3b3b3b;
    position: relative;
  }
  .widget-number:after {
    content: "";
    display: block;
    width: 20px;
    height: 1px;
    background: var(--blood-red);
    right: 0;
    left: 24px;
    top: 50%;
    position: absolute;
  }
  .widget__title {
    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    text-transform: none;
    color: #fff;
  }

  .textwidget-listing {
    margin: 0;
    padding: 0;
    list-style: none;
    letter-spacing: 0.15em;
  }
  .textwidget p,
  .footer-widget-links {
    font-family: Montserrat;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    text-align: left;
    text-transform: none;
    color: var(--primary-text);
  }

  .footer-widget-links a {
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 2rem;
    color: var(--primary-text);
    transition: color 0.2s linear;
  }

  .footer-widget-links a:hover {
    color: #fff;
  }

  .footer-widget-links a:before {
    content: "";
    position: absolute;
    top: 0.35rem;
    left: -20px;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    font-style: normal;
    font-weight: 400;
    background-color: transparent;
    transition: all 0.2s linear;
    transform: translate(-5px);
  }

  .footer-widget-links a:hover::before {
    background-color: var(--blood-red);
  }

  //------------------------------------------------
  // Social buttons
  //------------------------------------------------

  .social-links {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  .social-links--circle .social-links__link {
    border-radius: 50%;
  }
  .social-links--circle .social-links__link::before,
  .social-links--circle .social-links__link::after {
    border-radius: 50%;
  }

  .social-links__item {
    float: left;
    margin: 0 10px 10px 0;
  }
  .social-links__link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.05);
    font-size: 1.125rem;
    position: relative;
    overflow: hidden;
  }

  .social-links__link::before,
  .social-links__link::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: transparent;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .social-links__link::after {
    transition-delay: 0.1s;
  }
  .social-links__link:hover::before,
  .social-links__link:hover::after {
    transform: scale(1);
    color: white;
    background-color: var(--blood-red);
  }
  .social-links__link:hover::before {
    transform: scale(1) opacity(0);
    background-color: #fff;
  }
`;

export const CopyrightStyles = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  padding-top: var(--gap);

  p {
    margin: 0;

    a {
      color: #fff;
      font-weight: 700;
      text-decoration: none;

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }

    span {
      color: var(--primary);
    }
  }
`;
