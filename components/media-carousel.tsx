"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

type MediaFile = {
  type: "image" | "video"
  src: string
  name?: string
}

export default function MediaCarousel() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentMedia = mediaFiles[currentIndex]
  const isVideo = currentMedia?.type === "video"

  useEffect(() => {
    // const loadFiles = async () => {
    //   try {
    //     console.log("[v0] Iniciando fetch a /api/media-files")
    //     const response = await fetch("/api/media-files")

    //     console.log("[v0] Response status:", response.status)
    //     console.log("[v0] Response ok:", response.ok)

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`)
    //     }

    //     const files = await response.json()
    //     console.log("[v0] Files recibidos:", files.length)

    //     if (files && files.length > 0) {
    //       setMediaFiles(files)
    //     }
    //   } catch (error) {
    //     console.error("[v0] Error al cargar archivos:", error)
    //     setMediaFiles([
    //       // { type: "image", src: "/media/dog-1.jpg", name: "dog-1.jpg" },
    //       // { type: "image", src: "/media/dog-2.jpeg", name: "dog-2.jpeg" },
    //       // { type: "image", src: "/media/dog-3.jpeg", name: "dog-3.jpeg" },
    //       // { type: "image", src: "/media/dog-4.jpeg", name: "dog-4.jpeg" },
    //       // { type: "image", src: "/media/dog-5.jpeg", name: "dog-5.jpeg" },
    //       // { type: "image", src: "/media/dog-6.jpeg", name: "dog-6.jpeg" },
    //       // { type: "image", src: "/media/dog-7.jpeg", name: "dog-7.jpeg" },
    //       // { type: "image", src: "/media/dog-8.jpeg", name: "dog-8.jpeg" },
    //       // { type: "image", src: "/media/dog-9.jpeg", name: "dog-9.jpeg" },

          
    //     ])
    //   } finally {
    //     setIsLoading(false)
    //   }
    // }
       const loadFiles = async () => {
      try {
        console.log("[v0] Iniciando fetch a /api/media-files")
        const response = await fetch("/api/media-files")

        console.log("[v0] Response status:", response.status)
        console.log("[v0] Response ok:", response.ok)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const files = await response.json()
        console.log("[v0] Files recibidos:", files.length)

        if (files && files.length > 0) {
          setMediaFiles(files)
        }
      } catch (error) {
        console.error("[v0] Error al cargar archivos:", error)
        setMediaFiles([
          // {type "image", src: "/media/dog-1.jpg", name: "dog-1.jpg" },
          // {ype"image", src: "/media/dog-2.jpeg", name: "dog-2.jpeg" },
          // {pe"iage", src: "/media/dog-3.jpeg", name: "dog-3.jpeg" },
          // {pe"iage", src: "/media/dog-4.jpeg", name: "dog-4.jpeg" },
          // {pe"iage", src: "/media/dog-5.jpeg", name: "dog-5.jpeg" },
          // {pe"iage", src: "/media/dog-6.jpeg", name: "dog-6.jpeg" },
          // {pe"iage", src: "/media/dog-7.jpeg", name: "dog-7.jpeg" },
          // {pe"iage", src: "/media/dog-8.jpeg", name: "dog-8.jpeg" },
          // {pe"iage", src: "/media/dog-9.jpeg", name: "dg-9jpeg },


  {
    type: "image",
    src: "/media/.trashed-1766529565-IMG-20231225-WA0001.jpg",
    name: ".trashed-1766529565-IMG-20231225-WA0001.jpg"
  },
  {
    type: "video",
    src: "/media/0715-01_1721047151832.mp4",
    name: "0715-01_1721047151832.mp4"
  },
  {
    type: "image",
    src: "/media/7297411e32c1836a9ecdcae3b259a169.jpg",
    name: "7297411e32c1836a9ecdcae3b259a169.jpg"
  },
  {
    type: "image",
    src: "/media/ac093b91-a5a3-4c0a-808c-c91e6163dd22.jpg",
    name: "ac093b91-a5a3-4c0a-808c-c91e6163dd22.jpg"
  },
  {
    type: "image",
    src: "/media/e9fb1fdf072a0cc710670e4d1abb3b22.jpg",
    name: "e9fb1fdf072a0cc710670e4d1abb3b22.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230323-WA0014.jpg",
    name: "IMG-20230323-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230425-WA0004.jpg",
    name: "IMG-20230425-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230623-WA0033.jpg",
    name: "IMG-20230623-WA0033.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230623-WA0034.jpg",
    name: "IMG-20230623-WA0034.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230809-WA0002.jpg",
    name: "IMG-20230809-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230809-WA0003.jpg",
    name: "IMG-20230809-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230809-WA0004.jpg",
    name: "IMG-20230809-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230809-WA0005.jpg",
    name: "IMG-20230809-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230815-WA0001.jpg",
    name: "IMG-20230815-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0000.jpg",
    name: "IMG-20230820-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0001.jpg",
    name: "IMG-20230820-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0002.jpg",
    name: "IMG-20230820-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0003.jpg",
    name: "IMG-20230820-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0004.jpg",
    name: "IMG-20230820-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0005.jpg",
    name: "IMG-20230820-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230820-WA0006.jpg",
    name: "IMG-20230820-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230916-WA0003.jpg",
    name: "IMG-20230916-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230918-WA0000.jpg",
    name: "IMG-20230918-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230918-WA0002.jpg",
    name: "IMG-20230918-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230918-WA0003.jpg",
    name: "IMG-20230918-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0000.jpg",
    name: "IMG-20230924-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0003.jpg",
    name: "IMG-20230924-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0005.jpg",
    name: "IMG-20230924-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0006.jpg",
    name: "IMG-20230924-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0008.jpg",
    name: "IMG-20230924-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0010.jpg",
    name: "IMG-20230924-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0011.jpg",
    name: "IMG-20230924-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0013.jpg",
    name: "IMG-20230924-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0017.jpg",
    name: "IMG-20230924-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230924-WA0018.jpg",
    name: "IMG-20230924-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0000.jpg",
    name: "IMG-20230930-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0001.jpg",
    name: "IMG-20230930-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0002.jpg",
    name: "IMG-20230930-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0003.jpg",
    name: "IMG-20230930-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0004.jpg",
    name: "IMG-20230930-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0005.jpg",
    name: "IMG-20230930-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0006.jpg",
    name: "IMG-20230930-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0007.jpg",
    name: "IMG-20230930-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0008.jpg",
    name: "IMG-20230930-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0009.jpg",
    name: "IMG-20230930-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0010.jpg",
    name: "IMG-20230930-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20230930-WA0011.jpg",
    name: "IMG-20230930-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0009.jpg",
    name: "IMG-20231005-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0010.jpg",
    name: "IMG-20231005-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0011.jpg",
    name: "IMG-20231005-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0012.jpg",
    name: "IMG-20231005-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0013.jpg",
    name: "IMG-20231005-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0014.jpg",
    name: "IMG-20231005-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0015.jpg",
    name: "IMG-20231005-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0016.jpg",
    name: "IMG-20231005-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0017.jpg",
    name: "IMG-20231005-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0018.jpg",
    name: "IMG-20231005-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0019.jpg",
    name: "IMG-20231005-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0020.jpg",
    name: "IMG-20231005-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231005-WA0021.jpg",
    name: "IMG-20231005-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231008-WA0000.jpg",
    name: "IMG-20231008-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231011-WA0006.jpg",
    name: "IMG-20231011-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231011-WA0009.jpg",
    name: "IMG-20231011-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231012-WA0003.jpg",
    name: "IMG-20231012-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231015-WA0000.jpg",
    name: "IMG-20231015-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231015-WA0000_1.jpg",
    name: "IMG-20231015-WA0000_1.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231015-WA0001.jpg",
    name: "IMG-20231015-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231015-WA0004.jpg",
    name: "IMG-20231015-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231015-WA0005.jpg",
    name: "IMG-20231015-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231015-WA0006.jpg",
    name: "IMG-20231015-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231021-WA0005.jpg",
    name: "IMG-20231021-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231021-WA0006.jpg",
    name: "IMG-20231021-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231021-WA0007.jpg",
    name: "IMG-20231021-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231021-WA0008.jpg",
    name: "IMG-20231021-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231021-WA0009.jpg",
    name: "IMG-20231021-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231021-WA0010.jpg",
    name: "IMG-20231021-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231030-WA0000.jpg",
    name: "IMG-20231030-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231030-WA0001.jpg",
    name: "IMG-20231030-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231030-WA0003.jpg",
    name: "IMG-20231030-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231030-WA0004.jpg",
    name: "IMG-20231030-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231030-WA0005.jpg",
    name: "IMG-20231030-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231030-WA0006.jpg",
    name: "IMG-20231030-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231031-WA0008.jpg",
    name: "IMG-20231031-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231105-WA0001.jpg",
    name: "IMG-20231105-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231105-WA0002.jpg",
    name: "IMG-20231105-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231105-WA0003.jpg",
    name: "IMG-20231105-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231106-WA0004.jpg",
    name: "IMG-20231106-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231106-WA0005.jpg",
    name: "IMG-20231106-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231110-WA0007.jpg",
    name: "IMG-20231110-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231110-WA0008.jpg",
    name: "IMG-20231110-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231110-WA0009.jpg",
    name: "IMG-20231110-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231110-WA0010.jpg",
    name: "IMG-20231110-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231110-WA0011.jpg",
    name: "IMG-20231110-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231110-WA0012.jpg",
    name: "IMG-20231110-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0006.jpg",
    name: "IMG-20231113-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0008.jpg",
    name: "IMG-20231113-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0010.jpg",
    name: "IMG-20231113-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0012.jpg",
    name: "IMG-20231113-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0013.jpeg",
    name: "IMG-20231113-WA0013.jpeg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0015.jpg",
    name: "IMG-20231113-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0017.jpg",
    name: "IMG-20231113-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0019.jpeg",
    name: "IMG-20231113-WA0019.jpeg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0021.jpg",
    name: "IMG-20231113-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0023.jpg",
    name: "IMG-20231113-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0025.jpg",
    name: "IMG-20231113-WA0025.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0027.jpg",
    name: "IMG-20231113-WA0027.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0029.jpg",
    name: "IMG-20231113-WA0029.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231113-WA0031.jpg",
    name: "IMG-20231113-WA0031.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231115-WA0033.jpg",
    name: "IMG-20231115-WA0033.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231115-WA0034.jpg",
    name: "IMG-20231115-WA0034.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231115-WA0035.jpg",
    name: "IMG-20231115-WA0035.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231115-WA0036.jpg",
    name: "IMG-20231115-WA0036.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231115-WA0037.jpg",
    name: "IMG-20231115-WA0037.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231125-WA0015.jpg",
    name: "IMG-20231125-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231125-WA0016.jpg",
    name: "IMG-20231125-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231125-WA0017.jpg",
    name: "IMG-20231125-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231125-WA0018.jpg",
    name: "IMG-20231125-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231125-WA0019.jpg",
    name: "IMG-20231125-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231127-WA0006.jpg",
    name: "IMG-20231127-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231127-WA0007.jpg",
    name: "IMG-20231127-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231127-WA0008.jpg",
    name: "IMG-20231127-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231127-WA0009.jpg",
    name: "IMG-20231127-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231127-WA0010.jpg",
    name: "IMG-20231127-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231204-WA0019.jpg",
    name: "IMG-20231204-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231204-WA0020.jpg",
    name: "IMG-20231204-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231204-WA0021.jpg",
    name: "IMG-20231204-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231204-WA0022.jpg",
    name: "IMG-20231204-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231204-WA0023.jpg",
    name: "IMG-20231204-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231204-WA0024.jpg",
    name: "IMG-20231204-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231208-WA0019.jpg",
    name: "IMG-20231208-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231208-WA0020.jpg",
    name: "IMG-20231208-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231208-WA0021.jpg",
    name: "IMG-20231208-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231208-WA0022.jpg",
    name: "IMG-20231208-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231208-WA0023.jpg",
    name: "IMG-20231208-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231208-WA0024.jpg",
    name: "IMG-20231208-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0002.jpg",
    name: "IMG-20231209-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0028.jpg",
    name: "IMG-20231209-WA0028.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0029.jpg",
    name: "IMG-20231209-WA0029.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0030.jpg",
    name: "IMG-20231209-WA0030.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0031.jpg",
    name: "IMG-20231209-WA0031.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0032.jpg",
    name: "IMG-20231209-WA0032.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231209-WA0034.jpg",
    name: "IMG-20231209-WA0034.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231210-WA0019.jpg",
    name: "IMG-20231210-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231210-WA0021.jpg",
    name: "IMG-20231210-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231210-WA0022.jpg",
    name: "IMG-20231210-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231224-WA0000.jpg",
    name: "IMG-20231224-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231224-WA0001.jpg",
    name: "IMG-20231224-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231224-WA0002.jpg",
    name: "IMG-20231224-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231224-WA0003.jpg",
    name: "IMG-20231224-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231224-WA0004.jpg",
    name: "IMG-20231224-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231225-WA0000.jpg",
    name: "IMG-20231225-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231225-WA0002.jpg",
    name: "IMG-20231225-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231225-WA0004.jpg",
    name: "IMG-20231225-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231225-WA0005.jpg",
    name: "IMG-20231225-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231228-WA0000.jpg",
    name: "IMG-20231228-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231228-WA0001.jpg",
    name: "IMG-20231228-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231228-WA0002.jpg",
    name: "IMG-20231228-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231228-WA0003.jpg",
    name: "IMG-20231228-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20231228-WA0004.jpg",
    name: "IMG-20231228-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240104-WA0004.jpg",
    name: "IMG-20240104-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240104-WA0005.jpg",
    name: "IMG-20240104-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240104-WA0006.jpg",
    name: "IMG-20240104-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240104-WA0007.jpg",
    name: "IMG-20240104-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240105-WA0000.jpg",
    name: "IMG-20240105-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240105-WA0001.jpg",
    name: "IMG-20240105-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240105-WA0003.jpg",
    name: "IMG-20240105-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240105-WA0004.jpg",
    name: "IMG-20240105-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240107-WA0007.jpg",
    name: "IMG-20240107-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240107-WA0013.jpg",
    name: "IMG-20240107-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240108-WA0015.jpg",
    name: "IMG-20240108-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240108-WA0016.jpg",
    name: "IMG-20240108-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240108-WA0017.jpg",
    name: "IMG-20240108-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240108-WA0018.jpg",
    name: "IMG-20240108-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240108-WA0019.jpg",
    name: "IMG-20240108-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240108-WA0020.jpg",
    name: "IMG-20240108-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240109-WA0000.jpg",
    name: "IMG-20240109-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240109-WA0003.jpg",
    name: "IMG-20240109-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240109-WA0004.jpg",
    name: "IMG-20240109-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240109-WA0006.jpg",
    name: "IMG-20240109-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240109-WA0007.jpg",
    name: "IMG-20240109-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240109-WA0010.jpg",
    name: "IMG-20240109-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240112-WA0005.jpg",
    name: "IMG-20240112-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240112-WA0008.jpg",
    name: "IMG-20240112-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240113-WA0001.jpg",
    name: "IMG-20240113-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240116-WA0005.jpg",
    name: "IMG-20240116-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240116-WA0006.jpg",
    name: "IMG-20240116-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240116-WA0007.jpg",
    name: "IMG-20240116-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240116-WA0008.jpg",
    name: "IMG-20240116-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240120-WA0000.jpg",
    name: "IMG-20240120-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240120-WA0001.jpg",
    name: "IMG-20240120-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240120-WA0002.jpg",
    name: "IMG-20240120-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240120-WA0003.jpg",
    name: "IMG-20240120-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240120-WA0004.jpg",
    name: "IMG-20240120-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240121-WA0003.jpg",
    name: "IMG-20240121-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240121-WA0017.jpg",
    name: "IMG-20240121-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240122-WA0001.jpg",
    name: "IMG-20240122-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240122-WA0015.jpg",
    name: "IMG-20240122-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240122-WA0016.jpg",
    name: "IMG-20240122-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240122-WA0017.jpg",
    name: "IMG-20240122-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240122-WA0018.jpg",
    name: "IMG-20240122-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240125-WA0001.jpg",
    name: "IMG-20240125-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240125-WA0002.jpg",
    name: "IMG-20240125-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240125-WA0003.jpg",
    name: "IMG-20240125-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240125-WA0019.jpg",
    name: "IMG-20240125-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240126-WA0020.jpg",
    name: "IMG-20240126-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240128-WA0003.jpg",
    name: "IMG-20240128-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240128-WA0004.jpg",
    name: "IMG-20240128-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240130-WA0000.jpg",
    name: "IMG-20240130-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240130-WA0001.jpg",
    name: "IMG-20240130-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240130-WA0002.jpg",
    name: "IMG-20240130-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240131-WA0062.jpg",
    name: "IMG-20240131-WA0062.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240201-WA0056.jpg",
    name: "IMG-20240201-WA0056.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240201-WA0057.jpg",
    name: "IMG-20240201-WA0057.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240201-WA0058.jpg",
    name: "IMG-20240201-WA0058.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240202-WA0060.jpg",
    name: "IMG-20240202-WA0060.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240202-WA0061.jpg",
    name: "IMG-20240202-WA0061.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240202-WA0062.jpg",
    name: "IMG-20240202-WA0062.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240204-WA0003.jpg",
    name: "IMG-20240204-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240204-WA0004.jpg",
    name: "IMG-20240204-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240204-WA0005.jpg",
    name: "IMG-20240204-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240205-WA0011.jpg",
    name: "IMG-20240205-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240205-WA0012.jpg",
    name: "IMG-20240205-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240211-WA0001.jpg",
    name: "IMG-20240211-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240212-WA0002.jpg",
    name: "IMG-20240212-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240212-WA0003.jpg",
    name: "IMG-20240212-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240212-WA0004.jpg",
    name: "IMG-20240212-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240212-WA0005.jpg",
    name: "IMG-20240212-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240212-WA0006.jpg",
    name: "IMG-20240212-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240215-WA0000.jpg",
    name: "IMG-20240215-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240215-WA0001.jpg",
    name: "IMG-20240215-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240215-WA0002.jpg",
    name: "IMG-20240215-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240215-WA0003.jpg",
    name: "IMG-20240215-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240215-WA0004.jpg",
    name: "IMG-20240215-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240216-WA0010.jpg",
    name: "IMG-20240216-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240216-WA0011.jpg",
    name: "IMG-20240216-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240216-WA0012.jpg",
    name: "IMG-20240216-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240216-WA0013.jpg",
    name: "IMG-20240216-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240216-WA0014.jpg",
    name: "IMG-20240216-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240217-WA0000.jpg",
    name: "IMG-20240217-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240219-WA0018.jpg",
    name: "IMG-20240219-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240219-WA0019.jpg",
    name: "IMG-20240219-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240219-WA0020.jpg",
    name: "IMG-20240219-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240219-WA0021.jpg",
    name: "IMG-20240219-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240225-WA0002.jpg",
    name: "IMG-20240225-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240225-WA0003.jpg",
    name: "IMG-20240225-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240225-WA0004.jpg",
    name: "IMG-20240225-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240225-WA0005.jpg",
    name: "IMG-20240225-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240225-WA0006.jpg",
    name: "IMG-20240225-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240227-WA0012.jpg",
    name: "IMG-20240227-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240227-WA0014.jpg",
    name: "IMG-20240227-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240227-WA0015.jpg",
    name: "IMG-20240227-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240306-WA0002.jpg",
    name: "IMG-20240306-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240306-WA0003.jpg",
    name: "IMG-20240306-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240306-WA0004.jpg",
    name: "IMG-20240306-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240306-WA0005.jpg",
    name: "IMG-20240306-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240313-WA0006.jpg",
    name: "IMG-20240313-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240313-WA0007.jpg",
    name: "IMG-20240313-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240313-WA0008.jpg",
    name: "IMG-20240313-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240313-WA0009.jpg",
    name: "IMG-20240313-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240313-WA0010.jpg",
    name: "IMG-20240313-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240315-WA0002.jpg",
    name: "IMG-20240315-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240315-WA0003.jpg",
    name: "IMG-20240315-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240315-WA0004.jpg",
    name: "IMG-20240315-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240315-WA0005.jpg",
    name: "IMG-20240315-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240315-WA0006.jpg",
    name: "IMG-20240315-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240315-WA0007.jpg",
    name: "IMG-20240315-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240322-WA0003.jpg",
    name: "IMG-20240322-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240322-WA0004.jpg",
    name: "IMG-20240322-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240322-WA0005.jpg",
    name: "IMG-20240322-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240322-WA0006.jpg",
    name: "IMG-20240322-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240324-WA0001.jpg",
    name: "IMG-20240324-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240324-WA0003.jpg",
    name: "IMG-20240324-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240324-WA0004.jpg",
    name: "IMG-20240324-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240324-WA0005.jpg",
    name: "IMG-20240324-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0001.jpg",
    name: "IMG-20240331-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0002.jpg",
    name: "IMG-20240331-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0003.jpg",
    name: "IMG-20240331-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0004.jpg",
    name: "IMG-20240331-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0006.jpg",
    name: "IMG-20240331-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0008.jpg",
    name: "IMG-20240331-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240331-WA0009.jpg",
    name: "IMG-20240331-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240404-WA0000.jpg",
    name: "IMG-20240404-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240404-WA0001.jpg",
    name: "IMG-20240404-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240404-WA0002.jpg",
    name: "IMG-20240404-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240404-WA0003.jpg",
    name: "IMG-20240404-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240404-WA0004.jpg",
    name: "IMG-20240404-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0000.jpg",
    name: "IMG-20240416-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0001.jpg",
    name: "IMG-20240416-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0002.jpg",
    name: "IMG-20240416-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0003.jpg",
    name: "IMG-20240416-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0004.jpg",
    name: "IMG-20240416-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0005.jpg",
    name: "IMG-20240416-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0006.jpg",
    name: "IMG-20240416-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0007.jpg",
    name: "IMG-20240416-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0008.jpg",
    name: "IMG-20240416-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0009.jpg",
    name: "IMG-20240416-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240416-WA0010.jpg",
    name: "IMG-20240416-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240420-WA0010.jpg",
    name: "IMG-20240420-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240420-WA0011.jpg",
    name: "IMG-20240420-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240420-WA0012.jpg",
    name: "IMG-20240420-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240420-WA0013.jpg",
    name: "IMG-20240420-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240420-WA0014.jpg",
    name: "IMG-20240420-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240422-WA0000.jpg",
    name: "IMG-20240422-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240422-WA0001.jpg",
    name: "IMG-20240422-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240422-WA0002.jpg",
    name: "IMG-20240422-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240422-WA0003.jpg",
    name: "IMG-20240422-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240501-WA0005.jpg",
    name: "IMG-20240501-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240501-WA0006.jpg",
    name: "IMG-20240501-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240501-WA0007.jpg",
    name: "IMG-20240501-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240501-WA0008.jpg",
    name: "IMG-20240501-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240501-WA0009.jpg",
    name: "IMG-20240501-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0000.jpg",
    name: "IMG-20240504-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0004.jpg",
    name: "IMG-20240504-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0005.jpg",
    name: "IMG-20240504-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0006.jpg",
    name: "IMG-20240504-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0007.jpg",
    name: "IMG-20240504-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0008.jpg",
    name: "IMG-20240504-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0009.jpg",
    name: "IMG-20240504-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240504-WA0010.jpg",
    name: "IMG-20240504-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240508-WA0001.jpg",
    name: "IMG-20240508-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240508-WA0002.jpg",
    name: "IMG-20240508-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240508-WA0003.jpg",
    name: "IMG-20240508-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240508-WA0004.jpg",
    name: "IMG-20240508-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240512-WA0008.jpg",
    name: "IMG-20240512-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240512-WA0009.jpg",
    name: "IMG-20240512-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240512-WA0010.jpg",
    name: "IMG-20240512-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240512-WA0011.jpg",
    name: "IMG-20240512-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240512-WA0012.jpg",
    name: "IMG-20240512-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240516-WA0021.jpg",
    name: "IMG-20240516-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240516-WA0022.jpg",
    name: "IMG-20240516-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240516-WA0023.jpg",
    name: "IMG-20240516-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240516-WA0024.jpg",
    name: "IMG-20240516-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240516-WA0025.jpg",
    name: "IMG-20240516-WA0025.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0013.jpg",
    name: "IMG-20240520-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0014.jpg",
    name: "IMG-20240520-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0015.jpg",
    name: "IMG-20240520-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0016.jpg",
    name: "IMG-20240520-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0017.jpg",
    name: "IMG-20240520-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0018.jpg",
    name: "IMG-20240520-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240520-WA0019.jpg",
    name: "IMG-20240520-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0013.jpg",
    name: "IMG-20240525-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0014.jpg",
    name: "IMG-20240525-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0015.jpg",
    name: "IMG-20240525-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0016.jpg",
    name: "IMG-20240525-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0017.jpg",
    name: "IMG-20240525-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0018.jpg",
    name: "IMG-20240525-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240525-WA0019.jpg",
    name: "IMG-20240525-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0000.jpg",
    name: "IMG-20240528-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0001.jpg",
    name: "IMG-20240528-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0002.jpg",
    name: "IMG-20240528-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0003.jpg",
    name: "IMG-20240528-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0004.jpg",
    name: "IMG-20240528-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0005.jpg",
    name: "IMG-20240528-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0006.jpg",
    name: "IMG-20240528-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240528-WA0007.jpg",
    name: "IMG-20240528-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240602-WA0000.jpg",
    name: "IMG-20240602-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240602-WA0001.jpg",
    name: "IMG-20240602-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240608-WA0008.jpg",
    name: "IMG-20240608-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240608-WA0009.jpg",
    name: "IMG-20240608-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240608-WA0010.jpg",
    name: "IMG-20240608-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240608-WA0011.jpg",
    name: "IMG-20240608-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240608-WA0012.jpg",
    name: "IMG-20240608-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0008.jpg",
    name: "IMG-20240610-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0009.jpg",
    name: "IMG-20240610-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0010.jpg",
    name: "IMG-20240610-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0011.jpg",
    name: "IMG-20240610-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0012.jpg",
    name: "IMG-20240610-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0014.jpg",
    name: "IMG-20240610-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0015.jpg",
    name: "IMG-20240610-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240610-WA0016.jpg",
    name: "IMG-20240610-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240613-WA0000.jpg",
    name: "IMG-20240613-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240613-WA0001.jpg",
    name: "IMG-20240613-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240613-WA0002.jpg",
    name: "IMG-20240613-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240613-WA0003.jpg",
    name: "IMG-20240613-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240619-WA0000.jpg",
    name: "IMG-20240619-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240619-WA0001.jpg",
    name: "IMG-20240619-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240619-WA0002.jpg",
    name: "IMG-20240619-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240619-WA0003.jpg",
    name: "IMG-20240619-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240619-WA0004.jpg",
    name: "IMG-20240619-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240622-WA0000.jpg",
    name: "IMG-20240622-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240622-WA0002.jpg",
    name: "IMG-20240622-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240623-WA0000.jpg",
    name: "IMG-20240623-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240623-WA0001.jpg",
    name: "IMG-20240623-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240623-WA0002.jpg",
    name: "IMG-20240623-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240623-WA0003.jpg",
    name: "IMG-20240623-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240623-WA0004.jpg",
    name: "IMG-20240623-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240623-WA0005.jpg",
    name: "IMG-20240623-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240627-WA0002.jpg",
    name: "IMG-20240627-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240627-WA0003.jpg",
    name: "IMG-20240627-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240627-WA0004.jpg",
    name: "IMG-20240627-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240627-WA0005.jpg",
    name: "IMG-20240627-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240627-WA0007.jpg",
    name: "IMG-20240627-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240627-WA0008.jpg",
    name: "IMG-20240627-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240702-WA0005.jpg",
    name: "IMG-20240702-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240704-WA0000.jpg",
    name: "IMG-20240704-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240704-WA0001.jpg",
    name: "IMG-20240704-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240704-WA0002.jpg",
    name: "IMG-20240704-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0104.jpg",
    name: "IMG-20240705-WA0104.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0105.jpg",
    name: "IMG-20240705-WA0105.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0107.jpg",
    name: "IMG-20240705-WA0107.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0108.jpg",
    name: "IMG-20240705-WA0108.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0109.jpg",
    name: "IMG-20240705-WA0109.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0110.jpg",
    name: "IMG-20240705-WA0110.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240705-WA0111.jpg",
    name: "IMG-20240705-WA0111.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240714-WA0001.jpg",
    name: "IMG-20240714-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240714-WA0003.jpg",
    name: "IMG-20240714-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240714-WA0004.jpg",
    name: "IMG-20240714-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240714-WA0006.jpg",
    name: "IMG-20240714-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0001.jpg",
    name: "IMG-20240715-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0002.jpg",
    name: "IMG-20240715-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0003.jpg",
    name: "IMG-20240715-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0004.jpg",
    name: "IMG-20240715-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0006.jpg",
    name: "IMG-20240715-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0007.jpg",
    name: "IMG-20240715-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240715-WA0008.jpg",
    name: "IMG-20240715-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240720-WA0000.jpg",
    name: "IMG-20240720-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240720-WA0001.jpg",
    name: "IMG-20240720-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240720-WA0002.jpg",
    name: "IMG-20240720-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240720-WA0003.jpg",
    name: "IMG-20240720-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240720-WA0004.jpg",
    name: "IMG-20240720-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240720-WA0005.jpg",
    name: "IMG-20240720-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240723-WA0004.jpg",
    name: "IMG-20240723-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240723-WA0005.jpg",
    name: "IMG-20240723-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240723-WA0006.jpg",
    name: "IMG-20240723-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240723-WA0007.jpg",
    name: "IMG-20240723-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240723-WA0008.jpg",
    name: "IMG-20240723-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240723-WA0009.jpg",
    name: "IMG-20240723-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240727-WA0008.jpg",
    name: "IMG-20240727-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0014.jpg",
    name: "IMG-20240730-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0015.jpg",
    name: "IMG-20240730-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0016.jpg",
    name: "IMG-20240730-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0017.jpg",
    name: "IMG-20240730-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0018.jpg",
    name: "IMG-20240730-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0019.jpg",
    name: "IMG-20240730-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240730-WA0020.jpg",
    name: "IMG-20240730-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240801-WA0008.jpg",
    name: "IMG-20240801-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240802-WA0001.jpg",
    name: "IMG-20240802-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240802-WA0002.jpg",
    name: "IMG-20240802-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240802-WA0003.jpg",
    name: "IMG-20240802-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240802-WA0004.jpg",
    name: "IMG-20240802-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240802-WA0005.jpg",
    name: "IMG-20240802-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240802-WA0006.jpg",
    name: "IMG-20240802-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240805-WA0005.jpg",
    name: "IMG-20240805-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240805-WA0006.jpg",
    name: "IMG-20240805-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240805-WA0007.jpg",
    name: "IMG-20240805-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240805-WA0008.jpg",
    name: "IMG-20240805-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240805-WA0009.jpg",
    name: "IMG-20240805-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240809-WA0013.jpg",
    name: "IMG-20240809-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240809-WA0014.jpg",
    name: "IMG-20240809-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240809-WA0015.jpg",
    name: "IMG-20240809-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240809-WA0016.jpg",
    name: "IMG-20240809-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240809-WA0017.jpg",
    name: "IMG-20240809-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240810-WA0000.jpg",
    name: "IMG-20240810-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240810-WA0001.jpg",
    name: "IMG-20240810-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240810-WA0002.jpg",
    name: "IMG-20240810-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240810-WA0003.jpg",
    name: "IMG-20240810-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240810-WA0004.jpg",
    name: "IMG-20240810-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240810-WA0005.jpg",
    name: "IMG-20240810-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240811-WA0000.jpg",
    name: "IMG-20240811-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240811-WA0001.jpg",
    name: "IMG-20240811-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240811-WA0002.jpg",
    name: "IMG-20240811-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240813-WA0007.jpg",
    name: "IMG-20240813-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240813-WA0008.jpg",
    name: "IMG-20240813-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240813-WA0009.jpg",
    name: "IMG-20240813-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240813-WA0011.jpg",
    name: "IMG-20240813-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0001.jpg",
    name: "IMG-20240821-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0002.jpg",
    name: "IMG-20240821-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0004.jpg",
    name: "IMG-20240821-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0005.jpg",
    name: "IMG-20240821-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0006.jpg",
    name: "IMG-20240821-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0007.jpg",
    name: "IMG-20240821-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240821-WA0008.jpg",
    name: "IMG-20240821-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240824-WA0013.jpg",
    name: "IMG-20240824-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240824-WA0014.jpg",
    name: "IMG-20240824-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240824-WA0016.jpg",
    name: "IMG-20240824-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240824-WA0017.jpg",
    name: "IMG-20240824-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240824-WA0018.jpg",
    name: "IMG-20240824-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240831-WA0005.jpg",
    name: "IMG-20240831-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240831-WA0006.jpg",
    name: "IMG-20240831-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240831-WA0007.jpg",
    name: "IMG-20240831-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240831-WA0008.jpg",
    name: "IMG-20240831-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240831-WA0009.jpg",
    name: "IMG-20240831-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240831-WA0010.jpg",
    name: "IMG-20240831-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240903-WA0014.jpg",
    name: "IMG-20240903-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240903-WA0015.jpg",
    name: "IMG-20240903-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240903-WA0016.jpg",
    name: "IMG-20240903-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240907-WA0000.jpg",
    name: "IMG-20240907-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240907-WA0001.jpg",
    name: "IMG-20240907-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240907-WA0002.jpg",
    name: "IMG-20240907-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240907-WA0003.jpg",
    name: "IMG-20240907-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240912-WA0015.jpg",
    name: "IMG-20240912-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240912-WA0016.jpg",
    name: "IMG-20240912-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240912-WA0017.jpg",
    name: "IMG-20240912-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240912-WA0018.jpg",
    name: "IMG-20240912-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240912-WA0020.jpg",
    name: "IMG-20240912-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240912-WA0021.jpg",
    name: "IMG-20240912-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240918-WA0000.jpg",
    name: "IMG-20240918-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240918-WA0001.jpg",
    name: "IMG-20240918-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240918-WA0002.jpg",
    name: "IMG-20240918-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240918-WA0003.jpg",
    name: "IMG-20240918-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240918-WA0004.jpg",
    name: "IMG-20240918-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240921-WA0000.jpg",
    name: "IMG-20240921-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0007.jpg",
    name: "IMG-20240924-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0008.jpg",
    name: "IMG-20240924-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0009.jpg",
    name: "IMG-20240924-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0010.jpg",
    name: "IMG-20240924-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0011.jpg",
    name: "IMG-20240924-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0012.jpg",
    name: "IMG-20240924-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240924-WA0013.jpg",
    name: "IMG-20240924-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240927-WA0009.jpg",
    name: "IMG-20240927-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240927-WA0010.jpg",
    name: "IMG-20240927-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240927-WA0011.jpg",
    name: "IMG-20240927-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240927-WA0012.jpg",
    name: "IMG-20240927-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20240927-WA0013.jpg",
    name: "IMG-20240927-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0000.jpg",
    name: "IMG-20241001-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0001.jpg",
    name: "IMG-20241001-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0002.jpg",
    name: "IMG-20241001-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0003.jpg",
    name: "IMG-20241001-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0004.jpg",
    name: "IMG-20241001-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0005.jpg",
    name: "IMG-20241001-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241001-WA0006.jpg",
    name: "IMG-20241001-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241003-WA0000.jpg",
    name: "IMG-20241003-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241003-WA0001.jpg",
    name: "IMG-20241003-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241003-WA0002.jpg",
    name: "IMG-20241003-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241003-WA0003.jpg",
    name: "IMG-20241003-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241003-WA0004.jpg",
    name: "IMG-20241003-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241019-WA0001.jpg",
    name: "IMG-20241019-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241019-WA0002.jpg",
    name: "IMG-20241019-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241019-WA0003.jpg",
    name: "IMG-20241019-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241019-WA0004.jpg",
    name: "IMG-20241019-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241019-WA0005.jpg",
    name: "IMG-20241019-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241031-WA0024.jpg",
    name: "IMG-20241031-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241031-WA0026.jpg",
    name: "IMG-20241031-WA0026.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241031-WA0027.jpg",
    name: "IMG-20241031-WA0027.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241031-WA0028.jpg",
    name: "IMG-20241031-WA0028.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241031-WA0029.jpg",
    name: "IMG-20241031-WA0029.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241031-WA0030.jpg",
    name: "IMG-20241031-WA0030.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241104-WA0003.jpg",
    name: "IMG-20241104-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241104-WA0005.jpg",
    name: "IMG-20241104-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241104-WA0006.jpg",
    name: "IMG-20241104-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241105-WA0000.jpg",
    name: "IMG-20241105-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241105-WA0001.jpg",
    name: "IMG-20241105-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241105-WA0002.jpg",
    name: "IMG-20241105-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241105-WA0003.jpg",
    name: "IMG-20241105-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241105-WA0009.jpeg",
    name: "IMG-20241105-WA0009.jpeg"
  },
  {
    type: "image",
    src: "/media/IMG-20241106-WA0011.jpeg",
    name: "IMG-20241106-WA0011.jpeg"
  },
  {
    type: "image",
    src: "/media/IMG-20241106-WA0016.jpg",
    name: "IMG-20241106-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241106-WA0021.jpg",
    name: "IMG-20241106-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241106-WA0023.jpg",
    name: "IMG-20241106-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241106-WA0024.jpg",
    name: "IMG-20241106-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241106-WA0025.jpg",
    name: "IMG-20241106-WA0025.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0001.jpg",
    name: "IMG-20241107-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0002.jpg",
    name: "IMG-20241107-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0003.jpg",
    name: "IMG-20241107-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0004.jpg",
    name: "IMG-20241107-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0005.jpg",
    name: "IMG-20241107-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0006.jpg",
    name: "IMG-20241107-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0007.jpg",
    name: "IMG-20241107-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0016.jpg",
    name: "IMG-20241107-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0020.jpg",
    name: "IMG-20241107-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241107-WA0021.jpg",
    name: "IMG-20241107-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0002.jpg",
    name: "IMG-20241108-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0003.jpg",
    name: "IMG-20241108-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0006.jpg",
    name: "IMG-20241108-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0011.jpg",
    name: "IMG-20241108-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0012.jpg",
    name: "IMG-20241108-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0013.jpg",
    name: "IMG-20241108-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0014.jpg",
    name: "IMG-20241108-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0028.jpg",
    name: "IMG-20241108-WA0028.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241108-WA0030.jpg",
    name: "IMG-20241108-WA0030.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0014.jpg",
    name: "IMG-20241109-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0015.jpg",
    name: "IMG-20241109-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0017.jpg",
    name: "IMG-20241109-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0018.jpg",
    name: "IMG-20241109-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0020.jpg",
    name: "IMG-20241109-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0021.jpg",
    name: "IMG-20241109-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241109-WA0022.jpg",
    name: "IMG-20241109-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0000.jpg",
    name: "IMG-20241123-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0001.jpg",
    name: "IMG-20241123-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0004.jpg",
    name: "IMG-20241123-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0005.jpg",
    name: "IMG-20241123-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0007.jpg",
    name: "IMG-20241123-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0022.jpg",
    name: "IMG-20241123-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241123-WA0022_1.jpg",
    name: "IMG-20241123-WA0022_1.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0012.jpg",
    name: "IMG-20241124-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0013.jpg",
    name: "IMG-20241124-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0014.jpg",
    name: "IMG-20241124-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0015.jpg",
    name: "IMG-20241124-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0016.jpg",
    name: "IMG-20241124-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0017.jpg",
    name: "IMG-20241124-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0018.jpg",
    name: "IMG-20241124-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0020.jpg",
    name: "IMG-20241124-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0021.jpg",
    name: "IMG-20241124-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0023.jpg",
    name: "IMG-20241124-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0026.jpg",
    name: "IMG-20241124-WA0026.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0027.jpg",
    name: "IMG-20241124-WA0027.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0028.jpg",
    name: "IMG-20241124-WA0028.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241124-WA0029.jpg",
    name: "IMG-20241124-WA0029.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241129-WA0001.jpg",
    name: "IMG-20241129-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241129-WA0002.jpg",
    name: "IMG-20241129-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241129-WA0003.jpg",
    name: "IMG-20241129-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241129-WA0004.jpg",
    name: "IMG-20241129-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241129-WA0006.jpg",
    name: "IMG-20241129-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241129-WA0007.jpg",
    name: "IMG-20241129-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241202-WA0000.jpg",
    name: "IMG-20241202-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241202-WA0002.jpg",
    name: "IMG-20241202-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241202-WA0003.jpg",
    name: "IMG-20241202-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241202-WA0004.jpg",
    name: "IMG-20241202-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241203-WA0003.jpg",
    name: "IMG-20241203-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241203-WA0004.jpg",
    name: "IMG-20241203-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241203-WA0005.jpg",
    name: "IMG-20241203-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241207-WA0002.jpeg",
    name: "IMG-20241207-WA0002.jpeg"
  },
  {
    type: "image",
    src: "/media/IMG-20241207-WA0006.jpg",
    name: "IMG-20241207-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241221-WA0008.jpg",
    name: "IMG-20241221-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241221-WA0009.jpg",
    name: "IMG-20241221-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241221-WA0012.jpg",
    name: "IMG-20241221-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241221-WA0014.jpg",
    name: "IMG-20241221-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241221-WA0015.jpg",
    name: "IMG-20241221-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241221-WA0016.jpg",
    name: "IMG-20241221-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0004.jpg",
    name: "IMG-20241231-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0005.jpg",
    name: "IMG-20241231-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0006.jpg",
    name: "IMG-20241231-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0007.jpg",
    name: "IMG-20241231-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0008.jpg",
    name: "IMG-20241231-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0009.jpg",
    name: "IMG-20241231-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0010.jpg",
    name: "IMG-20241231-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0011.jpg",
    name: "IMG-20241231-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0013.jpg",
    name: "IMG-20241231-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0014.jpg",
    name: "IMG-20241231-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0015.jpg",
    name: "IMG-20241231-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0016.jpg",
    name: "IMG-20241231-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0017.jpg",
    name: "IMG-20241231-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0019.jpg",
    name: "IMG-20241231-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0020.jpg",
    name: "IMG-20241231-WA0020.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20241231-WA0021.jpg",
    name: "IMG-20241231-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0023.jpg",
    name: "IMG-20250109-WA0023.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0024.jpg",
    name: "IMG-20250109-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0027.jpg",
    name: "IMG-20250109-WA0027.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0028.jpg",
    name: "IMG-20250109-WA0028.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0029.jpg",
    name: "IMG-20250109-WA0029.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0030.jpg",
    name: "IMG-20250109-WA0030.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250109-WA0031.jpg",
    name: "IMG-20250109-WA0031.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0006.jpg",
    name: "IMG-20250114-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0008.jpg",
    name: "IMG-20250114-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0009.jpg",
    name: "IMG-20250114-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0010.jpg",
    name: "IMG-20250114-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0011.jpg",
    name: "IMG-20250114-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0012.jpg",
    name: "IMG-20250114-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0014.jpg",
    name: "IMG-20250114-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0016.jpg",
    name: "IMG-20250114-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0017.jpg",
    name: "IMG-20250114-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250114-WA0019.jpg",
    name: "IMG-20250114-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250123-WA0002.jpg",
    name: "IMG-20250123-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250123-WA0006.jpg",
    name: "IMG-20250123-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250123-WA0007.jpg",
    name: "IMG-20250123-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250123-WA0009.jpg",
    name: "IMG-20250123-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250123-WA0010.jpg",
    name: "IMG-20250123-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250123-WA0011.jpg",
    name: "IMG-20250123-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250125-WA0005.jpg",
    name: "IMG-20250125-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250125-WA0006.jpg",
    name: "IMG-20250125-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0005.jpg",
    name: "IMG-20250126-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0006.jpg",
    name: "IMG-20250126-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0007.jpg",
    name: "IMG-20250126-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0008.jpg",
    name: "IMG-20250126-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0009.jpg",
    name: "IMG-20250126-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0012.jpg",
    name: "IMG-20250126-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0013.jpg",
    name: "IMG-20250126-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0014.jpg",
    name: "IMG-20250126-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0015.jpg",
    name: "IMG-20250126-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250126-WA0016.jpg",
    name: "IMG-20250126-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250204-WA0000.jpg",
    name: "IMG-20250204-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250204-WA0001.jpg",
    name: "IMG-20250204-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250204-WA0005.jpg",
    name: "IMG-20250204-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250204-WA0006.jpg",
    name: "IMG-20250204-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250210-WA0000.jpg",
    name: "IMG-20250210-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250210-WA0001.jpg",
    name: "IMG-20250210-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250210-WA0002.jpg",
    name: "IMG-20250210-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250210-WA0003.jpg",
    name: "IMG-20250210-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250210-WA0006.jpg",
    name: "IMG-20250210-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250210-WA0007.jpg",
    name: "IMG-20250210-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250211-WA0026.jpg",
    name: "IMG-20250211-WA0026.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250216-WA0009.jpg",
    name: "IMG-20250216-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250216-WA0013.jpg",
    name: "IMG-20250216-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250216-WA0013_1.jpg",
    name: "IMG-20250216-WA0013_1.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250216-WA0013~2.jpg",
    name: "IMG-20250216-WA0013~2.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250216-WA0014.jpg",
    name: "IMG-20250216-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250218-WA0000.jpg",
    name: "IMG-20250218-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250219-WA0002.jpg",
    name: "IMG-20250219-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250219-WA0004.jpg",
    name: "IMG-20250219-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250220-WA0024.jpg",
    name: "IMG-20250220-WA0024.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250220-WA0025.jpg",
    name: "IMG-20250220-WA0025.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250220-WA0026.jpg",
    name: "IMG-20250220-WA0026.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250220-WA0028.jpg",
    name: "IMG-20250220-WA0028.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250220-WA0029.jpg",
    name: "IMG-20250220-WA0029.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0000.jpg",
    name: "IMG-20250303-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0001.jpg",
    name: "IMG-20250303-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0002.jpg",
    name: "IMG-20250303-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0003.jpg",
    name: "IMG-20250303-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0004.jpg",
    name: "IMG-20250303-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0005.jpg",
    name: "IMG-20250303-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0006.jpg",
    name: "IMG-20250303-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250303-WA0007.jpg",
    name: "IMG-20250303-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250314-WA0047.jpg",
    name: "IMG-20250314-WA0047.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250314-WA0048.jpg",
    name: "IMG-20250314-WA0048.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250314-WA0049.jpg",
    name: "IMG-20250314-WA0049.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250314-WA0050.jpg",
    name: "IMG-20250314-WA0050.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250314-WA0051.jpg",
    name: "IMG-20250314-WA0051.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250317-WA0014.jpg",
    name: "IMG-20250317-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250317-WA0015.jpg",
    name: "IMG-20250317-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250317-WA0016.jpg",
    name: "IMG-20250317-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250317-WA0017.jpg",
    name: "IMG-20250317-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250323-WA0010.jpg",
    name: "IMG-20250323-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250323-WA0011.jpg",
    name: "IMG-20250323-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250323-WA0012.jpg",
    name: "IMG-20250323-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250323-WA0013.jpg",
    name: "IMG-20250323-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250324-WA0001.jpg",
    name: "IMG-20250324-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250324-WA0002.jpg",
    name: "IMG-20250324-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250324-WA0003.jpg",
    name: "IMG-20250324-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250324-WA0004.jpg",
    name: "IMG-20250324-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250324-WA0005.jpg",
    name: "IMG-20250324-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250404-WA0000.jpg",
    name: "IMG-20250404-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250404-WA0001.jpg",
    name: "IMG-20250404-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250404-WA0002.jpg",
    name: "IMG-20250404-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250404-WA0004.jpg",
    name: "IMG-20250404-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250404-WA0006.jpg",
    name: "IMG-20250404-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250406-WA0017.jpg",
    name: "IMG-20250406-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250406-WA0018.jpg",
    name: "IMG-20250406-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250406-WA0019.jpg",
    name: "IMG-20250406-WA0019.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250406-WA0021.jpg",
    name: "IMG-20250406-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250406-WA0022.jpg",
    name: "IMG-20250406-WA0022.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250414-WA0000.jpg",
    name: "IMG-20250414-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250414-WA0001.jpg",
    name: "IMG-20250414-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250414-WA0005.jpg",
    name: "IMG-20250414-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0000.jpg",
    name: "IMG-20250419-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0001.jpg",
    name: "IMG-20250419-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0002.jpg",
    name: "IMG-20250419-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0004.jpg",
    name: "IMG-20250419-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0005.jpg",
    name: "IMG-20250419-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0007.jpg",
    name: "IMG-20250419-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250419-WA0012.jpg",
    name: "IMG-20250419-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250428-WA0008.jpg",
    name: "IMG-20250428-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250428-WA0009.jpg",
    name: "IMG-20250428-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250428-WA0011.jpg",
    name: "IMG-20250428-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250428-WA0012.jpg",
    name: "IMG-20250428-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250505-WA0000.jpg",
    name: "IMG-20250505-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250505-WA0001.jpg",
    name: "IMG-20250505-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250505-WA0002.jpg",
    name: "IMG-20250505-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250513-WA0030.jpg",
    name: "IMG-20250513-WA0030.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250513-WA0031.jpg",
    name: "IMG-20250513-WA0031.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250513-WA0032.jpg",
    name: "IMG-20250513-WA0032.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250513-WA0033.jpg",
    name: "IMG-20250513-WA0033.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250518-WA0007.jpg",
    name: "IMG-20250518-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250518-WA0008.jpg",
    name: "IMG-20250518-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250518-WA0009.jpg",
    name: "IMG-20250518-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250518-WA0011.jpg",
    name: "IMG-20250518-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250518-WA0012.jpg",
    name: "IMG-20250518-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250518-WA0013.jpg",
    name: "IMG-20250518-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250520-WA0005.jpg",
    name: "IMG-20250520-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250526-WA0013.jpg",
    name: "IMG-20250526-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250526-WA0014.jpg",
    name: "IMG-20250526-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250528-WA0018.jpg",
    name: "IMG-20250528-WA0018.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250528-WA0021.jpg",
    name: "IMG-20250528-WA0021.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250601-WA0005.jpg",
    name: "IMG-20250601-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250601-WA0006.jpg",
    name: "IMG-20250601-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250603-WA0000.jpg",
    name: "IMG-20250603-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250603-WA0002.jpg",
    name: "IMG-20250603-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0007.jpg",
    name: "IMG-20250605-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0008.jpg",
    name: "IMG-20250605-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0009.jpg",
    name: "IMG-20250605-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0010.jpg",
    name: "IMG-20250605-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0011.jpg",
    name: "IMG-20250605-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0012.jpg",
    name: "IMG-20250605-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0013.jpg",
    name: "IMG-20250605-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250605-WA0014.jpg",
    name: "IMG-20250605-WA0014.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250614-WA0005.jpg",
    name: "IMG-20250614-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250614-WA0010.jpg",
    name: "IMG-20250614-WA0010.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250618-WA0009.jpg",
    name: "IMG-20250618-WA0009.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250618-WA0011.jpg",
    name: "IMG-20250618-WA0011.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250618-WA0012.jpg",
    name: "IMG-20250618-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0001.jpg",
    name: "IMG-20250622-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0002.jpg",
    name: "IMG-20250622-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0003.jpg",
    name: "IMG-20250622-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0004.jpg",
    name: "IMG-20250622-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0005.jpg",
    name: "IMG-20250622-WA0005.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0006.jpg",
    name: "IMG-20250622-WA0006.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0007.jpg",
    name: "IMG-20250622-WA0007.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250622-WA0008.jpg",
    name: "IMG-20250622-WA0008.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250628-WA0000.jpg",
    name: "IMG-20250628-WA0000.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250628-WA0001.jpg",
    name: "IMG-20250628-WA0001.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250628-WA0002.jpg",
    name: "IMG-20250628-WA0002.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250628-WA0003.jpg",
    name: "IMG-20250628-WA0003.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250628-WA0004.jpg",
    name: "IMG-20250628-WA0004.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250708-WA0012.jpg",
    name: "IMG-20250708-WA0012.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250708-WA0013.jpg",
    name: "IMG-20250708-WA0013.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250708-WA0015.jpg",
    name: "IMG-20250708-WA0015.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250708-WA0016.jpg",
    name: "IMG-20250708-WA0016.jpg"
  },
  {
    type: "image",
    src: "/media/IMG-20250708-WA0017.jpg",
    name: "IMG-20250708-WA0017.jpg"
  },
  {
    type: "image",
    src: "/media/IMG_20230507_144445_101.webp",
    name: "IMG_20230507_144445_101.webp"
  },
  {
    type: "image",
    src: "/media/IMG_20230507_144501_523.webp",
    name: "IMG_20230507_144501_523.webp"
  },
  {
    type: "image",
    src: "/media/IMG_20230507_152542_216.webp",
    name: "IMG_20230507_152542_216.webp"
  },
  {
    type: "image",
    src: "/media/IMG_20230507_152615_089.webp",
    name: "IMG_20230507_152615_089.webp"
  },
  {
    type: "image",
    src: "/media/IMG_20230507_154716_388.webp",
    name: "IMG_20230507_154716_388.webp"
  },
  {
    type: "image",
    src: "/media/Snapchat-123295591.jpg",
    name: "Snapchat-123295591.jpg"
  },
  {
    type: "video",
    src: "/media/Snapchat-1572015545.mp4",
    name: "Snapchat-1572015545.mp4"
  },
  {
    type: "image",
    src: "/media/Snapchat-1778146668.jpg",
    name: "Snapchat-1778146668.jpg"
  },
  {
    type: "image",
    src: "/media/Snapchat-1865129752.jpg",
    name: "Snapchat-1865129752.jpg"
  },
  {
    type: "image",
    src: "/media/Snapchat-2022126918.jpg",
    name: "Snapchat-2022126918.jpg"
  },
  {
    type: "image",
    src: "/media/Snapchat-2032212040.jpg",
    name: "Snapchat-2032212040.jpg"
  },
  {
    type: "video",
    src: "/media/Snapchat-725864695.mp4",
    name: "Snapchat-725864695.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20221214-WA0044.mp4",
    name: "VID-20221214-WA0044.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230918-WA0001.mp4",
    name: "VID-20230918-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230924-WA0004.mp4",
    name: "VID-20230924-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230924-WA0007.mp4",
    name: "VID-20230924-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230924-WA0009.mp4",
    name: "VID-20230924-WA0009.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230924-WA0014.mp4",
    name: "VID-20230924-WA0014.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230924-WA0015.mp4",
    name: "VID-20230924-WA0015.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20230924-WA0016.mp4",
    name: "VID-20230924-WA0016.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231210-WA0020.mp4",
    name: "VID-20231210-WA0020.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231210-WA0023.mp4",
    name: "VID-20231210-WA0023.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231210-WA0024.mp4",
    name: "VID-20231210-WA0024.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231210-WA0025.mp4",
    name: "VID-20231210-WA0025.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231210-WA0026.mp4",
    name: "VID-20231210-WA0026.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231215-WA0003.mp4",
    name: "VID-20231215-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231225-WA0003.mp4",
    name: "VID-20231225-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231225-WA0006.mp4",
    name: "VID-20231225-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20231229-WA0004.mp4",
    name: "VID-20231229-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240105-WA0002.mp4",
    name: "VID-20240105-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240107-WA0006.mp4",
    name: "VID-20240107-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240107-WA0008.mp4",
    name: "VID-20240107-WA0008.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240107-WA0009.mp4",
    name: "VID-20240107-WA0009.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240107-WA0010.mp4",
    name: "VID-20240107-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240109-WA0001.mp4",
    name: "VID-20240109-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240109-WA0002.mp4",
    name: "VID-20240109-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240116-WA0004.mp4",
    name: "VID-20240116-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240212-WA0001.mp4",
    name: "VID-20240212-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240216-WA0009.mp4",
    name: "VID-20240216-WA0009.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240227-WA0013.mp4",
    name: "VID-20240227-WA0013.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240306-WA0006.mp4",
    name: "VID-20240306-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240324-WA0002.mp4",
    name: "VID-20240324-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240331-WA0007.mp4",
    name: "VID-20240331-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240401-WA0014.mp4",
    name: "VID-20240401-WA0014.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240508-WA0000.mp4",
    name: "VID-20240508-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240602-WA0002.mp4",
    name: "VID-20240602-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240608-WA0007.mp4",
    name: "VID-20240608-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240610-WA0005.mp4",
    name: "VID-20240610-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240610-WA0006.mp4",
    name: "VID-20240610-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240610-WA0007.mp4",
    name: "VID-20240610-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240610-WA0013.mp4",
    name: "VID-20240610-WA0013.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240627-WA0001.mp4",
    name: "VID-20240627-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240627-WA0006.mp4",
    name: "VID-20240627-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240630-WA0000.mp4",
    name: "VID-20240630-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240630-WA0001.mp4",
    name: "VID-20240630-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240630-WA0002.mp4",
    name: "VID-20240630-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240630-WA0004.mp4",
    name: "VID-20240630-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240714-WA0000.mp4",
    name: "VID-20240714-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240714-WA0002.mp4",
    name: "VID-20240714-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240714-WA0005.mp4",
    name: "VID-20240714-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240717-WA0000.mp4",
    name: "VID-20240717-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240717-WA0001.mp4",
    name: "VID-20240717-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240813-WA0006.mp4",
    name: "VID-20240813-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240813-WA0010.mp4",
    name: "VID-20240813-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240813-WA0012.mp4",
    name: "VID-20240813-WA0012.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240821-WA0003.mp4",
    name: "VID-20240821-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240823-WA0006.mp4",
    name: "VID-20240823-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240824-WA0015.mp4",
    name: "VID-20240824-WA0015.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240824-WA0019.mp4",
    name: "VID-20240824-WA0019.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240824-WA0020.mp4",
    name: "VID-20240824-WA0020.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240831-WA0004.mp4",
    name: "VID-20240831-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240912-WA0019.mp4",
    name: "VID-20240912-WA0019.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20240927-WA0014.mp4",
    name: "VID-20240927-WA0014.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241010-WA0010.mp4",
    name: "VID-20241010-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241019-WA0006.mp4",
    name: "VID-20241019-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241031-WA0025.mp4",
    name: "VID-20241031-WA0025.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241102-WA0000.mp4",
    name: "VID-20241102-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241104-WA0004.mp4",
    name: "VID-20241104-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241106-WA0004.mp4",
    name: "VID-20241106-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241106-WA0005.mp4",
    name: "VID-20241106-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241106-WA0020.mp4",
    name: "VID-20241106-WA0020.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241106-WA0022.mp4",
    name: "VID-20241106-WA0022.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241106-WA0026.mp4",
    name: "VID-20241106-WA0026.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241106-WA0027.mp4",
    name: "VID-20241106-WA0027.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241107-WA0000.mp4",
    name: "VID-20241107-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241107-WA0017.mp4",
    name: "VID-20241107-WA0017.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241107-WA0018.mp4",
    name: "VID-20241107-WA0018.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241107-WA0019.mp4",
    name: "VID-20241107-WA0019.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241109-WA0013.mp4",
    name: "VID-20241109-WA0013.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241109-WA0016.mp4",
    name: "VID-20241109-WA0016.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241123-WA0002.mp4",
    name: "VID-20241123-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241123-WA0003.mp4",
    name: "VID-20241123-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241123-WA0006.mp4",
    name: "VID-20241123-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241124-WA0019.mp4",
    name: "VID-20241124-WA0019.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241124-WA0022.mp4",
    name: "VID-20241124-WA0022.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241124-WA0024.mp4",
    name: "VID-20241124-WA0024.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241124-WA0025.mp4",
    name: "VID-20241124-WA0025.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241129-WA0005.mp4",
    name: "VID-20241129-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241202-WA0001.mp4",
    name: "VID-20241202-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241203-WA0000.mp4",
    name: "VID-20241203-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241203-WA0001.mp4",
    name: "VID-20241203-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241203-WA0002.mp4",
    name: "VID-20241203-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241204-WA0000.mp4",
    name: "VID-20241204-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241205-WA0000.mp4",
    name: "VID-20241205-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241207-WA0004.mp4",
    name: "VID-20241207-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241216-WA0000.mp4",
    name: "VID-20241216-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241221-WA0007.mp4",
    name: "VID-20241221-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241221-WA0010.mp4",
    name: "VID-20241221-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241221-WA0011.mp4",
    name: "VID-20241221-WA0011.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241221-WA0013.mp4",
    name: "VID-20241221-WA0013.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241221-WA0017.mp4",
    name: "VID-20241221-WA0017.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241231-WA0012.mp4",
    name: "VID-20241231-WA0012.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20241231-WA0018.mp4",
    name: "VID-20241231-WA0018.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250109-WA0025.mp4",
    name: "VID-20250109-WA0025.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250109-WA0026.mp4",
    name: "VID-20250109-WA0026.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250114-WA0007.mp4",
    name: "VID-20250114-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250114-WA0013.mp4",
    name: "VID-20250114-WA0013.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250114-WA0015.mp4",
    name: "VID-20250114-WA0015.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250114-WA0018.mp4",
    name: "VID-20250114-WA0018.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250123-WA0003.mp4",
    name: "VID-20250123-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250123-WA0004.mp4",
    name: "VID-20250123-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250123-WA0005.mp4",
    name: "VID-20250123-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250123-WA0012.mp4",
    name: "VID-20250123-WA0012.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0000.mp4",
    name: "VID-20250126-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0001.mp4",
    name: "VID-20250126-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0002.mp4",
    name: "VID-20250126-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0003.mp4",
    name: "VID-20250126-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0004.mp4",
    name: "VID-20250126-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0010.mp4",
    name: "VID-20250126-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250126-WA0011.mp4",
    name: "VID-20250126-WA0011.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250129-WA0001.mp4",
    name: "VID-20250129-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250129-WA0002.mp4",
    name: "VID-20250129-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250129-WA0003.mp4",
    name: "VID-20250129-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250129-WA0004.mp4",
    name: "VID-20250129-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250204-WA0002.mp4",
    name: "VID-20250204-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250204-WA0003.mp4",
    name: "VID-20250204-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250204-WA0004.mp4",
    name: "VID-20250204-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250210-WA0004.mp4",
    name: "VID-20250210-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250210-WA0005.mp4",
    name: "VID-20250210-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250210-WA0045.mp4",
    name: "VID-20250210-WA0045.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250211-WA0023.mp4",
    name: "VID-20250211-WA0023.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250211-WA0024.mp4",
    name: "VID-20250211-WA0024.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250211-WA0025.mp4",
    name: "VID-20250211-WA0025.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250211-WA0027.mp4",
    name: "VID-20250211-WA0027.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250216-WA0010.mp4",
    name: "VID-20250216-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250216-WA0011.mp4",
    name: "VID-20250216-WA0011.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250216-WA0012.mp4",
    name: "VID-20250216-WA0012.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250216-WA0015.mp4",
    name: "VID-20250216-WA0015.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250219-WA0000.mp4",
    name: "VID-20250219-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250219-WA0001.mp4",
    name: "VID-20250219-WA0001.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250219-WA0003.mp4",
    name: "VID-20250219-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250220-WA0023.mp4",
    name: "VID-20250220-WA0023.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250220-WA0027.mp4",
    name: "VID-20250220-WA0027.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250404-WA0003.mp4",
    name: "VID-20250404-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250404-WA0005.mp4",
    name: "VID-20250404-WA0005.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250406-WA0020.mp4",
    name: "VID-20250406-WA0020.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250414-WA0002.mp4",
    name: "VID-20250414-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250414-WA0003.mp4",
    name: "VID-20250414-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250414-WA0004.mp4",
    name: "VID-20250414-WA0004.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250419-WA0003.mp4",
    name: "VID-20250419-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250419-WA0006.mp4",
    name: "VID-20250419-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250419-WA0013.mp4",
    name: "VID-20250419-WA0013.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250428-WA0007.mp4",
    name: "VID-20250428-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250428-WA0010.mp4",
    name: "VID-20250428-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250505-WA0003.mp4",
    name: "VID-20250505-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250518-WA0014.mp4",
    name: "VID-20250518-WA0014.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250518-WA0015.mp4",
    name: "VID-20250518-WA0015.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250526-WA0015.mp4",
    name: "VID-20250526-WA0015.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250528-WA0016.mp4",
    name: "VID-20250528-WA0016.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250528-WA0017.mp4",
    name: "VID-20250528-WA0017.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250528-WA0019.mp4",
    name: "VID-20250528-WA0019.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250528-WA0020.mp4",
    name: "VID-20250528-WA0020.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250603-WA0003.mp4",
    name: "VID-20250603-WA0003.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250614-WA0002.mp4",
    name: "VID-20250614-WA0002.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250614-WA0006.mp4",
    name: "VID-20250614-WA0006.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250614-WA0007.mp4",
    name: "VID-20250614-WA0007.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250614-WA0008.mp4",
    name: "VID-20250614-WA0008.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250614-WA0009.mp4",
    name: "VID-20250614-WA0009.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250618-WA0008.mp4",
    name: "VID-20250618-WA0008.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250618-WA0010.mp4",
    name: "VID-20250618-WA0010.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250622-WA0000.mp4",
    name: "VID-20250622-WA0000.mp4"
  },
  {
    type: "video",
    src: "/media/VID-20250708-WA0014.mp4",
    name: "VID-20250708-WA0014.mp4"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 8.51.06 AM.jpeg",
    name: "WhatsApp Image 2025-04-19 at 8.51.06 AM.jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.54 AM (1).jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.54 AM (1).jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.54 AM (2).jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.54 AM (2).jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.54 AM (3).jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.54 AM (3).jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.54 AM (4).jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.54 AM (4).jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.55 AM (1).jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.55 AM (1).jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.55 AM (2).jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.55 AM (2).jpeg"
  },
  {
    type: "image",
    src: "/media/WhatsApp Image 2025-04-19 at 9.45.55 AM.jpeg",
    name: "WhatsApp Image 2025-04-19 at 9.45.55 AM.jpeg"
  }

        ])
      } finally {
        setIsLoading(false)
      }
    }

    loadFiles()
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaFiles.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaFiles.length) % mediaFiles.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          console.log("Video autoplay prevented")
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [currentIndex, isPlaying, isVideo])

  useEffect(() => {
    if (!isVideo && isPlaying) {
      const timer = setTimeout(goToNext, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, isPlaying, isVideo])

  const handleVideoEnded = () => {
    goToNext()
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <p className="text-white text-sm md:text-base">Cargando archivos...</p>
      </div>
    )
  }

  if (mediaFiles.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-black px-4">
        <p className="text-white text-center text-sm md:text-base">No se encontraron archivos multimedia</p>
        <p className="text-white/60 text-xs md:text-sm text-center">
          Asegúrate de tener archivos en la carpeta public/media/
        </p>
      </div>
    )
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Media Display */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isVideo ? (
          <video
            ref={videoRef}
            key={currentMedia.src}
            className="h-full w-full object-contain"
            onEnded={handleVideoEnded}
            playsInline
            muted
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        ) : (
          <img
            key={currentMedia.src}
            src={currentMedia.src || "/placeholder.svg"}
            alt={currentMedia.name || `Media ${currentIndex + 1}`}
            className="h-full w-full object-contain animate-fade-in"
          />
        )}
      </div>

      {/* Overlay gradient for better control visibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 hidden sm:flex items-center p-2 md:p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          <span className="sr-only">Anterior</span>
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 hidden sm:flex items-center p-2 md:p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
        <div className="flex items-center justify-between gap-2">
          {/* Play/Pause Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 shrink-0"
          >
            {isPlaying ? <Pause className="h-4 w-4 md:h-5 md:w-5" /> : <Play className="h-4 w-4 md:h-5 md:w-5" />}
            <span className="sr-only">{isPlaying ? "Pausar" : "Reproducir"}</span>
          </Button>

          {/* Counter */}
          <div className="rounded-full bg-black/30 px-2 py-1 md:px-4 md:py-2 backdrop-blur-sm shrink-0">
            <p className="text-xs md:text-sm font-medium text-white whitespace-nowrap">
              {currentIndex + 1} / {mediaFiles.length}
            </p>
          </div>

          {/* Media Type Indicator */}
          <div className="rounded-full bg-black/30 px-2 py-1 md:px-4 md:py-2 backdrop-blur-sm shrink-0">
            <p className="text-xs md:text-sm font-medium text-white uppercase tracking-wider">
              {currentMedia.type === "video" ? "Video" : "Img"}
            </p>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="mt-3 md:mt-4 flex justify-center gap-1.5 md:gap-2">
          {mediaFiles.length <= 20 ? (
            mediaFiles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 md:h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-6 md:w-8 bg-white" : "w-1.5 md:w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir a media ${index + 1}`}
              />
            ))
          ) : mediaFiles.length <= 50 ? (
            <div className="hidden md:flex gap-2">
              {mediaFiles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir a media ${index + 1}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-xs text-white/60 text-center px-2">
              {currentMedia.name || `Archivo ${currentIndex + 1}`}
            </p>
          )}
        </div>

        <div className="mt-2 flex justify-center sm:hidden">
          <p className="text-[10px] text-white/40">Desliza para navegar</p>
        </div>
      </div>
    </div>
  )
}
