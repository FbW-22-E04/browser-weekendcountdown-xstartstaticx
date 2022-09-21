const form = document.querySelector("form");
// console.log(form);

const userName = document.querySelector("#user-name");

const para = document.querySelector("p");
const section = document.querySelector("section");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log("submit here");
  //   console.log(userName.value);
  let today = new Date(Date.now());
  //   console.log(today.getDay());
  const daysLeft = 5 - today.getDay();
  //   console.log(daysLeft);
  //   console.log(today.toLocaleDateString("en-EN", { weekday: "long" }));
  //   alert(
  //     `Hello ${userName.value}. Today is ${today.toLocaleDateString("en-EN", {
  //       weekday: "long",a
  //     })}. Only ${daysLeft} days left until weekend!`
  //   );
  para.style.display = "none";
  const newPara = document.createElement("p");
  newPara.textContent = `Hello ${
    userName.value
  }. Today is ${today.toLocaleDateString("en-EN", {
    weekday: "long",
  })}. Only ${daysLeft} days left until weekend!`;
  section.prepend(newPara);
});
