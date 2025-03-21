import React from "react";
import ImageSlider from "../imageSlider/ImageSlider";
import style from "./style.module.scss";

export default function ProjectItem({ project }) {
  return (
    <div className={style.projectCard}>
      <ImageSlider images={project.images} />

      <div className={style.info}>
        <div className={style.info_title}>
          <p>{project.generalInfo.name}</p>
          <span>${project.generalInfo.price.toLocaleString()}</span>
        </div>

        <div className={style.info_location}>
          <img src="/img/location.svg" alt="location" />
          <p>{project.generalInfo.province}</p>
        </div>

        <div className={style.info_characteristics}>
          <div className={style.info_characteristics__block}>
            <img src="/img/bed.svg" alt="rooms" />
            <p>{project.generalInfo.rooms} Beds</p>
          </div>

          <div className={style.info_characteristics__block}>
            <img src="/img/shower.svg" alt="baths" />
            <p>{project.generalInfo.bathrooms} Baths</p>
          </div>

          <div className={style.info_characteristics__block}>
            <img src="/img/size.svg" alt="sqft" />
            <p>{project.generalInfo.size} sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
}
