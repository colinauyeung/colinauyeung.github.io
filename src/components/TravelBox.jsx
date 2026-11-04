import japan from "../assets/travel/japan.png"
import japanmono from "../assets/travel/japan-mono.png"

function TravelBox({Title, Year, Mono, Color}){
    return(
        <div className="group w-160 h-200 ring-5 ring-inset ring-outline mr-10 mb-10 p-12 float-left">
            <div className="float-left w-135 h-135 relative">
                <img
                    src={Mono}
                    className="group-hover:hidden absolute top-0 left-0 z-10 block"
                />
                <img
                    src={Color}
                    className="absolute top-0 left-0 block"
                />


            </div>
            <div className="h-39 w-10 border-mbrown-500 bg-mbrown-500 float-left mt-4 mr-5"></div>
            <div className="pt-140 font-micro font-normal text-[32px]/[60%]">
                <div>{Title}</div>
                <div>{Year}</div>

            </div>

        </div>


    )


}

export default TravelBox