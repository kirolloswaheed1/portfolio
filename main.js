// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Projects Filter
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".project-item");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    items.forEach(item => {
      const cat = item.dataset.category.split(" ");
      const show = (filter === "all") || cat.includes(filter);

      item.style.display = show ? "block" : "none";
    });
  });
});

// Fake submit handler (replace later with real backend / Formspree)
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Message sent (demo). Connect it to email/backend when ready.";
  note.style.color = "#0f172a";
  e.target.reset();
  return false;
}
