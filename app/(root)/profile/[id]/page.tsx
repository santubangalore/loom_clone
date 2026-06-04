import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = async ({ params }: ParamsWithSearch) => {
    const {id} = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="santu.india@email.com"
        title="Santu | Software Consulting "
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard {...card} key={card.id} />
        ))}
      </section>
    </div>
  );
};
export default Page;
