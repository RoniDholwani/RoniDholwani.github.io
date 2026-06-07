export default function Loading() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden

        pt-20
        sm:pt-24
        lg:pt-28

        pb-12
        sm:pb-16
        lg:pb-20

        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
      "
      aria-label="Loading content"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          2xl:max-w-[1440px]
        "
      >
        {/* Page Title Skeleton */}
        <div
          className="
            h-8
            w-40
            sm:h-10
            sm:w-56
            animate-shimmer
            rounded-lg
            bg-muted
            shimmer
          "
        />

        {/* Description Skeleton */}
        <div
          className="
            mt-6
            h-16
            sm:h-20
            max-w-3xl
            animate-shimmer
            rounded-lg
            bg-muted
            shimmer
          "
        />

        {/* Cards Grid */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="
                glass
                rounded-2xl
                p-5
                sm:p-6
              "
            >
              <div
                className="
                  h-40
                  sm:h-44
                  md:h-48
                  animate-shimmer
                  rounded-lg
                  bg-muted
                  shimmer
                "
              />

              <div
                className="
                  mt-5
                  h-5
                  w-2/3
                  animate-shimmer
                  rounded-md
                  bg-muted
                  shimmer
                "
              />

              <div
                className="
                  mt-3
                  h-4
                  w-full
                  animate-shimmer
                  rounded-md
                  bg-muted
                  shimmer
                "
              />

              <div
                className="
                  mt-2
                  h-4
                  w-5/6
                  animate-shimmer
                  rounded-md
                  bg-muted
                  shimmer
                "
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}