import { applist } from "./applist";
import AppIcon from "./components/AppIcon/AppIcon";
import Avatar from "./components/Avatar/Avatar";
import TextFancy from "./components/TextFancy/TextFancy";
import TextUtility from "./components/TextUtility/TextUtility";
import VerticalCarousel from "./components/VerticalCarousel/VerticalCarousel";
import VerticalCarouselSlide from "./components/VerticalCarousel/VerticalCarouselSlide";
import page from "./page.module.css";
import banner1 from "/public/banner1.png";
import banner2 from "/public/banner2.png";
import banner3 from "/public/banner3.png";

const banners = [
  {
    src: banner3,
    alt: "banner3",
    title: "",
    message: "",
  },
  {
    src: banner2,
    alt: "banner2",
    title: "Аватарки",
    message: "Аватарки для рабочего аккаунта на все случаи жизни",
  },
  {
    src: banner1,
    alt: "banner1",
    title: "Привет, кодер!",
    message:
      "Время цифровизации процессов, поэтому добро пожаловать в HR-портал",
  },
];

export default function Home() {
  return (
    <div className={page.centerizer}>
      <div className={page.page}>
        <div className={page.bubble}></div>
        <div className={page.userblock}>
          <Avatar size={104} />
          <div className={page.usertextblock}>
            <TextUtility className={page.username} size="H6" weight="medium">
              Кодер
              <br />
              Кодерович
            </TextUtility>
            <TextUtility className={page.usertag} size="small" weight="medium">
              kk@kode
            </TextUtility>
          </div>
          <TextFancy className={page.usernamefancy} size="H2" weight="regular">
            Кодер
            <br />
            Кодерович
          </TextFancy>
        </div>
        <hr />
        <div className={page.appiconsGrid}>
          {applist.map((app) => (
            <AppIcon
              key={app.id}
              appName={app.name}
              href={app.url}
              isExternal={app.external}
            />
          ))}
        </div>
        <hr />
        <VerticalCarousel>
          {banners.map((banner) => (
            <VerticalCarouselSlide
              key={banner.alt}
              src={banner.src}
              alt={banner.alt}
              title={banner.title}
              message={banner.message}
            />
          ))}
        </VerticalCarousel>
      </div>
    </div>
  );
}
