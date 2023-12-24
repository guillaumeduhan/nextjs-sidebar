"use client"
import { createContext, useContext, useState } from "react"

const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: {
  children: React.ReactNode,
}) {
  const [user, setUser] = useState<any>(undefined)

  return (
    <AppContext.Provider value={{
      user,
      setUser,
    }}
    >
      <main className="flex items-start w-full h-full">
        {children}
      </main>
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
