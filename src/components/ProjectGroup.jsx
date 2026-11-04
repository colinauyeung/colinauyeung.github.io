import ProjectBlock from "./ProjectBlock"
import React from "react"
import { Header } from "./decor"
// import GradCourses from "./GradCourses.json"

// console.log(GradCourses)

// const testLinks = [{title: "Demo Video", link: "https://youtu.be/rLPgDWHCytA?si=iAFxQgO1_wZRBb3b"},
//     {title: "Test", link:"https://youtu.be/rLPgDWHCytA?si=iAFxQgO1_wZRBb3b"}
// ]

// const myAuthors = ["Tianyi Zhang", "Colin Au Yeung", 
//     "Emily Aurelia", "Yuki Onishi", 
//     "Neil Chulpongsatorn", 
//     "Jiannan Li", "Tony Tang"]

// const imgUrl = new URL('./assets/project-images/sustainable.png', import.meta.url).href


// function Header({title}){
//     return(
//         <div className="h-66 inset-shadow-header my-15 mx-5">
//             <div className="h-full w-23 mr-5 bg-mbrown-500 float-left"></div>
//             <div className="h-full w-7 mr-5 bg-mbrown-500 float-left"></div>
//             <div className='pl-56 font-mono font-normal text-5xl/normal'>{title}</div>
//         </div>
        
//     )
// }




function ProjectGroup({Projects, Title}){
    let res = Projects.map((course) =>{
        // console.log(course)
        const imgUrl = new URL(`../assets/project-images/${course.imgurl}`, import.meta.url).href
        console.log(`../assets/project-images/${course.imgurl}`,)

        return(
            <ProjectBlock 
                title={course.title}
                imagesrc={imgUrl}
                imagepos={course.imgpos}
                topText={course.topText}
                subheader1={course.subheader1}
                subheader2={course.subheader2}
                bottomText={course.bottomText}
                subBottom={course.subBottom}
                authors={course.authors}
                links={course.links}
                mode={course.mode}
            
            />
        )
    })
    return(
        <>
            <Header title={Title}></Header>
            {res}
        </>
    )

}

export default ProjectGroup