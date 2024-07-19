import Image from "next/image";

export default function Card() {
  return (
    <div id="card" className="p-2 rounded-lg hover:bg-slate-500 hover:border-1">
      <div id="cardHeader" className="flex justify-between m-5">
        <div id="cardHeader-left" className="items-center flex">
          <div id="userAvatar" className="flex items-center mr-3">
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
          <div id="userId">
            <p>FuzzyKala</p>
          </div>
        </div>
        <div id="cardHeader-right" className="items-center flex">
          <div id="publishedTime">
            <p>7 days ago</p>
          </div>
        </div>
      </div>
      <div id="cardBody" className="m-5">
        <div id="title" className="text-2xl font-bold mb-2">
          <p>
            Title might be a little bit long, so how long can it be? Can it be
            long enough like a train?
          </p>
        </div>
        {/* <div id="divideLine" className="p-2">
          <hr className="bg-white" />
        </div> */}
        <div id="content" className="justify-items-center">
          <div id="imagesContainer" className="mb-2">
            <Image
              src="/dummy_food.jpg"
              alt="dummy image"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl"
            />
          </div>
          <div id="textContainer">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
        </div>
      </div>
      <div id="cardFooter"></div>
    </div>
  );
}
