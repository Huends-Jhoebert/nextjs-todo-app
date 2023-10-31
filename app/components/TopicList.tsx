import CreateIcon from "@mui/icons-material/Create";
import Link from "next/link";
import Delete from "./Delete";

const getTodo = async () => {
  try {
    const result = await fetch('http://localhost:3005/api/todo', { cache: 'no-store' })

    if (!result) {
      throw new Error("Failed to fetch ");
    }
    return result.json();
  } catch (error) {
    console.log("Error loading topics:", error);
  }

};

async function TopicList() {
  const { todo } = await getTodo();
  return (
    <>
      <div>
        <h1>Number of topic{(todo.length) > 1 ? "s" : ""}: {todo.length}</h1>
      </div>
      {todo.map((t: any) => (
        <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2 items-center">
            <Delete id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <CreateIcon />
            </Link>
          </div>
        </div>
      ))}

    </>
  );
}

export default TopicList;
