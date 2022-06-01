import { Link } from "react-router-dom";

export default function Product({ id, image, title }) {
  return (
    <article style={{ color: "black" }}>
      <Link to={`/detail/${id}`}>
        <img style={{ maxWidth: "200px" }} src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </article>
  );
}
