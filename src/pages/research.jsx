import GradCourses from "../data/GradCourses.json"
import ProjectGroup from '../components/ProjectGroup.jsx'

import PageCore from '../components/PageCore.jsx'
import Thesis from "../data/Thesis.json"
import Publications from "../data/Publications.json"
import Other from "../data/OtherResearch.json"

let contents = <>
    <ProjectGroup 
        Projects={Thesis}
        Title={"Thesis"}
    />
    <ProjectGroup 
        Projects={Publications}
        Title={"Publications"}
    />
    <ProjectGroup 
        Projects={Other}
        Title={"Other"}
    />


</>




function Research(){
    return(
    <>
    <PageCore Contents={contents} Title={"research"}/>
    </>

    )

}

export default Research