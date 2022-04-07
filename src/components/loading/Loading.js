function Loading() {
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] ">
      <span className=" absolute  w-10 h-10 rounded-full border-4 border-transparent border-t-4 border-t-black z-[9999] animate-spinner "></span>
    </div>
  );
}

export default Loading;
