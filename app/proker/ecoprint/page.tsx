// // pages/proker.js (atau app/proker/page.js)
//
// import React from 'react';
// import ProkerSection from '../../components/prokerSection';
// // Asumsi Anda punya data proker, bisa dari file JSON atau API
// import { prokerData } from '../../data/prokerData'; 
//
// function ProkerPage() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1>Gambaran Program Kerja</h1>
//       <p>Selamat datang di halaman gambaran program kerja kami!...</p>
//
//       {/* Filosofi & Tujuan */}
//       <section>
//         <h2>Filosofi Program Kerja</h2>
//         <p>Program kerja kami berlandaskan pada...</p>
//         <h2>Tujuan Utama</h2>
//         <ul>
//           <li>Meningkatkan Kualitas</li>
//           {/* ...dan seterusnya */}
//         </ul>
//       </section>
//
//       {/* Bagian Fokus Bidang Program */}
//       <section>
//         <h2>Fokus Bidang Program</h2>
//         {prokerData.map((bidang) => (
//           <ProkerSection
//             key={bidang.id}
//             title={bidang.title}
//             description={bidang.description}
//             programs={bidang.programs}
//           />
//         ))}
//       </section>
//
//       {/* Ajakan Kolaborasi */}
//       <section>
//         <h2>Ajakan Kolaborasi</h2>
//         <p>Kami sangat terbuka untuk berkolaborasi...</p>
//       </section>
//     </div>
//   );
// }
//
// export default ProkerPage;
