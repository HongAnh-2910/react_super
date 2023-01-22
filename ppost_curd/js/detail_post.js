import apiPost from "./api/apiPost";
import {
  setTextContent,
  selectIdElment,
  parseDateToNumber,
  setImages,
  handleLightBox,
} from "./utils";
function renderDetailPost(dataDetail) {
  const SelectorId = selectIdElment("post-detail-main");
  setTextContent(SelectorId, "#postDetailTitle", dataDetail.title);
  parseDateToNumber(SelectorId, ".text-muted", dataDetail.updatedAt);
  setTextContent(SelectorId, "#postDetailDescription", dataDetail.description);
  setImages(SelectorId, ".post-image", dataDetail.imageUrl);
}

(async () => {
  handleLightBox();
  const getId = new URLSearchParams(window.location.search).get("id");
  if (!getId) return;
  try {
    const dataDetail = await apiPost.find(getId);
    renderDetailPost(dataDetail);
  } catch (error) {
    console.log(error);
  }
})();
