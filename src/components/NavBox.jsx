import xbutton from "../assets/sprites/xbutton.png"

function NavBox({title, content}){
    let text = `[${title}]`

    return(
        <div
            className="font-micro font-normal text-4xl/[29px] bg-mwhite-500 border-5 border-solid border-mbrown-500"
        >
            <div
                className="p-4 mb-10 h-29"
            >
                <div className="bg-mbrown-500 text-mwhite-500 pl-6 mr-3 w-103 float-left">
                    {text}
                </div>
                <img 
                    className="w-29 float-left"
                    src={xbutton}
                />


            </div>
            {content}
            


        </div>

    )

}

export default NavBox