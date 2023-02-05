const path = "javascript/json/blogposts.json";

getData();
// getPostImages();

async function getData() {
  const response = await fetch(path);
  const data = await response.json();

  console.log(data);
  createBlog(data);
}

function createBlog(posts) {
  posts.forEach((post) => {
    const template = `
      <div class="img-container">
        <img
          src="${post.imageSrc}"
          alt="Image of ${post.imageAlt}"
          id="${post.postId}"
        />
      </div>
      <article class="blog-post">
        <section>
          <span class="date">${post.date}</span>
          <h2 class="blog-post-title">${post.title}</h2>
          <p>
            ${post.body}
          </p>
        </section>
      </article>
    `;

    const mainContainer = document.createElement("section");
    mainContainer.classList.add("post");
    mainContainer.innerHTML = template;

    document.querySelector(".blog-container").appendChild(mainContainer);
  });
}

// function getPostImages() {
//   const container = document.querySelector(".blog-container");
//   container.addEventListener("click", (image) => {
//     const images = image.target.id;
//   });
// }
