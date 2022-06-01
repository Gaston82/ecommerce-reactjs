import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  return <h1>{id}</h1>;
}
