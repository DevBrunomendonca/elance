import { AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Logo from "./logo";

const Header = () => {
  return (
    <header
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      className="fixed z-50 flex justify-between top-0 left-0 py-3 px-4 w-full bg-black bg-opacity-60"
    >
      <div className="flex w-full gap-5 items-center justify-between max-w-6xl mx-auto">
        <Logo />

        <nav className="md:flex hidden  max-w-6xl gap-3 mx-auto justify-center w-full">
          <ul className="flex items-center justify-center gap-5">
            <li className="text-sm text-white cursor-pointer font-light">
              Início
            </li>
            <li className="text-sm text-white cursor-pointer font-light">
              Sobre o Dr. André
            </li>
            <li className="text-sm text-white cursor-pointer font-light">
              O Método Pró-Corpo
            </li>
            <li className="text-sm text-white cursor-pointer font-light">
              Agende Sua Consulta
            </li>
          </ul>
        </nav>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="bg-black" asChild>
              <Button className="block md:hidden">
                <AlignJustify color="#DBD5C7" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-green-900 w-full border-none">
              <SheetHeader>
                <SheetTitle className="flex flex-row items-center justify-between w-full">
                  <Logo />
                  <SheetClose asChild>
                    <Button>
                      <X color="#DBD5C7" />
                    </Button>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <SheetFooter className="flex h-full flex-col gap-5">
                <nav className="flex h-full flex-col  max-w-6xl gap-3 mx-auto justify-center w-full">
                  <ul className="flex h-full flex-col items-center justify-start pt-40 gap-8">
                    <li className="text-white text-lg cursor-pointer font-medium">
                      Início
                    </li>
                    <li className="text-white text-lg  cursor-pointer font-medium">
                      Sobre o Dr. André
                    </li>
                    <li className=" text-white text-lg  cursor-pointer font-medium">
                      O Método Pró-Corpo
                    </li>
                    <li className="text-white text-lg  cursor-pointer font-medium">
                      Agende Sua Consulta
                    </li>
                  </ul>
                </nav>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
