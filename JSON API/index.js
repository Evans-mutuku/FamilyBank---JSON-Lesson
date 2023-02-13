const fetchData = () => {
  const listEl = document.querySelector("ul");
  fetch("./data.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      data.forEach((post) => {
        listEl.insertAdjacentHTML("beforeend", `<h1>${post.title}</h1>`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();

const submitFormData = () => {
  const formEl = document.querySelector("form");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);

    fetch("https://reqres.in/api/users", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
};

submitFormData();
