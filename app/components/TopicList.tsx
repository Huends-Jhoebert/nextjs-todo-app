import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';




function TopicList() {

    return (
        <>
            <div>
                <h1>Number of topic{(todo.length) > 1 ? "s" : ""}: {todo.length}</h1>
            </div>

            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Title Name</h2>
                    <div>Description blablalba</div>
                </div>

                <div className="flex gap-2 items-center">
                    <DeleteIcon />
                    <Link href="">
                        <CreateIcon />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default TopicList