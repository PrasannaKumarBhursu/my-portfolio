import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "@material-ui/core"

import "./index.css"
import CompletionsItem from "../CompletionsItem"

const completionImagesData=[
  {
    id:1    ,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450478/IMG_20220305_083053_ldtolq.jpg",
    course:"Static Website",
    percent:100
    
  },
  {
    id:2    ,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450478/IMG_20220305_083130_hr5kyc.jpg",
    course:"Responsive Website",
    percent:100
    
  },
  {
    id:3    ,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450472/IMG_20220305_083207_oamsml.jpg",
    course:"Dynamic Website",
    percent:90
    
  },
  
  {
    id:4,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450481/IMG_20220305_083309_w8eetc.jpg",
    course:"Developer FOundations",
    percent:100
    
  },
  {
    id:5,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450479/IMG_20220305_083330_xp5pqf.jpg",
    course:"Javascript Essentials",
    percent:80
    
  },
  {
    id:6,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450464/IMG_20220305_083359_fyomee.jpg",
    course:"Flexbox css",
    percent:70
    
  },
  
  {
    id:7,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450472/IMG_20220305_083425_vsne4c.jpg",
    course:"React js",
    percent:90

    
  },
  {
    id:8,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450461/IMG_20220305_083441_urxuaz.jpg",
    course:"Database",
    percent:90
    
  }
  ,{
    id:9,
    imageUrl:"https://res.cloudinary.com/da1xbd1tx/image/upload/v1646450449/IMG_20220305_083501_ie1atm.jpg",
    course:"Node Js",
    percent:80
    
  }
]



const Completions = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true,
    adaptiveWidth:true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <div className="slider-container">
      
      <Container >
      <h1 className="ccbp-heading"><span style={{color:"#F93154"}}>CCBP</span> LEARNINGS</h1>
      <Slider {...settings}>
        {
            completionImagesData.map(eachItem=>(
              <CompletionsItem key={eachItem.id} eachItem={eachItem}/>
            ))
        }
        
      </Slider>
    </Container>
    </div>
  )
}

export default Completions