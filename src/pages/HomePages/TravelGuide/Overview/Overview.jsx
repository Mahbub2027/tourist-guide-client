
const Overview = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto my-10">
            {/* <h2>Overview</h2> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/rDYdeq3JW_E?si=q_jQGSbx921vx-Sh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-end">
                <div className="lg:w-1/2 mx-auto">
                    {/* width="560" height="315" <video src="https://www.youtube.com/embed/rDYdeq3JW_E?si=q_jQGSbx921vx-Sh"></video> */}
                    <iframe className="w-[370px] h-[300px] md:w-full md:h-[315px]" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=hr77XPtE85-HJQWi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <p className="lg:w-1/2 mx-auto text-justify text-lg"><span className="text-3xl">O</span>ur InfiniteTour platform designed to enhance the travel experience for touris.
                    Tailored to meet the needs of modern travelers, the application seamlessly
                    integrates essential features for efficient trip planning and exploration. It
                    is not just a tool for travelers. It is a dynamic platform that evolves with
                    tourist needs and technological advancements. Its adaptability, tourist-centric features,
                    and revenue potential make it an invaluable asset for both tourists and tour-guide.
                </p>

            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-end items-center gap-10">
                <div className="lg:w-1/2 md:w-full mx-auto">
                    <p className=" text-left text-lg">* <span className="text-3xl">I</span>ntuitive design for easy navigation. <br /> * <span className="text-3xl">R</span>eal-time updates to keep users informed about the latest happenings. <br />
                        * <span className="text-3xl">I</span>nformation on accommodations and local transportation options. <br /> * <span className="text-3xl">S</span>ocial media sharing options for user-generated content.
                    </p>

                </div>
                <div className="lg:w-1/2 mx-auto">
                    <iframe className="w-[370px] md:w-full h-[315px]" src="https://www.youtube.com/embed/vcmvEzFOYVw?si=m4GmG15DE0cKJEgU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Overview;