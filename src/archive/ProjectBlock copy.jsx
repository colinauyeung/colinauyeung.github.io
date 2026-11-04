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
        <div className={styles.bottomText}>
            {res}
        </div>

    )


    
}


function TitleBlock({title}){
    if(title==null){
        return <></>
    }
    return(
        <div className={styles.titleBlock}>
            <div className={styles.titleDecor}></div>
            <div className={styles.titleText}>
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
        <div className={styles.topText}>
            {text}
        </div>
    )
}

function BottomText({text}){
    if(text==null){
        return <></>
    }
    return(
        <div className={styles.bottomText}>
            {text}
        </div>
    )
}

function ImageBlock({src, objectPosition}){
    if(objectPosition == null){
        objectPosition = "0% 0%"
    }
    return(
        <img className={styles.mainImage} src={src} style={{objectPosition: objectPosition}} />
    )
}

function SubHeader1({text}){
    if(text==null){
        return <></>
    }
    return(
        <div className={styles.bottomText}>
            {text}
        </div>
    )
}

function SubHeader2({text}){
    if(text==null){
        return <></>
    }
    return(
        <div className={styles.bottomText}>
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
        <div className={styles.bottomText}>
            {res}
        </div>
    )
}



function ProjectBlock({title, imagesrc, imagepos, topText, 
    subheader1, subheader2, bottomText, authors, links
}){

    return(
       <div className={styles.projectBlock}>
        <ImageBlock src={imagesrc} objectPosition={imagepos} />
        <div className={styles.textBlock}>
            <TitleBlock title={title}/>
            <TopText text={topText} />
            <SubHeader1 text={subheader1}/>
            <SubHeader2 text={subheader2}/>
            <div className={styles.lineBreak}></div>
            <BottomText text={bottomText}/>
            <AuthorBlock authors={authors}/>
            <LinksBlock links={links}/>
        </div>
    </div>


    );


}

export default ProjectBlock