import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { SVGProps } from "react";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";

const links = ["Products", "Downloads", "Community", "Service"];

export default function NavBar() {
  return (
    <header className="fixed backdrop-blur-xl top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-16 max-w-[94vw] items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src={"/arc_logo.svg"}
            alt="Acme Inc"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-gray-900 text-white"
              prefetch={false}
            >
              {link}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[#AE47AC]">
          <Toggle className="rounded-full">
            <User />
          </Toggle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <Search />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Toggle className="rounded-full">
            <ShoppingCart />
          </Toggle>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="h-5 w-5  dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-sm font-medium  hover:text-gray-900 text-white"
                    prefetch={false}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
