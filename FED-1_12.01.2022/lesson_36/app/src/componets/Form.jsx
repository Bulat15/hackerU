import React from 'react'
import { TextField, Button } from '@mui/material'

export default function Form() {
    return (
            <form style={{ margin: '20px', display: 'flex', flexDirection: 'column' }}>
                <TextField label="Имя" variant="standard"></TextField>
                <TextField label="Фамилия" variant="standard"></TextField>
                <TextField label="Комментарий" variant="standard" multiline></TextField>
                {/* <TextField
                    select
                    label="Роль"
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Выберите роль"
                    variant='standart'
                >
                    {['Ученик','Учитель']}

                </TextField> */}
                <Button variant="outlined">Отправить</Button>
            </form>
    )
}
