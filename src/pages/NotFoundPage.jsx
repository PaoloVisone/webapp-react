import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (

        <section className="container">
            <div className="lost">
                {/* Gif */}
                <div className="tenor-gif-embed" data-postid="1288351512682894859" data-share-method="host" data-aspect-ratio="1.05769" data-width="30%"><a href="https://tenor.com/view/confused-gif-1288351512682894859">Confused Sticker</a>from <a href="https://tenor.com/search/confused-stickers">Confused Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

                <Link to="/" className="btn">
                    Go to Home
                </Link>
            </div>
        </section>

    )
}

export default NotFoundPage