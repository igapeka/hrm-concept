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
    borderRadius: "50%",
    padding: "6px",
  };
  const contentColorStyles = {
    background: `${contentColor}`,
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  };
  return (
    <div style={backgroundColorStyles}>
      <div style={contentColorStyles}></div>
    </div>
  );
}
