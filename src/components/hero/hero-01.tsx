'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

// 카드에 표시될 임시 데이터
const cardData = [
    {
        id: 1,
        category: 'Category',
        title: 'Create Beautiful Websites',
        imgUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        category: 'Professionals',
        title: 'Made for Professionals',
        imgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    },
    {
        id: 3,
        category: 'Features',
        title: 'Advanced Features',
        imgUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 4,
        category: 'Design',
        title: 'Modern UI/UX Design',
        imgUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop',
    },
    {
        id: 5,
        category: 'Testimonial',
        title: 'Trusted by Thousands',
        imgUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop',
    },
];

// 슬라이더에 들어갈 개별 카드 컴포넌트
const Card = ({ category, title, imgUrl }: { category: string; title: string; imgUrl: string }) => (
    <motion.div
        className="pointer-events-auto mr-6 w-80 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-800"
        whileHover={{
            scale: 1.05,
            translateZ: 20,
            zIndex: 10,
            transition: { duration: 0.2 },
        }}
        transition={{ duration: 0.2 }}
        style={{ zIndex: 1 }}
    >
        <div className="relative h-40 w-full">
            <img src={imgUrl} alt={title} className="h-full w-full object-cover" />
            <div className="absolute left-3 top-3 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm dark:bg-slate-900/70 dark:text-white">
                {category}
            </div>
        </div>
        <div className="p-4">
            <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
        </div>
    </motion.div>
);

// 무한 슬라이더 컴포넌트
const InfiniteSlider = () => {
    const duplicatedData = [...cardData, ...cardData];
    const sliderRef = useRef<HTMLDivElement>(null);
    const [animationWidth, setAnimationWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            const scrollWidth = sliderRef.current.scrollWidth;
            const widthOfOneSet = scrollWidth / 2;
            setAnimationWidth(widthOfOneSet);
        }
    }, []);

    const animationProps: TargetAndTransition =
        animationWidth > 0
            ? {
                  x: [0, -animationWidth],
                  transition: {
                      ease: 'linear',
                      duration: 30,
                      repeat: Infinity,
                  },
              }
            : {};

    return (
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div ref={sliderRef} className="flex" animate={animationProps}>
                {duplicatedData.map((card, index) => (
                    <Card key={`${card.id}-${index}`} {...card} />
                ))}
            </motion.div>
        </div>
    );
};

export default function Hero01() {
    return (
        <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            {/* 3D Perspective Wrapper */}
            <div className="pointer-events-none absolute top-0 left-0 z-0 w-full [transform-style:preserve-3d]">
                <div className="opacity-80 [transform:perspective(1600px)_rotateX(50deg)_scale(0.8)_translateY(550px)] sm:[transform:perspective(1600px)_rotateX(40deg)_scale(0.8)_translateY(650px)]">
                    <InfiniteSlider />
                </div>
            </div>

            {/* 기존 콘텐츠 */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                        Build amazing experiences with modern design
                    </h1>
                    <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg sm:mt-6 leading-8">
                        Create beautiful, responsive websites with our collection of carefully crafted components. Start
                        building your next project today.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-x-6 sm:mt-10">
                        <button className="cursor-pointer rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:px-6 sm:py-3 sm:text-sm transition-colors duration-800 ease-in-out">
                            Get started
                        </button>
                        <button className="cursor-pointer text-xs font-semibold leading-6 text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-slate-200 sm:text-sm transition-colors duration-800 ease-in-out">
                            Learn more <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 스크롤을 만들기 위한 보이지 않는 공간 확보용 div */}
            <div aria-hidden="true" className="h-[240px] sm:h-[300px]" />
        </div>
    );
}
