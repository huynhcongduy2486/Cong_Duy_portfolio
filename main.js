function setLang(lang) {
  if (lang === "vi") {
    document.getElementById("role").innerText = "Kỹ sư Machine Learning";
    document.getElementById("desc").innerText =
      "Đam mê công nghệ AI và phát triển toàn diện.";
  } else {
    document.getElementById("role").innerText =
      "Machine Learning Engineer";
    document.getElementById("desc").innerText =
      "Passionate about AI technology and holistic wellness.";
  }
}
