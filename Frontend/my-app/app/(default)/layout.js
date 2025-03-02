import Navbar from "@/components/own/Navbar";


export default function layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}
