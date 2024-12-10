export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-[110rem] animate-pulse flex-col space-y-2.5 px-2.5 pt-5 md:space-y-7 md:px-5 md:pt-10">
      <div className="flex w-full justify-between">
        {[...Array(2)].map((o, i) => {
          return (
            <span
              key={i}
              className="h-[3.438rem] w-[7.813rem] rounded-lg bg-gray-200 md:h-[4.688rem] md:w-[12.5rem] md:rounded-2xl"
            />
          );
        })}
      </div>
      <div className="flex w-full flex-col">
        <span className="h-[18rem] w-full rounded-lg bg-gray-200 md:h-[55rem] md:rounded-2xl" />
      </div>
      {[...Array(3)].map((o, i) => {
        return (
          <>
            <div
              key={i}
              className="flex w-full justify-between pb-1 pt-1 md:pb-0 md:pt-5"
            >
              <span className="h-[3.438rem] w-[7.813rem] rounded-lg bg-gray-200 md:h-[4.688rem] md:w-[12.5rem] md:rounded-2xl" />
            </div>
            <div key={i + 3} className="flex w-full flex-col">
              <span className="h-[32.5rem] w-full rounded-lg bg-gray-200 md:h-[55rem] md:rounded-2xl" />
            </div>
          </>
        );
      })}
    </div>
  );
}
