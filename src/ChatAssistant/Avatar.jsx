import chatbotLogo from "../assets/chatbotLogo.jpeg"
import "../ChatAssistant/ChatAssistant.css"

export default function Avatar() {
  return (
    <div>
      <img className="Avatar" src={chatbotLogo}/>
    </div>
  )
}