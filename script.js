document.addEventListener("DOMContentLoaded", function () {
    var chatBtn = document.createElement("button");
    chatBtn.innerText = "Chat with Us";
    chatBtn.classList.add("chat-button");
    document.body.appendChild(chatBtn);

    chatBtn.addEventListener("click", function () {
        Tawk_API.toggle(); // Opens the Tawk.to chat widget
    });
});
