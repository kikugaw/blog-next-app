import Container from "../components/container";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

function HomePage() {
  return (
    <>
      <Container>
        <div className="flex justify-center">
          <Image
            src="/my_profile.JPG"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full mt-6 rounded-lg shadow-xl"
          />
        </div>
      </Container>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">プッシュブログ</h1>
          <p>
            どうもプッシュです。新卒2年目のエンジニアで、普段はPHPを書いてます。
            <br />
            このブログでは、勉強したことや気になったことを投稿する個人ブログです。
            <br />
            まだまだ未熟なエンジニアですが、日々成長していきます。
          </p>

          <ul className="list-disc">
            <h3 className="text-lg font-bold">Like</h3>
            <li>サッカー</li>
            <li>スイーツ</li>
            <li>旅行</li>
          </ul>

          <h3 className="text-lg font-bold">Links</h3>
          <br />
          <a target="_blank" href="https://x.com/push_gawa">
            <BsTwitterX className="bg-black text-slate-200" />
          </a>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
