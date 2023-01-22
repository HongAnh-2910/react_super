import imagesCute from './public/images/images.png';
import pdfData from './public/pdf/sample.pdf';

const domHandler = () => {
    console.log(imagesCute)
    document.body.style.backgroundImage = `url(${imagesCute})`
    let link = document.createElement('a')
    link.href = `${pdfData}`
    link.textContent ='Click'
    document.body.appendChild(link)
  }

  export default domHandler