import EditTopicForm from "@/components/EditTopicForm";

async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, description } = topic;
    return (
        <main className="max-w-screen-xl m-auto py-4">
            <EditTopicForm />
        </main>
    )
}

export default EditTopic