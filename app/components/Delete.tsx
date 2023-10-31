"use client";

import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";


function Delete({ id }) {
    const router = useRouter();
    const removeTodo = async () => {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            const res = await fetch(`http://localhost:3005/api/todo?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeTodo} className="text-red-400">
            <DeleteIcon />
        </button>
    )
}

export default Delete