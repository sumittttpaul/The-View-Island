export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-[110rem] animate-pulse flex-col space-y-2.5 px-2.5 pt-5 md:space-y-7 md:px-5 md:pt-10">
      <div className="flex w-full justify-between">
        {[...Array(2)].map((o, i) => {
          return (
            <span
              key={i}
              className="h-[55px] w-[125px] rounded-lg md:h-[75px] md:w-[200px] md:rounded-2xl bg-gray-200"
            />
          );
        })}
      </div>
      <div className="flex w-full flex-col">
        <span className="h-[288px] w-full rounded-lg md:h-[880px] md:rounded-2xl bg-gray-200" />
      </div>
      {[...Array(3)].map((o, i) => {
        return (
          <>
            <div
              key={i}
              className="flex w-full justify-between pb-1 pt-1 md:pb-0 md:pt-5"
            >
              <span className="h-[55px] w-[125px] rounded-lg md:h-[75px] md:w-[200px] md:rounded-2xl bg-gray-200" />
            </div>
            <div key={i + 3} className="flex w-full flex-col">
              <span className="h-[520px] w-full rounded-lg md:h-[880px] md:rounded-2xl bg-gray-200" />
            </div>
          </>
        );
      })}
    </div>
  );
}
