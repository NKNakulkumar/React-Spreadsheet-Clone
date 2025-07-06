import React from 'react'

const Header = () => {
  return (
    <div className='main bg-gray-100'>
    <div className="box1 flex flex-row bg-gray-100 pt-1.5 items-center shadow-md gap-3">
      <div className='ml-5' >
      <img src="https://c.animaapp.com/mclmkdkf288FZk/img/panel.svg" alt="img" width="27px" height="27px" />
      </div>
      <div className=" flex flex-row justify-center">
        <ul className='flex flex-row gap-4 justify-center items-center'>
          <li className='flex flex-row justify-center items-center gap-1.5'>WorkSpace
            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg" alt="" className='gap-1' />
          </li>
          <li className='flex flex-row justify-center items-center gap-1.5'>Folder 2
          <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg" alt=""  />

          </li>
          <li className='flex flex-row justify-center items-center '>SpreadSheet 3
          </li>
    <img
    src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
    alt=""
    className="w-6 h-6  "
  />

        </ul>
      </div>
      <div className="boxright flex flex-row justify-evenly ml-[500px] items-center gap-2 pt-1 text-sm">
      <div className="p-4">
  <div className="relative w-full max-w-md bg-gray-100">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <img src="/search.png" alt="search" className="w-5 h-5" />
    </span>
    <input
      type="text"
      placeholder="Search within sheet"
      className="pl-10 pr-3 py-2 w-full rounded border border-gray-300 focus:outline-none"
    />
  </div>
</div>
        <div>
          <img src="/images/bell.png" alt="bell"  width="30px" height="30px"/>
        </div>
        <div className="flex items-cente rounded-lg p-2 w-33">
         
          <img
            src="https://media.istockphoto.com/id/1199696916/photo/thoughtful-businessman-think-of-online-project-looking-at-laptop.jpg?s=612x612&w=0&k=20&c=a8Ssxt9NbHsYTO434PRJQKLUDEvL4FceQ9bSknWPUl4="
            alt="icon"
            className='rounded-full h-10 w-10'
          />
          <div className="ml-3 text-sm text-gray-800">
           <p className='font-medium'>John Doe</p>
           <span> johndoe...</span>
          </div>
        </div>
      </div>
      </div>
      <div className='w-full h-px bg-gray-300' />
      <div className="box2 p-2 flex flex-row bg-gray-100 items-center shadow-md">
         <ul className='flex flex-row gap-4 justify-center items-center'>
          <li className='flex flex-row justify-center items-center ml-4 gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md'> Toolbar
            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-double.svg" alt="icons" />
          </li>
          <li className='flex flex-row justify-center items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md'>
          <img src="https://c.animaapp.com/mclmkdkf288FZk/img/eye.svg" alt="icons"  width="22px" height="22px" /> Hide fields
          </li>
          <li className='flex flex-row justify-center items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md '><img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sort.svg" alt="icons"  width="22px" height="22px" />Sort
          </li>
          <li className='flex flex-row justify-center items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md'><img src="https://c.animaapp.com/mclmkdkf288FZk/img/filter.svg" alt="icons"   width="22px" height="22px"/>Filter
          </li>
          <li className='flex flex-row justify-center items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md'><img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-autofit.svg" alt="icons"   width="22px" height="22px"/>cell view
          </li>
          </ul>

      <div className="right2 flex flex-row ml-auto items-center gap-4 " >
        <ul className="flex flex-row gap-4 ">
          <li className='flex flex-row justify-center items-center gap-3 cursor-pointer p-2 shadow-sm hover:bg-gray-200 rounded-md'>Import
            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-download.svg" alt="" />
          </li>
          <li className='flex flex-row justify-center items-center gap-3 cursor-pointer p-2 shadow-sm hover:bg-gray-200 rounded-md'>Export
            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-upload.svg" alt="" />
          </li>
          <li className='flex flex-row justify-center items-center gap-3 cursor-pointer p-2 shadow-sm hover:bg-gray-200 rounded-md '>Share
            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/share.svg" alt="" />
          </li>
          <li className='flex flex-row justify-center items-center gap-3 cursor-pointer p-2 shadow-xs px-4 bg-[#4b6a4f] hover:bg-gray-200 rounded-sm'>
          <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" alt="" />
          New Action
          </li>
        </ul>
      </div>
         </div>

         {/* <div className='w-full h-px ' /> */}
         <div className="box3 flex flex-row items-center px-4 shadow-md ">
          <div className="flex flex-row items-center ml-7 pr-[530px] pl-4 py-1 bg-gray-200">
            <div className='flex flex-row items-center gap-1 p-1 bg-gray-200 rounded-sm shadow-sm'> <img src="https://c.animaapp.com/mclmkdkf288FZk/img/link.svg" alt="" />Q3 Financial Overview</div>
            <div className="ml-1">
              <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sync.svg" alt="" />
            </div>
          </div>

<div className="flex items-center  ml-auto space-x-0.5">
  {/* 1. ABC */}
  <div className="flex items-center pr-12 pl-6 py-2 bg-[#d2e3d7] shadow-sm ">
    <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" className="w-4 h-4 mr-1" alt="icon" />
    <span className="text-gray-800 font-medium text-sm flex items-center">
      ABC
      <img src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" className="w-4 h-4 ml-1" alt="more" />
    </span>
  </div>

  {/* 2. Answer a question */}
  <div className="flex items-center pl-7 pr-2 py-2 bg-[#dccffc] shadow-sm ">
    <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" className="w-4 h-4 mr-1" alt="icon" />
    <span className="text-gray-800 font-medium text-sm flex items-center">
      Answer a question
      <img src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" className="w-4 h-4 ml-1" alt="more" />
    </span>
  </div>

  {/* 3. Extract */}
  <div className="flex items-center pl-3 pr-2 py-2 bg-[#fae5d2] shadow-sm ">
    <img src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" className="w-4 h-4 mr-1" alt="icon" />
    <span className="text-gray-800 font-medium text-sm flex items-center">
      Extract
      <img src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" className="w-4 h-4 ml-1" alt="more" />
    </span>
  </div>

  {/* 4. Add New (+) */}
  <div className="w-8 h-8 flex items-center -mr-2 justify-center bg-[#eeeeee] shadow-sm ">
    <img src="https://c.animaapp.com/mclmkdkf288FZk/img/add.svg" className="w-4 h-4" alt="plus" />
  </div>
</div>


</div>
    </div>
  )
}

export default Header