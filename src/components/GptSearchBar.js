import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[12%] text-center'>
        <form className='bg-black h-[100px] pt-[24px]'>
            <input type='text' className='w-[32%] h-[56%] text-center rounded-full' placeholder='Search suggestion'/>
            <button className='top-[8px] right-[40px] relative'><img className='w-[34px] h-[34px]' src='https://img.icons8.com/sf-regular/48/000000/search.png' alt='imgsrc'/></button>
        </form>
    </div>
  )
}

export default GptSearchBar;


