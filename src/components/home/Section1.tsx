"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const AnimatedShape = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes morphShape {
          0%, 100% {
            border-radius: 50% 50% 50% 50%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            border-radius: 60% 40% 30% 70%;
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            border-radius: 30% 70% 70% 30%;
            transform: scale(0.9) rotate(180deg);
          }
          75% {
            border-radius: 40% 60% 50% 50%;
            transform: scale(1.05) rotate(270deg);
          }
        }
        
        @keyframes morphShape2 {
          0%, 100% {
            border-radius: 40% 60% 70% 30%;
            transform: scale(1);
          }
          33% {
            border-radius: 70% 30% 50% 50%;
            transform: scale(1.15);
          }
          66% {
            border-radius: 50% 50% 30% 70%;
            transform: scale(0.85);
          }
        }
        
        @keyframes morphShape3 {
          0%, 100% {
            border-radius: 50%;
            transform: scale(1);
          }
          50% {
            border-radius: 30% 70% 60% 40%;
            transform: scale(1.2);
          }
        }
        
        @keyframes shapeRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
        {/* Main animated circle */}
        <div className="absolute inset-0 animate-pulse">
          <div 
            className="w-full h-full rounded-full bg-gradient-to-br from-[var(--primaryColor)] via-purple-500 to-blue-500 opacity-20"
            style={{
              animation: 'morphShape 8s ease-in-out infinite, shapeRotate 20s linear infinite'
            }}
          />
        </div>
        
        {/* Secondary shape */}
        <div className="absolute inset-4 animate-pulse delay-1000">
          <div 
            className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-400 via-[var(--primaryColor)] to-pink-500 opacity-30"
            style={{
              animation: 'morphShape2 6s ease-in-out infinite reverse, shapeRotate 15s linear infinite reverse'
            }}
          />
        </div>
        
        {/* Inner core */}
        <div className="absolute inset-8">
          <div 
            className="w-full h-full rounded-full bg-gradient-to-bl from-[var(--primaryColor)] to-purple-600 opacity-40"
            style={{
              animation: 'morphShape3 4s ease-in-out infinite, shapeRotate 10s linear infinite'
            }}
          />
        </div>

        {/* Center Image Container */}
        <div className="absolute inset-16 lg:inset-20 z-10">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--primaryColor)] shadow-2xl bg-white/10 backdrop-blur-sm">
            <img 
              src="/image (3).png" 
              alt="Wasif Ali" 
              className="w-full h-full object-contain rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[var(--primaryColor)] rounded-full opacity-60"
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${15 + (i * 8)}%`,
                animation: `float 3s ease-in-out infinite ${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full lg:w-auto">
            <Column classNames="w-full items-center lg:items-start justify-center">
              <div className="w-full">
                <h1 className="text-xl/normal sm:text-2xl/normal md:text-3xl/normal lg:text-4xl/normal xl:text-5xl/normal 2xl:text-6xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center lg:text-left whitespace-nowrap overflow-hidden">
                  <span className="mr-2">Hi there, I am </span>
                  <span className="dark:text-[var(--primaryColor)] text-[var(--primaryColor)]">
                    <FlipWords
                      words={["Wasif Ali.", "@wasifali."]}
                      className="dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold inline"
                    />
                  </span>
                </h1>
              </div>
              <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)] text-center lg:text-left">
               Full-Stack Engineer | Passionate About Code, Community & Impact
              </p>

              <div className="gap-4 mt-6 lg:mt-8 flex flex-col md:flex-row">
                <TalkButton />
              </div>
              
              <div className="mt-12 lg:mt-16 w-full flex flex-col items-center lg:items-start">
                <p className="text-base/6 font-medium">Follow me here</p>

                <Row classNames="mt-2 gap-2">
                  {socialLinks.slice(0, 5).map((link, index) => {
                    return (
                      <Link
                        key={`social-link-${index}`}
                        href={link.url}
                        target="_blank"
                        className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                        aria-label={`${link.name}`}
                      >
                        <span className="text-base/6 text-[var(--whiteColor)]">
                          {typeof link.icon === "string" ? null : (
                            <FontAwesomeIcon icon={link.icon} />
                          )}
                        </span>
                      </Link>
                    );
                  })}
                </Row>
              </div>
            </Column>
          </div>

          {/* Right Animated Shape */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center lg:justify-end">
            <div className="hidden lg:block">
              <AnimatedShape />
            </div>
            {/* Mobile version - smaller shape */}
            <div className="block lg:hidden">
              <div className="scale-75">
                <AnimatedShape />
              </div>
            </div>
          </div>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;