import xbutton from "../assets/sprites/xbutton.png"
import { Link } from "react-router-dom";
import NavBox from "./NavBox";
import avatar from "../assets/sprites/avatar2.png"
import NavItem from "./NavItem";

function Dropdown({Title, Pages, Links}){

    let text = "./" + Title

    let res = Pages.map((page) => {
        let restext = "./" + page.Title
        return(
            <Link to={page.Address} >
                <div className="hover:bg-darkbrown bg-mbrown-500 py-12 px-10 block">{restext}</div>
            </Link>
        )
    })

    let linksbox = Links.map((link) => {
        let restext = "./" + link.Title
        return(
            <a href={link.Address}>
                <div className="hover:bg-darkbrown bg-mbrown-500 py-12 px-10 block">{restext}</div>
            </a>
        )
    })

    return(
        <div className="sticky top-0 flex md:hidden p-5 z-30">
            <div className="group w-auto grow relative"> 
                <button className="peer h-40 w-full font-micro font-normal bg-mbrown-500 text-4xl/[80%] text-mwhite-500 border-none text-left pl-10">
                    {text}



                </button>

                <div className="group-hover:block hidden box-border w-full absolute bg-mbrown-500 z-30 font-micro font-normal text-4xl/[80%] text-mwhite-500">
                    <div className="bg-darkbrown py-12 px-10 block">
                        [menu]
                    </div>
                    {res}
                    <div className="bg-darkbrown py-12 px-10 block">
                        [links]
                    </div>
                    {linksbox}


                </div>

            </div>
            <img
                src={xbutton}
                className="h-40 ml-4"
            />


        </div>



    )



}

export default Dropdown