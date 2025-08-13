import profilePic from './assets/exam.png'
function Card()
{
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile image"></img>
            <h1 className="card-title" >Reshma M</h1>
            <p className="card-text" >Softerware developer,learing react</p>
        </div>
    )
}
export default Card;