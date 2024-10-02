import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full max-w-4xl mx-auto ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:text-center dark:text-gray-700">
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/jvhnn"
                className="me-4 md:me-6 hover:brightness-150"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/haydencfb"
                className="me-4 md:me-6 hover:brightness-150"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/jvhnn"
                className="me-4 md:me-6 hover:brightness-150"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg text-gray-800 sm:text-center dark:text-gray-700">
          Made by Hayden Fitzpatrick-Brintle, John Dinh & John Marquez
        </span>
      </div>
    </footer>
  );
}

