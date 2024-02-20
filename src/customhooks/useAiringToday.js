import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { apiOption } from '../utils/constant'
import { addAiringToday } from '../utils/moviesSlice'

const useAiringToday = () => {
  const disptach = useDispatch()

  const getAiringToday = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', apiOption)
    const json = await data.json();

    disptach(addAiringToday(json.results))
  }
  useEffect(() => {
    getAiringToday()
  },[])
}

export default useAiringToday