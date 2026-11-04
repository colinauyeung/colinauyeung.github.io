function Header({title}){
    return(
        <div className="h-46 md:h-66 inset-shadow-header my-15 mx-5">
            <div className="h-full w-23 mr-5 bg-mbrown-500 float-left"></div>
            <div className="h-full w-7 mr-5 bg-mbrown-500 float-left"></div>
            <div className='pl-40 md:pl-56 font-mono font-normal text-[32px] md:text-5xl/normal'>{title}</div>
        </div>
        
    )
}

function TitleBlock({title}){
    if(title==null){
        return <></>
    }
    let size = "text-xl"
    // if(title.length > 35){
    //     size = "text-base"
    // }
    return(
        <div className='font-fira bg-mbrown-500 min-h-40 flex items-center py-5 px-0 mx-5 mb-3'>
            <div className='h-20 min-w-20 float-left my-0 mx-10 bg-mwhite-500'></div>
            <div className={`text-mwhite-500 font-medium ${size}`}>
                {title}
            </div>
        </div>
    )
}

function Paragraph({Text}){

    return(
        <div className="py-0 px-5 mb-10 text-mbrown-500 font-fragment font-normal text-[16px]/[18px]">
            {Text}
        </div>


    )

}

export {Header, TitleBlock, Paragraph};