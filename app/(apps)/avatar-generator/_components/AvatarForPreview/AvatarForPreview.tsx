interface Props {
  backgroundColor: string;
  contentColor: string;
  avatarType: string;
  userInput: string;
}

export default function AvatarForPreview({
  backgroundColor,
  contentColor,
  avatarType,
  userInput,
}: Props) {
  const textStyles = {
    fontFamily: "Inter",
    fontSize: 7,
    fontWeight: 800,
    letterSpacing: ".02em",
    margin: 1,
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
        {avatarType !== "Day-Off" && <p style={textStyles}>до {userInput}</p>}
      </div>
    </div>
  );
}
