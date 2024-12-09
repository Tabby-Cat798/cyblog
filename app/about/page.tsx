import Link from 'next/link';


export default function About() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the about page.</p>
        <div>
            <Link href="/">Back to home</Link>
        </div>
        <div className="flex justify-center items-center min-h-screen">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Click Me
            </button>
        </div>

      </div>
      

    );
  }
  