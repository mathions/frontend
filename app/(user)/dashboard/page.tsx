import Breadcrumbs from "@/components/user/dashboard/breadcumbs"

const Dashboard = () => {
  return (
    <main className="">
      <Breadcrumbs 
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard', active: true },
      ]}
      />
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 w-full bg-white border-2 rounded-2xl border-gray-200 p-6">
          <h1 className="font-bold text-xl">Selamat datang</h1>
          <h2 className="font-bold text-2xl">KBRI Paris</h2>
        </div>
        <div className="bg-white border-2 rounded-2xl border-gray-200 p-6">Belanja Modal</div>
        <div className="bg-white border-2 rounded-2xl border-gray-200 p-6">ABT</div>
      </div>
    </main>
  )
}

export default Dashboard