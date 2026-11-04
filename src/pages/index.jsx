

import PageCore from '../components/PageCore.jsx'
import { Header } from "../components/decor.jsx"
import TravelBox from "../components/TravelBox.jsx"

import WelcomeText from "../data/WelcomeText.json"
import Travel from "../data/Travel.json"
import TextBlock from '../components/TextBlock.jsx'

// let contents = <ProjectGroup 
//       Projects={GradCourses}
//       Title={"Grad Courses"}
//     />



let res = Travel.map((trip) =>{
    // console.log(course)
    const Mono = new URL(`../assets/travel/${trip.Mono}`, import.meta.url).href
    const Color = new URL(`../assets/travel/${trip.Color}`, import.meta.url).href

    return(
        <TravelBox
            Title={trip.Title}
            Year={trip.Year}
            Mono={Mono}
            Color={Color}
        />
    )
})

console.log(res)


function Home(){
    return(
    <>
    <PageCore Contents={<>
        <Header title={"Hello!"}/>
        <TextBlock TextData={WelcomeText}/>
        <Header title={"Travel"}/>
        <div className="grid grid-cols-[repeat(auto-fill,160px)] gap-10 justify-center md:justify-start t w-full pl-5 mb-20"
        >
            {res}
        </div>
        
        </>} Title={"home"}/>
    </>

    )

}

export default Home