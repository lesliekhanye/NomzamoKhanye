"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Project Gallery</h3>
        <p className="text-slate-600 dark:text-slate-300">
          Visual documentation of the {title} project including site analysis, design concepts, and implementation
          phases.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Card className="overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-slate-800 dark:text-white">
                      {index === 0 && "Site Analysis & Context"}
                      {index === 1 && "Design Concepts & Planning"}
                      {index === 2 && "Community Engagement"}
                      {index === 3 && "Infrastructure Development"}
                      {index === 4 && "Implementation Phase"}
                      {index === 5 && "Final Results & Impact"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={`${title} - Image ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={closeLightbox}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Navigation */}
              <Button
                variant="secondary"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectGallery
