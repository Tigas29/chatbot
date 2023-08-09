const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat");
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p> `
      : `<span class="material-symbols-outlined">smart_toy</span> <p>${message}</p> `;
  chatLi.innerHTML = chatContent;
  return chatLi;
};
const handleChat = () => {
  userMessage = chatInput.ariaValueMax.trim();
  console.log(userMessage);
  if (!userMessage) return;

  createChatLi(userMessage, "outgoing");
};

sendChatBtn.addEventListener("click", handleChat);
