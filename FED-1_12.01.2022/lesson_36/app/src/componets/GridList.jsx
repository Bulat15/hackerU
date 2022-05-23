import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { products } from '../data/products'
import GridItems from './GridItems'

export default function GridList() {
    return (
        <Container sx={{mt:3}}>
            <Grid item container spacing={2}>
                {products.map(p => <GridItems key={p.id} {...p} />)}
            </Grid>

        </Container>
    )
}
