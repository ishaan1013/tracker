"use client"

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerActivationConstraint,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
  restrictToParentElement,
} from "@dnd-kit/modifiers"
import { useState, useEffect } from "react"
import { IssueType } from "../../prisma/issueType"
import { useItemStore } from "../../hooks"

import Preview from "./preview"

const Boards = ({ data }: { data: IssueType[][] }) => {
  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)
  useEffect(() => {
    setItems(data)
  }, [data])

  const [activeId, setActiveId] = useState("")

  const activationConstraint: PointerActivationConstraint = {
    distance: 10,
  }

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint }),
    useSensor(TouchSensor, { activationConstraint }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <div className="mt-12 flex flex-grow space-x-2 pr-6 text-sm md:space-x-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={(event: any) => {
          const { active } = event
          setActiveId(active.id)
        }}
        onDragEnd={(event: any) => {
          const { active, over } = event
          setActiveId("")

          if (active.id !== over.id) {
            const oldIndex = items[0]
              .map(function (e) {
                return e.id
              })
              .indexOf(active.id)
            const newIndex = items[0]
              .map(function (e) {
                return e.id
              })
              .indexOf(over.id)
            setItems([
              arrayMove(items[0], oldIndex, newIndex),
              items[1],
              items[2],
            ])
          }
        }}
        modifiers={[
          restrictToVerticalAxis,
          restrictToWindowEdges,
          restrictToParentElement,
        ]}>
        <div className="flex h-full min-h-[300px] w-80 min-w-[200px] flex-col items-start justify-start rounded bg-gray-150 py-3 px-1">
          <h2 className="mb-3 px-2 text-start text-gray-600">TO-DO</h2>
          <SortableContext
            items={items[0]}
            strategy={verticalListSortingStrategy}>
            {items[0].map((item, index) => (
              <Preview
                data={item}
                key={index}
                index={index}
                col={0}
                activeId={activeId}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={(event: any) => {
          const { active } = event
          setActiveId(active.id)
        }}
        onDragEnd={(event: any) => {
          const { active, over } = event
          setActiveId("")

          if (active.id !== over.id) {
            const oldIndex = items[1]
              .map(function (e) {
                return e.id
              })
              .indexOf(active.id)
            const newIndex = items[1]
              .map(function (e) {
                return e.id
              })
              .indexOf(over.id)
            setItems([
              items[0],
              arrayMove(items[1], oldIndex, newIndex),
              items[2],
            ])
            console.log("getting")
            const test = async () => {
              const response = await fetch("api/hello", {
                method: "GET",
              })
              return response.json()
            }
            test().then((data) => {
              console.log(data)
            })
          }
        }}
        modifiers={[
          restrictToVerticalAxis,
          restrictToWindowEdges,
          restrictToParentElement,
        ]}>
        <div className="flex h-full min-h-[300px] w-80 min-w-[220px] flex-col items-start justify-start overflow-visible rounded bg-gray-150 py-3 px-1">
          <h2 className="mb-3 px-2 text-start text-gray-600">IN PROGRESS</h2>
          <SortableContext
            items={items[1]}
            strategy={verticalListSortingStrategy}>
            {items[1].map((item, index) => (
              <Preview
                data={item}
                key={index}
                index={index}
                col={1}
                activeId={activeId}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={(event: any) => {
          const { active } = event
          setActiveId(active.id)
        }}
        onDragEnd={(event: any) => {
          const { active, over } = event
          setActiveId("")

          if (active.id !== over.id) {
            const oldIndex = items[2]
              .map(function (e) {
                return e.id
              })
              .indexOf(active.id)
            const newIndex = items[2]
              .map(function (e) {
                return e.id
              })
              .indexOf(over.id)
            setItems([
              items[0],
              items[1],
              arrayMove(items[2], oldIndex, newIndex),
            ])
          }
        }}
        modifiers={[
          restrictToVerticalAxis,
          restrictToWindowEdges,
          restrictToParentElement,
        ]}>
        <div className="flex h-full min-h-[300px] w-80 min-w-[220px] flex-col items-start justify-start overflow-visible rounded bg-gray-150 py-3 px-1">
          <h2 className="mb-3 px-2 text-start text-gray-600">COMPLETE</h2>
          <SortableContext
            items={items[2]}
            strategy={verticalListSortingStrategy}>
            {items[2].map((item, index) => (
              <Preview
                data={item}
                key={index}
                index={index}
                col={2}
                activeId={activeId}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  )
}

export default Boards
