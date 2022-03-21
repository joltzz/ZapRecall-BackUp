import logo from "../assets/img/logo-pequeno.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
      </header>
    </>
  );
}
