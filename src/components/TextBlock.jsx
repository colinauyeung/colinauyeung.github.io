function TextBlock({TextData}){
    let res = TextData.map((text, index) =>{
        if (index != 0){
            return(<>
            <div className="h-18"></div>
            <div>{text}</div>
            </>)
        }
        else{
            return(
                <div>{text}</div>
            )
        }


    })

    return(
        <div className="py-0 px-15 mb-30 text-mbrown-500 font-fragment font-normal text-[16px]/[18px]">
            {res}
        </div>


    )

}

export default TextBlock