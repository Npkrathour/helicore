import Image from "next/image";
import founderImage from "@/assets/founder.svg"
import linearImage from "@/assets/linear.svg"
import WaveDivider from "./WaveDivider";

export default function FounderSection() {
  return (
    <>
      <section
        id="founder"
        className="overflow-hidden bg-[#F7EED9] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[120px]"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Main Wrapper */}
          <div className="relative mx-auto max-w-[1320px]">
            {/* Content Card */}
            <div
              className="
              relative
              ml-0
              rounded-[28px]
              border-2
              border-[#D7A323]
              px-7
              pb-10
              pt-10
              sm:rounded-[30px]
              sm:px-10
              sm:pb-12
              sm:pt-12
              lg:ml-[38%]
              lg:min-h-[545px]
              lg:rounded-[28px]
              lg:px-[8%]
              lg:py-[50px]
            "
            >
              {/* Content */}
              <div className="max-w-175 lg:ml-[2%]">
                {/* Heading */}
                <h2
                  className="font-serif text-3xl font-semibold leading-tight  text-[#171717] sm:text-4xl lg:text-[42px]"
                >
                  Meet The Founder
                </h2>
                <h3
                  className="
                  mt-6
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  text-[#171717]
                  sm:text-[26px]
                  lg:text-[28px]
                "
                >
                  Lakeisha Appleton
                </h3>

                {/* Credentials */}
                <p
                  className="
                  mt-3
                  text-lg
                  font-medium
                  tracking-wide
                  text-[#171717]
                  sm:text-xl
                  lg:text-[21px]
                "
                >
                  FNP-C, PMHNP- BC
                </p>

                {/* Quote */}
                <p
                  className="
                  mt-8
                  max-w-[720px]
                  text-[17px]
                  leading-[1.55]
                  tracking-wide
                  text-[#171717]
                  sm:text-[19px]
                  sm:leading-[1.6]
                  lg:text-[21px]
                  lg:leading-[1.6]
                "
                >
                  “Mental health problems don’t define who you are. They are
                  something you experience. You walk in the rain and you feel
                  the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
                </p>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href="#about"
                    className="
                    inline-flex
                    min-w-52
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-linear-to-r
                    from-[#C8952E]
                    via-[#F5DD61]
                    to-[#D5A52F]
                    px-8
                    py-4
                    text-base
                    font-medium
                    text-[#111111]
                    shadow-[0_5px_18px_rgba(202,155,43,0.18)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_8px_25px_rgba(202,155,43,0.3)]
                    sm:min-w-[215px]
                    sm:text-lg
                  "
                  >
                    <span>Learn More</span>

                    <span className="text-2xl leading-none">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Founder Image */}
            <div
              className="
              relative
              z-10
              mt-[-70px]
              w-full
              sm:mt-[-85px]
              lg:absolute
              lg:left-0
              lg:top-1/2
              lg:mt-0
              lg:w-[43%]
              lg:-translate-y-1/2
            "
            >
              <div
                className="
                
              "
              >
                <Image
                  src={founderImage}
                  alt="Lakeisha Appleton"
                  priority
                  width={700}
                  height={700}
                  className="object-cover object-center lg:pt-0 pt-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider />
    </>
  );
}