import xbutton2 from "../assets/sprites/xbutton2.png"
import maxbutton from "../assets/sprites/maxbutton.png"
import minbutton from "../assets/sprites/minbutton.png"
import SideBar from "./sidebar"
import Dropdown from "./dropdown"
import Links from "../data/Links.json"
import { Link } from "react-router-dom"
import avatar from "../assets/sprites/avatar2.png"

function TitleBar({Title}){
    let text = "colin.auyeung/" + Title
    return(
        <div className="h-40 md:flex hidden">

            <div className="font-micro bg-mbrown-500 text-mwhite-500 text-5xl/[40px] pl-10 grow overflow-hidden">
                {text}
            </div>
            <img
                src={minbutton}
                className="ml-5"
            />
            <img
                src={maxbutton}
                className="ml-5"
            />
           <img
                src={xbutton2}
                className="ml-5"
            />
        </div>
    )
}

function MobileHeader(){
    return(
        <div className="border-8 border-outline border-solid my-10 mx-5 flex md:hidden">
            <img
                src={avatar}
                className="w-60 m-10"
            />
            <div className="w-full">
                <div className="bg-mbrown-500 mt-10 mr-10 h-40">
                    <div className="my-10 mr-5 ml-10 h-20 w-20 bg-mwhite-500 float-left"></div>
                    <div className="font-fragment font-normal text-2xl text-mwhite-500 pt-5">
                        colin.auyeung
                    </div>


                </div>
                <div className="font-fragment font-normal text-lg text-mbrown-500">
                    developer/hci.researcher
                </div>


            </div>



        </div>

    )

}


function PageCore({Contents, Title}){


    console.log(Links)

    return(
        <div
            id="layout"
            className="md:flex md:w-screen md:items-start md:justify-center pr-5 md:pr-0"
        >

            <SideBar Pages={Links.Pages} Links={Links.Links}/>
            <Dropdown Title={Title} Pages={Links.Pages} Links={Links.Links}/>
            <MobileHeader />
            <div
                id="main-wrapper"
                className="md:relative md:w-755"
            
            >
                <div
                    id="content-wrapper"
                    className=""
                >

                    <div
                        id="mainbox"
                        className="md:relative md:p-5 md:top-32 overflow-hidden bg-mwhite-500 md:border-6 md:border-solid md:border-mbrown-500 md:h-min-[90vh]"
                    
                    >

                        <TitleBar Title={Title}/>
                        {Contents}

                    </div>



                </div>
    



            </div>
            <aside className="w-150 h-375 ml-16 hidden md:block"></aside>



        </div>



    )

}

export default PageCore