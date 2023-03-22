class Produto {
  constructor() {
    this.id = 1;
    this.productList = [];
  }
  add() {
    let product = this.readData();
    let validate = this.validate(product);

    if (validate) {
      this.saveData(product);
      console.log(this.productList);
    }
    this.listInTable();
    this.clearInputs();
  }

  readData() {
    let product = {};

    product.id = this.id;
    product.productName = document.getElementById("productName").value;
    product.productValue = document.getElementById("productValue").value;

    return product;
  }
  validate(product) {
    let msg = "";
    if (product.productName == "") {
      msg += "preencha o nome";
    }
    if (product.productValue == "") {
      msg += "preencha o valor";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
  saveData(product) {
    this.productList.push(product);
    this.id++;
  }
  listInTable() {
    let tbody = document.getElementById("table-area__body");
    tbody.innerText = "";

    for (let i = 0; i < this.productList.length; i++) {
      let tr = tbody.insertRow();

      let tdId = tr.insertCell();
      let tdName = tr.insertCell();
      let tdValue = tr.insertCell();
      let tdAct = tr.insertCell();

      tdId.innerText = this.productList[i].id;
      tdName.innerText = this.productList[i].productName;
      tdValue.innerText = this.productList[i].productValue;

      let trashIcon = document.createElement("i");
      trashIcon.setAttribute(
        "onclick",
        `produto.deleteProduct(${this.productList[i].id})`
      );

      trashIcon.classList.add("bi");
      trashIcon.classList.add("bi-trash-fill");

      tdAct.appendChild(trashIcon);
    }
  }

  clearInputs() {
    document.getElementById("productName").value = "";
    document.getElementById("productValue").value = "";
  }
  deleteProduct(id) {
    let tbody = document.getElementById("table-area__body");

    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
    alert("produto deletado com sucesso! :)");
  }
}
const produto = new Produto();
