const Post =({Post})=>{
    return(
        <div className="card" style={{width: "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h4 className="card-title">{postMessage.title}</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn-solid theme-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export default Post;