import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  return (
    <div>
      <Link href="/" passHref>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/board/1" passHref>
        <a style={linkStyle}>board</a>
      </Link>
    </div>
  );
};

export default Header;
