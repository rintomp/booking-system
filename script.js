
document.getElementById("infoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const batch = document.getElementById("batch").value;
  const trainer = document.getElementById("trainer").value;
  const course = document.getElementById("batchTime").value;

  const data = { name, batch, trainer, course, timeSlot: "" };
  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "timeslot.html";
});
