import { ThemeProvider } from '@emotion/react'
import { ExampleForm } from './form/example.form'
import { CssBaseline, createTheme } from '@mui/material'
import { useThemeStore } from './store/use.theme.store'

function App() {
  const { mode, primaryColor } = useThemeStore()

  return (
    <div className='mx-auto p-5 md:p-16'>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiCard: {
              styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  fontSize: '1rem',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }
              }
            }
          },
          typography: {
            button: {
              textTransform: 'none'
            }
          },
          shape: {
            borderRadius: 5
          },

          palette: {
            mode,
            primary: {
              main: primaryColor
            }
          }
        })}
      >
        <CssBaseline />
        <ExampleForm />
      </ThemeProvider>
    </div>
  )
}

export default App
