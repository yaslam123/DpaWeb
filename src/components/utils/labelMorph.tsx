import { ArrowRight, Check } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "../ui/morphing-dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

export function DataSubject() {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "4px",
        }}
        className="border border-gray-200/60 bg-white"
      >
        <div className="flex items-center space-x-2 p-4">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt="What I Talk About When I Talk About Running - book cover"
            className="h-8 w-8 object-cover object-top"
            style={{
              borderRadius: "4px",
            }}
          />
          <div className="flex flex-col items-start justify-center">
            <MorphingDialogTitle className="text-base font-bold sm:text-xs capitalize">
              Your Rights as a Data Subject
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-[10px] text-gray-600 sm:text-xs">
              Key Steps to Safeguard Data and Maintain Trust
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[90vh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt="What I Talk About When I Talk About Running - book cover"
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="flex flex-col space-y-6">
                <div>
                  <MorphingDialogTitle className="text-neutral-900 text-lg">
                    Your Rights as a Data Subject
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="font-light text-sm text-gray-600">
                    Key Steps to Safeguard Data and Maintain Trust
                  </MorphingDialogSubtitle>
                </div>

                <div className="flex flex-col space-y-6">
                  <div className="flex mt-2 flex-col gap-1">
                    <h1 className="text-base font-medium text-neutral-500">
                      Your Name ,Your Phone Number, Your Email, Your ID Card or
                      Passport, Your Bank Account, Your Identity. And any other
                      information that can identify a person.
                    </h1>
                  </div>

                  <div className="flex flex-row gap-6">
                    <div className="flex mt-2 flex-col">
                      <a href="/ftp">
                        <Button size="lg" className="group w-full">
                          <span className="">Know More About your Rights</span>
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
export function DataController() {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "4px",
        }}
        className="border border-gray-200/60 bg-white"
      >
        <div className="flex items-center space-x-2 p-4">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt="What I Talk About When I Talk About Running - book cover"
            className="h-8 w-8 object-cover object-top"
            style={{
              borderRadius: "4px",
            }}
          />
          <div className="flex flex-col items-start justify-center">
            <MorphingDialogTitle className="text-[16px] font-semibold text-black sm:text-xs capitalize">
              Your Responsibility as a Data Controller
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-[10px] text-gray-600 sm:text-xs">
              Understanding Your Legal Obligations in Handling Personal Data
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[90vh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt="What I Talk About When I Talk About Running - book cover"
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="">
                <MorphingDialogTitle className="text-neutral-900 text-lg">
                  Your Responsibility as a Data Controller
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="font-light text-sm text-gray-600">
                  Understanding Your Legal Obligations in Handling Personal
                  Data.
                </MorphingDialogSubtitle>
                <div className=" mt-10">
                  <div className="flex flex-row gap-6 items-start">
                    <div className="flex mt-2 flex-col gap-1">
                      <h1 className="text-base font-medium text-neutral-500">
                        As Data Controller you must ensure that all data
                        processing activities have a lawful basis. Common legal
                        grounds include the consent of the data subject, the
                        necessity of processing for the performance of a
                        contract, compliance with a legal obligation, protection
                        of vital interests, performance of a task carried out in
                        the public interest, or legitimate interests pursued by
                        the controller or a third party.
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-end mt-10">
                    <div className="flex mt-2 flex-col">
                      <a href="/fto/Data-Controller">
                        <Button size="lg" className="group">
                          <span className="">
                            Know More About Your Responsibilty
                          </span>
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
export function DataProcessor() {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "4px",
        }}
        className="border border-gray-200/60 bg-white"
      >
        <div className="flex items-center space-x-2 p-4">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt="What I Talk About When I Talk About Running - book cover"
            className="h-8 w-8 object-cover object-top"
            style={{
              borderRadius: "4px",
            }}
          />
          <div className="flex flex-col items-start justify-center">
            <MorphingDialogTitle className="text-[16px] font-semibold text-black sm:text-xs capitalize">
              Your Role as a Data Processor
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-[10px] text-gray-600 sm:text-xs">
              A Guide to Compliance, Accountability, and Best Practices
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[90vh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt="What I Talk About When I Talk About Running - book cover"
                  className="h-auto w-[200px]"
                />
              </div>
              <div className="">
                <MorphingDialogTitle className="text-neutral-900 text-lg">
                  Your Role as a Data Processor
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="font-light text-sm text-gray-600">
                  A Guide to Compliance, Accountability, and Best Practices.
                </MorphingDialogSubtitle>
                <div className=" mt-10">
                  <div className="flex flex-row gap-6 items-start">
                    <div className="flex mt-2 flex-col gap-1">
                      <h1 className="text-base font-medium text-neutral-500">
                        As a data processors you must assist data controllers in
                        ensuring compliance with their obligations under data
                        protection laws. This includes aiding in responding to
                        data subject rights requests, data breach notifications,
                        and conducting data protection impact assessments.
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-end mt-10">
                    <div className="flex mt-2 flex-col">
                      <a href="/fto/Data-Processor">
                        <Button size="lg" className="group">
                          <span className="">
                            Know More About Your Responsibilty
                          </span>
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
