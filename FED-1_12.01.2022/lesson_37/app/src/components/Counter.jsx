import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { add, remove, sort } from '../store/Reducer';


export default function Counter() {

    const dispatch = useDispatch();
    const value = useSelector(state => state.value);

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                const input = e.target.product;
                dispatch(add(input.value));
                input.value = '';
            }}>
                <input name="product" />
                <button>Добавить</button>
            </form>

            <button onClick={() => { dispatch(sort())}}>Сортировать</button>
            {
                (value.length === 0) ? <p>Товаров нет</p> :
                 value.map(product => <p onDoubleClick={() => { dispatch(remove(product.id))}}
                  key={product.id}>{product.title}</p>)
            }
        </div>
    )
}
