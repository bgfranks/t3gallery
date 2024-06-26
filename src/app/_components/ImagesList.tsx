import { db } from "~/server/db";

export default async function ImagesList() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
