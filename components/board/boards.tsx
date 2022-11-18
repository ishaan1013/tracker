"use client"

import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerActivationConstraint
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
  restrictToParentElement
} from '@dnd-kit/modifiers';
import { useState, useEffect } from 'react'
import { IssueType } from '../../prisma/issueType';
import { useItemStore } from '../../hooks';

import Preview from './preview'

// const Boards = ({data} : {data: string[][]}) => {
const Boards = ({data} : {data: IssueType[][]}) => {

  const itemStore = useItemStore()
  useEffect(() => {
    itemStore.setItems(data)
  }, [data])

  // const [items, setItems] = useState([["9", "5", "3"],["4", "2", "6"],["7", "8", "1"]])
  const [activeId, setActiveId] = useState("")

  const activationConstraint: PointerActivationConstraint = { delay: 250, tolerance: 5 }

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint } ),
    useSensor(TouchSensor, { activationConstraint } ),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="flex flex-grow mt-12 md:space-x-4 space-x-2 text-sm">
      {/* col 1 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event: any) => {
        const { active } = event
        setActiveId(active.id)
      }}
      onDragEnd={(event: any) => {
        const {active, over} = event
        setActiveId("")
        
        if (active.id !== over.id) {
          const oldIndex = itemStore.items[0].indexOf(active.id)
          const newIndex = itemStore.items[0].indexOf(over.id)
          itemStore.setItems([arrayMove(itemStore.items[0], oldIndex, newIndex), itemStore.items[1], itemStore.items[2]])
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
      >
        <div className="w-72 min-w-[200px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded">
          <h2 className="px-2 text-start text-gray-600 mb-3">TO-DO</h2>
          <SortableContext
          items={itemStore.items[0]}
          strategy={verticalListSortingStrategy}
          >
            {
              itemStore.items[0].map((item, index) => (
                <Preview data={item} key={index} col={0} activeId={activeId} />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>
      
      {/* col 2 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event: any) => {
        const { active } = event
        setActiveId(active.id)
      }}
      onDragEnd={(event: any) => {
        const {active, over} = event
        setActiveId("")
        
        if (active.id !== over.id) {
          const oldIndex = itemStore.items[1].indexOf(active.id)
          const newIndex = itemStore.items[1].indexOf(over.id)
          itemStore.setItems([itemStore.items[0], arrayMove(itemStore.items[1], oldIndex, newIndex), itemStore.items[2]])
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
      >
        <div className="w-72 min-w-[220px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">IN PROGRESS</h2>
          <SortableContext
          items={itemStore.items[1]}
          strategy={verticalListSortingStrategy}
          >
            {
              itemStore.items[1].map((item, index) => (
                <Preview data={item} key={index} col={1} activeId={activeId} />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>

      {/* col 3 */}
      <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event: any) => {
        const { active } = event
        setActiveId(active.id)
      }}
      onDragEnd={(event: any) => {
        const {active, over} = event
        setActiveId("")
        
        if (active.id !== over.id) {
          const oldIndex = itemStore.items[2].indexOf(active.id)
          const newIndex = itemStore.items[2].indexOf(over.id)
          itemStore.setItems([itemStore.items[0], itemStore.items[1], arrayMove(itemStore.items[2], oldIndex, newIndex)])
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
      >
        <div className="w-72 min-w-[220px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">COMPLETE</h2>
          <SortableContext
          items={itemStore.items[2]}
          strategy={verticalListSortingStrategy}
          >
            {
              itemStore.items[2].map((item, index) => (
                <Preview data={item} key={index} col={2} activeId={activeId} />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>

    </div>
  )
}

export default Boards