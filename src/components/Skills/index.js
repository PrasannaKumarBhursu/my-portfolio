import { Button} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import "./index.css"

const skillsArray=["HTML","CSS","JAVASCRIPT","REACT JS","NODE JS*","SQL","EXPRESS JS*","MATERIAL UI","BOOTSTRAP"]



const Skills=()=>(
    <div className="skills-container">
        <h1 className="skills-headings">Skills</h1>
        <ul className="skills-inner-conttainer">
            {skillsArray.map(eachSkill=>(<li className="buttons"><Button variant="outlined" color="secondary"> {eachSkill}</Button></li>))}
        </ul>
        <p className="para-soon">* to be completed soon....</p>
        <a className="anchor-styles" href="https://github.com/PrasannaKumarBhursu" target="_blank" rel="noreferrer">
            <Button variant="contained" color="secondary" startIcon={<GitHubIcon/>}>
                Github
            </Button>
        </a>
    </div>
   
  
)

export default Skills