import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = "" 
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const countdownData = [
    { value: formatNumber(timeLeft.days), label: "DAYS" },
    { value: formatNumber(timeLeft.hours), label: "HOURS" },
    { value: formatNumber(timeLeft.minutes), label: "MINUTES" },
    { value: formatNumber(timeLeft.seconds), label: "SECONDS" },
  ];

  return (
    <div className={`flex items-start justify-between gap-8 px-9 py-5 rounded-[20px] border-none shadow-[0px_3.75px_16.22px_#7188a733] backdrop-blur-[5.2px] bg-[linear-gradient(327deg,rgba(255,255,255,0.8)_0%,rgba(235,243,255,0.8)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[20px] before:[background:linear-gradient(168deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${className}`}>
      {countdownData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col w-[96.56px] items-center">
            <div className="text-[60.9px] font-bold bg-[linear-gradient(175deg,rgba(33,36,124,1)_0%,rgba(55,59,188,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Wix_Madefor_Text',Helvetica] leading-normal transition-all duration-500">
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
    </div>
  );
};
