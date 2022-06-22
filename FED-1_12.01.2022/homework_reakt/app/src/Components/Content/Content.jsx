import React from 'react'
import s from './Content.module.sass'
import imglink from '../Media/bike.png'
import ServiceBlock from '../ServiceBlock/ServiceBlock'

export default function Content() {
    const servicesList = [
        {
          title: 'Годовое ТО',
          bgcolor: '#22356F'
        },
        {
            title: 'Выравнивание колес',
            bgcolor: '#0052C1'
        },
        {
          title: 'Настройка переключателей',
          bgcolor: '#76B58B'
        }
      ]
  return (
    <div>
        <section className={s.descrblock}>
            <div className={s.descrtext}>
                <h2>Что мы предлагаем</h2>
                <p>
                    В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. 
                </p>
            </div>
            <div className={s.descrimg}>
                <img src={imglink} alt="" />
            </div>
        </section>
        <section className={s.textblock}>
            <div>
            Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
            </div>
        </section>
        <section className={s.services}>
        {
            servicesList.map(t => 
                <ServiceBlock serviceObject={t}/>
            )
        }
        </section>
    </div>
  )
}
