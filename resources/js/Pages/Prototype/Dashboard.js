import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <title>Dashboard</title>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="manusia-setengah-salmon"
                            name={`Manusia Setengah Salmon ${i}`}
                            category="Comedy"
                            thumbnail="https://upload.wikimedia.org/wikipedia/id/4/43/Manusia_Setengah_Salmon_film.jpg"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOption}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                name={`Manusia Setengah Salmon ${i}`}
                                category="Comedy"
                                thumbnail="https://upload.wikimedia.org/wikipedia/id/4/43/Manusia_Setengah_Salmon_film.jpg"
                                slug="manusia-setengah-salmon"
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
