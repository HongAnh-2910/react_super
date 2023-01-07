import apiPost from "./api/apiPost";
import { selectIdElment } from "./utils";

function setFieldValue(parent, selector, value) {
  const element = parent.querySelector(selector);
  if (element) element.value = value;
}

function setBackground(parent, selector, value) {
  const element = selectIdElment(selector);
  if (element) element.style.background = `url(${value})`;
}

function setFromValue(getSelectorForm, defaultValue) {
  setFieldValue(getSelectorForm, '[name="title"]', defaultValue?.title);
  setFieldValue(getSelectorForm, '[name="author"]', defaultValue?.author);
  setFieldValue(
    getSelectorForm,
    '[name="description"]',
    defaultValue?.description
  );

  setFieldValue(document, '[name="defaultimg"]', defaultValue?.imageUrl);
  setBackground(document, "postHeroImage", defaultValue?.imageUrl);
}

function getFormValues(getSelectorForm) {
  let values = {};
  const formData = new FormData(getSelectorForm);
  for (const [key, value] of formData) {
    values[key] = value;
  }
  return values;
}

function initForm({ selector, defaultValue, submitForm }) {
  const getSelectorForm = selectIdElment(selector);
  if (!getSelectorForm) return;

  setFromValue(getSelectorForm, defaultValue);
  getSelectorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let getFormValue = getFormValues(getSelectorForm);
    console.log(getFormValue);
  });
}

(async () => {
  const defaultParams = new URLSearchParams(window.location.search);
  const idPost = defaultParams.get("id");
  try {
    let initValue = idPost
      ? await apiPost.find(idPost)
      : {
          title: "",
          author: "",
          description: "",
          imageUrl: "",
        };
    initForm({
      selector: "postForm",
      defaultValue: initValue,
      submitForm: (value) => console.log(value),
    });
  } catch (error) {
    console.log(error);
  }
})();
