import { Card } from "flowbite-react";

export default function ServiceSection() {
  const ar = [1, 2, 3, 4, 5, 6];
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100" id="services">
      <div className="pt-10 flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-3xl">Services</h1>
        <div className="max-w-[700px] m-auto text-center p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab, similique reprehenderit atque aliquam impedit fuga libero quos vel voluptatem nemo inventore, numquam tempore eum
            ad ut dolorum deleniti quia.
          </p>
        </div>
      </div>
      <section className="flex flex-wrap justify-center items-center p-10 gap-10 m-auto">
        {ar.map(() => (
          <Card className="max-w-xs" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="https://flowbite.com/docs/images/carousel/carousel-5.svg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </Card>
        ))}
      </section>
    </section>
  );
}
