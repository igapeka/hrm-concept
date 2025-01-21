import { ReactNode } from "react";
import tgpreviewframe from "./tgpreviewframe.module.css";

interface Props {
  children: ReactNode;
}

export default function TGPreviewFrame({ children }: Props) {
  return (
    <>
      <div className={tgpreviewframe.container}>
        <div className={tgpreviewframe.desktopFrame}>
          <div className={tgpreviewframe.desktopHeader}>
            <div className={tgpreviewframe.desktopHeaderCircle}></div>
            <div className={tgpreviewframe.desktopHeaderCircle}></div>
            <div className={tgpreviewframe.desktopHeaderCircle}></div>
          </div>
          <div className={tgpreviewframe.list}>
            <div className={tgpreviewframe.listItem}>
              <div className={tgpreviewframe.listItemCircle}>{children}</div>
              <div className={tgpreviewframe.listItemTextWrap}>
                <p className="text-utility medium">Игорь Пешков</p>
                <small>Саша, где макет? Кстати, фигма — ка...</small>
              </div>
            </div>
            <div className={tgpreviewframe.listItem}>
              <div className={tgpreviewframe.listItemCircle}></div>
              <div className={tgpreviewframe.listItemTextWrap}>
                <p className="text-utility medium">KODE chat</p>
                <small>свинья.jpeg</small>
              </div>
            </div>
            <div className={tgpreviewframe.listItem}>
              <div className={tgpreviewframe.listItemCircle}></div>
              <div className={tgpreviewframe.listItemTextWrap}>
                <p className="text-utility medium">[KODE] Офис Клд</p>
                <small>жидкий кот.gif</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
