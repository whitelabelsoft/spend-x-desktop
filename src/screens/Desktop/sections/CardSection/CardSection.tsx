import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Input } from "../../../../components/ui/input";

const featureCards = [
  {
    icon: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector.svg",
    title: "One card\nOne tap",
  },
  {
    icon: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-7.svg",
    title: "Borderless\nutility",
  },
  {
    icon: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-6.svg",
    title: "Trusted and\ncomplaint",
  },
];

const countdownData = [
  { value: "2", label: "DAYS" },
  { value: "06", label: "HOURS" },
  { value: "15", label: "MINUTES" },
  { value: "48", label: "SECONDS" },
];

const pricingPlans = [
  {
    name: "Essential",
    price: "$ 25",
    daily: "$ 2 500",
    fee: "3.5 %",
    monthly: "$ 25 000",
    cardBg: "https://c.animaapp.com/mfxs2xashNRHRv/img/rectangle-51-1.svg",
    cardImage: "https://c.animaapp.com/mfxs2xashNRHRv/img/mask-group.png",
    iconLeft: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-15.svg",
    iconTop: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-17.svg",
    nameColor: "text-[#44467f]",
  },
  {
    name: "Plus",
    price: "$ 35",
    daily: "$ 5 000",
    fee: "3.0 %",
    monthly: "$50 000",
    cardBg: "https://c.animaapp.com/mfxs2xashNRHRv/img/rectangle-51.svg",
    cardImage: "https://c.animaapp.com/mfxs2xashNRHRv/img/mask-group-1.png",
    iconLeft: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-16.svg",
    iconTop: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-10.svg",
    nameColor: "text-white",
  },
  {
    name: "Prime",
    price: "$ 75",
    daily: "$ 20 000",
    fee: "2.5 %",
    monthly: "$ 200 000",
    cardBg: "https://c.animaapp.com/mfxs2xashNRHRv/img/rectangle-51-3.svg",
    cardImage: "https://c.animaapp.com/mfxs2xashNRHRv/img/mask-group-2.png",
    iconLeft: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-1.svg",
    iconTop: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-4.svg",
    nameColor: "text-white",
  },
  {
    name: "Supreme",
    price: "$ 150",
    daily: "$ 100 000",
    fee: "2.0 %",
    monthly: "$ 500 000",
    cardBg: "https://c.animaapp.com/mfxs2xashNRHRv/img/rectangle-51-2.svg",
    cardImage: "https://c.animaapp.com/mfxs2xashNRHRv/img/mask-group-3.png",
    iconLeft: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-1.svg",
    iconTop: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-4.svg",
    nameColor: "text-white",
  },
];

const bridgeFeatures = [
  {
    number: "01",
    title: "Seamless Payment",
    description: "instant crypto-to-fiat conversion at the point of sale",
    icon: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-2.svg",
  },
  {
    number: "02",
    title: "Global Access",
    description: "accepted anywhere debit card works, online and offline",
    icon: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-14.svg",
  },
  {
    number: "03",
    title: "Trusted Infrastructure",
    description: "fully regulator, secure and compliant rails for scale",
    icon: "https://c.animaapp.com/mfxs2xashNRHRv/img/vector-11.svg",
  },
];

const usageCategories = [
  "Shops",
  "Supermarkets",
  "Cafes",
  "Restaurants",
  "Hotels",
  "Travel",
  "Utilities",
  "Health",
  "Beauty",
  "Furniture",
  "Cars",
  "Real Estate",
  "Online shopping",
  "Education Estate",
];

export const CardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[110px] py-16">
{/* Hero Section */}
      <div className="relative w-full max-w-[1205px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
<div className="flex flex-col lg:flex-row items-start gap-8">
<div className="flex flex-col w-full lg:w-[689px] items-start gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
<h1 className="text-[43px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
A world where crypto is as easy to use as cash
            </h1>
<p className="w-full max-w-[639px] text-[25px] font-medium text-[#62638a] tracking-[-1.25px] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
Crypto is easy to hold, but hard to spend. We built a global payment
              solution that turns crypto into fiat instantly - accepted anywhere
            </p>
<p className="text-xl font-bold text-[#404169] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
This is how freedom becomes reality - one card, one tap
            </p>
<div className="flex flex-col sm:flex-row items-center gap-3.5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
{featureCards.map((feature, index) => (
                <Card key={index} className="flex-1 rounded-[19.69px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(327deg,rgba(255,255,255,0.2)_0%,rgba(235,243,255,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[19.69px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<CardContent className="flex items-center justify-center gap-[18px] px-5 py-2.5">
<img
                      className="w-[56px] h-[44px] object-contain"
                      alt="Feature icon"
                      src={feature.icon}
                    />
<div className="text-[25px] font-bold text-[#62638a] tracking-[-1.25px] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal whitespace-pre-line">
{feature.title}
                    </div>
</CardContent>
</Card>
))}
            </div>
<Button className="w-[245px] h-auto gap-[12.5px] p-[12.5px] rounded-[37.5px] shadow-[0px_3.75px_7.88px_#95aed2] bg-[linear-gradient(160deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] text-white text-[25px] font-semibold [font-family:'Wix_Madefor_Text',Helvetica] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
Buy now
            </Button>
</div>
<img
            className="w-full max-w-[570px] h-auto object-contain translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
            alt="Crypto card illustration"
            src="https://c.animaapp.com/mfxs2xashNRHRv/img/group-40.png"
          />
</div>
</div>
{/* Limited Time Offer Section */}
      <div className="flex flex-col w-full max-w-[1013px] items-center gap-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
<h2 className="text-[45px] font-extrabold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
Limited time offer - 15% discount on all our plans
        </h2>
<Card className="w-full max-w-[689px] rounded-[20px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(327deg,rgba(255,255,255,0.8)_0%,rgba(235,243,255,0.8)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<CardContent className="flex items-start justify-between px-[37.5px] py-[18.75px]">
{countdownData.map((item, index) => (
              <React.Fragment key={index}>
<div className="flex flex-col w-[96.56px] items-center">
<div className="text-[60.9px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
{item.value}
                  </div>
<div className="text-[23.4px] font-medium text-[#62638a] tracking-[-1.17px] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
{item.label}
                  </div>
</div>
{index < countdownData.length - 1 && (
                  <div className="text-[60.9px] font-normal bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-50 [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
:
                  </div>
)}
              </React.Fragment>
))}
          </CardContent>
</Card>
<p className="text-xl font-bold text-[#404169] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
This is how freedom becomes reality - one card, one tap
        </p>
<Button className="w-[190px] h-auto gap-[12.5px] p-[12.5px] rounded-[37.5px] shadow-[0px_3.75px_7.88px_#95aed2] bg-[linear-gradient(160deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] text-white text-[25px] font-semibold [font-family:'Wix_Madefor_Text',Helvetica]">
Buy now
        </Button>
</div>
{/* Pricing Plans Section */}
      <div className="flex flex-col items-center gap-[30px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
<h2 className="text-[43px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
Get Started in Minutes:
        </h2>
<div className="flex flex-wrap items-end justify-center gap-[45px] w-full">
{pricingPlans.map((plan, index) => (
            <div key={index} className="relative w-[291.31px] h-[484.01px] translate-y-[-1rem] animate-fade-in opacity-0" style={{"--animation-delay": `${1400 + index * 200}ms`}}>
<Card className="absolute top-[82px] left-2.5 w-[276px] h-[402px] rounded-[20px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(327deg,rgba(255,255,255,0.4)_0%,rgba(235,243,255,0.4)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<CardContent className="relative w-full h-full p-0">
<div className="absolute top-[207px] left-2 w-[218px] text-[22px] font-normal [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
<span className="font-extrabold text-[#404169]">{plan.daily}</span>
<span className="font-bold text-[#404169]"> </span>
<span className="text-[#404169]">daily<br /></span>
<span className="font-extrabold text-[#404169]">{plan.fee}</span>
<span className="font-bold text-[#404169]"> </span>
<span className="text-[#404169]">top-up fee<br /></span>
<span className="font-extrabold text-[#404169]">{plan.monthly}</span>
<span className="font-bold text-[#404169]"> </span>
<span className="text-[#404169]">monthly</span>
</div>
<div className="absolute top-[129px] left-[29px] text-[46px] font-extrabold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
{plan.price}
                  </div>
<div className="absolute top-[154px] left-[131px] opacity-50 text-[21.4px] font-semibold text-[#404169] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
price
                  </div>
<Button className="absolute top-[357px] left-[59px] w-[152px] h-auto gap-2.5 p-2.5 rounded-[30px] shadow-[0px_3px_6.3px_#95aed2] bg-[linear-gradient(160deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] text-white text-xl font-semibold [font-family:'Wix_Madefor_Text',Helvetica]">
Buy now
                  </Button>
</CardContent>
</Card>
<div className="absolute top-[18px] left-2.5 w-[273px] h-[168px] rotate-[-8deg]">
<img
                  className="absolute top-[-29px] left-[-26px] w-[322px] h-[235px] rotate-[8deg] object-cover"
                  alt="Card background"
                  src={plan.cardBg}
                />
<img
                  className="absolute top-[-22px] left-[-15px] w-[296px] h-[214px] rotate-[8deg]"
                  alt="Card design"
                  src={plan.cardImage}
                />
<img
                  className="absolute top-[calc(50.00%_-_23px)] left-[13px] w-[50px] h-[46px] rotate-[8deg]"
                  alt="Card icon"
                  src={plan.iconLeft}
                />
<img
                  className="absolute top-[11px] left-3.5 w-[102px] h-[37px] rotate-[8deg]"
                  alt="Card logo"
                  src={plan.iconTop}
                />
<div className={`absolute top-[122px] text-[25.1px] font-medium [font-family:'Lexend_Deca',Helvetica] text-right leading-normal ${plan.nameColor} ${plan.name === 'Essential' ? 'left-[146px]' : plan.name === 'Plus' ? 'left-[195px]' : plan.name === 'Prime' ? 'left-[173px]' : 'left-[135px]'}`}>
{plan.name}
                </div>
</div>
</div>
))}
        </div>
<p className="opacity-50 text-xl font-bold text-[#404169] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
*$0.30 transaction fee per each transaction
        </p>
</div>
{/* Bridge Features Section */}
      <div className="flex flex-col w-full max-w-[1292px] items-center gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
<h2 className="w-full max-w-[890px] text-[43px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
Bridges the gap between the digital economy and everyday finance through:
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-7 w-full">
          {bridgeFeatures.map((feature, index) => (
            <div key={index} className="relative w-full max-w-[412px] h-[268px] translate-y-[-1rem] animate-fade-in opacity-0" style={{"--animation-delay": `${2400 + index * 200}ms`}}>
              <Card className="absolute top-[50px] left-0 w-full h-[218px] rounded-[20px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(327deg,rgba(255,255,255,0.4)_0%,rgba(235,243,255,0.4)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <CardContent className="relative w-full h-full p-0">
                  <img
                    className="absolute top-[57px] left-1/2 transform -translate-x-1/2 w-[139px] h-[139px]"
                    alt="Feature illustration"
                    src={feature.icon}
                  />
                </CardContent>
              </Card>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col w-[100px] h-[100px] items-center justify-center gap-2.5 p-2.5 rounded-[80px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(326deg,rgba(255,255,255,1)_0%,rgba(235,243,255,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[80px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <div className="text-[46px] font-extrabold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
                  {feature.number}
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[353px] items-center gap-[5px] absolute top-[120px] left-1/2 transform -translate-x-1/2">
                <h3 className="text-[34px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
                  {feature.title}
                </h3>
                <p className="text-[25px] font-medium text-[#62638a] tracking-[-1.25px] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
</div>
{/* Usage Categories Section */}
      <div className="flex flex-col items-center gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3000ms]">
<h2 className="text-[43px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
Card usages:
        </h2>
<div className="flex flex-wrap w-full max-w-[1183px] items-start justify-center gap-[30px]">
{usageCategories.map((category, index) => (
            <Badge key={index} className="inline-flex items-center justify-center gap-[12.5px] px-[25px] py-[12.5px] rounded-[45px] border-none shadow-[0px_4.69px_20.27px_#7188a733] backdrop-blur-[6.5px] bg-[linear-gradient(327deg,rgba(255,255,255,0.4)_0%,rgba(235,243,255,0.4)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[2.5px] before:rounded-[45px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0" style={{"--animation-delay": `${3200 + index * 100}ms`}}>
<div className="w-[17.5px] h-[17.5px] bg-[#00c7ff69] rounded-[8.75px] opacity-50" />
<span className="text-[25px] font-semibold text-[#404169] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
{category}
              </span>
</Badge>
))}
        </div>
</div>
{/* Final CTA Section */}
      <div className="flex flex-col w-full max-w-[1022px] items-center gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:4600ms]">
<h2 className="text-[43px] font-normal bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
<span className="font-bold text-black">Limited time offer -</span>
<span className="font-extrabold text-black"> 15% discount</span>
<span className="font-bold text-black"> on all our plans</span>
</h2>
<Card className="w-full max-w-[689px] rounded-[20px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(327deg,rgba(255,255,255,0.8)_0%,rgba(235,243,255,0.8)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:
rounded-[20px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<CardContent className="flex items-start justify-between px-[37.5px] py-[18.75px]">
{countdownData.map((item, index) => (
              <React.Fragment key={index}>
<div className="flex flex-col w-[96.56px] items-center">
<div className="text-[60.9px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
{item.value}
                  </div>
<div className="text-[23.4px] font-medium text-[#62638a] tracking-[-1.17px] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
{item.label}
                  </div>
</div>
{index < countdownData.length - 1 && (
                  <div className="text-[60.9px] font-normal bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-50 [font-family:'Wix_Madefor_Text',Helvetica] leading-normal">
:
                  </div>
)}
              </React.Fragment>
))}
          </CardContent>
</Card>
<div className="flex flex-col w-full max-w-[1013px] items-center gap-3">
<p className="text-xl font-bold text-[#404169] [font-family:'Wix_Madefor_Text',Helvetica] text-center leading-normal">
Send us your email and we will contact you:
          </p>
<div className="flex w-full max-w-[792px] items-center justify-between px-5 py-2.5 rounded-[72px] border-none shadow-[0px_4px_17.3px_#7188a733] backdrop-blur-[5.55px] bg-[linear-gradient(327deg,rgba(255,255,255,0.2)_0%,rgba(235,243,255,0.2)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[72px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
<Input
              placeholder="Enter your e-mail"
              className="flex-1 border-none bg-transparent text-[25px] font-medium text-[#62638a] tracking-[-1.25px] [font-family:'Wix_Madefor_Text',Helvetica] placeholder:text-[#62638a] focus:ring-0 focus:outline-none"
            />
<Button className="w-[190px] h-auto gap-[12.5px] p-[12.5px] rounded-[37.5px] shadow-[0px_3.75px_7.88px_#95aed2] bg-[linear-gradient(160deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] text-white text-[25px] font-semibold [font-family:'Wix_Madefor_Text',Helvetica]">
Send
            </Button>
</div>
</div>
</div>
</section>
);
};
