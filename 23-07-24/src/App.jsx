import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getVinylList } from "./api/vinylClient";
import { Link } from "react-router-dom";

function App() {
  const [vinylList, setVinylList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVinyls = async () => {
    try {
      const data = await getVinylList();
      console.log("Vinyl data:", data);
      setVinylList(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVinyls();
  }, []);

  if (isLoading) return <p>is loading..</p>;

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px]">
          <div className="p-4">
            <h1 className="">{labels.vinylList}</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableTitle}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableAuthor}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableGenre}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.vinylTableISBN}
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {vinylList.map((vinyl) => (
                  <tr key={vinyl.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {vinyl.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {vinyl.author}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {vinyl.genre}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {vinyl.isbn}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link
                        to={`/vinyls/${vinyl.id}`}
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        {labels.vinylTableBtnDetail}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
