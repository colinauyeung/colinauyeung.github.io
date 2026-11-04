import ProjectGroup from '../components/ProjectGroup.jsx'
import { Header, Paragraph, TitleBlock } from "../components/decor.jsx"

import PageCore from '../components/PageCore.jsx'

import CardGames from "../data/CardGames.json"

import csus1 from "../assets/csus-posters/csus1.png"
import csusmeet1 from "../assets/csus-posters/csusmeetandgreetv2.png"
import csusgit from "../assets/csus-posters/csusgit.png"
import csusspooky from "../assets/csus-posters/csuspooky.png"
import csusgit2 from "../assets/csus-posters/gitevent1.png"
import reactnight from "../assets/csus-posters/reactnight.png"
import csuszoo from "../assets/csus-posters/csusxzoov4.gif"
import csusmeet2 from "../assets/csus-posters/WMandGCSUSv2.png"
import csusmeet3 from "../assets/csus-posters/csusmeet.gif"
import calhacks from "../assets/csus-posters/CalgaryHacksPoster.gif"
import calhacks2 from "../assets/csus-posters/calgaryhacksposter2022-5.gif"

function Personal(){
    return(
    <>
    <PageCore Contents={
    <>
        <ProjectGroup Projects={CardGames} Title={"Card Games!"}/>
        <Header title={"Posters"}/>
        <TitleBlock title={"Computer Science Undergraduate Society"}/>
        <Paragraph Text={"A collection of posters I made for the Computer Science Undergraduate Society at the University of Calgary from my time as an Executive (2020-2022). All of the posters feature my own photography!"}/>
        <div className='grid grid-cols-2 gap-4 mb-10 mx-5'>
            <div>
                <img src={csusmeet1} className='mb-4'/>
                <img src={csusspooky} className='mb-4'/>
                <img src={reactnight} className='mb-4'/>
                <img src={csusmeet2} className='mb-4'/>
                <img src={csus1} className='mb-4'/>
            </div>
            <div>
                <img src={csusgit} className='mb-4'/>
                
                <img src={csusgit2} className='mb-4'/>
                
                <img src={csuszoo} className='mb-4'/>
                
                <img src={csusmeet3} className='mb-4'/>
            </div>
        </div>
        <TitleBlock title={"CalgaryHacks"}/>
        <Paragraph Text={"Some additional posters I made as Media Lead of CalgaryHacks from 2021 to 2022 "}/>
        <div className='grid grid-cols-2 gap-4 mb-10 mx-5'>
            <img src={calhacks}/>
            <img src={calhacks2}/>
        </div>

    </>
    } Title={"personal"}/>
    </>

    )

}

export default Personal