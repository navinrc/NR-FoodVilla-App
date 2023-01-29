const Title = () => (
  <a href="/">
    <img
      className="h-20 p-1"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ79uvsqqbwRsKcoXbJCUPy1j5-Sb3sVX21A&usqp=CAU"
      alt="Food villa"
    />
  </a>
);

const Header = () => (
  <div className="flex justify-between bg-purple-200 shadow-lg">
    <Title />
    <div>
      <ul className='flex py-10 justify-between'>
        <li className='px-2'>Home</li>
        <li className='px-2'>About</li>
        <li className='px-2'>Contact</li>
        <li className='px-2'>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
