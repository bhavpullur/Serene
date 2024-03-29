import React from "react";
import Image from "next/image";
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
                "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9798887620237/bhagavad-gita-9798887620237_hr.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>

          <div>
            <Image
              src={
                "https://cdn.pastemagazine.com/www/articles/2019/12/06/dunebbc19final.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://images-na.ssl-images-amazon.com/images/I/91OT29EvAXL.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://m.media-amazon.com/images/I/614XuifqVUL._AC_UF1000,1000_QL80_.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
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
                "https://m.media-amazon.com/images/I/81FummIc2eL._AC_UF1000,1000_QL80_.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>

          <div>
            <Image
              src={
                "https://flich.lk/wp-content/uploads/2023/05/rich-dad-poor-dad-24.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://m.media-amazon.com/images/I/61g40WNFudL._AC_UF1000,1000_QL80_.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://www.jaicobooks.com/wp-content/uploads/2022/12/j-2833-the-5-am-club-robin-sharma.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
        </div>
      </div>
      {/*Motivation*/}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">MOTIVATION</div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={"https://m.media-amazon.com/images/I/41-G7AIOZyL.jpg"}
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>

          <div>
            <Image
              src={
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://m.media-amazon.com/images/I/81qW97ndkvL._AC_UF1000,1000_QL80_.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://lifestack.files.wordpress.com/2008/11/the_alchemist2.jpg?w=584"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
        </div>
      </div>
      {/*Thriller  */}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">THRILLER</div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={
                "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>

          <div>
            <Image
              src={
                "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/GirlOnTheTrain_PosterArt.jpg?itok=GVsArxVO://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545494980i/40916679.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587396413l/52439531.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
        </div>
      </div>
      {/* Romance */}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">
          ROMANCE
        </div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610900883i/54189398.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>

          <div>
            <Image
              src={
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610730335l/53086843.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://m.media-amazon.com/images/I/41qnDDa9kdL._AC_UF1000,1000_QL80_.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://m.media-amazon.com/images/I/71pLR3Iy50L._AC_UF1000,1000_QL80_.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
        </div>
      </div>
      {/* Fiction */}
      <div className="w-full flex justify-center items-center flex-col gap-9 ">
        <div className="jost text-white flex pl-15 text-[25px]">
          FICTION
        </div>

        <div className="flex flex-row   gap-14 pl-5">
          <div>
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6t8jbkkg83ZRTMWBcK_JXXnzD28eC8kdH6j22EZ09g&s://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610900883i/54189398.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>

          <div>
            <Image
              src={
                "https://static.tvtropes.org/pmwiki/pub/images/71hzba0wscl_sl1500.jpg"
              }
              height={100}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://alittleblogofbooks.com/wp-content/uploads/2012/08/the-kite-runner.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md hover:scale-105 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
          <div>
            <Image
              src={
                "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg"
              }
              height={90}
              width={200}
              alt="ikigai"
              className="rounded-md scale-95 hover:scale-100 transition-transform"
            />
            <div className="flex justify-center jost text-pretty font-light text-white items-center">
              ATOMIC HABITS
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default page;
