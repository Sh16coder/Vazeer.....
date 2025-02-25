document.addEventListener("DOMContentLoaded", function () {
    var chatBtn = document.createElement("button");
    chatBtn.innerText = "Chat with Us";
    chatBtn.classList.add("chat-button");
    document.body.appendChild(chatBtn);

    chatBtn.addEventListener("click", function () {
        Tawk_API.toggle(); // Opens the Tawk.to chat widget
    });
});
// Toggle Chatbot Visibility
function toggleChatbot() {
    let chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = (chatbot.style.display === "flex") ? "none" : "flex";
}

// Ask AI Bot
async function askDoubt() {
    let questionInput = document.getElementById("question");
    let chatBox = document.getElementById("chat-box");

    let question = questionInput.value.trim();
    if (!question) {
        alert("Please enter a question!");
        return;
    }

    // Show user question in chat box
    chatBox.innerHTML += `<p><b>You:</b> ${question}</p>`;
    chatBox.innerHTML += `<p><b>Bot:</b> Thinking...</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // API Call
    try {
        let response = await fetch("https://botendra.onrender.com/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question })
        });

        let data = await response.json();

        // Show Bot Response
        chatBox.innerHTML += `<p><b>Bot:</b> ${data.reply || "I couldn't understand, try again!"}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p><b>Bot:</b> Error! Unable to connect.</p>`;
    }

    // Clear input box
    questionInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

