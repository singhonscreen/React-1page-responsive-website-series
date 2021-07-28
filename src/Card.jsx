

function Card(props) {
    return (
       
      <div className ='container' >
          <div className="mainImg">
              <img src= {props.imgsrc} alt={props.altimg}  />
          </div>
          <h1>{props.title}</h1>
          <p> {props.pname} </p>
          <a href={props.link}target="_avadhesh"> 
          <button className="btn">{props.watch}</button>
          </a> 
      </div>
     
   
    )
  }



export default Card;

   