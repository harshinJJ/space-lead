import AgendaCard from '@/components/cards/AgendaCard'
import React from 'react'

const SpeakerAgenda = ({agenda=[]}) => {
  return (
   <div className="text-[#737373] mt-2.5">
      {agenda.map((item, index) => (
        <div key={index} className="mb-4 bg-white rounded-2xl p-7.5">
          <AgendaCard event={item} containerClass={"!from-[#5AC0BE25] "} />
        </div>
      ))}
    </div>
  )
}

export default SpeakerAgenda
