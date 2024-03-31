import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="flex flex-col gap-32">


      {/* TopPicks */}
      <div className="w-full flex  justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px] ">TOP PICKS</div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/001-HIDE-AND-SEEK-free-childrens-books-1.jpg?v=1589846879"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              HIDE & SEEK
            </div>
          </div>

          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/002-GINGER-THE-GIRAFFE.jpg?v=1589846879"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              GINGER THE GIRAFFE
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/005-SUNNY-MEADOWS-WOODLAND-SCHOOL-th.jpg?v=1589846879"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              SUNNY MEADOWS...
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/011-DYLAN-THE-DRAGON-th.jpg?v=1589884735"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              DYLAN THE DRAGON
            </div>
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">
          RECOMMENDATIONS
        </div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/017-UP-IN-THE-AIR-th.jpg?v=1589849801"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              UP IN THE AIR
            </div>
          </div>

          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/020-HECTOR-THE-HERMIT-th.jpg?v=1589849801"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
            HECTOR- HERMIT CRAB
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/019-BUBBLE-FUN-th.jpg?v=1589849801"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
            BUBBLE FUN
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/026-THE-HIKE-th.jpg?v=1589890624"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md  hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              THE HIKE
            </div>
          </div>
        </div>
      </div>
      {/*Feel Good*/}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">FEEL GOOD</div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={"https://cdn.shopify.com/s/files/1/2081/8163/files/022-I-FOUND-A-FROG-th.jpg?v=1589890624"}
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              I FOUND A FROG
            </div>
          </div>

          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/027-PIRATES-COVE-th.jpg?v=1589890624"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
            PIRATES COVE
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/028-THE-WAY-OF-THE-WOODS-th.jpg?v=1589890624"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
            THE WAY OF THE WOODS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/039-MY-FIRST-PET-th.jpg?v=1589893027"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
            MY FIRST PET
            </div>
          </div>
        </div>
      </div>
      {/*MORE  */}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">MORE</div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/034-MARTY-MONGOOSE-th.jpg?v=1589893026"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              MARTY MONGOOSE
            </div>
          </div>

          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/044-SAMATHA-THE-GIRL-SCIENTIST-th.jpg?v=1589895890"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
            THE GIRL SCIENTIST
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/042-STOP-AND-GO-th.jpg?v=1589895622"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              STOP & GO
            </div>
          </div>
          <div>
            <Image
              src={
                "https://cdn.shopify.com/s/files/1/2081/8163/files/041-THE-FLOWER-GARDEN-th.jpg?v=1589895147"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              THE FLOWER GARDEN
            </div>
          </div>
        </div>
      </div>
  

    </div>
  )
}

export default page