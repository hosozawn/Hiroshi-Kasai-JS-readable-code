class PageCode {

  exec() {
    this.addEventListeners()
  }

  addEventListeners() {
    document.getElementById("dictionaryInput").addEventListener("change", (e) => {
      this.readDictionaries(e.target.files)
    })
  }

  readDictionaries(files) {
    [...files].forEach(file => this.readDictionary(file))
  }

  readDictionary(file) {
    const reader = new FileReader()
    reader.addEventListener("load", function() {
      document.getElementById("words").innerText = this.result
    })
    reader.readAsText(file)
  }
}

page = new PageCode();
page.exec();
