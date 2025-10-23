import { posts } from "./data.js";

let postsData = document.querySelector("main");
let likesCount = document.getElementsByClassName("likes");


function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        postsData.innerHTML += `
        <div class="post-head">
          <img
            src="${posts[i].avatar}"
            alt="avatar-vangogh"
            class="avatar"
          />
          <div>
            <h3 class="user-id">${posts[i].name}</h3>
            <p class="user-location">${posts[i].location}</p>
          </div>
        </div>
        <img
          src="${posts[i].post}"
          alt="post-vangogh"
          class="post-img"
        />
        <img src="images/icon-heart.png" alt="heart-icon" class="icon-heart" />
        <img
          src="images/icon-comment.png"
          alt="comment-icon"
          class="icon-comment"
        />
        <img src="images/icon-dm.png" alt="dm-icon" class="icon-dm" />
        <p class="likes">${posts[i].likes} likes</p>
        <p class="captions">
          <span class="user-name">${posts[i].username}</span>
          ${posts[i].comment}
        </p>
         `
    }
}

renderPosts();
