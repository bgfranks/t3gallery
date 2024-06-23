const mockUrls = [
  "https://utfs.io/f/8bae5067-dcb1-438c-a6ab-760e16a7c3de-o84a7r.jpg",
  "https://utfs.io/f/f9e28300-b74f-4102-8486-e29fd36c136a-t8s2r6.jpg",
  "https://utfs.io/f/f6cec0aa-7fa9-415a-a298-cf1bf90fc1fa-fcreyp.jpg",
  "https://utfs.io/f/32e204b6-1f71-4e52-8981-565ce78e4d16-94e01h.jpg",
  "https://utfs.io/f/5180798b-7f6e-4108-926a-dc3da605c4bb-xfck06.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
