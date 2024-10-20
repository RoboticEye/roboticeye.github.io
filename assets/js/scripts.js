document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector(".sidebar");
  const postLinks = document.querySelectorAll(".post-link");

  postLinks.forEach(link => {
    link.addEventListener("click", function() {
      // On post click, hide the sidebar
      sidebar.style.display = 'none';
    });
  });
});
