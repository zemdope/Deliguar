import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Wrapper } from '../assets/styles/pages/try.styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import plus from '../assets/images/plus5.svg';
import minus from '../assets/images/minus.svg';

const Try = ({locale}) => {
	
  const initialAccordionStates = Array(2).fill({ open: false });
  const [accordionStates, setAccordionStates] = useState(initialAccordionStates);

  const initialAccordionStatesAsia = Array(1).fill({ open: false });
  const [accordionStatesAsia, setAccordionStatesAsia] = useState(initialAccordionStatesAsia);

  const toggleAccordionAsia = (index) => {
    const newAccordionStates = [...accordionStatesAsia];
    newAccordionStates[index].open = !newAccordionStates[index].open;
    setAccordionStatesAsia(newAccordionStates);
  };

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index].open = !newAccordionStates[index].open;
    setAccordionStates(newAccordionStates);
  };


  return (
    <Layout>
      <Wrapper>
        <h1>Where we work</h1>
        <h2>
          If you want to contact Us, select a location, then click on it on the map or at the bottom of the map and get in touch. Work more efficiently and have a view of a wider area.
        </h2>
        <h2>Select your country and say hello</h2>
        <Row className="wrapper">
          <Col sm="12" md="6">
            <h3>Europe</h3>
            <ul>
              {accordionStates.map((state, index) => (
                <li key={index}>
                  <button
                    className={`accordion-header ${state.open ? 'open' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <img src={state.open ? minus : plus} alt="" />
                    <span className={state.open ? 'open' : ''}>{index === 0 ? 'Poland' : 'Hungary'}</span>
                  </button>
                  <p className={`accordion-content ${state.open ? 'open' : ''}`}>
                    <h4>Yuliya Mirashnichenka</h4>
                    <a href="mailto:yuliya.mirashnichenka@biodose.net">yuliya.mirashnichenka@biodose.net</a>
                  </p>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm="12" md="6">
            <h3>Asia</h3>
            <ul>
              {accordionStatesAsia.map((state, index) => (
                <li key={index}>
                  <button
                    className={`accordion-header ${state.open ? 'open' : ''}`}
                    onClick={() => toggleAccordionAsia(index)}
                  >
                    <img src={state.open ? minus : plus} alt="" />
                    <span className={state.open ? 'open' : ''}>United Arab Emirates</span>
                  </button>
                  <p className={`accordion-content ${state.open ? 'open' : ''}`}>
                    <h4>Yuliya Mirashnichenka</h4>
                    <a href="mailto:yuliya.mirashnichenka@biodose.net">yuliya.mirashnichenka@biodose.net</a>
                  </p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Wrapper>
    </Layout>
  );
};

export default Try;
