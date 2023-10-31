import EditTodoForm from "../../components/EditTodoForm";


const getTodoById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3005/api/todo/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to edit");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTodoById(id);
    const { title, description } = topic;
    console.log(id)
    return (
        <main className="max-w-screen-xl m-auto py-4">
            <EditTodoForm id={id} title={title} description={description} />
        </main>
    )
}

export default EditTopic