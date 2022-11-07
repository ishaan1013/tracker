"use client"

import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
  restrictToFirstScrollableAncestor
} from '@dnd-kit/modifiers';
import { useState, useEffect } from 'react'

import Preview from './preview';

const Boards = () => {

  const [items, setItems] = useState([1, 2, 3])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: any) => {
    const {active, over} = event
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)
        
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="flex mt-12 space-x-4 text-sm">

      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      // modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
      <div className="w-72 min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
        <h2 className="px-2 text-start text-gray-600 mb-3 capitalize">To Do</h2>
        <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
        >
          {
            items.map((item, index) => (
              <Preview id={item} key={index}  />
            ))
          }
        </SortableContext>
      </div>

      </DndContext>
    </div>
  )
}

export default Boards