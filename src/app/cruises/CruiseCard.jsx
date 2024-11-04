export default function CruiseCard({ cruise }) {
  const sailDate = new Date(cruise.sailDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white overflow-hidden border border-gray-300 rounded-tl-xl rounded-tr-xl">
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
      <div className="p-1 flex-grow">
        <p className="mt-2 text-left font-bold text-xs">{cruise.name}</p>
        <p className="text-left font-light text-xs"> {cruise.shipName}</p>
        <p className="text-left font-light text-xs">{sailDate}</p>
        <p className="text-left text-xs font-bold">from {cruise.startPort}</p>
        <p className="text-left text-xs font-bold">£{cruise.price}</p>
      </div>
    </div>
  );
}
