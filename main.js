const getUsers = (e) => {
  e.preventDefault();

  const userGender = document.querySelector('[name="gender"]').value;
  const userNumber = document.querySelector('[name="users-number"]').value;

  const url = `https://randomuser.me/api/?results=${userNumber}&gender=${
    userGender === "both" ? "male,female" : userGender
  }`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showUsers(data.results));

  const showUsers = (users) => {
    const userList = document.querySelector(".user-list");
    userList.textContent = "";
    console.log(users);
    users.forEach((user) => {
      const userElement = document.createElement("li");
      userElement.className = "user-list__user";
      userElement.innerHTML = `<img class="user-list__user-image" src="${user.picture.thumbnail}"/> ${user.name.first} ${user.name.last}`;
      userList.appendChild(userElement);
    });
  };
};
document.querySelector(".generator").addEventListener("submit", getUsers);
