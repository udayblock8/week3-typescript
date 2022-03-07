import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import * as React from 'react'


export default function logo()
{
    return (
        <Toolbar>
            <Box sx={{  width: 24,
                        height:24,
                        lineHeight: '24px',
                        borderRadius: 50,
                        backgroundColor: '#5A67BA',
                        color: '#fff',
                        textAlign: 'center',
                        marginLeft:'15px',
                        fontSize: 11,
                        fontWeight: 700
                    }}>G</Box>
            <Typography component="h6" sx={{   fontSize: 11,
                            fontWeight: 700,
                            lineHeight: '24px',
                            color: '#5A67BA',
                            marginLeft: '8px',
                            textTransform: 'uppercase'
                        }}>Goodfood</Typography>
        </Toolbar>
    )
}
