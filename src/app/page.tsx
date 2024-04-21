const mockUrls = [
  "https://kbreactappbuck.s3.ap-south-1.amazonaws.com/pic1.png",
  "https://kbreactappbuck.s3.ap-south-1.amazonaws.com/IMG_20190531_163347_176_Original.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
