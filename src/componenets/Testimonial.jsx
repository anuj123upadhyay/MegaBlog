import { useEffect, useState } from 'react';

const Testimonial = () => {
    const [active, setActive] = useState(3);
    const items = [
        {
            img: "https://i.pravatar.cc/250?u=user1@megablog.com",
            stars: "★★★★★",
            text: "Megablog is a fantastic platform for both beginners and seasoned bloggers alike. The intuitive layout and extensive customization options make it easy to create a unique and engaging blog. I've seen my audience grow significantly since joining!",
            name: "- Aditi Verma",
            jobTitle: "Lifestyle Blogger",
            location: "Location: Jaipur, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=user2@megablog.com",
            stars: "★★★★★",
            text: "Joining Megablog has been a game-changer! The community is supportive, and the tools available for SEO and audience engagement are unparalleled. I’m thrilled with how my content has been received, and I feel more inspired than ever to keep writing!",
            name: "- Manish Reddy",
            jobTitle: "Travel Blogger",
            location: "Location: Hyderabad, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=user3@megablog.com",
            stars: "★★★★",
            text: "Megablog offers everything I need to grow my blog. From its clean design to the seamless integration of images and multimedia, it's perfect for bloggers who want to focus on content without worrying about technical details. Highly recommend!",
            name: "- Priya Nair",
            jobTitle: "Food Blogger",
            location: "Location: Kochi, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=user4@megablog.com",
            stars: "★★★★★",
            text: "The tools on Megablog are exactly what I needed to elevate my blog. The analytics and SEO features have helped me understand my audience better, and the design options have given my blog a professional edge. I can’t recommend it enough!",
            name: "- Ravi Singh",
            jobTitle: "Tech Blogger",
            location: "Location: Bengaluru, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=user5@megablog.com",
            stars: "★★★★",
            text: "Megablog’s platform has given my blog the boost it needed. It’s incredibly user-friendly, and the variety of templates allowed me to choose the perfect look for my content. The platform has made my blogging journey smooth and enjoyable!",
            name: "- Sneha Patel",
            jobTitle: "Fashion Blogger",
            location: "Location: Mumbai, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=user6@megablog.com",
            stars: "★★★★★",
            text: "Megablog has exceeded my expectations. The writing tools are fantastic, and I love how easy it is to schedule posts and track engagement. It’s helped me reach more people and connect with readers who genuinely enjoy my content.",
            name: "- Arjun Malhotra",
            jobTitle: "Health & Wellness Blogger",
            location: "Location: Pune, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=user7@megablog.com",
            stars: "★★★★★",
            text: "The experience on Megablog has been nothing short of amazing. It’s simple, yet powerful, and the community aspect has allowed me to engage with fellow bloggers and readers. I feel truly supported on my blogging journey!",
            name: "- Kavya Joshi",
            jobTitle: "Parenting Blogger",
            location: "Location: Lucknow, India"
        }
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % items.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [items.length]);

    useEffect(() => {
        loadShow();
    }, [active]);

    const loadShow = () => {
        const itemsElement = document.querySelectorAll('.slider .item');
        itemsElement[active].style.transform = `none`;
        itemsElement[active].style.zIndex = 1;
        itemsElement[active].style.filter = 'none';
        itemsElement[active].style.opacity = 1;
        // Show after
        let stt = 0;
        for (let i = active + 1; i < itemsElement.length; i++) {
            stt++;
            itemsElement[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            itemsElement[i].style.zIndex = 0;
            itemsElement[i].style.filter = 'blur(5px)';
            itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (let i = (active - 1); i >= 0; i--) {
            stt++;
            itemsElement[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            itemsElement[i].style.zIndex = 0;
            itemsElement[i].style.filter = 'blur(5px)';
            itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    };

    return (
        <div>


            <div className="slider" style={{ position: 'relative', marginTop: '100px', width: '100%', height: '550px', overflow: 'hidden' }}>
                {items.map((item, index) => (
                    <div className="item max-sm:!w-[300px] max-sm:!h-[430px]" key={index} style={{
                        position: 'absolute',
                        width: '350px',
                        height: '500px',
                        textAlign: 'justify',
                        background: '#fff', // Dark green to light yellow gradient
                        borderRadius: '12px',
                        padding: '20px',
                        transition: '0.5s',
                        left: 'calc(50% - 150px)',
                        top: '0',
                        marginBottom: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                        overflow: 'hidden', // Ensures the image does not overflow
                        color: 'white',
                    }}>
                        <img
                            src={item.img}
                            alt="User Avatar"
                            className='w-[150px] h-[150px] rounded-lg object-cover mb-[20px] cursor-pointer max-sm:h-[120px] mb-0'
                            style={{
                                transition: 'transform 0.3s ease, filter 0.3s ease',
                                border: '3px solid #d0e7b0' // Green border for the image
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'brightness(1.1)'; // Brightness effect on hover
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
                            }}
                        />
                        <div className="stars text-[#ffd700] text-2xl mt-auto max-sm:mt-2">{item.stars}</div>
                        <p className='text-justify mb-[20px] max-sm:text-xs max-sm:mb-0 text-gray-700'>{item.text}</p>
                        <h2 className='mb-[10px] text-xl font-semibold max-sm:mb-1 max-sm:text-lg text-gray-900'>{item.name}</h2>
                        <div className="job-title text-[#4f46e5] font-bold mb-[5px]">{item.jobTitle}</div>
                        <div className="location text-gray-800 mb-[15px] max-sm:mb-1">{item.location}</div>
                    </div>


                ))}

                <button id="next" className=' absolute top-[40%] text-[#4f46e5] hover:text-[#3933a4] bg-none border-none text-6xl font-mono font-bold opacity-80 transition-opacity z-10 right-[50px] max-sm:text-white max-sm:text-2xl max-sm:right-2' onClick={() => setActive(prev => (prev + 1 < items.length ? prev + 1 : prev))}>{">>"}</button>
                <button id="prev" className=' absolute top-[40%] text-[#4f46e5] hover:text-[#3933a4] bg-none border-none text-6xl font-mono font-bold opacity-80 transition-opacity z-10 left-[50px] max-sm:text-white max-sm:text-2xl max-sm:left-2' onClick={() => setActive(prev => (prev - 1 >= 0 ? prev - 1 : prev))}> {"<<"}</button>
            </div>
        </div>
    );
};

export default Testimonial;
