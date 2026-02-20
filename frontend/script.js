document.getElementById("greetBtn").addEventListener("click", async () => {
  const displayMessage = document.getElementById("displayMessage");

  displayMessage.innerText = "Connecting to backend...";
  displayMessage.style.color = "#333";

  try {
    const response = await fetch("http://localhost:3000/api/greet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    displayMessage.innerText = data.message;
    displayMessage.style.color = "green";
  } catch (error) {
    displayMessage.innerText = "Error: Could not reach the server.";
    displayMessage.style.color = "red";
    console.error("Fetch Error:", error);
  }
});