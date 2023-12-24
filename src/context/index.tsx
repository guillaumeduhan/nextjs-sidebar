"use client"
import Sidebar from "@/components/Sidebar"
import { createContext, useContext, useState } from "react"

const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: {
  children: React.ReactNode,
}) {
  const [user, setUser] = useState<any>(undefined)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{
      user,
      setUser,
    }}
    >
      <main className="flex items-start w-full h-full">
        <Sidebar {...{ open, setOpen }} />
        <div className="w-full bg-green-500 min-h-screen z-10">
          <div onClick={() => setOpen(!open)}>open sidebar</div>
          {children}
        </div>
      </main>
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
