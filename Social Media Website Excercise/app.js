const allStories = [
    {
        thumbUrl: "images/img5.jpg",
        title: "Title No.1"
    },
    {
        thumbUrl: "images/img6.jpg",
        title: "Title No.1"
    }
];

const friendsStories = document.querySelector("#friends-stories");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left");
const rightArrow = document.querySelector(".story-full .right")

let currentIndex = 0;

allStories.forEach((s, i) => {
    const story = document.createElement("div");
    story.classList.add("story");

    const storyImgWrapper = document.createElement("div");
    storyImgWrapper.classList.add("story-img-wrapper");

    const img = document.createElement("img");
    img.setAttribute("src", s.thumbUrl);

    const user = document.createElement("h5");
    user.innerText = "Username";

    friendsStories.appendChild(story);
    story.appendChild(storyImgWrapper);
    storyImgWrapper.appendChild(img);
    story.appendChild(user);

    story.addEventListener("click", () => {
        currentIndex = i;
        storyFull.classList.add("active");
        storyFullImage.setAttribute("src", s.thumbUrl);

        if (!s.title) {
            storyFullTitle.style.display = "none";
        } else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = s.title;
        }
    });
});

closeBtn.addEventListener("click", () => {
    storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
   if (currentIndex > 0) {
       currentIndex -= 1;

       storyFullImage.setAttribute("src", allStories[currentIndex].thumbUrl);

       if (!allStories[currentIndex].title) {
           storyFullTitle.style.display = "none";
       } else {
           storyFullTitle.style.display = "block";
           storyFullTitle.innerHTML = allStories[currentIndex].title;
       }
   }
});

rightArrow.addEventListener("click", () => {
    if (currentIndex < allStories.length - 1) {
        currentIndex += 1;

        storyFullImage.setAttribute("src", allStories[currentIndex].thumbUrl);

        if (!allStories[currentIndex].title) {
            storyFullTitle.style.display = "none";
        } else {
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = allStories[currentIndex].title;
        }
    }
});