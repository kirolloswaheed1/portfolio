const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

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

const previewModal = document.getElementById("previewModal");
if (previewModal) {
  previewModal.addEventListener("show.bs.modal", event => {
    const button = event.relatedTarget;
    if (!button) return;

    const title = button.getAttribute("data-title") || "Website Preview";
    const image = button.getAttribute("data-image") || "";
    const description = button.getAttribute("data-description") || "";
    const status = button.getAttribute("data-status") || "";
    const url = button.getAttribute("data-url") || "";

    document.getElementById("previewTitle").textContent = title;
    document.getElementById("previewImage").src = image;
    document.getElementById("previewImage").alt = `${title} preview`;
    document.getElementById("previewDescription").textContent = description;
    document.getElementById("previewStatus").textContent = status;

    const previewLink = document.getElementById("previewLink");
    if (url) {
      previewLink.href = url;
      previewLink.style.display = "inline-flex";
    } else {
      previewLink.removeAttribute("href");
      previewLink.style.display = "none";
    }
  });
}
