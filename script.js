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

    for (var line = 1; line < lines.length; line++) {
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
      notes.innerHTML = `<hr>/* ${split(7)} */`;

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

function search_entries() {
  
  let base_element = document.getElementsByClassName('search')
  let input = base_element[0].getElementsByTagName('input')[0].value
  input = input.toLowerCase();

  let data = document.getElementById('output').childNodes;

  for (i = 0; i < data.length; i++) {
    if (!data[i].innerHTML.toLowerCase().includes(input)) {
      data[i].style.display = "none";
    }
    else {
      data[i].style.display="inline";
    }
  }
}

function check_scroll_button() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var scrollButton = document.getElementById("scroll_button");
  if (scrollTop < 300) {
    scrollButton.style.display = "none";
  } else {
    scrollButton.style.display = "inline";
  }
}