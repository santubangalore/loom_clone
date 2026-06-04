

import Image from 'next/image';
import Link from 'next/link';
import DropDownList from './DropDownList';
import RecordScreen from './RecordScreen';

export type SharedHeaderType = {
    subHeader: string,
    title: string,
    userImg: string
}

const Header = ({subHeader, title, userImg}: SharedHeaderType) => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
          )}

          <article>
            <p>{subHeader}</p>
            <h1 className="mt-0">{title}</h1>
          </article>
        </div>
        <aside>
          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              height={18}
              width={18}
              alt="upload"
            />
            <span>Upload a video</span>
          </Link>
         <RecordScreen />
        </aside>
      </section>
      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders"
            className="bg-blue-50"
          ></input>
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            height={24}
            width={24}
          />
        </div>
        <DropDownList />
      </section>
    </header>
  );
}
export default Header