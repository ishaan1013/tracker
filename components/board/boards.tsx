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

  const [items, setItems] = useState([[9, 5, 3],[4, 2, 6],[7, 8, 1]])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="flex mt-12 md:space-x-4 space-x-2 text-sm">

      {/* col 1 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event: any) => {
        const {active, over} = event
        
        if (active.id !== over.id) {
          setItems((items) => {
            const oldIndex = items[0].indexOf(active.id)
            const newIndex = items[0].indexOf(over.id)
            
            return [arrayMove(items[0], oldIndex, newIndex), items[1], items[2]]
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
        <div className="w-72 min-w-[200px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded">
          <h2 className="px-2 text-start text-gray-600 mb-3">TO-DO</h2>
          <SortableContext
          items={items[0]}
          strategy={verticalListSortingStrategy}
          >
            {
              items[0].map((item, index) => (
                <Preview id={item} key={index} col={0} items={items} setItems={setItems} />
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
          setItems((items) => {
            const oldIndex = items[1].indexOf(active.id)
            const newIndex = items[1].indexOf(over.id)
            
            return [items[0], arrayMove(items[1], oldIndex, newIndex), items[2]]
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
        <div className="w-72 min-w-[220px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">IN PROGRESS</h2>
          <SortableContext
          items={items[1]}
          strategy={verticalListSortingStrategy}
          >
            {
              items[1].map((item, index) => (
                <Preview id={item} key={index} col={1} items={items} setItems={setItems} />
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
          setItems((items) => {
            const oldIndex = items[2].indexOf(active.id)
            const newIndex = items[2].indexOf(over.id)
            
            return [items[0], items[1], arrayMove(items[2], oldIndex, newIndex)]
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToFirstScrollableAncestor]}
      >
        <div className="w-72 min-w-[220px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">COMPLETE</h2>
          <SortableContext
          items={items[2]}
          strategy={verticalListSortingStrategy}
          >
            {
              items[2].map((item, index) => (
                <Preview id={item} key={index} col={2} items={items} setItems={setItems} />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>

    </div>
  )
}

export default Boards