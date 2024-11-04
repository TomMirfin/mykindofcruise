export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        display: "block",
        background: "#1976d2",
        borderColor: "#1976d2",
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{
        ...style,
        display: "block",
        background: "#1976d2",
        color: "1976d2",
        borderColor: "#1976d2",
      }}
      onClick={onClick}
    />
  );
}
