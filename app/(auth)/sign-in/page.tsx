import Link from "next/link"
import Image from 'next/image';

const Page = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            height={24}
            width={24}
            alt="logo"
          />
          <h1>SnapCast</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt=""
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p className="text-sm gap-1 font-weight-100 ">
              SnapCast makes screen recording easy. From quick walkthrugh to
              full presentations, it&apos;s fast, smooth and sharable in
              seconds.
            </p>
            <article>
              <Image
                src="/assets/images/mypic_2_upd.png"
                alt=""
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Santu Ghosh</h2>
                <p>Product designer at Net Quest </p>
              </div>
            </article>
          </section>
        </div>
        <p className="text-center ">SnapCast {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              height={40}
              width={40}
              alt="logo"
            />
            <h2>SnapCast</h2>
          </Link>
          <p>
            Create and share your first <span>SnapCast video</span> in no time.
          </p>
          <button>
            <Image src="/assets/icons/google.svg" alt="" width={32} height={32} />
            <span>Sign-in with google</span>
          </button>
        </section>
      </aside>
    </main>
  );
}
export default Page