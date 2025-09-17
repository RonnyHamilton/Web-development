document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById("chatbot-toggle");
  const windowBox = document.getElementById("chatbot-window");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");
  const closeBtn = document.getElementById("chatbot-close");

  if (!toggle || !windowBox || !input || !messages || !closeBtn) {
    console.error("Chatbot elements not found. Check your HTML.");
    return;
  }

  // Toggle chatbot visibility
  toggle.addEventListener('click', () => {
    windowBox.style.display = windowBox.style.display === "none" ? "flex" : "none";
  });

  // Close chatbot window
  closeBtn.addEventListener('click', () => {
    windowBox.style.display = "none";
  });

  // Handle user input
  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
      let userMsg = input.value.trim();
      let lowerMsg = userMsg.toLowerCase();

      // Show user message
      messages.innerHTML += `<div class="message user"><b>You:</b> ${userMsg}</div>`;

      let botReply = "I don’t know about that. Try asking about Rumtek, Enchey, Pemayangtse, etc.";

      // Tourist responses
      if (lowerMsg.includes("rumtek") && lowerMsg.includes("tourist")) {
        botReply = "Tourist places near Rumtek: Fambong Lho Sanctuary, Saramsa Garden, Hanuman Tok, Tashi View Point.";
      } else if (lowerMsg.includes("enchey") && lowerMsg.includes("tourist")) {
        botReply = "Tourist places near Enchey: Ganesh Tok, Bakthang Waterfalls, Himalayan Zoo.";
      } else if (lowerMsg.includes("pemayangtse") && lowerMsg.includes("tourist")) {
        botReply = "Tourist places near Pemayangtse: Rabdentse Ruins, Khecheopalri Lake, Singshore Bridge.";
      } else if (lowerMsg.includes("tashiding") && lowerMsg.includes("tourist")) {
        botReply = "Tourist places near Tashiding: Kanchenjunga Falls, Dubdi Monastery, Rabdentse Ruins.";
      } else if (lowerMsg.includes("ralang") && lowerMsg.includes("tourist")) {
        botReply = "Tourist places near Ralang: Ravangla Buddha Park and scenic villages.";
      } else if (lowerMsg.includes("phodong") && lowerMsg.includes("tourist")) {
        botReply = "Tourist places near Phodong: Labrang Monastery and North Sikkim routes.";
      }

      // Restaurant responses
      if (lowerMsg.includes("rumtek") && lowerMsg.includes("hotel") && lowerMsg.includes("restaurant")) {
        botReply = `
Restaurants near Rumtek Monastery:
1. Hotel Sonam Delek Restaurant
2. Rumtek View Restaurant
3. Karma Restaurant
        `;
      } else if (lowerMsg.includes("enchey") && lowerMsg.includes("hotel") && lowerMsg.includes("restaurant")) {
        botReply = `
Restaurants near Enchey Monastery:
1. The Square Restaurant
2. Baker's Cafe
3. Roll House
        `;
      } else if (lowerMsg.includes("pemayangtse") && lowerMsg.includes("hotel") && lowerMsg.includes("restaurant")) {
        botReply = `
Restaurants near Pemayangtse Monastery:
1. Norbuling Restaurant
2. Mountain View Restaurant
3. Local Tibetan Eatery
        `;
      } else if (lowerMsg.includes("tashiding") && lowerMsg.includes("hotel") && lowerMsg.includes("restaurant")) {
        botReply = `
Restaurants near Tashiding Monastery:
1. Tashiding Local Restaurant
2. Buddhist Kitchen
3. Sikkimese Home Dining
        `;
      } else if (lowerMsg.includes("ralang") && lowerMsg.includes("hotel") && lowerMsg.includes("restaurant")) {
        botReply = `
Restaurants near Ralang Monastery:
1. Ralang View Restaurant
2. Mountain Top Cafe
3. Himalayan Flavors
        `;
      } else if (lowerMsg.includes("phodong") && lowerMsg.includes("hotel") && lowerMsg.includes("restaurant")) {
        botReply = `
Restaurants near Phodong Monastery:
1. Phodong Local Eatery
2. Himalayan Dine
3. Tea Garden Cafe
        `;
      }

      // Show bot reply
      messages.innerHTML += `<div class="message bot"><b>Bot:</b> ${botReply}</div>`;
      messages.scrollTop = messages.scrollHeight;
      input.value = "";
    }
  });
});
