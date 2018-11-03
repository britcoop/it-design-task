import React from 'react';

import openQuote from './images/quotes.png'
import './App.css';

const Main = () => {
  return(
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Workshops</h1>
          <p class="lead">Your most pressing IT problems solved in one week.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
          </p>
        </div>
        <div className="row d-flex justify-content-start">
          <div className="col-lg-12">
            <h3 className="header-3">What our clients are saying...</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card">
              <div className="top-border grow-left agent-2"/>
              <div className="card-body quotes-left agent-3">
                <p className="testimonial">
                  <img className="open-quote align-self-start" src={openQuote}/> 
                  I&nbsp;accomplished my goals of trying to create the strategic pillars 
                  and having a structure that would live on for years to come, as well as 
                  getting into the weeds on the things we want to get very specific on 
                  for the next three years. With Info-Tech’s help, we accomplished both.
                </p>
                <p className="author">SERGE PARISIEN<br />
                CIO, Kadlec Regional Medical Center</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="top-border grow-left agent-2"/>
              <div className="card-body quotes-right agent-3">
                <div className="right-top">
                  <p className="testimonial">
                  <img className="open-quote align-self-start" src={openQuote}/>
                    The documentation that supports the program was shared with us 
                    during and after the session in the form of heat maps, business 
                    capabilities models, and architecture diagrams. These documents were
                    practical and effective in our discussions with stakeholders.</p>
                  <p className="author">DAVE ROACH<br />
                  Manager, cmhc</p>
                </div>
              </div>
            </div>
            <div className="card pt-3">
              <div className="top-border grow-left agent-2"/>
              <div className="card-body agent-3">
                <p className="testimonial">
                <img className="open-quote align-self-start" src={openQuote}/>
                We started seeing results from the Agile workshop almost immediately. 
                This was apparent through more team collaboration, IT and product 
                engagement, and more measurable business value through enhancements 
                delivered to production for our customers in shorter development 
                cycles.</p>
                <p className="author">MARK HUBBARD<br />
                CIO, Fundserv Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  ); 
}


export default Main;