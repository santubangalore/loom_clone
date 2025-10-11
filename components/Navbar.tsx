import Image from 'next/image';
import Link from 'next/link';


const user={};
const Navbar = () => {

  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={25}
            height={25}
          />
          <h2>SnapCast</h2>
        </Link>
        {user && (
          <figure>
            <button>
              <Image
                src="/assets/images/dummy.jpg"
                alt="avatar"
                width={25}
                height={25}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
}

export default Navbar;