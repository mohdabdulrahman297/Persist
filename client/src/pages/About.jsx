import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="w-full py-6 space-y-6 md:py-12">
      <div className="container space-y-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Us
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We're passionate about making cooking fun, easy, and accessible
              for everyone. Our app is designed to inspire your culinary
              creativity with a collection of delicious recipes, helpful tips,
              and convenient features. Whether you're a beginner or a seasoned
              chef, we've got you covered.
            </p>
          </div>
        </div>
        <div className="grid max-w-sm mx-auto items-start gap-4 sm:max-w-4xl md:gap-8 lg:max-w-5xl lg:grid-cols-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">Meet the Team</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We're a group of food enthusiasts, tech innovators, and recipe
              curators who share a common goal: to bring joy to your kitchen.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We believe that everyone should be able to enjoy delicious,
              homemade meals. That's why we're dedicated to providing you with
              the tools and inspiration to create culinary delights in the
              comfort of your own home.
            </p>
          </div>
        </div>
        <div className="grid max-w-sm mx-auto items-start gap-8 sm:max-w-4xl md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">Innovative Features</h3>
            <ul className="list-disc pl-4 text-sm grid gap-2">
              <li>Intuitive recipe search and browsing experience.</li>
              <li>Step-by-step instructions with photos and videos.</li>
              <li>
                Personalized recommendations based on your taste preferences.
              </li>
              <li>Convenient shopping list generation.</li>
              <li>
                Community interaction through likes, comments, and recipe
                sharing.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Have a question or feedback? We'd love to hear from you. Email:
              info@example.com
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">Our Values</h3>
            <ul className="list-disc pl-4 text-sm grid gap-2">
              <li>Passion for food and creativity in the kitchen.</li>
              <li>Inclusivity and diversity in culinary exploration.</li>
              <li>Embracing technology to enhance the cooking experience.</li>
              <li>Commitment to providing high-quality, reliable recipes.</li>
              <li>Bringing people together through the love of good food.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-orange-400 px-8 text-sm text-white font-medium shadow-sm transition-colors hover:bg-orange-500 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Contact Us
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-orange-400 px-8 text-sm text-white font-medium shadow-sm transition-colors hover:bg-orange-500 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Download the App
          </Link>
        </div>
      </div>
    </div>
  );
}
