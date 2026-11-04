function NavItem({title}){
    
    let text = `./${title}`
    
    return(
        <div 
            className="bg-lightbrown hover:bg-mbrown-500 text-mwhite-500 pl-5 mx-5 mb-5"
        
        
        
        >{text}</div>
    )

}

export default NavItem