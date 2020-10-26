function loadList() {
  document.getElementById("input").addEventListener("change", function () {
    var fr = new FileReader();
    fr.onload = function () {
      var lines = fr.result.split("\n");
      let data = (x) => lines[line].split(",")[x];
      let add = () => document.createElement("span");

      for (var line = 0; line < lines.length; line++) {
        const output = document.getElementById("output");
        const li = document.createElement("li");
        const vendor = add();
        const model = add();
        const version = add();
        const access = add();
        const username = add();
        const password = add();
        const privileges = add();
        const notes = add();

        vendor.innerHTML = data(0);
        model.innerHTML = "Model: " + data(1);
        version.innerHTML = "Version: " + data(2);
        access.innerHTML = "Access Type: " + data(3);
        username.innerHTML = "Username: " + data(4);
        password.innerHTML = "Password: " + data(5);
        privileges.innerHTML = "Privileges: " + data(6);
        notes.innerHTML = `"${data(7)}"`;

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
      //document.getElementById("output").textContent = fr.result;
    };
    fr.readAsText(this.files[0]);
  });
}
