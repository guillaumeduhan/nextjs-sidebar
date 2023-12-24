"use client"

type SidebarProps = {
  open: boolean,
  setOpen: (value: boolean) => void,
}

export default function Sidebar({
  open,
  setOpen,
}: SidebarProps) {
  return (
    <div>
      <div className="hidden lg:flex">
        <div className={`ease-out duration-300 ${open ? "sidebar--open" : "sidebar--closed"}`} />
        <div className={`ease-out duration-300 fixed top-0 left-0 bg-red-500 min-h-screen w-[300px] ${open ? "z-50 visible" : "-z-50 invisible"}`}>hello long fixed content hello long fixed content hello long fixed content</div>
      </div>
    </div>
  )
}
