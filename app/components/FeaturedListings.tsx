import Image from "next/image";

interface ListingCardProps {
  image: string;
  alt: string;
  category: string;
  title: string;
  dots: number;
  activeDot: number;
}

function ListingCard({
  image,
  alt,
  category,
  title,
  dots,
  activeDot,
}: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      <div className="relative h-64 rounded-lg">
        <Image src={image} alt={alt} fill className="object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        <div className="absolute bottom-8 left-4">
          <p className="text-xs font-normal text-white mb-1 uppercase tracking-wide">
            {category}
          </p>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {Array.from({ length: dots }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === activeDot
                  ? "w-2.5 h-2.5 bg-white rounded-full border border-white/30"
                  : "w-2 h-2 bg-white/80 rounded-full border border-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedListings() {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ListingCard
          image="/img1.jpg"
          alt="Most Clicked Listing"
          category="MOST CLICKED"
          title="Urban Prime Plaza Premiere"
          dots={3}
          activeDot={0}
        />
        <ListingCard
          image="/img2.png"
          alt="Most Watchlisted Listing"
          category="MOST WATCHLISTED"
          title="Urban Prime Plaza Premiere"
          dots={4}
          activeDot={1}
        />
        <ListingCard
          image="/img3.png"
          alt="Hottest Listing"
          category="HOTTEST LISTING"
          title="Urban Prime Plaza Premiere"
          dots={4}
          activeDot={2}
        />
      </div>
    </div>
  );
}
