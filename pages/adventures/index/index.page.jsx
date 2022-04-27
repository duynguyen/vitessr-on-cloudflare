import React from 'react'
import AdventureCard from '../../../components/AdventureCard'

export { Page }

function Page({adventures, ASSETS_SERVER}) {
  if (!adventures.length) {
    return <h1>No adventures</h1>
  }
  
  return (
    <div  className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your next adventures can be one of these...</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {adventures.map(
            ({
              _path,
              adventureTitle,
              adventurePrice,
              adventureTripLength,
              adventurePrimaryImage,
            }) => {
              const pathItems = _path.split('/')
              const cfPath = pathItems.slice(Math.max(pathItems.length - 2, 0)).join('/')
              const path = `/adventure/${cfPath}`
              return (
                <AdventureCard
                  key={_path}
                  path={path}
                  title={adventureTitle}
                  price={adventurePrice}
                  duration={adventureTripLength}
                  imageSrc={`${ASSETS_SERVER}${adventurePrimaryImage._path}`}
                />
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}