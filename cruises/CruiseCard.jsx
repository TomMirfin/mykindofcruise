export default function CruiseCard({ cruise }) {
  const sailDate = new Date(cruise.sailDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(cruise);
  return (
    <div className="bg-white shadow-black shadow-md overflow-hidden">
      <img
        src={cruise.shipImage}
        alt={cruise.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className="p-2 flex-grow">
        <p className="mt-2 text-left font-bold text-xs">{cruise.name}</p>
        <p className="text-left font-light text-xs"> {cruise.shipName}</p>
        <p className="text-left font-light text-xs">{sailDate}</p>
        <p className="text-left font-light text-xs">
          from <strong className="font-bold">{cruise.startPort}</strong>
        </p>
        <p className="text-left font-light text-xs">
          <strong className="font-bold">£{cruise.price}</strong>
        </p>
      </div>
    </div>
  );
}
