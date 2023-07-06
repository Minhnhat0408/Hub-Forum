function TLComp({ left = true }) {
  return (
    <div classNam="w-full flex items-center">
      {left ? (
        <>
          <div className="h-fit flex-1">
            <div className="h-32 w-1/2 bg-white rounded-full">

            </div>
          </div>
          <div className="h-fit flex-1"></div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default TLComp;
