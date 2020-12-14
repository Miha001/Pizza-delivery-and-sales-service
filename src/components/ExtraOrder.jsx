import React from 'react'
import style from '../css/style.css'

function ExtraOrder() {
    return (
        <div>
            <br/>
            <h2>Или введите адрес вручную</h2>
            <br/>
<label className="label">Введите название улицы</label>
            <br/>

            <select id="street"> 
                <option value="0">Выберите свою улицу</option>
                <option value="30">ул. Циолковского</option>
                <option value="30">ул. Гагарина</option>
                <option value="60">ул. Генерала Попова</option>
            </select>
            <br/>
         
            <br/>
            <label className="label">Номер дома</label>
            <br/>
            <input id="house" type="text" name="house"></input>
            <br/>
            <label className="label">Номер квартиры</label>
            <br/>
            <input id="room"type="text" name="room"></input>
        </div>
    )
}

export default ExtraOrder
