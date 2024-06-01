import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

function layout({children}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout