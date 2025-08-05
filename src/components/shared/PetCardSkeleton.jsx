function PetCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden min-w-[300px] h-[380px] text-center bg-white shadow animate-pulse">
          <div className="w-full aspect-video object-cover bg-gray-300">{/* image */}</div>          
          <div className="p-3 flex flex-col flex-grow">
            <div className="h-6 w-1/4 rounded bg-gray-300 mx-auto">{/* animal name */}</div>
            <div className="h-6 w-3/4 rounded bg-gray-300 mx-auto mt-2">{/* available for adoption */}</div>
            <div className="grid grid-cols-3 my-6 gap-2"> {/* animal data */}
              <div className="h-12 rounded-xl bg-gray-200"></div>
              <div className="h-12 rounded-xl bg-gray-200"></div>
              <div className="h-12 rounded-xl bg-gray-200"></div>
            </div>
            <div className="h-10 w-full rounded-xl bg-gray-300 -mt-1">{/* button */}</div>
          </div>
        </div>
  );
}

export default PetCardSkeleton;