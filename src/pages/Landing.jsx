import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-pink-300">Hey, welcome</h1>
        <Link to="/todo">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">
            Go to Todo List
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 mb-8">
        <div className="p-4 bg-white border border-gray-300 rounded">
          <p className="font-bold">Clarissa Audrey Fabiola</p>
          <p>ID: 2602118490</p>
        </div>
      </div>
    </div>
  );
}
