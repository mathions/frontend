import Breadcrumbs from "@/components/user/dashboard/breadcumbs"
import React from 'react'

const CreateAbt = () => {
  return (
    <main>
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'ABT', href: '/abt'},
          { label: 'Buat Pengajuan', href: '/abt/create', active: true },
        ]}
      />
      <div className="bg-white border-2 rounded-2xl border-gray-200 p-6">
        abt
      </div>
    </main>
  )
}

export default CreateAbt