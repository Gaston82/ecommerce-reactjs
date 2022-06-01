import logo from "../logo.svg";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "80px",
        borderBottom: "1px black solid",
      }}
    >
      <h1>React ecommerce</h1>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: "150px" }}
      />
    </header>
  );
}
