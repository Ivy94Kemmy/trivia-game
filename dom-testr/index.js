const comments = ["Great video", "10/10","First!", "Wow","First"]

const videoTitle = "DOM 101"

const title = document.querySelector("#title")
const commentContainer = document.querySelector("h2")

title.textContent = videoTitle
title.className = "title"

comments.forEach( comment => {
	const indivComment = document.createElement("p")
	indivComment.textContent = comment
	indivComment.className = "comments"

	commentContainer.append(indivComments)
})