// Card
import Card from "../components/Card"

const HomePage = () => {
    return (
        <>
            <h1 className="text-dark">Bool Movie</h1>

            <div className="row row-cols-3 mt-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>

    )
}

export default HomePage