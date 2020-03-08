import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "https://www.youtube.com/user/enriqueadelino",
    image: <FaYoutubeSquare className="youtube-icon" />,
  },
  {
    id: Math.random(),
    url: "https://github.com/emontes",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://twitter.com/el_ade",
    image: <FaTwitterSquare className="twitter-icon" />,
  },
]
