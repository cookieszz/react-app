import React from 'react';
import '../info/styleInfo.css'

function Info(props) {
    return(
        <div className='info-text' id={props.id}>
           <h1>Резюме</h1>
            <hr/>
            <p><span>Имя: </span>Головко Максим;</p>
            <p><span>Должность: </span>Junior Javascript Developer;</p>
            <h3>Контакты:</h3>
            <p><span>Мобильный номер: </span>0958131809;</p>
            <p><span>Telegram:</span> @Cookieszz;</p>
            <p><span>Github:</span> https://github.com/cookieszz;</p>
            <h3>Навыки:</h3>
            <ul>
                <li>Javascript, есть небольшой опыт в Python;</li>
                <li>основы React;</li>
                <li>основы HTML, CSS;</li>
                <li>основы алгоритмов и структур данных;</li>
                <li>базовое понимание MySQL и MongoDB;</li>
                <li>уровень английского языка, Elementary;</li>
            </ul>
            <h3>Образование:</h3>
            <p><span>Университет:</span> ЦДПУ ім. В. Винниченка;</p>
            <p><span>Степень:</span> магистр;</p>
            <p><span>Специальность:</span> компьютерные науки;</p>
        </div>
    ); 
}

export default Info