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
    console.log(users);
    users.forEach((user) => {
      console.log(user);
      userList.innerHTML = `<h1>${user.name.first}</h1>`;
    });
  };
};
document.querySelector(".generator").addEventListener("submit", getUsers);
