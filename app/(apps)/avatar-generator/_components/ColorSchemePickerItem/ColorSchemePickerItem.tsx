import colorschemepickeritem from "./colorschemepickeritem.module.css";

interface Props {
  backgroundColor: string;
  contentColor: string;
}

export default function ColorSchemePickerItem({
  backgroundColor,
  contentColor,
}: Props) {
  const backgroundColorStyles = {
    background: `${backgroundColor}`,
  };
  const contentColorStyles = {
    background: `${contentColor}`,
  };
  return (
    <div style={backgroundColorStyles} className={colorschemepickeritem.outer}>
      <div
        style={contentColorStyles}
        className={colorschemepickeritem.inner}
      ></div>
    </div>
  );
}
