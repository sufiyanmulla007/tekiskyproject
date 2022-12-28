import React from 'react';
import styled from 'styled-components';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Technologies = () => {
  return (
    <>
   <Wrapper>
   <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between m-2">
            <h3 className='text-center'>Tekisky</h3>
            </div>
            <div>
            <h2>Tekisky-A platform to help you</h2>
            <h2>practice,complete & get ready for</h2>
            <h2>interviews.</h2>
            </div>
            <div className='para'>
  <p>A place for aspiring and experienced programmers to tech
  interviews,practice problem,complete in challenge, discuss and
  stay up to date with the latest developments in the tech world.
</p>
<p>our expert desingnes curated guided path will help you save time and
eneergy to figure out which coding question to be solve and give you A
perfect sequence to maximise your learninig expericece.
</p>
<p></p><br></br>
<div className='d-flex'>
<h4 style={{fontSize:"xx-large",marginRight:"3rem"}}>500+</h4>
<h4 style={{fontSize:"xx-large"}}>250+</h4>
</div>
<div className='d-flex' >
<p>interviews problems with Solutions</p>
<p>interviews expericece</p>
</div>

            </div>
          </div>
          <div className="rigth_data mt-3" style={{ width: "100%" }}>
            <div className="sign_img mt-3">
             <img src="images/crud.svg" style={{ maxWidth: 400 }} alt="pic"/>
            </div>
            {/* <div className='card'>
              <div className='cardbody'>
              <p>full stack</p>
              <h2>MERN Full Stack web development</h2>
              </div>
              <hr/>
              <div><AccessTimeIcon/>170+Hour</div>
            </div> */}
            
          </div>
        </section>
      </div>
   </Wrapper>
   </>
  );
};
const Wrapper = styled.section`
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 4.2rem;
      color:#FFA500
    }
    .card{
      width:50%;
      margin-left:3rem;
      margin-top:3rem;
      // background-color: #11f9fc;
     }
     .cardbody{
      background-color: #11f9fc;
     }
    p {
      margin: 1rem 0;
    }
  }
`;
export default Technologies;
