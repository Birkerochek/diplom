import { Award, Clock, Heart, Shield, TrendingUp, Users } from 'lucide-react';
export     const abilities = [
        {
            id: 1,
            title: 'Учет времени',
            description: 'Точный подсчёт волонтёрских часов с возможностью добавления активностей и мероприятий',
            icon: <Clock color='#007C4F'/>,
            bgColor: '#E5F2ED',
        },
        {
            id: 2,
            title: 'Управление командой',
            description: 'Инструменты для организаторов: регистрация мероприятий, управление волонтёрами',
            icon: <Users color='#009789'/>,
            bgColor: '#E5F5F3',
        },
        {
            id: 3,
            title: 'Сертификаты',
            description: 'Автоматическая генерация справок и сертификатов о волонтёрской деятельности в PDF',
            icon: <Award color='#009967'/>,
            bgColor: '#D1FAE5',
        },
        {
            id: 4,
            title: 'Аналитика',
            description: 'Подробные отчёты и статистика по активности волонтёров и мероприятиям',
            icon: <TrendingUp color='#1F5FF8'/>,
            bgColor: '#DBEAFE',
        },
        {
            id: 5,
            title: 'Типы активности',
            description: 'Широкий спектр категорий: образование, экология, социальная помощь, здравоохранение',
            icon: <Heart color='#9819F7'/>,
            bgColor: '#F3E8FE',
        },
        {
            id: 6,
            title: 'Учет времени',
            description: 'Точный подсчёт волонтёрских часов с возможностью добавления активностей и мероприятий',
            icon: <Shield color='#F34700'/>,
            bgColor: '#FFEDD5',
        },
    ]