import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/user/dashboard/breadcumbs"
import Link from "next/link"
import React from 'react'

const Abt = () => {
  return (
    <main>
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'ABT', href: '/abt', active: true },
        ]}
      />
      <div className="bg-white border-2 rounded-2xl border-gray-200 p-6">
        <div>Diajukan</div>
        <div>Selesai</div>
        <div>Pengajuan Permintaan ABT Kendaraan Dinas</div>
        <Button asChild><Link href="/abt/create">Buat Pengajuan</Link></Button>
      </div>
    </main>
  )
}

export default Abt