import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { deleteVinyl, getVinylList } from "./api/vinylClient";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

function App() {
  const [vinylList, setVinylList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getVinyls = async () => {
    try {
      const data = await getVinylList();
      setVinylList(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteVinyl(id);
      toast.success(`${res.title} eliminato con successo!`, {
        position: "top-right",
      });

      setIsLoading(true);
      getVinyls();
    } catch (error) {
      toast.error(`${error}!`, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    getVinyls();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <tr key={index}>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <div className="p-4 ">
            <h1 className="">{labels.vinylList}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <h2>{labels.filterVinylByTitle}</h2>
            <input
              className="border-slate-400 border-2 p-2"
              type="text"
              value={filter}
              placeholder={labels.insertVinylTitle}
              onChange={handleChange}
            />
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
                {isLoading
                  ? renderSkeletons()
                  : vinylList
                      .filter((vinyl) =>
                        vinyl.title.toLowerCase().includes(filter)
                      )
                      .map((vinyl) => {
                        return (
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
                            <td className="whitespace-nowrap flex gap-2 px-4 py-2">
                              <Link
                                to={`/vinyl/${vinyl.id}`}
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                              >
                                {labels.vinylTableBtnDetail}
                              </Link>
                              <Link
                                to={`/edit/${vinyl.id}`}
                                className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                              >
                                {labels.edit}
                              </Link>
                              <button
                                onClick={() => handleDelete(vinyl.id)}
                                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                              >
                                {labels.delete}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;