import React from 'react'

function CarView(props) {
    const {movielist}= props; 

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems: 'flex-end'}}>
            <div style={{display:'flex',margin:' 2rem 1rem'
            ,backgroundImage:`url(${movielist.image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'
            ,width:'78%',height:'20vw', flexDirection:'column',padding:'2rem', justifyContent:'center', border:'1px solid #dddddd', borderRadius:'10px', boxShadow:'10px 15px 20px 0px'}}>
            </div>
            <h3 style={{margin:'0 1rem 0 0',    textAlign: 'right'}}>{movielist.title.replace(/<b>/gi,"").replace(/<\/b>/gi,"").replace(/amp;/gi,"")}</h3>
             <p style={{margin:'0 1rem 0 0'}}>{movielist.userRating}</p>
        </div>
    )
}

export default CarView
