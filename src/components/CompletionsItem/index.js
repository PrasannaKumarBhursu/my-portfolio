import LinearWithValueLabel from "./progress"
import "./index.css"

const CompletionsItem=(props)=>{
    const {eachItem}=props
    const {imageUrl,course}=eachItem
    return(
        <div className="completion-image-container"> 
            <img  src={imageUrl} className="completion-image" alt={course}/>
            <LinearWithValueLabel percent={eachItem.percent}/>

        </div>  
    )
}   

export default CompletionsItem;


