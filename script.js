async function askDoubt() {
    let questionInput = document.getElementById("question");
    let chatBox = document.getElementById("chat-box");

    let question = questionInput.value.trim();
    if (!question) {
        alert("Please enter a question!");
        return;
    }

    // Show user question in chat box
    let userMsg = document.createElement("p");
    userMsg.innerHTML = `<b>You:</b> ${question}`;
    chatBox.appendChild(userMsg);

    // Show "Thinking..." message
    let botMsg = document.createElement("p");
    botMsg.innerHTML = `<b>Bot:</b> Thinking...`;
    chatBox.appendChild(botMsg);
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
        botMsg.innerHTML = `<b>Bot:</b> ${data.reply || "I couldn't understand, try again!"}`;
    } catch (error) {
        botMsg.innerHTML = `<b>Bot:</b> Error! Unable to connect.`;
    }

    // Clear input box
    questionInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
