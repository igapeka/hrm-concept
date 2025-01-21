"use client";

import classNames from "classnames";
import TGPreviewFrame from "./_components/TGPreviewFrame/TGPreviewFrame";
import page from "./page.module.css";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import AvatarForPreview from "./_components/AvatarForPreview/AvatarForPreview";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import ColorSchemePickerItem from "./_components/ColorSchemePickerItem/ColorSchemePickerItem";
import AvatarForExport from "./_components/AvatarForExport/AvatarForExport";
import DownloadButton from "./_components/DownloadButton/DownloadButton";

export default function AvatarGenerator() {
  // конвертация и скачивание картинки
  const elementRef = useRef(null);
  const htmlToImageConvert = () => {
    toPng(elementRef.current!, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-avatar.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ввод даты
  const [dateInput, setDateInput] = useState(new Date());
  // выбор типа аватарки
  const [avatarType, setAvatarType] = useState("отпуск");
  // выбор цветовой схемы
  const [selectedColorSchemeId, setSelectedColorSchemeId] = useState("1");
  const colorSchemes = [
    {
      id: "1",
      backgroundColor: "#F8CCEB",
      contentColor: "#4F35F6",
    },
    {
      id: "2",
      backgroundColor: "#D1EF5F",
      contentColor: "#171717",
    },
    {
      id: "3",
      backgroundColor: "#171717",
      contentColor: "#FEFEFE",
    },
    {
      id: "4",
      backgroundColor: "#F27428",
      contentColor: "#FEFEFE",
    },
    {
      id: "5",
      backgroundColor: "#4F35F6",
      contentColor: "#FEFEFE",
    },
  ];
  const selectedColorScheme = colorSchemes.find(
    (colorScheme) => colorScheme.id === selectedColorSchemeId
  );
  return (
    <div className={page.centerizer}>
      <div className={page.page}>
        <div className={classNames(page.topText, "text-fancy body regular")}>
          У меня будет
          {/* выбор типа аватарки */}
          <span
            className={classNames(
              page.inlinePickerToggle,
              "text-utility body medium"
            )}
          >
            {avatarType}
            <select
              className={page.inlinePickerInput}
              value={avatarType}
              onChange={(e) => setAvatarType(e.target.value)}
            >
              <option value="отпуск">Отпуск</option>
              <option value="больничный">Больничный</option>
              <option value="day-off">Day-off</option>
            </select>
          </span>
          {avatarType !== "day-off" && (
            <>
              до
              {/* ввод даты */}
              <span
                className={classNames(
                  page.inlinePickerToggle,
                  "text-utility body medium"
                )}
              >
                {/* оставляем от даты только число и месяц, типа «1 января» */}
                {dateInput.toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                })}
                <input
                  type="date"
                  className={page.inlinePickerInput}
                  value={dateInput.toISOString().substring(0, 10)}
                  onChange={(e) =>
                    setDateInput(
                      e.target.valueAsDate ? e.target.valueAsDate : new Date()
                    )
                  }
                />
              </span>
            </>
          )}
        </div>
        <TGPreviewFrame>
          <AvatarForPreview
            backgroundColor={
              !selectedColorScheme?.backgroundColor
                ? "#F8CCEB"
                : selectedColorScheme?.backgroundColor
            }
            contentColor={
              !selectedColorScheme?.contentColor
                ? "#4F35F6"
                : selectedColorScheme?.contentColor
            }
            avatarType={avatarType}
            // оставляем от даты только число и месяц, типа «1 января»
            dateInput={dateInput.toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
            })}
          />
        </TGPreviewFrame>
        <ToggleGroup.Root
          className={page.colorSchemePicker}
          type="single"
          value={selectedColorSchemeId}
          onValueChange={(selectedColorSchemeId) => {
            if (selectedColorSchemeId)
              setSelectedColorSchemeId(selectedColorSchemeId);
          }}
        >
          {colorSchemes.map((colorScheme) => (
            <ToggleGroup.Item
              className={page.colorSchemePickerItem}
              key={colorScheme.id}
              id={colorScheme.id}
              value={colorScheme.id}
            >
              <ColorSchemePickerItem
                backgroundColor={colorScheme.backgroundColor}
                contentColor={colorScheme.contentColor}
              />
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
        <DownloadButton onClick={htmlToImageConvert}>Скачать</DownloadButton>
        {/* Прячем аватар для экспорта, чтобы не мешался */}
        <div style={{ opacity: 0, position: "fixed", pointerEvents: "none" }}>
          <div ref={elementRef}>
            <AvatarForExport
              backgroundColor={
                !selectedColorScheme?.backgroundColor
                  ? "#F8CCEB"
                  : selectedColorScheme?.backgroundColor
              }
              contentColor={
                !selectedColorScheme?.contentColor
                  ? "#4F35F6"
                  : selectedColorScheme?.contentColor
              }
              avatarType={avatarType}
              // оставляем от даты только число и месяц, типа «1 января»
              dateInput={dateInput.toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
