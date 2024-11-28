import React, { useState } from 'react'
// import { nutritionPlan } from '../Information/Nutrition_plan'



function Nutriton() {


  return (
    <>
    {/* image */}
    <Main/>


    {/* Dropbox */}
    <h1 style={{'margin':'auto','textAlign':'center' ,'paddingTop':'33px','backgroundColor':'antiquewhite'}}>BMI FAQ</h1>
    <Dropbox/>



    {/* Gallery*/}
    <Gallery/>


    {/* Form */}
    <h1 style={{'margin':'auto','textAlign':'center' ,'paddingTop':'43px',paddingBottom:'23px',backgroundColor:'aliceblue'}}>Get your Personalized plan </h1>
    <Form/>
    
    
    
   
    
    </>
  )
}

export default Nutriton

function Main(){
    return(
        <div class="card bg-dark text-white">
        <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="card-img" style={{'height':'700px'}}alt="..."/>
        <div class="card-img-overlay">
    <h5 class="card-title" style={{'margin':"auto",'maxWidth':'998px',"textAlign":"center","paddingTop":"503px" ,'color':'yellow','fontSize':'34px'}}>Nutrition Plan</h5>
    <p class="card-text"   style={{'margin':"auto",'maxWidth':'998px',"textAlign":"center","paddingTop":"12px"}}>Unlock Your Ultimate Nutrition Plan Tailored to Your BMI. Discover Your Category and Dive into a World of Health!</p>

  </div>
</div>
    )
}


function Gallery(){
    return(
      <>
   <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
    <div class="carousel-inner" style={{height:'768px'}}>
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} class="d-block w-100" alt="..." style={{height:'780px'}}/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'white'}}>Protein: 0.3 grams per 100 grams</h5>
          <h5 style={{color:'white'}}>Carbohydrates: 14 grams per 100 grams</h5>
          <p style={{color:'white'}}>Health Benefits: Rich in fiber and vitamin C, promotes heart health, and aids in weight management.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={`${process.env.PUBLIC_URL}/Images/orange.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'white'}}>Protein: 0.9 grams per 100 grams</h5>
          <h5 style={{color:'white'}}>Carbohydrates: 12 grams per 100 grams</h5>
          <p style={{color:'white'}}>Health Benefits: High in vitamin C, boosts the immune system, and improves skin health.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/Images/banana.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'white'}}>Protein: 1.3 grams per 100 grams</h5>
          <h5 style={{color:'white'}}>Carbohydrates: 23 grams per 100 grams</h5>
          <p style={{color:'white'}}>Health Benefits: High in potassium, good for heart health, and helps in muscle function and digestion.</p>
        </div>
      </div>
      <div class="carousel-item" >
        <img src={`${process.env.PUBLIC_URL}/Images/strawberry.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'black'}}>Protein: 0.8 grams per 100 grams</h5>
          <h5 style={{color:'black'}}>Carbohydrates: 8 grams per 100 grams</h5>
          <p style={{color:' white'}}>Health Benefits: Rich in antioxidants, supports heart health, and helps regulate blood sugar.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/Images/grapes.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'black'}}>Protein: 0.6 grams per 100 grams</h5>
          <h5 style={{color:'black'}}>Carbohydrates: 18 grams per 100 grams</h5>
          <p style={{color:'black'}}>Health Benefits: Contain antioxidants, support heart health, and have anti-inflammatory properties.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={`${process.env.PUBLIC_URL}/Images/pineapple.jpg`} class="d-block w-100" style={{height:'780px'}} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 style={{color:'black'}}>Protein: 0.5 grams per 100 grams</h5>
          <h5 style={{color:'black'}}>Carbohydrates: 13 grams per 100 grams</h5>
          <p style={{color:'black'}}>Health Benefits: Rich in vitamin C and bromelain, aids digestion, and reduces inflammation.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      </>
    )
}
function Dropbox(){
    return(
    <div style={{'backgroundColor':'antiquewhite',height:'431px',paddingTop:'73px'}}>
    <div class="accordion accordion-flush" id="accordionFlushExample" style={{maxWidth: "923px",margin: "auto"}}>
    <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingOne" style={{margin:"auto",maxWidth:'976px' ,fontSize:'34px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is BMI and why does it matter?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">BMI stands for Body Mass Index, a measure of body fat based on height and weight. It matters because it helps assess health risks.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingTwo" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How can I calculate my BMI?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin: "auto",maxWidth: "923px"}} >You can calculate your BMI by dividing your weight in kilograms by your height in meters squared.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingFour" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      
        How does BMI affect my nutrition plan?

      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin: "auto",maxWidth: "923px"}} >Your BMI category influences the type and amount of nutrients you need, guiding the creation of a personalized nutrition plan.</div>
    </div>
  </div>
  <div class="accordion-item" style={{margin:"auto"}}>
    <h2 class="accordion-header" id="flush-headingThree" style={{margin:"auto",maxWidth:'976px'}}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        What does my BMI category mean?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{margin: "auto",maxWidth: "923px"}}>Your BMI category indicates whether you are underweight, normal weight, overweight, or obese, providing insight into your health status.</div>
    </div>
  </div>
</div>
</div>
    )
}


function Form() {
  const [formData, setFormData] = useState({
    sex: '', age: '', bmi: '', level: '', fitnessGoal: '', fitnessType: '', hypertension: '', diabetes: ''
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
        Sex: formData.sex,
        Age: formData.age,
        BMI: formData.bmi,
        Level: formData.level,
        FitnessGoal: formData.fitnessGoal,
        FitnessType: formData.fitnessType,
        Hypertension: formData.hypertension,
        Diabetes: formData.diabetes
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputData),
        });

        if (!response.ok) throw new Error(`Server responded with ${response.status}`);
        const data = await response.json();
        setResult(data);
        setError(null);
    } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to fetch prediction. Please try again.');
    }
};

  return (
    <div style={{height: 'auto', backgroundColor: 'aliceblue'}}>
      <form onSubmit={handleSubmit} style={{margin: 'auto', maxWidth: '792px'}}>
        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Sex:
          <select className="form-control" name="sex" value={formData.sex} onChange={handleChange} style={{height:'46px',textAlign:'center'}}>
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Age:
          <input className="form-control" name="age" type="text" value={formData.age} onChange={handleChange} placeholder="Enter Age" style={{height:'46px',textAlign:'center'}}/>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>BMI:
          <input className="form-control" name="bmi" type="text" value={formData.bmi} onChange={handleChange} placeholder="Enter BMI" style={{height:'46px',textAlign:'center'}}/>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Level:
          <select className="form-control" name="level" value={formData.level} onChange={handleChange} style={{height:'46px',textAlign:'center'}}>
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Fitness Goal:
          <select className="form-control" name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange} style={{height:'46px',textAlign:'center'}}>
            <option value="">Select Goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Fitness Type:
          <select className="form-control" name="fitnessType" value={formData.fitnessType} onChange={handleChange} style={{height:'46px',textAlign:'center'}}>
            <option value="">Select Type</option>
            <option value="Strength">Strength</option>
            <option value="Cardio">Cardio</option>
            <option value="Flexibility">Flexibility</option>
          </select>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Hypertension:
          <select className="form-control" name="hypertension" value={formData.hypertension} onChange={handleChange} style={{height:'46px',textAlign:'center'}}>
            <option value="">Select Yes/No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label className="form-label" style={{width:'392px',textAlign:'center',paddingLeft:'4px',paddingRight:'4px'}}>Diabetes:
          <select className="form-control" name="diabetes" value={formData.diabetes} onChange={handleChange} style={{height:'46px',textAlign:'center'}}>
            <option value="">Select Yes/No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <div style={{maxWidth:'600px',margin:'auto',textAlign:'center',paddingTop:'23px'}}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div style={{margin:'auto',maxWidth:'1210px',width:'1520px',paddingTop:'34px'}}>
        <h1 style={{textAlign:'center'}}>Your Diet & Excersie Plan</h1>
        {result && <div style={{color: 'black',textAlign:'center',height:'60px'}}><span style={{display:'block',textAlign:'center',color:'red'}}>Excersie : </span>{result.Exercises}</div>}
        {result && <div style={{color: 'black',textAlign:'center',height:'60px'}}><span style={{display:'block',textAlign:'center',color:'red'}}>Equipment : </span>{result.Equipment}</div>}
        {result && <div style={{color: 'black',textAlign:'center',height:'111px'}}><span style={{display:'block',textAlign:'center',color:'red'}}>Diet : </span>{result.Diet}</div>}
        {result && <div style={{color: 'black',textAlign:'center',height:'313px'}}><span style={{display:'block',textAlign:'center',color:'red'}}>Recommendation : </span>{result.Recommendation}</div>}
        
        {error && <div style={{color: 'red'}}>{error}</div>}
      </div>
    </div>
  );
}