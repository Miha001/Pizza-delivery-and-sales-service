import React from "react";

export default function Finish(props) {


  return (
    <div>
    <h2 className="infoPage">
      Спасибо , ваш заказ будет доставлен в течение { props.location.propsTime} минут.<br/><br/>

      Вам позвонят в течении 10 минут для уточнения данных заказа.
    </h2>


      

    </div>
   
  );
}
