export default function Product({ id, image, title }) {
  return (
    <article style={{ color: "black" }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </article>
  );
}
