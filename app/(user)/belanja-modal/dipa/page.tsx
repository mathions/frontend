import Breadcrumbs from "@/components/user/dashboard/breadcumbs"
import React from 'react'

const Dipa = () => {
  return (
    <main>
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Belanja Modal', href: '/belanja-modal' },
          { label: 'DIPA', href: '/belanja-modal/dipa', active: true },
        ]}
      />
      <div className="bg-white border-2 rounded-2xl border-gray-200 p-6">
        <h1>Penerimaan DIPA</h1>
        <p>Dokumen DIPA</p>
        <button>Lihat Dokumen</button>
        <p>Rencana Anggaran Belanja</p>
      </div>
    </main>
  )
}

export default Dipa