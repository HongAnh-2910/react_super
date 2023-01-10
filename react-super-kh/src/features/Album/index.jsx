import React from "react";
import ListAlbum from "./components/ListAlbum";
import "./style.scss";

const listAlbum = [
  {
    id: 1,
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/d/e/6/0de6e5fdb0a435b6bbe88651014e63d0.jpg",
    title: "Nhạc Xuân Sôi Động",
  },
  {
    id: 2,
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/a/0/f/7a0f8e7dab9474f5624738d98b7dd81b.jpg",
    title: "Mua Sắm Cho Tết",
  },
  {
    id: 3,
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/a/f/c8af23deb547e376572914b1fcefa83b.jpg",
    title: "Flow Này Mượt Phết",
  },
  {
    id: 4,
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/6/6/9/4669fc40ac79afeae012c7c661128e33.jpg",
    title: "Giai Điệu Chữa Lành",
  },
];

function FeatureAlbum() {
  return (
    <>
      <h3>Danh sách bài hát</h3>
      <ListAlbum listAlbum={listAlbum} />
    </>
  );
}

export default FeatureAlbum;
