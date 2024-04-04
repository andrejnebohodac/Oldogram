const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 891
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 688
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById("section")

for (let i = 0; i < posts.length; i++) {
    sectionEl.innerHTML += `
     <section>
        <div class="post-header">
            <img class="avatar-img avatar" src="${posts[i].avatar}">
            <div class="avatar-info">
                <h3 class="name">${posts[i].name}</h3>
                <h4 class="location">${posts[i].location}</h4>
            </div>
        </div>  
        <img id="post-img" ondblclick="likeCount(${i})" src="${posts[i].post}">
        <div class="post-icons post-icons-${posts[i].username}">
            <img class="heart" onclick="likeCount(${i})" src="images/icon-heart.png">
            <img src="images/icon-comment.png">
            <img src="images/icon-dm.png">
        </div>
        <p class="likes likes-${posts[i].username}" >${posts[i].likes} likes</p>
        <p class="comment"><span id="username">${posts[i].username}</span> ${posts[i].comment}</p>
    </section>
    `
}

let counter = 0;

function likeCount(index) {
    if (counter === 0) {
        posts[index].likes++;
        counter++
        const likesEl = document.querySelector(`.likes-${posts[index].username}`);
        if (likesEl) {
            likesEl.textContent = `${posts[index].likes} likes`;
        }
    }
    else {
        posts[index].likes--;
        counter--
        const likesEl = document.querySelector(`.likes-${posts[index].username}`);
        if (likesEl) {
            likesEl.textContent = `${posts[index].likes} likes`;
        }
    }
}





