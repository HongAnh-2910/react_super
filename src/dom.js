import imagesCute from './images/images.png'
import pdfCute from './pdf/sample.pdf'

const domHandler = () => {
    console.log(imagesCute)
    console.log(pdfCute)
    document.body.style.backgroundImage = `url(${imagesCute})`
    const link = document.createElement('a')
    link.href = pdfCute
    link.textContent = 'Bitcoin Whitepaper'
    document.body.appendChild(link)
  }

  export default domHandler