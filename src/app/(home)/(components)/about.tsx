"use client";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "@/components/loaders";
import Image from "next/image";
import { Button } from "@ui/button";
import Link from "next/link";
import React from "react";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const About = () => {
  return (
    <section className="relative h-[500px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0 bg-blue-main">
        <Image
          src="/back.jpg"
          alt="hero image"
          width={650}
          height={450}
          priority
          className="w-full h-full object-cover opacity-[70%]"
        />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0 bg-blue-main">
        <Image
          src="/back.jpg"
          alt="hero image"
          width={650}
          height={450}
          priority
          className="w-full h-full object-cover opacity-[70%]"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[85%] 2xl:max-w-[90%]  items-center">
          <h2 className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl text-center xl:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            <Typewriter
              component="span"
              options={{
                autoStart: true,
                delay: 100,
                loop: true,
                strings: [
                  "Globally acclaimed for training and academic excellence",
                  "Renowned for superior training and academic standards.",
                  "Internationally recognized for training and academic excellence.",
                  "Esteemed for high-quality training and academic standards.",
                  "Highly regarded for training and academic excellence.",
                  "Known for top-tier training and academic standards.",
                ],
                deleteSpeed: 50,
              }}
            />
          </h2>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            {/* A model security training institution, internationally respected for
            its quality and efficiency, is known for rigorous academic standards
            and commitment to excellence. Graduates are well-equipped with the
            latest security skills, prepared to tackle challenging issues. */}
            {/* Faculty, comprising industry leaders, bring real-world insights,*/}
            {/*fostering innovation and critical thinking.*/}
            {/*  This blend of education*/}
            {/*and training has earned the institution a stellar international*/}
            {/*reputation. */}
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex gap-x-5 lg:gap-x-10 ">
            <Button
              asChild
              className="bg-white py-6 text-lg px-12 text-blue-main hover:bg-white"
            >
              <Link href="/">GetStarted </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Aboutmain = () => {
  return (
    <section className="md:container px-4 flex flex-col items-center w-full py-5 md:py-9">
      <div className="flex flex-col min-[1100px]:flex-row  items-center justify-between gap-x-2">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <Image
            src="/commandant_3.jpg"
            width={323}
            height={438}
            alt="Illustration Image"
            // className="rounded-md"
            className="grow w-full max-h-[450px] max-w-[450px] rounded-2xl max-md:mt-10 max-md:max-w-full object-cover"
          />
        </div>
        <div className="flex items-start flex-col w-full min-[1100]::w-2/3 ">
          <h2 className="text-[24px] font-medium font-worksans text-blue-main">
            Welcome to Nigeria Police Academy, Wudil:
          </h2>
          <div className="flex flex-col items-center justify-end gap-y-2">
            <p className="md:text-base text-sm">
              The origin of the Nigeria Police Academy dates back to the early
              80s when the Government of Nigeria in 1981 requested the British
              Government to make available to Nigeria, some united Kingdom
              Police officers to assess the training needs of The Nigeria
              Police.
            </p>
            <p>
              In response to this request, a team of three British Police
              officers led by M.A. H Pacy ( Assistant Chief Constable,
              Hamberside Police) was sent to Nigeria by the British Government.
              The team submitted its report known as the pacy report in 1982.
              This report was formally published as the white paper of the
              Federal Republic, of Nigeria, on the future training needs of the
              Nigeria Police Force. A follow up of recommendations of the pacy
              report led to the search for the best training orientation for The
              Nigeria Police.
            </p>
            <p>
              The The Academy officially took off simultaneously in 1988 at two
              temporary campuses; the Police training school Challawa, Kano
              where cadet Inspectors were trained; and the Police college
              Kaduna, where cadet ASPs were trained. The two campuses were
              merged and relocated to its permanent site in Wudil, Kano, after
              its was formerly Commissioned on the 2nd April,1996, by then Head
              of State and Commander in Chief of the Armed forces, General Sani
              Abacha, GCON, dss, mni., with the expectation that the Academy
              will be affiliated to a University for degree awarding courses.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 items-start gap-2">
        <p>
          In the year 2012, the Federal Government of Nigeria upgraded the
          Nigeria Police Academy Wudil- Kano State, to a degree – awarding
          institution and the National Universities commission, accordingly,
          recognized the Academy as the thirty seven (37th) Federal University
          and the one hundred and twenty fourth ( 124th) University in Nigeria.
          Academy activities commenced in September, 2012. The pioneer faculties
          are :-
        </p>
        <ol className="list-decimal px-6 md:px-4">
          <li> Faculty of Science</li>
          <li>Faculty of Law</li>
          <li>Faculty of Social and Management Science</li>
          <li> Faculty of Humanities.</li>
        </ol>
      </div>
    </section>
  );
};

const AimsAndObjesection = () => {
  return (
    <section className="container relative flex flex-col justify-between h-full mt-5 md:mt-9">
      <h2 className="mb-1 text-3xl font-semibold leading-tight text-gray-900">
        Aims And Objectives
      </h2>
      <p className="mb-12 text-lg text-gray-500">Our aims and objectives</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    High Level Officers
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  To provide an institution capable of producing qualitative
                  manpower especially at the ASP and Inspectorate cadre, in
                  order to meet up with the middle level manpower requirements
                  of the Nigeria Police Force.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Feild ready Officer
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  To equip trainees with competences backed by sound academic
                  background, high professional and moral standards for
                  effective law enforcement and selfless service to the Nation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    International Standard
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  A model security training institution, internationally
                  respected for the quality and efficiency of its training and
                  the excellence of its academic standards.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Tittle
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  commodi doloremque error, autem odit recusandae voluptatibus
                  accusantium sit sint fugiat ducimus, non omnis corrupti iste
                  dolor id quam, aperiam consectetur quo maiores quis
                  perspiciatis voluptate et quaerat.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Tittle
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  commodi doloremque error, autem odit recusandae voluptatibus
                  accusantium sit sint fugiat ducimus, non omnis corrupti iste
                  dolor id quam, aperiam consectetur quo maiores quis
                  perspiciatis voluptate et quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About, Aboutmain, AimsAndObjesection };
