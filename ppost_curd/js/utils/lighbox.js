export function handleLightBox() {
  let idModal = document.getElementById("exampleModal");
  if (!idModal) return;
  document.addEventListener("click", function (event) {
    const { target } = event;
    if (!(target.tagName === "IMG") && !target.dataset.thumb) return;
    let img = document.querySelectorAll(
      `img[data-thumb="${target.dataset.thumb}"]`
    );
    let index = [...img].findIndex((x) => x === target);
    idModal.querySelector(".img_show").src = img[index].getAttribute("src");
    $("#exampleModal").modal();
  });
}
