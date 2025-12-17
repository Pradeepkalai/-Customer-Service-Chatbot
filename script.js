function sendMessage() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (input.trim() === "") return;

    // Display user message
    let userMsg = `<div class="message user">${input}</div>`;
    chatBox.innerHTML += userMsg;

    // Bot Response Logic (Rule-based)
    let botResponse = "";

    if (input.includes("hello") || input.includes("hi")) {
        botResponse = "Hello! How can I assist you today?";
    } 
    else if (input.includes("order")) {
        botResponse = "You can track your order in the 'My Orders' section.";
    }
    else if (input.includes("return")) {
        botResponse = "You can return a product within 7 days of delivery.";
    }
    else if (input.includes("timing") || input.includes("hours")) {
        botResponse = "We are open from 9 AM to 9 PM daily.";
    }
    else if (input.includes("contact")) {
        botResponse = "You can contact us at support@example.com.";
    }
    else {
        botResponse = "Sorry, I didn't understand that. Can you rephrase?";
    }

    let botMsg = `<div class="message bot">${botResponse}</div>`;
    chatBox.innerHTML += botMsg;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}
