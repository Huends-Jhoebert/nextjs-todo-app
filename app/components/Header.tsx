import Link from 'next/link'

function Header() {
    return (
        <nav className="flex justify-between items-center bg-green-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>
                To_do List.
            </Link>
            <Link className="bg-white p-2" href={"/addTopic"}>
                Add Topic
            </Link>
        </nav>
    )
}

export default Header