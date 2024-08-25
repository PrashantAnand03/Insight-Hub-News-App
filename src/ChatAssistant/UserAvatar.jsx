import userAvatar from "../assets/userAvatar.jpg"
import "../ChatAssistant/ChatAssistant.css"

export default function Avatar() {
  return (
    <div>
      <img className="userAvatar" src={userAvatar}/>
    </div>
  )
}