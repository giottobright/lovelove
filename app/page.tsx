'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [currentOnboardingStep, setCurrentOnboardingStep] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [calendarView, setCalendarView] = useState('month');
    const [showFriendsEvents, setShowFriendsEvents] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const onboardingSteps = [
        {
            title: 'Добро пожаловать в CoupleSpace',
            subtitle: 'Создавайте воспоминания вместе',
            description: 'Планируйте свидания, делитесь моментами и развивайтесь как пара',
        },
        {
            title: 'Ваше личное пространство',
            subtitle: 'Календари, фото, цели',
            description: 'Все важные моменты вашей совместной жизни в одном месте',
        },
        {
            title: 'Знакомьтесь с другими парами',
            subtitle: 'Расширяйте круг общения',
            description: 'Находите единомышленников для совместных активностей',
        },
    ];

    const recipes = [
        {
            name: 'Паста Карбонара',
            cuisine: 'Итальянская',
            mood: 'Романтик',
            time: '30 мин',
            image: '🍝',
        },
        {
            name: 'Суши роллы',
            cuisine: 'Японская',
            mood: 'Приключение',
            time: '45 мин',
            image: '🍣',
        },
        { name: 'Тирамису', cuisine: 'Итальянская', mood: 'Сладкий', time: '60 мин', image: '🍰' },
    ];

    const movies = [
        { title: 'Ла-Ла Ленд', genre: 'Мюзикл', year: '2016', poster: '🎭' },
        { title: 'Начало', genre: 'Фантастика', year: '2010', poster: '🌀' },
        { title: 'Касабланка', genre: 'Драма', year: '1942', poster: '🎬' },
    ];

    const couples = [
        { names: 'Анна & Макс', age: '25-27', interests: ['Путешествия', 'Кино'], avatar: '👫' },
        { names: 'Лена & Саша', age: '28-30', interests: ['Кулинария', 'Спорт'], avatar: '👩‍❤️‍👨' },
        { names: 'Мария & Дима', age: '24-26', interests: ['Музыка', 'Искусство'], avatar: '💑' },
    ];

    const renderOnboarding = () => (
        <div
            className={`min-h-screen flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                isDarkMode
                    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
                    : 'bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100'
            }`}
            data-oid="9ol5i95"
        >
            <div className="w-full max-w-sm" data-oid="gnwvwd8">
                <div className="text-center mb-12" data-oid="bmvhvrr">
                    <div className="text-6xl mb-6" data-oid="w8k.uml">
                        💕
                    </div>
                    <h1
                        className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        data-oid="zt938p:"
                    >
                        {onboardingSteps[currentOnboardingStep].title}
                    </h1>
                    <h2
                        className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-600'}`}
                        data-oid="17bzt6n"
                    >
                        {onboardingSteps[currentOnboardingStep].subtitle}
                    </h2>
                    <p
                        className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        data-oid="x4nhcv0"
                    >
                        {onboardingSteps[currentOnboardingStep].description}
                    </p>
                </div>

                <div className="flex justify-center mb-8" data-oid="hq1177j">
                    {onboardingSteps.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                                index === currentOnboardingStep
                                    ? 'bg-purple-500 w-6'
                                    : isDarkMode
                                      ? 'bg-gray-600'
                                      : 'bg-gray-300'
                            }`}
                            data-oid="1:y5rvx"
                        />
                    ))}
                </div>

                <div className="space-y-4" data-oid="utfs5ax">
                    <button
                        onClick={() => {
                            if (currentOnboardingStep < onboardingSteps.length - 1) {
                                setCurrentOnboardingStep(currentOnboardingStep + 1);
                            } else {
                                setActiveTab('dashboard');
                            }
                        }}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        data-oid="0r00uz9"
                    >
                        {currentOnboardingStep < onboardingSteps.length - 1 ? 'Далее' : 'Начать'}
                    </button>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`w-full py-3 rounded-3xl font-medium transition-all duration-300 ${
                            isDarkMode
                                ? 'bg-gray-700 text-white hover:bg-gray-600'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                        } shadow-md`}
                        data-oid="nzluapu"
                    >
                        {isDarkMode ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
                    </button>
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
            className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
            data-oid="4zen.rw"
        >
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'calendar' && renderCalendar()}
            {activeTab === 'photos' && renderPhotos()}
            {activeTab === 'recipes' && renderRecipes()}
            {activeTab === 'movies' && renderMovies()}
            {activeTab === 'connect' && renderConnect()}

            {/* Bottom Navigation */}
            <div
                className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
                data-oid="fake93z"
            >
                <div className="flex justify-around py-2" data-oid="kn8rgfb">
                    {[
                        { id: 'onboarding', icon: '👋', label: 'Старт' },
                        { id: 'dashboard', icon: '🏠', label: 'Главная' },
                        { id: 'calendar', icon: '📅', label: 'Календарь' },
                        { id: 'photos', icon: '📸', label: 'Фото' },
                        { id: 'recipes', icon: '🍳', label: 'Рецепты' },
                        { id: 'movies', icon: '🎬', label: 'Фильмы' },
                        { id: 'connect', icon: '💑', label: 'Пары' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center py-2 px-1 transition-all duration-200 ${
                                activeTab === tab.id
                                    ? 'text-purple-500'
                                    : isDarkMode
                                      ? 'text-gray-400'
                                      : 'text-gray-500'
                            }`}
                            data-oid="f0_e3_e"
                        >
                            <span className="text-lg mb-1" data-oid="saotce0">
                                {tab.icon}
                            </span>
                            <span className="text-xs" data-oid="3l04qzk">
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
