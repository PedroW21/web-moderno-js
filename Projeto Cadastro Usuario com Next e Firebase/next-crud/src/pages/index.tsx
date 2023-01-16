export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
    `}>
       <span className="text-4xl cursor-pointer select-none"
       onClick={e => console.log('oi')}>teste</span>
    </div>
  )
}
