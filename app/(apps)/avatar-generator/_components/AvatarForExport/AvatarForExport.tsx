interface Props {
  backgroundColor: string;
  contentColor: string;
  avatarType: string;
  dateInput: string;
}

export default function AvatarForExport({
  backgroundColor,
  contentColor,
  avatarType,
  dateInput,
}: Props) {
  // для правильного экспорта вроде как нужны инлайновые стили
  const textStyles = {
    fontFamily: "Inter",
    fontSize: 48,
    fontWeight: 800,
    letterSpacing: "1px",
    lineHeight: "1.5em",
    textTransform: "uppercase" as const, // какой-то тупой костыль для енамов в инлайновых стилях
  };
  const elementStyles = {
    width: 500,
    height: 500,
    background: `${backgroundColor}`,
    color: `${contentColor}`,
    display: "grid",
    placeItems: "center",
    textAlign: "center" as const,
    overflow: "hidden",
  };
  return (
    <div style={elementStyles}>
      <div>
        <p style={textStyles}>{avatarType}</p>
        {avatarType !== "day-off" && <p style={textStyles}>до {dateInput}</p>}
      </div>
    </div>
  );
}
