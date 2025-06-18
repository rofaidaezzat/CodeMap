import React from "react";
import "./DemoCard.css";
import Image from "../Image";
import { Link } from "react-router-dom";
interface Iprops {
  title: string;
  tags: string[];
  img: string;
  demo: string;
}
const DemoCard = ({ tags, img, demo, title }: Iprops) => {
  return (
    <div className="card-demo">
      <div className="image_container-demo">
        <Image className="image-demo" imageurl={img} alt="error" />
      </div>
      <div className="title-demo">
        <span>{title}</span>
      </div>
      <div className="size-demo">
        <ul className="list-size">
          {tags.map((tag, i) => (
            <li key={i} className="item-list">
              <button className="item-list-button">{tag}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="action">
        <Link to={demo}>
          <button className="cart-button">
            <svg
              className="cart-icon"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <span>Veiw Demo</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DemoCard;
