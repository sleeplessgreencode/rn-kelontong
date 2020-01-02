import ENV from "../env";

// export const init = () => {
//   const barangAwal = ["Sampoerna", "Gudang Garam"];

//   return barangAwal.map(barang => {
//       fetch(`${ENV.DATABASE_URL}/barang.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       barangAwal
//     })
//   })})

// export const init = () => {
//   const barangAwal = ["Sampoerna", "Gudang Garam"];

//   return barangAwal.map(barang =>
//     fetch(`${ENV.DATABASE_URL}/barang.json`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         barang
//       })
//     })
//   );
// };
