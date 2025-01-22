document.querySelector(".btn").addEventListener("click", function () {
    var cvUrl = './navinRm.pdf';
    var link = document.createElement("a");
    link.href = cvUrl;
    link.download = "navinRm.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  