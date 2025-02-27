// import React from "react";

// function Card() {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1624984608976-8a7358d25bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
//       name: "Amazon Basics",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam",
//        instock:false
//       },
//     {
//       image:
//         "https://images.unsplash.com/photo-1591270551371-3401a1a9382f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9ufGVufDB8fDB8fHww",
//       name: "Daily Objects",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam",
//         instock:true
//       },
//     {
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBjb21wb255JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
//       name: "Apple",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//         instock:false
//       },
//   ];
//   return (
//     <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
//       {data.map((elem, index) => (
//         <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
//           <div className="w-full h-32 bg-zinc-300">
//             <img
//               src={elem.image}
//               alt=""
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="w-full px-3 py-4">
//             <h2 className="font-semibold">{elem.name}</h2>
//             <p className="text-xs mt-5">
//               {elem.description}
//             </p>
//             <button className={`px-2 py-1  ${elem.instock ? "bg-sky-700" : "bg-red-700"} text-xs rounded text-zinc-100 mt-3`}>
//             {elem.instock? "In Stock" : "Out of Stock"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Card;

import React from "react";
function Card() {
  const data = [
    {
      name: "Mahiya Way",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil voluptate ratione!",
    },
    {
      name: "Junun",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil voluptate ratione!",
    },
  ];
  const handleClickDownload = ()=>{alert("chal raha hai")};
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
      {data.map((item, index) => (
        <div key={index} className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-sm mt-2">
            {item.description}
          </p>
          <button onMouseOver={handleClickDownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3">
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}
export default Card;
