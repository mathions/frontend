import Breadcrumbs from "@/components/user/dashboard/breadcumbs"
import React from 'react'

const Usulan = () => {
  return (
    <main>
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Belanja Modal', href: '/belanja-modal' },
          { label: 'Usulan', href: '/belanja-modal/usulan', active: true },
        ]}
      />
      <div className="bg-white border-2 rounded-2xl border-gray-200 p-6">
        <h1>Usulan Kebutuhan Belanja Modal</h1>
        <h2>Tahun Anggaran 2025</h2>
        <p>Brafaks</p>
        <button>Pilih Berkas</button>
        <p>Rencana Anggaran Belanja</p>
        (Tabel)
      </div>
    
    </main>
  )
}

export default Usulan