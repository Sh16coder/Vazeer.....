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

    // Show "Thinking..." message (temporary)
    let botResponse = document.createElement("p");
    botResponse.innerHTML = `<b>Bot:</b> Thinking...`;
    chatBox.appendChild(botResponse);
    chatBox.scrollTop = chatBox.scrollHeight;

    // API Call
    try {
        let response = await fetch("https://botendra.onrender.com/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question })
        });

        let data = await response.json();

        // Update Bot Response
        botResponse.innerHTML = `<b>Bot:</b> ${data.reply || "I couldn't understand, try again!"}`;
    } catch (error) {
        botResponse.innerHTML = `<b>Bot:</b> Error! Unable to connect.`;
    }

    // Clear input box
    questionInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send question on "Enter" key press
document.getElementById("question").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        askDoubt();
    }
});
