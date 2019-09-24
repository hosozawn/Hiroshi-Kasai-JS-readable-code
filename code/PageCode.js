class PageCode {

  static DICTIONARY_DATA_JSON = "dictionary-data.json";

  constructor() {
  }

  /**
   * 仕様1実行
   */
  execSpec1 = function () {
    window.console.log(WORD1);
  }
}

page = new PageCode();
page.execSpec1();
