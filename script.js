document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let feedbackText = document.getElementById("feedback-text").value;
    if (feedbackText.trim() === "") return;

    let commentBox = document.createElement("div");
    commentBox.classList.add("comment");
    commentBox.innerHTML = `
        <p>${feedbackText}</p>
        <button class="like-btn">Like</button> <span class="likes-count">0</span>
        <button class="reply-btn">Reply</button>
        <div class="replies"></div>
    `;

    document.getElementById("comments-section").prepend(commentBox);

    document.getElementById("feedback-text").value = "";

    sendEmail(feedbackText);
});

function sendEmail(feedback) {
    let email = "blackou2009@gmail.com";
    let mailtoLink = `mailto:${email}?subject=New Feedback&body=${encodeURIComponent(feedback)}`;
    window.open(mailtoLink, "_blank");
}

document.getElementById("comments-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("like-btn")) {
        let likeCount = event.target.nextElementSibling;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else if (event.target.classList.contains("reply-btn")) {
        let replyBox = document.createElement("textarea");
        replyBox.placeholder = "Write a reply...";
        let submitReplyBtn = document.createElement("button");
        submitReplyBtn.textContent = "Submit";

        submitReplyBtn.onclick = function() {
            if (replyBox.value.trim() !== "") {
                let replyText = document.createElement("p");
                replyText.textContent = replyBox.value;
                event.target.nextElementSibling.appendChild(replyText);
                replyBox.remove();
                submitReplyBtn.remove();
            }
        };

        event.target.nextElementSibling.appendChild(replyBox);
        event.target.nextElementSibling.appendChild(submitReplyBtn);
    }
});
