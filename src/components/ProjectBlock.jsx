
// import styles from "./ProjectBlock.module.css"


function LinksBlock({links}){
    if(links==null){
        return <></>
    }
    if(links.length==0){
        return <></>
    }
    let res = links.map((link, index) => {
        if(index==0){
            return(
                <>
                <a href={link.link}><b>{link.title}</b></a> 
                </>
            );
        }
        
        else{
            return(
                <>
                    {" / "}<a href={link.link}><b>{link.title}</b></a>
                </>

            );
        }
    })

    return(
        <div className='font-normal text-base/[120%]'>
            {res}
        </div>

    )


    
}


function TitleBlock({title}){
    if(title==null){
        return <></>
    }
    let size = "text-xl"
    if(title.length > 35){
        size = "text-base"
    }
    return(
        <div className='bg-mbrown-500 min-h-40 flex items-center py-5 px-0 mx-0 mb-3'>
            <div className='h-20 min-w-20 float-left my-0 mx-10 bg-mwhite-500'></div>
            <div className={`text-mwhite-500 font-medium ${size}`}>
                {title}
            </div>
        </div>
    )
}

function TopText({text}){
    if(text==null){
        return <></>
    }
    
    return(
        <div className='font-bold text-lg/[120%]'>
            {text}
        </div>
    )
}

function BottomText({text}){
    if(text==null){
        return <></>
    }
    return(
        <div className='font-normal text-base/[120%]'>
            {text}
        </div>
    )
}

function ImageBlock({src, objectPosition, mode}){
    if(objectPosition == null){
        objectPosition = "0% 0%"
    }
    if(mode == "headless"){
        return(
            <div className="relative w-full md:w-1/4 md:shrink-0">
                <img 
                    className='block h-180 md:max-h-none w-full md:h-full object-cover md:absolute' 
                    src={src} 
                    style={{objectPosition: objectPosition}} 
                />
            </div>

        )
    }
    return(
        <div className="relative w-full md:w-1/3 md:shrink-0">
            <img 
                className='block h-180 md:max-h-none w-full md:h-full object-cover md:absolute' 
                src={src} 
                style={{objectPosition: objectPosition}} 
            />
        </div>

    )
}

function SubHeader1({text}){
    if(text==null){
        return <></>
    }
    return(
        <div className='font-normal text-base/[120%]'>
            {text}
        </div>
    )
}

function SubHeader2({text}){
    if(text==null){
        return <></>
    }
    return(
        <div className='font-normal text-base/[120%]'>
            <i>{text}</i>
        </div>
    )
}

function AuthorBlock({authors}){
    if(authors==null){
        return <></>
    }
    if(authors.length < 1){
        return <></>
    }
    let res = authors.map((author, index) =>{
        let x = <></>
        if(index != 0){
            x = <a>, </a>
        }
        if(author == "Colin Au Yeung"){
            return(
                <>
                    {x}<b><i>{author}</i></b>
                </>
                
            )
        }
        else{
            return(
                <>
                    {x}<a>{author}</a>
                </>
            )
        }


    })

    return(
        <div className='font-normal text-base/[120%]'>
            {res}
        </div>
    )
}



function ProjectBlock({title, imagesrc, imagepos, topText, 
    subheader1, subheader2, bottomText, subBottom, authors, links, mode
}){

    let blockclass = "mt-5 md:mt-0 md:ml-5 w-full"

    let titleblock = <></>
    if(mode != "headless" & mode !="onlytext"){
        titleblock = <TitleBlock title={title}/>
    }

    let imagebloc = <></>
    if(mode != "noimage" & mode !="onlytext"){
        imagebloc = <ImageBlock src={imagesrc} objectPosition={imagepos} mode={mode}/>
        
    }
    else{
        blockclass = "mt-5 md:mt-0 md:ml-0 w-full"
    }

    if(mode == "onlyheader"){
        return(
            <div className='font-fira block px-5 mb-5'>
                <TitleBlock title={title}/>
            </div>
            
        )
    }


    


    return(
       <div className='font-fira block px-5 mb-20 md:flex'>
        {imagebloc}
        <div className={blockclass}>
            {titleblock}
            <TopText text={topText} />
            <SubHeader1 text={subheader1}/>
            <SubHeader2 text={subheader2}/>
            <div className='h-10'></div>
            <BottomText text={bottomText}/>
            <SubHeader2 text={subBottom}/>
            <AuthorBlock authors={authors}/>
            <LinksBlock links={links}/>
        </div>
    </div>


    );


}

export default ProjectBlock