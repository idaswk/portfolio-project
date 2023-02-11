const path = "json/blogposts.json";

getData();
// getPostImages();

async function getData() {
  const response = await fetch(path);
  const data = await response.json();

  console.log(data);
  createBlog(data);
}

// Function to create individual blog posts
function createBlog(posts) {
  posts.forEach((post) => {
    const template = `
      <div class="img-container">
        <img
          src="${post.imageSrc}"
          alt="Image of ${post.imageAlt}"
        />
      </div>
      <div class="blog-post">
        <section>
          <span class="date">${post.date}</span>
          <h2 class="blog-post-title">${post.title}</h2>
          <p>
            ${post.body}
          </p>
        </section>
      </div>
    `;

    const mainContainer = document.createElement("article");
    mainContainer.classList.add("post");
    mainContainer.setAttribute("id", `${post.postId}`);
    mainContainer.innerHTML = template;

    document.querySelector(".blog-container").appendChild(mainContainer);
  });
}

// Function to get post images
// function getPostImages() {
//   container.addEventListener("click", (event) => {
//     const container = document.querySelector(".blog-container");
//     let text = event.currentTarget.id;
//     console.log(text);
//   });
// }
