import { useCount } from "../contexts/CountContext";


export default function AboutPage() {
    const [data, setData] = useCount();

    function addProductToCart() {
        setData({ ...data, cartProducts: data.cartProducts + 1 });
    }

    return (
        <main className="container">
            <header>
                <h1 className="hero-title">
                    <span className="text-accent">Rick & Morty</span> #WDPT11
                </h1>
                <h3>
                    Counter: {data.cartProducts}
                </h3>
                <div>
                    <button
                        className="btn btn-large"
                        onClick={addProductToCart}
                    >
                        Aggiungi al carrello
                    </button>
                </div>
            </header>

            <article>
                <p className="hero-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas tristique orci ac sem. Duis ultricies pharetra magna.
                    Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus adipisci assumenda sunt odit natus. Deserunt esse enim voluptate vel corrupti iste aliquid a nesciunt ipsum quos non maiores, illum harum?
                </p>

                <p className="hero-subtitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse doloribus magni vero blanditiis cum nobis. Velit tenetur distinctio blanditiis, impedit voluptatem dolorem quas modi similique quae expedita illum rerum.
                    Accusantium, minus nihil nostrum impedit hic consequatur! Dolorem labore repellendus laborum quaerat fugit ducimus rem mollitia optio minima! Iste alias fugiat vitae, ducimus rem laudantium deserunt iusto magnam tempore odit.
                    Ut labore unde necessitatibus ex ratione minus non, et repellat alias aspernatur sunt veniam minima cum blanditiis neque optio nulla saepe vitae recusandae, est voluptate incidunt ea! A, vitae eos!
                </p>
            </article>
        </main>
    );
}