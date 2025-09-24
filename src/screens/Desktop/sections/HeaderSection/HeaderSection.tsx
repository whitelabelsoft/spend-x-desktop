import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "About us", isActive: false },
    { label: "Offer", isActive: true },
    { label: "Cards", isActive: false },
    { label: "Benefits", isActive: false },
    { label: "Usages", isActive: false },
    { label: "Contacts", isActive: false },
  ];

  return (
    <header className="flex w-full max-w-[1150px] mx-auto items-center justify-between px-5 py-3.5 relative bg-transparent rounded-[72px] border-[none] shadow-[0px_4px_17.3px_#7188a733] backdrop-blur-[5.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.55px)_brightness(100%)] bg-[linear-gradient(327deg,rgba(255,255,255,0.8)_0%,rgba(235,243,255,0.8)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[72px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="relative w-[108px] h-[24.58px]"
          alt="Group"
          src="https://c.animaapp.com/mfxs2xashNRHRv/img/group-7.png"
        />
      </div>

      <NavigationMenu className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <NavigationMenuList className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                className={`inline-flex items-center justify-center gap-2.5 px-4 py-2.5 relative flex-[0_0_auto] transition-colors hover:bg-[linear-gradient(160deg,rgba(33,36,124,0.05)_0%,rgba(55,59,188,0.05)_100%)] hover:rounded-[30px] ${
                  item.isActive
                    ? "rounded-[30px] bg-[linear-gradient(160deg,rgba(33,36,124,0.05)_0%,rgba(55,59,188,0.05)_100%)]"
                    : ""
                }`}
              >
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Wix_Madefor_Text',Helvetica] font-semibold text-lg text-right tracking-[0] leading-[normal] ${
                    item.isActive
                      ? "bg-[linear-gradient(160deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                      : "text-[#404169]"
                  }`}
                >
                  {item.label}
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="inline-flex items-center gap-5 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <img
          className="relative w-6 h-6 transition-transform hover:scale-110 cursor-pointer"
          alt="Night mode"
          src="https://c.animaapp.com/mfxs2xashNRHRv/img/night-mode.svg"
        />

        <img
          className="relative w-6 h-6 transition-transform hover:scale-110 cursor-pointer"
          alt="Language"
          src="https://c.animaapp.com/mfxs2xashNRHRv/img/language.svg"
        />

        <Button className="w-[152px] gap-2.5 p-2.5 rounded-[30px] shadow-[0px_3px_6.3px_#95aed2] flex items-center justify-center relative bg-[linear-gradient(160deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] hover:shadow-[0px_4px_8px_#95aed2] transition-shadow h-auto">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Wix_Madefor_Text',Helvetica] font-semibold text-white text-xl text-right tracking-[0] leading-[normal]">
            Buy now
          </div>
        </Button>
      </div>
    </header>
  );
};
