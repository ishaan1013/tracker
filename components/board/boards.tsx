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
import { useItemStore, useSaveStore, useToastStore } from "../../hooks"

import Preview from "./preview"

const Boards = ({ data }: { data: IssueType[][] }) => {
  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)
  const saved = useItemStore((state) => state.saved)
  const setSaved = useItemStore((state) => state.setSaved)
  const titleToast = useToastStore((state) => state.title)
  const openToast = useToastStore((state) => state.open)

  useEffect(() => {
    if (data && data !== items) {
      setItems(data)
    }
  }, [data])

  useEffect(() => {
    updateItems(items)
  }, [items])

  useEffect(() => {
    if (saved) {
      console.log("saved:", items)
      updateItems(items)
      setSaved(false)
    }
  }, [saved])

  const save = useSaveStore((state) => state.save)
  const incSave = useSaveStore((state) => state.incSave)
  const decSave = useSaveStore((state) => state.decSave)

  useEffect(() => {
    if (save === 0) {
      console.log("done save")
    } else if (save > 0) {
      console.log("save")
    } else {
      console.log("save is less than 0???")
    }
  }, [save])

  const updateItems = async (items: IssueType[][]) => {
    incSave()
    for (const item of items[0]) {
      const res = await fetch(`/api/upsertItem`, {
        method: "POST",
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          userId: item.userId,
          description: item.description,
          category: item.category,
          issueType: item.issueType,
          priority: item.priority,
          index: items[0].indexOf(item),
          createdAt: item.createdAt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      console.log("sent", data)
    }
    for (const item of items[1]) {
      const res = await fetch(`/api/upsertItem`, {
        method: "POST",
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          userId: item.userId,
          description: item.description,
          category: item.category,
          issueType: item.issueType,
          priority: item.priority,
          index: items[1].indexOf(item),
          createdAt: item.createdAt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      console.log("sent", data)
    }
    for (const item of items[2]) {
      const res = await fetch(`/api/upsertItem`, {
        method: "POST",
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          userId: item.userId,
          description: item.description,
          category: item.category,
          issueType: item.issueType,
          priority: item.priority,
          index: items[2].indexOf(item),
          createdAt: item.createdAt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      console.log("sent", data)
    }
    decSave()
  }

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
    <div className="mt-8 flex flex-grow space-x-2 pr-6 text-sm md:space-x-4">
      <p className="whitespace-pre text-xs text-gray-600">
        {JSON.stringify(items, null, "\t")}
      </p>
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
