export default function App() {
  return (
   <>
    <div className="mx-w-[1240px]  border-red-500 border-4">
        <div className="grid grid-cols-2 border-4 border-red-700 gap-4 mx-auto py-3 px-2">

        <div className="border-4 border-red-300 mx-w-[35%] h-72 text-center ">
          01
          <div className="grid grid-cols-2">
          <div className="h-32 w-32 border-2 border-gray-400 mx-auto">01</div>
          <div className="h-32 w-32 border-2 border-gray-400 mx-auto">01</div>
          </div>
        </div>

        <div className="border-4 border-red-300 mx-w-[65%] h-72  ">
          02
        </div>
        

   

        </div>


         {/* down work  */}

    <div className="grid grid-cols-2 p-5 gap-3">
      <div className="border-4 border-red-400 h-72 w-[650px] py-4 px-4 py-4">
      03

      <div className="border-2 h-12 border-red-300 my-2">01</div>
      <div className="border-2 h-12 border-red-300 my-2">02</div>
      <div className="border-2 h-12 border-red-300 my-2">03</div>
      </div>

      <div className="border-4 border-green-400 h-72 w-[500px] py-4 grid grid-cols-2 p-2 gap-2 mx-auto text-center">
      
      <div className="border-2 border-red-300 my-2 h-[180px] w-[70%] mx-auto ">01</div>
      <div className="border-2  border-red-300 my-2 h-[180px] w-[30%] mx-auto">02</div>
      
      </div>

    </div>



       
    </div>
   
   



   
   
   </>
  )
}