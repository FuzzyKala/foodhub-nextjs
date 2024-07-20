export default function PageLink() {
  return (
    <div>
      <div
        id="homeLink"
        className="bg-slate-700 bg-opacity-50 rounded-lg flex px-3 py-2 mr-2 hover:bg-opacity-100"
      >
        <p className="py-1 px-2">Home</p>
      </div>
      <div
        id="popularLink"
        className="rounded-lg flex px-3 py-2 mr-2 hover:bg-opacity-100"
      >
        <p className="py-1 px-2">Popular</p>
      </div>
      <div
        id="followingLink"
        className="rounded-lg flex px-3 py-2 mr-2 hover:bg-opacity-100"
      >
        <p className="py-1 px-2">Following</p>
      </div>
    </div>
  );
}
