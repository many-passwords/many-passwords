async function loadList() {
  let result = await fetch(
    "https://raw.githubusercontent.com/nothing3F/many-passwords/main/passwords.csv"
  )
    .then((res) => res.text())
    .catch(() => "error");

  const loader = document.getElementById("loader");
  const output = document.getElementById("output");

  if (result !== "error") {
    loader.remove();
    var lines = result.split("\n");
    let split = (x) => lines[line].split(",")[x];
    let add = () => document.createElement("p");

    for (var line = 0; line < lines.length; line++) {
      const li = document.createElement("div");
      const vendor = add();
      const model = add();
      const version = add();
      const access = add();
      const username = add();
      const password = add();
      const privileges = add();
      const notes = add();

      if (split(0) === "") return;

      vendor.innerHTML = split(0);
      model.innerHTML = "Model: " + split(1);
      version.innerHTML = "Version: " + split(2);
      access.innerHTML = "Access Type: " + split(3);
      username.innerHTML = "Username: " + split(4);
      password.innerHTML = "Password: " + split(5);
      privileges.innerHTML = "Privileges: " + split(6);
      notes.innerHTML = `"${split(7)}"`;

      li.setAttribute("class", "model-info");
      li.appendChild(vendor);
      li.appendChild(model);
      li.appendChild(version);
      li.appendChild(access);
      li.appendChild(username);
      li.appendChild(password);
      li.appendChild(privileges);
      li.appendChild(notes);

      output.appendChild(li);
    }
  } else {
    setTimeout(() => {
      let confirm = window.confirm(
        "An error occurred, do you want to reload the page?"
      );
      if (confirm) window.location.reload();
      else {
        loader.remove();
        output.textContent = "Failed! Please update the page and try again.";
        output.classList.add("failed");
      }
    }, 5000);
  }
}
