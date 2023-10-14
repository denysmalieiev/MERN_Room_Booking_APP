import React from "react"
import Cards from "./Cards"
import "./Gallery.css"
import GalleryData from "./GalleryData"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Navbar from "../../Common/Navbar/Navbar"
import Footer from "../../Common/footer/Footer"
const Gallery = () => {
  return (
    <>
    <Navbar />
      <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Cards imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Gallery
