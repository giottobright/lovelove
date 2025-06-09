'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [currentOnboardingStep, setCurrentOnboardingStep] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('onboarding');
    const [calendarView, setCalendarView] = useState('month');
    const [showFriendsEvents, setShowFriendsEvents] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [viewMode, setViewMode] = useState('couple'); // 'couple' or 'individual'

    useEffect(() => {
        setIsVisible(true);
        // Apply dark mode class to document
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const onboardingSteps = [
        {
            title: 'Добро пожаловать в CoupleSpace',
            subtitle: 'Создавайте воспоминания вместе',
            description: 'Планируйте свидания, делитесь моментами и развивайтесь как пара',
            icon: '💕',
            gradient: 'from-purple-400 via-pink-400 to-red-400',
        },
        {
            title: 'Ваше личное пространство',
            subtitle: 'Календари, фото, цели',
            description: 'Все важные моменты вашей совместной жизни в одном месте',
            icon: '🏠',
            gradient: 'from-blue-400 via-purple-400 to-pink-400',
        },
        {
            title: 'Знакомьтесь с другими парами',
            subtitle: 'Расширяйте круг общения',
            description: 'Находите единомышленников для совместных активностей',
            icon: '👫',
            gradient: 'from-green-400 via-blue-400 to-purple-400',
        },
    ];

    const recipes = [
        {
            name: 'Паста Карбонара',
            cuisine: 'Итальянская',
            mood: 'Романтик',
            time: '30 мин',
            difficulty: 3,
            image: '🍝',
            rating: 4.8,
        },
        {
            name: 'Суши роллы',
            cuisine: 'Японская',
            mood: 'Приключение',
            time: '45 мин',
            difficulty: 4,
            image: '🍣',
            rating: 4.6,
        },
        {
            name: 'Тирамису',
            cuisine: 'Итальянская',
            mood: 'Сладкий',
            time: '60 мин',
            difficulty: 2,
            image: '🍰',
            rating: 4.9,
        },
        {
            name: 'Том Ям',
            cuisine: 'Тайская',
            mood: 'Острый',
            time: '25 мин',
            difficulty: 3,
            image: '🍲',
            rating: 4.7,
        },
    ];

    const movies = [
        {
            title: 'Ла-Ла Ленд',
            genre: 'Мюзикл',
            year: '2016',
            poster: '🎭',
            rating: 4.8,
            watched: false,
        },
        {
            title: 'Начало',
            genre: 'Фантастика',
            year: '2010',
            poster: '🌀',
            rating: 4.9,
            watched: true,
        },
        {
            title: 'Касабланка',
            genre: 'Драма',
            year: '1942',
            poster: '🎬',
            rating: 4.7,
            watched: false,
        },
        {
            title: 'Аватар',
            genre: 'Фантастика',
            year: '2009',
            poster: '🌍',
            rating: 4.6,
            watched: true,
        },
        {
            title: 'Титаник',
            genre: 'Драма',
            year: '1997',
            poster: '🚢',
            rating: 4.5,
            watched: false,
        },
    ];

    const couples = [
        {
            names: 'Анна & Макс',
            age: '25-27',
            interests: ['Путешествия', 'Кино'],
            avatar: '👫',
            distance: '2 км',
            compatibility: 89,
        },
        {
            names: 'Лена & Саша',
            age: '28-30',
            interests: ['Кулинария', 'Спорт'],
            avatar: '👩‍❤️‍👨',
            distance: '5 км',
            compatibility: 76,
        },
        {
            names: 'Мария & Дима',
            age: '24-26',
            interests: ['Музыка', 'Искусство'],
            avatar: '💑',
            distance: '1.5 км',
            compatibility: 92,
        },
    ];

    const goals = [
        {
            name: 'Совместные тренировки',
            progress: 70,
            target: 10,
            current: 7,
            icon: '💪',
            color: 'from-green-400 to-blue-500',
        },
        {
            name: 'Новые рестораны',
            progress: 40,
            target: 15,
            current: 6,
            icon: '🍽️',
            color: 'from-yellow-400 to-orange-500',
        },
        {
            name: 'Путешествия',
            progress: 25,
            target: 4,
            current: 1,
            icon: '✈️',
            color: 'from-purple-400 to-pink-500',
        },
        {
            name: 'Фильмы вместе',
            progress: 85,
            target: 20,
            current: 17,
            icon: '🎬',
            color: 'from-blue-400 to-purple-500',
        },
    ];

    const wishlistItems = [
        {
            name: 'Поездка в Париж',
            price: '150,000 ₽',
            status: 'planned',
            category: 'Путешествия',
            image: '🗼',
        },
        {
            name: 'Новая камера',
            price: '45,000 ₽',
            status: 'saved',
            category: 'Техника',
            image: '📷',
        },
        { name: 'Курс танцев', price: '8,000 ₽', status: 'bought', category: 'Хобби', image: '💃' },
        {
            name: 'Романтический ужин',
            price: '5,000 ₽',
            status: 'wishlist',
            category: 'Развлечения',
            image: '🕯️',
        },
    ];

    const travels = [
        {
            name: 'Санкт-Петербург',
            date: '15-20 мая',
            status: 'planned',
            image: '🏛️',
            progress: 60,
        },
        { name: 'Сочи', date: '1-7 августа', status: 'booked', image: '🏖️', progress: 90 },
        { name: 'Казань', date: 'Сентябрь', status: 'idea', image: '🕌', progress: 20 },
    ];

    const renderOnboarding = () => (
        <div
            className={`min-h-screen flex flex-col items-center justify-center p-8 transition-all duration-700 ${
                isDarkMode
                    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
                    : 'bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100'
            }`}
            data-oid="7msdpv6"
        >
            <div className="w-full max-w-sm" data-oid="9ehe7e0">
                <div className="text-center mb-12" data-oid="_iur50g">
                    <div
                        className={`w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${onboardingSteps[currentOnboardingStep].gradient} flex items-center justify-center text-6xl shadow-2xl float-animation`}
                        data-oid="8psj_q_"
                    >
                        {onboardingSteps[currentOnboardingStep].icon}
                    </div>
                    <h1
                        className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid=".tsj7i9"
                    >
                        {onboardingSteps[currentOnboardingStep].title}
                    </h1>
                    <h2
                        className={`text-xl font-medium mb-6 ${isDarkMode ? 'text-purple-200' : 'text-purple-600'}`}
                        data-oid="m46c6dg"
                    >
                        {onboardingSteps[currentOnboardingStep].subtitle}
                    </h2>
                    <p
                        className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        data-oid="4.ffont"
                    >
                        {onboardingSteps[currentOnboardingStep].description}
                    </p>
                </div>

                <div className="flex justify-center mb-12" data-oid="22835gt">
                    {onboardingSteps.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full mx-1 transition-all duration-500 ${
                                index === currentOnboardingStep
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-8'
                                    : isDarkMode
                                      ? 'bg-gray-600 w-2'
                                      : 'bg-gray-300 w-2'
                            }`}
                            data-oid="fdj..20"
                        />
                    ))}
                </div>

                <div className="space-y-4" data-oid="bfd9z02">
                    <button
                        onClick={() => {
                            if (currentOnboardingStep < onboardingSteps.length - 1) {
                                setCurrentOnboardingStep(currentOnboardingStep + 1);
                            } else {
                                setActiveTab('dashboard');
                            }
                        }}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                        data-oid="cbt-y3p"
                    >
                        {currentOnboardingStep < onboardingSteps.length - 1
                            ? 'Далее'
                            : 'Начать путешествие'}
                    </button>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`w-full py-3 rounded-3xl font-medium transition-all duration-300 ${
                            isDarkMode
                                ? 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-600'
                                : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
                        } shadow-lg backdrop-blur-sm`}
                        data-oid="yktdv1d"
                    >
                        {isDarkMode ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
                    </button>

                    {currentOnboardingStep > 0 && (
                        <button
                            onClick={() => setCurrentOnboardingStep(currentOnboardingStep - 1)}
                            className={`w-full py-3 rounded-3xl font-medium transition-all duration-300 ${
                                isDarkMode
                                    ? 'text-gray-400 hover:text-gray-200'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                            data-oid="hpg2-k5"
                        >
                            ← Назад
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

    const renderDashboard = () => (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="i_6f28p"
        >
            <div className="max-w-sm mx-auto" data-oid="st.1-kx">
                <div className="flex justify-between items-center mb-8" data-oid="kmza977">
                    <h1
                        className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="1229_yh"
                    >
                        Привет, Анна! 👋
                    </h1>
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl"
                        data-oid="82o2ao0"
                    ></div>
                </div>

                <div className="space-y-6" data-oid="0i8pr7n">
                    {/* Ближайшее событие */}
                    <div
                        className={`p-6 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        data-oid="0c5wbhv"
                    >
                        <h3
                            className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                            data-oid="-0b-wh."
                        >
                            Ближайшее событие
                        </h3>
                        <div className="flex items-center space-x-4" data-oid="vfqj1l9">
                            <div className="text-2xl" data-oid="lxvdgij">
                                🍽️
                            </div>
                            <div data-oid="p25zpbs">
                                <p
                                    className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                    data-oid=".:27b0_"
                                >
                                    Ужин в ресторане
                                </p>
                                <p
                                    className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                    data-oid="6ybv255"
                                >
                                    Завтра, 19:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Последнее фото */}
                    <div
                        className={`p-6 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        data-oid="c5skipg"
                    >
                        <h3
                            className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                            data-oid="7ge8xnp"
                        >
                            Последнее фото
                        </h3>
                        <div
                            className="w-full h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center"
                            data-oid="x5xh7rk"
                        >
                            <span className="text-4xl" data-oid="n.9ml5f">
                                📸
                            </span>
                        </div>
                    </div>

                    {/* Прогресс целей */}
                    <div
                        className={`p-6 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                        data-oid="374.ycl"
                    >
                        <h3
                            className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                            data-oid="wf.4nyp"
                        >
                            Прогресс целей
                        </h3>
                        <div className="space-y-3" data-oid="aul3jum">
                            <div data-oid="veg7:iz">
                                <div className="flex justify-between mb-1" data-oid="-s3noa9">
                                    <span
                                        className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                        data-oid="klmljtm"
                                    >
                                        Совместные тренировки
                                    </span>
                                    <span
                                        className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                        data-oid="ytzad:v"
                                    >
                                        7/10
                                    </span>
                                </div>
                                <div
                                    className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                                    data-oid="puvm.lp"
                                >
                                    <div
                                        className="w-3/4 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                        data-oid="m:qi:h6"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCalendar = () => (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="2lk.82j"
        >
            <div className="max-w-sm mx-auto" data-oid="47ndrue">
                <div className="flex justify-between items-center mb-6" data-oid="z9gl58d">
                    <h1
                        className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="wd6f22b"
                    >
                        Календарь
                    </h1>
                    <button
                        className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white"
                        data-oid="rou_2uq"
                    >
                        +
                    </button>
                </div>

                <div className="flex space-x-4 mb-6" data-oid="rxyuo1p">
                    <button
                        onClick={() => setCalendarView('month')}
                        className={`px-4 py-2 rounded-2xl transition-all ${
                            calendarView === 'month'
                                ? 'bg-purple-500 text-white'
                                : isDarkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-white text-gray-600'
                        }`}
                        data-oid="1oz-cab"
                    >
                        Месяц
                    </button>
                    <button
                        onClick={() => setCalendarView('agenda')}
                        className={`px-4 py-2 rounded-2xl transition-all ${
                            calendarView === 'agenda'
                                ? 'bg-purple-500 text-white'
                                : isDarkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-white text-gray-600'
                        }`}
                        data-oid="36ymkmn"
                    >
                        Список
                    </button>
                </div>

                <div className="flex items-center justify-between mb-6" data-oid="tmk0p.d">
                    <span
                        className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        data-oid="wecmq.f"
                    >
                        События друзей
                    </span>
                    <button
                        onClick={() => setShowFriendsEvents(!showFriendsEvents)}
                        className={`w-12 h-6 rounded-full transition-all ${
                            showFriendsEvents
                                ? 'bg-purple-500'
                                : isDarkMode
                                  ? 'bg-gray-600'
                                  : 'bg-gray-300'
                        }`}
                        data-oid="-pwdaf7"
                    >
                        <div
                            className={`w-5 h-5 bg-white rounded-full transition-all ${
                                showFriendsEvents ? 'translate-x-6' : 'translate-x-0.5'
                            }`}
                            data-oid="wlau_3e"
                        ></div>
                    </button>
                </div>

                <div
                    className={`p-6 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    data-oid="vjfj69r"
                >
                    <div className="grid grid-cols-7 gap-2 mb-4" data-oid="5:kfifz">
                        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                            <div
                                key={day}
                                className={`text-center text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                data-oid="g1kegz-"
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2" data-oid="dtvgbsx">
                        {Array.from({ length: 35 }, (_, i) => (
                            <div
                                key={i}
                                className={`h-8 flex items-center justify-center text-sm rounded-xl ${
                                    i === 15
                                        ? 'bg-purple-500 text-white'
                                        : isDarkMode
                                          ? 'text-gray-300 hover:bg-gray-700'
                                          : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                data-oid="j02wwu9"
                            >
                                {i + 1 <= 31 ? i + 1 : ''}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPhotos = () => (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="r--xdam"
        >
            <div className="max-w-sm mx-auto" data-oid="wdxylt8">
                <div className="flex justify-between items-center mb-6" data-oid="h6sptz:">
                    <h1
                        className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="f:ulk0p"
                    >
                        Фотоальбом
                    </h1>
                    <button
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl text-sm"
                        data-oid="7.rtvk1"
                    >
                        AI Story
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4" data-oid="dw3xm0k">
                    {Array.from({ length: 6 }, (_, i) => (
                        <div
                            key={i}
                            className={`${i % 3 === 0 ? 'h-48' : 'h-32'} bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl flex items-center justify-center shadow-lg`}
                            data-oid="4g41k.4"
                        >
                            <span className="text-2xl" data-oid="q3n0_u.">
                                📷
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderRecipes = () => (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="6uyd_ss"
        >
            <div className="max-w-sm mx-auto" data-oid="n02we7j">
                <h1
                    className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    data-oid="k0qh:jw"
                >
                    Рецепты
                </h1>

                <div className="flex space-x-3 mb-6 overflow-x-auto" data-oid="zbjeq1x">
                    {['Все', 'Итальянская', 'Японская', 'Французская'].map((filter) => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-2xl whitespace-nowrap ${
                                filter === 'Все'
                                    ? 'bg-purple-500 text-white'
                                    : isDarkMode
                                      ? 'bg-gray-700 text-gray-300'
                                      : 'bg-white text-gray-600'
                            }`}
                            data-oid="_6-9286"
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="space-y-4" data-oid="4_mgn_i">
                    {recipes.map((recipe, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            data-oid="6sg:hms"
                        >
                            <div className="flex items-center space-x-4" data-oid="vbjv9xc">
                                <div className="text-3xl" data-oid="ew4yzhv">
                                    {recipe.image}
                                </div>
                                <div className="flex-1" data-oid="kczjqj8">
                                    <h3
                                        className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                        data-oid="h.xg5j0"
                                    >
                                        {recipe.name}
                                    </h3>
                                    <p
                                        className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                        data-oid="4n8p4.e"
                                    >
                                        {recipe.cuisine} • {recipe.time}
                                    </p>
                                    <div className="flex items-center mt-2" data-oid="afcgjh_">
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            defaultValue="3"
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                            data-oid="x7x7iq1"
                                        />

                                        <span
                                            className={`ml-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                            data-oid="pzk4q-x"
                                        >
                                            Сложность
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderMovies = () => (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="fsf7q87"
        >
            <div className="max-w-sm mx-auto" data-oid=":lz1.58">
                <h1
                    className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    data-oid="pvpnq.h"
                >
                    Фильмы и сериалы
                </h1>

                <div className="space-y-6" data-oid="mouyzpb">
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300 ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                            style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)` }}
                            data-oid="3j9-l66"
                        >
                            <div className="flex items-center space-x-4" data-oid="m3cmohe">
                                <div
                                    className="w-16 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl"
                                    data-oid="b6kz708"
                                >
                                    {movie.poster}
                                </div>
                                <div data-oid="8ahdydb">
                                    <h3
                                        className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                        data-oid="2vn83ct"
                                    >
                                        {movie.title}
                                    </h3>
                                    <p
                                        className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                        data-oid="j_558t2"
                                    >
                                        {movie.genre} • {movie.year}
                                    </p>
                                    <div className="flex mt-2" data-oid="5sx4348">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-400"
                                                data-oid="62oyl50"
                                            >
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderGoals = () => (
        <div
            className={`min-h-screen p-6 pb-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="k_no5tc"
        >
            <div className="max-w-sm mx-auto" data-oid="sg4uuh6">
                <div className="flex justify-between items-center mb-6" data-oid="07mxvdc">
                    <h1
                        className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="kmj3zek"
                    >
                        Наши цели
                    </h1>
                    <button
                        className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                        data-oid="bkx9kk0"
                    >
                        +
                    </button>
                </div>

                <div className="space-y-6" data-oid="2t4vxqs">
                    {goals.map((goal, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl shadow-lg card-hover ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            data-oid="y-vkvbo"
                        >
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="rfg7lbb"
                            >
                                <div className="flex items-center space-x-3" data-oid="1n_:3fe">
                                    <div
                                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${goal.color} flex items-center justify-center text-xl shadow-lg`}
                                        data-oid="vqkmr5n"
                                    >
                                        {goal.icon}
                                    </div>
                                    <div data-oid="9oe549m">
                                        <h3
                                            className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                            data-oid="wevvxaw"
                                        >
                                            {goal.name}
                                        </h3>
                                        <p
                                            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                            data-oid="u90_ii9"
                                        >
                                            {goal.current} из {goal.target}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right" data-oid="e9enf9c">
                                    <div
                                        className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                        data-oid="y542tsx"
                                    >
                                        {goal.progress}%
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`w-full h-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}
                                data-oid="rc45ia7"
                            >
                                <div
                                    className={`h-full bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 ease-out`}
                                    style={{ width: `${goal.progress}%` }}
                                    data-oid="979s00u"
                                />
                            </div>

                            {goal.progress >= 100 && (
                                <div
                                    className="mt-3 flex items-center justify-center"
                                    data-oid="jojrhps"
                                >
                                    <span
                                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                                        data-oid="t5024-i"
                                    >
                                        🎉 Цель достигнута!
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderWishlist = () => (
        <div
            className={`min-h-screen p-6 pb-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="hm_2zyy"
        >
            <div className="max-w-sm mx-auto" data-oid="0a_9h77">
                <div className="flex justify-between items-center mb-6" data-oid="7u_..wd">
                    <h1
                        className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="2ou-yx:"
                    >
                        Список желаний
                    </h1>
                    <button
                        className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                        data-oid="wgtkj0t"
                    >
                        +
                    </button>
                </div>

                <div className="flex space-x-3 mb-6 overflow-x-auto" data-oid="4:.ijx0">
                    {['Все', 'Путешествия', 'Техника', 'Хобби', 'Развлечения'].map((filter) => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-2xl whitespace-nowrap transition-all ${
                                filter === 'Все'
                                    ? 'bg-purple-500 text-white shadow-lg'
                                    : isDarkMode
                                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                      : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                            }`}
                            data-oid="u-n51kf"
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="space-y-4" data-oid="8cxr27y">
                    {wishlistItems.map((item, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl shadow-lg card-hover ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            data-oid="rj7d_tm"
                        >
                            <div className="flex items-center space-x-4" data-oid="9_epheh">
                                <div className="text-3xl" data-oid="5mr0idg">
                                    {item.image}
                                </div>
                                <div className="flex-1" data-oid="gj3_yli">
                                    <div
                                        className="flex items-center justify-between mb-2"
                                        data-oid="r35qw-e"
                                    >
                                        <h3
                                            className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                            data-oid="rt01x2a"
                                        >
                                            {item.name}
                                        </h3>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                item.status === 'bought'
                                                    ? 'bg-green-100 text-green-800'
                                                    : item.status === 'planned'
                                                      ? 'bg-blue-100 text-blue-800'
                                                      : item.status === 'saved'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-gray-100 text-gray-800'
                                            }`}
                                            data-oid="rubf9gb"
                                        >
                                            {item.status === 'bought'
                                                ? 'Куплено'
                                                : item.status === 'planned'
                                                  ? 'Запланировано'
                                                  : item.status === 'saved'
                                                    ? 'Накоплено'
                                                    : 'Хочу'}
                                        </span>
                                    </div>
                                    <p
                                        className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}
                                        data-oid="szz21d0"
                                    >
                                        {item.category}
                                    </p>
                                    <div
                                        className="flex items-center justify-between"
                                        data-oid="5ek86lq"
                                    >
                                        <span
                                            className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                            data-oid="5ezm-9x"
                                        >
                                            {item.price}
                                        </span>
                                        {item.status !== 'bought' && (
                                            <button
                                                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl text-sm font-medium shadow-lg hover:shadow-xl transition-all"
                                                data-oid="b._2.1:"
                                            >
                                                {item.status === 'saved' ? 'Купить' : 'Накопить'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderTravels = () => (
        <div
            className={`min-h-screen p-6 pb-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="12qckpo"
        >
            <div className="max-w-sm mx-auto" data-oid="97azq5t">
                <div className="flex justify-between items-center mb-6" data-oid="k0a7dy:">
                    <h1
                        className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="qtnjhyv"
                    >
                        Путешествия
                    </h1>
                    <button
                        className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                        data-oid="nc1:4_-"
                    >
                        +
                    </button>
                </div>

                {/* Interactive Map Placeholder */}
                <div
                    className={`h-48 rounded-3xl mb-6 shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                    data-oid="ip25o43"
                >
                    <div
                        className="w-full h-full bg-gradient-to-br from-blue-400 via-green-400 to-blue-500 flex items-center justify-center relative"
                        data-oid="1gl3wyj"
                    >
                        <div className="text-white text-center" data-oid="wtyp8y2">
                            <div className="text-4xl mb-2" data-oid=".z0ra05">
                                🗺️
                            </div>
                            <p className="font-medium" data-oid="b44dw0h">
                                Интерактивная карта
                            </p>
                            <p className="text-sm opacity-80" data-oid="v4f2uco">
                                Ваши путешествия
                            </p>
                        </div>
                        {/* Map pins */}
                        <div
                            className="absolute top-4 left-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"
                            data-oid="fjkiqf0"
                        ></div>
                        <div
                            className="absolute bottom-8 right-12 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                            data-oid="2rhq0t:"
                        ></div>
                        <div
                            className="absolute top-12 right-6 w-3 h-3 bg-green-500 rounded-full animate-pulse"
                            data-oid=".ma4n0g"
                        ></div>
                    </div>
                </div>

                <div className="space-y-4" data-oid="a62e12.">
                    {travels.map((travel, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl shadow-lg card-hover ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            data-oid="b58nyjm"
                        >
                            <div className="flex items-center space-x-4 mb-4" data-oid="ksc_47t">
                                <div className="text-3xl" data-oid="uy0c3-i">
                                    {travel.image}
                                </div>
                                <div className="flex-1" data-oid="yit1xwu">
                                    <h3
                                        className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                        data-oid="qy:_3en"
                                    >
                                        {travel.name}
                                    </h3>
                                    <p
                                        className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                        data-oid="nd99axh"
                                    >
                                        {travel.date}
                                    </p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        travel.status === 'booked'
                                            ? 'bg-green-100 text-green-800'
                                            : travel.status === 'planned'
                                              ? 'bg-blue-100 text-blue-800'
                                              : 'bg-gray-100 text-gray-800'
                                    }`}
                                    data-oid="gtetpzq"
                                >
                                    {travel.status === 'booked'
                                        ? 'Забронировано'
                                        : travel.status === 'planned'
                                          ? 'Запланировано'
                                          : 'Идея'}
                                </span>
                            </div>

                            <div className="mb-3" data-oid="atajd8q">
                                <div
                                    className="flex justify-between text-sm mb-1"
                                    data-oid="p912vmv"
                                >
                                    <span
                                        className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                                        data-oid="yltrugs"
                                    >
                                        Подготовка
                                    </span>
                                    <span
                                        className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                                        data-oid="xsy91-i"
                                    >
                                        {travel.progress}%
                                    </span>
                                </div>
                                <div
                                    className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                                    data-oid="zbyo:rw"
                                >
                                    <div
                                        className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000"
                                        style={{ width: `${travel.progress}%` }}
                                        data-oid="gqtuu9j"
                                    />
                                </div>
                            </div>

                            <button
                                className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all"
                                data-oid="2sk1vr1"
                            >
                                Открыть чек-лист
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderConnect = () => (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="5db.ldt"
        >
            <div className="max-w-sm mx-auto" data-oid=":v9ya7c">
                <h1
                    className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    data-oid="fnkxdm."
                >
                    Знакомства с парами
                </h1>

                <div className="space-y-4" data-oid="-h0fyxl">
                    {couples.map((couple, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                            data-oid="-1oh2kj"
                        >
                            <div className="flex items-center space-x-4 mb-4" data-oid="3lxl8rd">
                                <div className="text-3xl" data-oid="_6n8tos">
                                    {couple.avatar}
                                </div>
                                <div data-oid="54g7-a4">
                                    <h3
                                        className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                        data-oid="b::xvjj"
                                    >
                                        {couple.names}
                                    </h3>
                                    <p
                                        className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                                        data-oid="joxo_mt"
                                    >
                                        {couple.age} лет
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4" data-oid="w67-ln7">
                                {couple.interests.map((interest, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1 rounded-full text-xs ${
                                            isDarkMode
                                                ? 'bg-gray-700 text-gray-300'
                                                : 'bg-purple-100 text-purple-600'
                                        }`}
                                        data-oid="-tjw9ko"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-3" data-oid="d:..2cd">
                                <button
                                    className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-medium"
                                    data-oid="wo4-vtg"
                                >
                                    💕 Лайк
                                </button>
                                <button
                                    className={`flex-1 py-3 rounded-2xl font-medium ${
                                        isDarkMode
                                            ? 'bg-gray-700 text-gray-300'
                                            : 'bg-gray-200 text-gray-600'
                                    }`}
                                    data-oid="_.njw_h"
                                >
                                    👋 Пропустить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    if (activeTab === 'onboarding') {
        return renderOnboarding();
    }

    return (
        <div
            className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="vf6rif0"
        >
            {activeTab === 'onboarding' && renderOnboarding()}
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'calendar' && renderCalendar()}
            {activeTab === 'photos' && renderPhotos()}
            {activeTab === 'recipes' && renderRecipes()}
            {activeTab === 'movies' && renderMovies()}
            {activeTab === 'goals' && renderGoals()}
            {activeTab === 'wishlist' && renderWishlist()}
            {activeTab === 'travels' && renderTravels()}
            {activeTab === 'connect' && renderConnect()}

            {/* Mode Switcher */}
            {activeTab !== 'onboarding' && (
                <div className="fixed top-4 right-4 z-50" data-oid="0m5uj91">
                    <div
                        className={`flex items-center space-x-2 px-3 py-2 rounded-2xl shadow-lg backdrop-blur-sm ${
                            isDarkMode
                                ? 'bg-gray-800/80 border border-gray-600'
                                : 'bg-white/80 border border-gray-200'
                        }`}
                        data-oid=".1-l99:"
                    >
                        <button
                            onClick={() => setViewMode('individual')}
                            className={`px-3 py-1 rounded-xl text-sm font-medium transition-all ${
                                viewMode === 'individual'
                                    ? 'bg-purple-500 text-white shadow-md'
                                    : isDarkMode
                                      ? 'text-gray-300 hover:text-white'
                                      : 'text-gray-600 hover:text-gray-800'
                            }`}
                            data-oid="2rcjzog"
                        >
                            Я
                        </button>
                        <button
                            onClick={() => setViewMode('couple')}
                            className={`px-3 py-1 rounded-xl text-sm font-medium transition-all ${
                                viewMode === 'couple'
                                    ? 'bg-purple-500 text-white shadow-md'
                                    : isDarkMode
                                      ? 'text-gray-300 hover:text-white'
                                      : 'text-gray-600 hover:text-gray-800'
                            }`}
                            data-oid="0jx52-5"
                        >
                            Мы
                        </button>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <div
                className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-2xl`}
                data-oid="jn5nil-"
            >
                <div className="flex justify-around py-3" data-oid="sm77ize">
                    {[
                        { id: 'dashboard', icon: '🏠', label: 'Главная' },
                        { id: 'calendar', icon: '📅', label: 'Календарь' },
                        { id: 'photos', icon: '📸', label: 'Фото' },
                        { id: 'recipes', icon: '🍳', label: 'Рецепты' },
                        { id: 'movies', icon: '🎬', label: 'Фильмы' },
                        { id: 'goals', icon: '🎯', label: 'Цели' },
                        { id: 'wishlist', icon: '💝', label: 'Желания' },
                        { id: 'travels', icon: '✈️', label: 'Поездки' },
                        { id: 'connect', icon: '💑', label: 'Пары' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center py-2 px-1 transition-all duration-300 transform ${
                                activeTab === tab.id
                                    ? 'text-purple-500 scale-110 -translate-y-1'
                                    : isDarkMode
                                      ? 'text-gray-400 hover:text-gray-200'
                                      : 'text-gray-500 hover:text-gray-700'
                            }`}
                            data-oid="bagr:9s"
                        >
                            <div
                                className={`p-2 rounded-2xl transition-all ${
                                    activeTab === tab.id
                                        ? 'bg-purple-100 dark:bg-purple-900/50'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                                data-oid="ndlckx7"
                            >
                                <span className="text-lg" data-oid="2d4xd6r">
                                    {tab.icon}
                                </span>
                            </div>
                            <span className="text-xs mt-1 font-medium" data-oid="lftp0cp">
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
