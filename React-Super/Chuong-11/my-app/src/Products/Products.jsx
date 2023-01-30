import React from "react";
import style from "./product.module.scss";
export default function Products() {
  return (
    <div className={style.product}>
      Products
      <div className={style.item}>Item</div>
      <div className={style.item}>Item</div>
      <div className={style.item}>Item</div>
      <div className={style.item}>Item</div>
    </div>
  );
}
