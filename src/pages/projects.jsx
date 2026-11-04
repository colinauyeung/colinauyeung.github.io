
import ProjectGroup from '../components/ProjectGroup.jsx'

import PageCore from '../components/PageCore.jsx'

import GradCourses from "../data/GradCourses.json"
import UnderGrad from "../data/UnderGrad.json"
import PoliSci from "../data/PoliSci.json"


let contents = <>
    <ProjectGroup 
        Projects={GradCourses}
        Title={"Grad Courses"}
        />

    <ProjectGroup 
        Projects={UnderGrad}
        Title={"Undergrad Courses"}
        />

    <ProjectGroup 
        Projects={PoliSci}
        Title={"Political Science"}
        />


</>


function Projects(){
    return(
    <>
    <PageCore Contents={contents} Title={"projects"}/>
    </>

    )

}

export default Projects