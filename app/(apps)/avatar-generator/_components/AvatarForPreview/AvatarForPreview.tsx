interface Props {
  backgroundColor: string;
  contentColor: string;
  avatarType: string;
  dateInput: string;
}

export default function AvatarForPreview({
  backgroundColor,
  contentColor,
  avatarType,
  dateInput,
}: Props) {
  const textStyles = {
    fontFamily: "Inter",
    fontSize: 7,
    fontWeight: 800,
    letterSpacing: ".02em",
    lineHeight: "1.5em",
    textTransform: "uppercase" as const, // какой-то тупой костыль для енамов в инлайновых стилях
  };
  const elementStyles = {
    borderRadius: 999,
    width: 72,
    height: 72,
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
