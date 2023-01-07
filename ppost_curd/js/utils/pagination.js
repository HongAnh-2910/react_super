import { selectIdElment } from "../utils";
export function renderPaginate(selectorId, pagination) {
  const getIdPaginateUl = selectIdElment(selectorId);
  if (Object.keys(pagination).length === 0) return;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  getIdPaginateUl.dataset.page = _page;
  getIdPaginateUl.dataset.totalPage = totalPage;
  if (_page <= 1) getIdPaginateUl.firstElementChild.classList.add("disabled");
  else getIdPaginateUl.firstElementChild.classList.remove("disabled");
  if (_page >= totalPage)
    getIdPaginateUl.lastElementChild.classList.add("disabled");
  else getIdPaginateUl.lastElementChild.classList.remove("disabled");
}

function activePaginate() {
  let current = document.getElementsByClassName("active");
  if (!current) return;
  current[0].className = current[0].className.replace(" active", "");
}

export function initPaginate({ elementId, defaultParams, onchangeValue }) {
  const getIdPaginateUl = selectIdElment(elementId);
  let clickPage = getIdPaginateUl.querySelectorAll(".page-item_1");
  if (!getIdPaginateUl && !clickPage) return;
  let clickPrev = getIdPaginateUl.firstElementChild.firstElementChild;
  clickPrev.addEventListener("click", function (event) {
    event.preventDefault();
    const page = getIdPaginateUl.getAttribute("data-page");
    if (page >= 2) onchangeValue(Number(page) - 1);
    const search = new URLSearchParams(window.location.search);
    activePaginate();
    for (const element of clickPage) {
      if (
        element.firstElementChild.getAttribute("data-page") ==
        search.get("_page")
      )
        element.classList.add("active");
    }
  });
  let clickNext = getIdPaginateUl.lastElementChild.lastElementChild;
  clickNext.addEventListener("click", function (event) {
    event.preventDefault();
    const page = getIdPaginateUl.getAttribute("data-page");
    const totalPage = getIdPaginateUl.getAttribute("data-total-page");
    if (page <= totalPage) onchangeValue(Number(page) + 1);
    const search = new URLSearchParams(window.location.search);
    activePaginate();
    for (const element of clickPage) {
      if (
        element.firstElementChild.getAttribute("data-page") ==
        search.get("_page")
      )
        element.classList.add("active");
    }
  });

  for (const element of clickPage) {
    if (
      element.firstElementChild.getAttribute("data-page") ==
      defaultParams.get("_page")
    )
      element.classList.add("active");
    element.addEventListener("click", function (event) {
      event.preventDefault();
      const getPage = this.firstElementChild.getAttribute("data-page");
      activePaginate();
      this.className += " active";
      onchangeValue(Number(getPage));
    });
  }
}
