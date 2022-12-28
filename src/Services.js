import React from 'react'
import styled from 'styled-components';
const Services = () => {
  return (
    <Wrapper style={{paddingTop:"2rem"}}>
      {/* card s */}
      <div className='about-body'>
      <div className='about-head'>
      <h1>How Tekisky works </h1>
      </div>
      <div className='card-div'>
         <div className='card'>
            <h1 className='card-head'>Register and enroll</h1>
            <p>Select your course , pay enrollment fee and become a part of Tekisky pvt ltd journey.(Training + Placement)
            </p>
        </div>

        <div className='card'>
            <h1>Start your learning journey and get certified.</h1>
            <p>Get access to Tekisky exclusive learning ecosystem like
            </p>
            <ul>
                <li>Offline Classes</li>
                <li>Live Project demo</li>
                <li>Daily Assignments</li>
                <li>Instant dought resolution</li>
            
            </ul>
        </div>

        <div className='card'>
            <h1 className='card-head3'>Start Placement program.</h1>
            <p>Get access to all our placement features like</p>
            <ul>
                <li> Resume preparation</li>
                <li>Mock interviews</li>
            </ul>
        </div>

      </div>
    </div>
      {/* card f */}
      <div>
      <h1>services</h1>
      </div>
    <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <h2>Training</h2>
              <h3>we Provide Quality Training</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <h2>website Development</h2>
                <h3>Develop Website For Your Business</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
               <h2>Business Digitalization</h2>
                <h3>Digitalize Your business With Us</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <h2>IT Consulting</h2>
              <h3>we will Assist you For a job</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
    font-family: "Times New Roman"
  }
  h2 {
    margin-top: 1.4rem;
    font-size: 2rem;
    font-family: "Times New Roman"
  }
  h1{
    text-align: center;
    font-family: -webkit-body;
  }
  // card style
  .card-div{
    display: flex;
    justify-content: space-around;
    
    }
    .card{
        background-color: #004a99 !important;
        width: 30%;
        text-align: center;
        padding: 30px ;
        border-radius: 80px !important;
        border: none !important;
        outline: none !important;
        display: flex;
    
    }
    .card ul{
        text-align: left;
        
    }
    .card-head{
        margin-top: 90px;
    }
    .card-head3{
        margin-top: 70px;
    }
    .about-body{
        background-color: #0852a1;
        padding: 60px;
        text-align: center;
        color: white;
    }
    .about-head{
        padding: 60px ;
    }
    .card li{
      font-size: 2rem;
    }
`;
export default Services;
