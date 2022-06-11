import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './Pagination.css'

function AnimePagination({setPage, numberOfPages}) {

  const theme = createTheme({

    palette:{
      primary:{
        main: '#00ADB5',
        contrastText: '#EEEEEE'
      }
    },
    components:{
      MuiPaginationItem:{
        styleOverrides:{
          root:{
            color: '#EEEEEE',
            fontSize: '1.5rem',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            padding: '0.2rem',
          }
        }
      },
      MuiPagination:{
        styleOverrides:{
          root:{
            backgroundColor: '#393E46',
            borderRadius: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }
      }
    }
  })

  const handleChange = (page) => {
    setPage(page)
    window.scroll(0,0)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='pagination-bar'>
        <Stack spacing={2}>
          <Pagination onChange={(e) => handleChange(e.target.textContent)} count={numberOfPages} hidePrevButton hideNextButton color='primary' />
        </Stack>
      </div>
    </ThemeProvider>
  )
}

export default AnimePagination