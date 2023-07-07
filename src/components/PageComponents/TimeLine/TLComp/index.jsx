
function TLComp({ left = true }) {

  return (
    <div className={"w-full h-full flex items-center " + (left ? 'justify-start' : 'justify-end')}>
      {left ? (
        <>
      
            <div className="h-32 w-1/3 ml-[20%] bg-white rounded-full border-r-[10px]  border-red-400">
            </div>
      
        </>
      ) : (
        <div className="h-32 w-1/3 mr-[20%] bg-white border-l-[10px] border-red-400 rounded-full">
            </div>
      )}
    </div>
  );
}

export default TLComp;
