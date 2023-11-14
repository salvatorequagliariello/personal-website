import PageContainer from './components/PageContainer'
import './globals.css'

export const metadata = {
  title: 'Salvatore Quagliariello',
  description: 'Salvatore Quagliariello, Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className='bg-secondary text-primary dark:bg-primary dark:text-secondary'
      >
        <PageContainer>
          {children}
        </PageContainer>
      </body>
    </html>
  )
}
