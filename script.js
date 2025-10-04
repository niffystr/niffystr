function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log("User Info:", data);
  alert("Welcome " + data.name + "!");
  localStorage.setItem("userName", data.name);
  localStorage.setItem("userEmail", data.email);
  window.location.href = "account.html";
}
