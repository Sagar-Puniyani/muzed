'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import YouTube from 'react-youtube'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp } from "lucide-react"
import Image from 'next/image'
import axios from 'axios'
import { useSession } from 'next-auth/react'

// Sparkle component
const Sparkle = ({ style } : any) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={style}
    initial={{ scale: 0, opacity: 1 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [1, 1, 0],
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Infinity,
      repeatType: 'loop',
    }}
  />
)

type Video = {
  extractedId: string
  title: string
  thumbnail: string
  votes: number
}

// Main component
export default function Component(params:{creatorId : string} ) {
  const [videoUrl, setVideoUrl] = useState('')
  const [videoId, setVideoId] = useState('')
  const [queue, setQueue] = useState<Video[]>([])
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)




  // Generate sparkles
  const sparkles = Array.from({ length: 50 }).map((_, i) => ({
    key: i,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
    },
  }))

  useEffect(() => {
    if (queue.length > 0 && !currentVideo) {
      setCurrentVideo(queue[0])
      setQueue(queue.slice(1))
    }
  }, [queue, currentVideo])

  const handleSubmit = async(e : React.FormEvent) => {
    e.preventDefault()
    console.log("url : ", videoUrl);
    console.log("params : " , params.creatorId);
    //Todo : to call axois POST req for add Video in Queue 
    const streamInstance = await axios.post('/api/streams', 
      { 
        url: videoUrl ,
        creatorId: params.creatorId
      }
    ); 


    console.log("streamInstance : ", streamInstance.data);


    // what should be do with the stream Instance

    if (videoUrl) {
      setQueue([...queue])
      setVideoUrl('')
      fetchVideoDetails(videoUrl)
    }
  }

  const fetchVideoDetails = async (id : string) => {
    // In a real application, you would fetch this data from a server
    // This is a mock implementation
    const mockTitle = 'Sample Video Title'
    const mockThumbnail = `/placeholder.svg?height=90&width=120`
    
    setQueue(queue => queue.map(item => 
      item.extractedId === id ? { ...item, title: mockTitle, thumbnail: mockThumbnail } : item
    ))
  }

  const handleVote = (id : string) => {
    setQueue(queue => queue.map(item => 
      item.extractedId === id ? { ...item, votes: item.votes + 1 } : item
    ))
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 relative overflow-hidden">
      {sparkles.map(sparkle => (
        <Sparkle key={sparkle.key} style={sparkle.style} />
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Song Voting Queue</h1>

        <form onSubmit={handleSubmit} className="flex space-x-4">
          <Input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            className="flex-grow bg-gray-800 text-white border-gray-700"
          />
          <Button type="submit">Add to Queue</Button>
        </form>

        {videoUrl && (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <YouTube videoId={videoUrl.split('v=')[1]} opts={{ height: '190', width: '340' }} />
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Queue</h2>
          {queue.map((item, index) => (
            <motion.div
              key={item.extractedId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="flex items-center space-x-4 p-4">
                  <Image src={item.thumbnail} alt={item.title} className="w-24 h-18 object-cover rounded" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">Votes: {item.votes}</p>
                  </div>
                  <Button onClick={() => handleVote(item.extractedId)} variant="outline" size="icon">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {currentVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Now Playing</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <YouTube videoId={currentVideo.extractedId} opts={{ height: '390', width: '640' }} />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}