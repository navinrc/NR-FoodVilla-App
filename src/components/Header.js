const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ79uvsqqbwRsKcoXbJCUPy1j5-Sb3sVX21A&usqp=CAU"
      alt="Food villa"
    />
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
