const Help=()=>{
    return (
        <>
        <div className=" flex flex-col items-center">
        <h1 className="font-bold text-2xl my-2 " >Contact</h1>
        <form className="flex flex-col w-3/12">
            
            <input className="rounded-sm border border-black px-2 m-2" type="text" placeholder="name"/>
            <input className="rounded-sm border border-black px-2 m-2" type="text" placeholder="message"/>
            <button className="rounded-xl border w-1/4 bg-white text-black border-black mx-32 my-2" type="submit">Submit</button>
    
            </form>
        </div>
      
        </>
    )
}

export default Help;