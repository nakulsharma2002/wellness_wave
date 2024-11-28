import React from 'react'
// import { information } from '../About_information'

function About() {

  return (
    <>
    <img src={`${process.env.PUBLIC_URL}/Images/fitness4.jpg`} style={{width:'100%',height:'600px'}} alt="..."/>
    
    
    {/* Our Servise */}
    <h1 style={{paddingTop:'23px',width:'100%',margin:'auto',textAlign:'center',paddingBottom:"23px"}}>Service</h1>
    
    
    <Servise/>
     


    {/* DropBox */}
    <h1 style={{paddingTop:'23px',width:'100%',margin:'auto',textAlign:'center',backgroundColor:'lightblue'}}>FAQ Question</h1>
    <Dropbox/>
    </>
  )
}

export default About

function Dropbox(){
    return(
    <div class="accordion accordion-flush" id="accordionFlushExample" style={{maxWidth: "923px",margin: "auto"}}>
    <div class="accordion-item" style={{margin:"auto" ,width:'871px'}}>
    <h2 class="accordion-header" id="flush-headingOne" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto" ,width:'871px'}}>
    <h2 class="accordion-header" id="flush-headingTwo" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin:"auto" ,width:'871px'}} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingThree" style={{margin:"auto" ,width:'871px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin:"auto" ,width:'871px'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    )
}






function Servise(){
  return(
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={`${process.env.PUBLIC_URL}/Images/connecting.jpg`} className="d-block w-100" alt="..." style={{height:'590 !important'}} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'white'}}>Connecting People</h5>
              <p style={{color:'white'}}>We provide a platform that</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={`${process.env.PUBLIC_URL}/Images/connecting.jpg`} className="d-block w-100" alt="..." style={{height:'585 !important'}}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'white'}}>Connecting People</h5>
              <p style={{color:'white'}}>We provide a platform that fosters connections between people, allowing you to build relationships and find workout buddies or accountability partners.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/Images/motivation.jpg`} className="d-block w-100" style={{height:'590 !important'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'white'}}>Continuous Motivation</h5>
              <p style={{color:'white'}}>Stay motivated with our regular updates, challenges, and inspiring content designed to keep you focused and energized on your fitness goals.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/Images/chance.jpg`} className="d-block w-100" style={{height:'590 !important'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'white'}}>Creator Chance</h5>
              <p style={{color:'white'}}>As a creator, you have the chance to showcase your expertise, share your knowledge, and contribute to our community's growth.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} className="d-block w-100" style={{height:'590 !important'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'white'}}>Exclusive Resources</h5>
              <p style={{color:'white'}}>Gain access to exclusive resources, including workout plans, nutrition guides, and expert advice, to enhance your fitness journey.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/Images/recomandation.jpg`} className="d-block w-100" style={{height:'700px !important'}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{color:'white'}}>Personal Development</h5>
              <p style={{color:'white'}}>We believe in holistic wellness, offering resources and support for your personal development, mental well-being, and overall growth.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}