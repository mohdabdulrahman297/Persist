import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsTwitterX } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w--7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-2 bg-orange-400 rounded-lg text-white">
                Culina
              </span>
              Share
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/recipes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recipes
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Culina Share
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  <Footer.Icon href="#" icon={BsInstagram} />
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Footer.Icon href="#" icon={BsTwitterX} />
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright
            href="/"
            by="Culina Share"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
