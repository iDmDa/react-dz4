import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>О нас</h1>
            <p>Информация о сайте</p>
            <Link to="/">Вернуться на Главную</Link>
        </div>
    );
};

export default AboutPage;