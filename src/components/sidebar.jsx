import { Link } from "react-router-dom";
import NavBox from "./NavBox";
import avatar from "../assets/sprites/avatar2.png"
import NavItem from "./NavItem";

function SideBar({Pages, Links}){

    let avatarbox = <>
        <img 
            className="w-113 mx-auto mb-4"
            src={avatar}
        />
    </>


    console.log(Links)

    let linkbox = Links.map((link) => {
        return(
            <a href={link.Address}>
                <NavItem title={link.Title}/>
            </a>

        )


    })


    // let linkbox = <>
    //     <a href="mailto:colin.auyeung403@gmail.com">
    //         <NavItem title={"email"}/>
    //     </a>
    //     <a href="https://www.linkedin.com/in/colin-au-yeung-348293312/">
    //         <NavItem title={"linkedin"}/>
    //     </a>
    //     <a href="https://drive.google.com/file/d/1OTkeZ4ZjH_2IN7mUH80-Wths0wfTNp-b/view?usp=sharing">
    //         <NavItem title={"cv"}/>
    //     </a>
    // </>


    let menubox = Pages.map((page) => {
        return(
            <Link to={page.Address}>
                <NavItem title={page.Title}/>
            </Link>
        )


    })

    // let menubox = <>
    //     <Link to="/website-react/">
    //         <NavItem title={"home"}/>
    //     </Link>
    //     <Link to="/website-react/research">
    //         <NavItem title={"research"}/>
    //     </Link>
    //     <Link to="/website-react/projects">
    //         <NavItem title={"projects"}/>
    //     </Link>
    //     <Link to="/website-react/personal">
    //         <NavItem title={"personal"}/>
    //     </Link>
    
    
    // </>

    return(
        <div
            id="sidebar"
            className="w-155 sticky top-144 mx-16 hidden md:block"
        >
            <div className="text-left py-14">
                <NavBox
                    title={"avatar"}
                    content={avatarbox}
                
                />
                <div className="h-16"></div>
                <NavBox
                    title={"menu"}
                    content={menubox}
                />
                <div className="h-16"></div>
                <NavBox
                    title={"links"}
                    content={linkbox}
                />
                

            </div>




        </div>

    )


}

export default SideBar