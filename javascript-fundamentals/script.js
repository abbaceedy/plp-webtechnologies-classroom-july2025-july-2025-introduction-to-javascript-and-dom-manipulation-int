// Show a response to user interaction
function showInteractionResponse(interactionType) {
    const responses = {
        like: [
            "Thanks for the like! We appreciate your support.",
            "Your like motivates us to keep improving!",
            "Liked! Positive interactions make the dashboard better."
        ],
        comment: [
            "Comments help us understand what you like!",
            "Thank you for your feedback!",
            "Your comment has been noted. Thank you!"
        ],
        share: [
            "Sharing is caring! Thanks for spreading the word.",
            "Thank you for sharing our dashboard with others!",
            "Your share helps others discover this tool. Thank you!"
        ]
    };
    
    const responseArray = responses[interactionType];
    const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    
    // Temporarily change the dynamic message
    const originalMessage = dynamicMessageElement.textContent;
    dynamicMessageElement.textContent = randomResponse;
    dynamicMessageElement.style.color = "#F9A826"; /* Warm Gold/Yellow accent */
    dynamicMessageElement.style.fontWeight = "600";
    dynamicMessageElement.style.borderColor = "#F9A826";
    
    // Revert after 3 seconds
    setTimeout(() => {
        dynamicMessageElement.textContent = originalMessage;
        dynamicMessageElement.style.color = "#0A2540";
        dynamicMessageElement.style.fontWeight = "";
        dynamicMessageElement.style.borderColor = "#0A2540";
    }, 3000);
}
