function makeCode () {		
  var el = document.getElementById("qrcode");
  var url = el.getAttribute('data-url');

  var qrcode = new kjua({
    text: url,
    size : 200
  });
	
	el.appendChild(qrcode);
}

makeCode();
