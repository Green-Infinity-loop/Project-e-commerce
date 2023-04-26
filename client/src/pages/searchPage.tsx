import Range from "@/components/Range";

export default function searchPage() {
  return (
    <div className="container">
      <div className="text-black">Search</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-black">
          <Range />
        </div>
        <div className="col-span-2 text-black">hi</div>
      </div>
    </div>
  );
}
