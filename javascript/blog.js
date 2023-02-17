/* --------- */
/* VARIABLES */
/* --------- */

const path = "json/blogposts.json";

/* --------- */
/* FUNCTIONS */
/* --------- */

// Call the getData function
getData();

// Create the function getData which is a GET request
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
