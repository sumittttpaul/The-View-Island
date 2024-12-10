export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-[70rem] animate-pulse flex-col space-y-5 px-2.5 pt-5 md:mt-2.5 md:px-5 md:pt-10">
      <span className="h-[55px] w-[150px] rounded-xl bg-gray-200 md:h-[75px] md:w-[200px] md:rounded-2xl" />
      <div className="flex w-full flex-col space-y-2.5 md:space-y-5">
        {[...Array(5)].map((o, i) => {
          return (
            <span
              key={i}
              className="h-[334px] w-full rounded-xl bg-gray-200 md:rounded-2xl"
            />
          );
        })}
      </div>
    </div>
  );
}
