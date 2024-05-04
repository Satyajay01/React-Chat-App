import React, { useState } from "react";
import "../chat/chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState("");

  const hamdleEmoji = (e) => {
    // console.log(e)
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  // console.log(text)

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">
          <div className="texts">
            <img src="https://thefurbearers.com/wp-content/uploads/2020/10/2020-02-10-wolf-fb-wide.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem sint assumenda, itaque amet nisi tempore iusto
              voluptates eum quisquam cupiditate officia! Alias quibusdam
              adipisci nam ex blanditiis animi debitis!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={hamdleEmoji} />
          </div>
        </div>
        <button className="sendbutton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
