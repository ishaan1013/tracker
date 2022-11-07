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

  const [items0, setItems0] = useState([1, 2, 3])
  const [items1, setItems1] = useState([4, 5, 6])
  const [items2, setItems2] = useState([7, 8, 9])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="flex mt-12 space-x-4 text-sm">

      {/* col 1 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event: any) => {
        const {active, over} = event
        
        if (active.id !== over.id) {
          setItems0((items) => {
            const oldIndex = items.indexOf(active.id)
            const newIndex = items.indexOf(over.id)
            
            return arrayMove(items, oldIndex, newIndex)
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
        <div className="w-72 min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">TO-DO</h2>
          <SortableContext
          items={items0}
          strategy={verticalListSortingStrategy}
          >
            {
              items0.map((item, index) => (
                <Preview id={item} key={index} col={0}  />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>
      
      {/* col 2 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event: any) => {
        const {active, over} = event
        
        if (active.id !== over.id) {
          setItems1((items) => {
            const oldIndex = items.indexOf(active.id)
            const newIndex = items.indexOf(over.id)
            
            return arrayMove(items, oldIndex, newIndex)
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
        <div className="w-72 min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">IN PROGRESS</h2>
          <SortableContext
          items={items1}
          strategy={verticalListSortingStrategy}
          >
            {
              items1.map((item, index) => (
                <Preview id={item} key={index} col={1}   />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>

      {/* col 3 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event: any) => {
        const {active, over} = event
        
        if (active.id !== over.id) {
          setItems2((items) => {
            const oldIndex = items.indexOf(active.id)
            const newIndex = items.indexOf(over.id)
            
            return arrayMove(items, oldIndex, newIndex)
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
        <div className="w-72 min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">COMPLETE</h2>
          <SortableContext
          items={items2}
          strategy={verticalListSortingStrategy}
          >
            {
              items2.map((item, index) => (
                <Preview id={item} key={index} col={2}   />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>

    </div>
  )
}

export default Boards