'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import workImage1 from './work_01.jpg';
import workImage2 from './work_02.jpg';
import workImage3 from './work_03.jpg';
import arrowTopRightBlack from './arrow-topright-black.svg';
import arrowTopRightWhite from './arrow-topright-white.svg';

// ============================================================================
// MARK: - Data
// ============================================================================

const workItems = [
    {
        id: 1,
        number: '01.',
        title: 'Arjuna',
        description: 'Personal Portfolio Website for talented design engineer.',
        image: workImage1,
    },
    {
        id: 2,
        number: '02.',
        title: 'Bima',
        description: 'Website and branding for AI Automation Company.',
        image: workImage2,
    },
    {
        id: 3,
        number: '03.',
        title: 'Mandala',
        description: 'Website and branding for Design Agency.',
        image: workImage3,
    },
];

// ============================================================================
// MARK: - Component
// ============================================================================

export default function Content01() {
    // ============================================================================
    // MARK: - State & Refs Management
    // ============================================================================

    // 현재 활성화된 작업 아이템 관련 상태
    const [activeWorkId, setActiveWorkId] = useState(workItems[0].id);
    const activeIndex = workItems.findIndex((item) => item.id === activeWorkId);

    // DOM 요소 참조를 위한 Refs
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    // 이미지 마스킹 효과를 위한 상태
    const [insets, setInsets] = useState<{ [key: string]: string }>({});

    // 커스텀 커서 효과를 위한 상태
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);

    // ============================================================================
    // MARK: - Event Handlers
    // ============================================================================

    // 스크롤 시 이미지 마스킹(inset) 값을 계산하는 함수
    const handleScroll = useCallback(() => {
        if (!scrollContainerRef.current) return;
        const viewportHeight = window.innerHeight;
        const newInsets: { [key: string]: string } = {};
        imageRefs.current.forEach((ref) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                const id = ref.getAttribute('data-id');
                if (!id) return;
                const imageCenter = rect.top + rect.height / 2;
                const viewportCenter = viewportHeight / 2;
                const distanceFromCenter = Math.abs(viewportCenter - imageCenter);
                const insetAmount = Math.min(10, (distanceFromCenter / viewportCenter) * 10);
                newInsets[id] = `${insetAmount}%`;
            }
        });
        setInsets(newInsets);
    }, []);

    // 마우스 이동 시 커서 위치 및 보이는 영역을 계산하는 함수
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const currentInsetStr = insets[String(id)] || '15%';
        const insetPercent = parseFloat(currentInsetStr);
        const insetX = rect.width * (insetPercent / 100);
        const insetY = rect.height * (insetPercent / 100);

        const isInsideVisibleArea =
            mouseX >= insetX && mouseX <= rect.width - insetX && mouseY >= insetY && mouseY <= rect.height - insetY;

        if (isInsideVisibleArea) {
            setCursorPosition({ x: e.clientX, y: e.clientY });
            setHoveredImageId(id);
        } else {
            setHoveredImageId(null);
        }
    };

    // ============================================================================
    // MARK: - Side Effects (Lifecycle)
    // ============================================================================

    useEffect(() => {
        const scrollDiv = scrollContainerRef.current;

        // Intersection Observer: 이미지 중앙 감지 후 텍스트 변경 트리거
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = Number(entry.target.getAttribute('data-id'));
                        setActiveWorkId(id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        );

        imageRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // 스크롤 이벤트 리스너 등록
        if (scrollDiv) {
            scrollDiv.addEventListener('scroll', handleScroll);
            handleScroll(); // 초기 로드 시 실행
        }

        // 컴포넌트 언마운트 시 리스너 및 옵저버 정리
        return () => {
            imageRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
            if (scrollDiv) scrollDiv.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // ============================================================================
    // MARK: - Render (JSX)
    // ============================================================================

    return (
        <div
            ref={scrollContainerRef}
            className={`w-full h-screen overflow-y-auto bg-white dark:bg-slate-950 ${
                hoveredImageId !== null ? 'cursor-none' : ''
            }`}
        >
            {/* --- Custom Cursor Element --- */}
            <div
                className={`
                    fixed top-0 left-0 bg-white dark:bg-slate-900 border border-slate-900 dark:border-white
                    text-slate-900 dark:text-white text-sm font-bold tracking-wider
                    flex items-center justify-center pointer-events-none 
                    transition-opacity duration-300 ease-out
                    rounded-full
                    z-50
                    ${hoveredImageId !== null ? 'py-2 px-3 opacity-100' : 'opacity-0'}
                `}
                style={{
                    transform: `translate(-50%, -50%) translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                }}
            >
                VIEW PROJECT
                <span className="pl-1">
                    <Image src={arrowTopRightBlack} alt={'Arrow Icon'} width={24} height={24} className="dark:hidden" />
                    <Image
                        src={arrowTopRightWhite}
                        alt={'Arrow Icon'}
                        width={24}
                        height={24}
                        className="hidden dark:block"
                    />
                </span>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* --- Header Section --- */}
                <div className="max-w-2xl text-left pt-24 pb-8 md:pb-12 lg:text-center lg:mx-auto">
                    <h1 className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-8xl md:text-7xl">
                        LATEST WORK
                    </h1>
                </div>

                {/* --- Main Grid (Desktop) Layout --- */}
                <div className="hidden lg:grid mx-auto max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {' '}
                    {/* --- Left Sticky Column --- */}
                    <div className="lg:col-span-1 lg:sticky lg:top-0 lg:h-screen lg:py-16 flex flex-col justify-between">
                        {/* Top Text Group */}
                        <div className="space-y-8 sm:space-y-12">
                            <div className="h-[90px] md:h-[120px] overflow-hidden">
                                <div
                                    className="transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateY(-${activeIndex * (100 / workItems.length)}%)` }}
                                >
                                    {workItems.map((item) => (
                                        <div key={item.id} className="h-[90px] md:h-[120px]">
                                            <h2 className="text-8xl md:text-9xl font-extrabold text-slate-300 dark:text-slate-700 leading-none">
                                                {item.number}
                                            </h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                                {workItems.map((item) => (
                                    <p
                                        key={item.id}
                                        className={`transition-all duration-500 ease-in-out ${
                                            activeWorkId === item.id
                                                ? 'text-base text-slate-900 dark:text-white font-bold'
                                                : ''
                                        }`}
                                    >
                                        {item.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {/* Bottom Text Group */}
                        <div className="mt-16 lg:mt-0">
                            <div className="h-[60px] md:h-[80px] overflow-hidden">
                                <div
                                    className="transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateY(-${activeIndex * (100 / workItems.length)}%)` }}
                                >
                                    {workItems.map((item) => (
                                        <div key={item.id} className="h-[60px] md:h-[80px]">
                                            <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-[120px] md:h-[80px] mt-4 overflow-hidden">
                                <div
                                    className="transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateY(-${activeIndex * (100 / workItems.length)}%)` }}
                                >
                                    {workItems.map((item) => (
                                        <div key={item.id} className="h-[120px] md:h-[80px]">
                                            <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --- Right Scrolling Column --- */}
                    <div className="lg:col-span-2 flex flex-col gap-y-8 py-24">
                        {workItems.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => {
                                    imageRefs.current[index] = el;
                                }}
                                data-id={item.id}
                                className="relative"
                                onMouseMove={(e) => handleMouseMove(e, item.id)}
                                onMouseLeave={() => setHoveredImageId(null)}
                            >
                                <div
                                    className="transition-[clip-path] duration-1000 ease-in-out"
                                    style={{ clipPath: `inset(${insets[item.id] || '15%'} round 1rem)` }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`Showcase of ${item.title}.`}
                                        width={1024}
                                        height={768}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* --- Mobile Layout --- */}
                <div className="lg:hidden my-16 space-y-16">
                    {workItems.map((item) => (
                        <div key={item.id} className="cursor-pointer">
                            {/* 1. 이미지 */}
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt={`Showcase of ${item.title}.`}
                                    width={1024}
                                    height={768}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>
                            {/* 2. 설명 */}
                            <div className="mt-8">
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
