export default function Card() {
  return (
    <div id="card" className="m-10  border-2 rounded">
      <div id="cardHeader">
        <div id="userAvatar" className="flex items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
      <div id="cardBody">
        <div id="title" className="p-2 text-2xl font-bold">
          Title might be a little bit long, so how long can it be? Can it be
          long enough like a train?
        </div>
        <div id="divideLine" className="p-2">
          <hr className="bg-white" />
        </div>
        <div id="content" className="p-2"></div>
      </div>
      <div id="cardFooter"></div>
    </div>
  );
}
