"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  PointerActivationConstraint,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { useState, useEffect } from "react";
import { IssueType } from "../../prisma/issueType";
import { useItemStore } from "../../hooks";

import Preview from "./preview";

const Boards = ({ data }: { data: IssueType[][] }) => {
  const items = useItemStore(state => state.items)
  const setItems = useItemStore(state => state.setItems)
  useEffect(() => {
    setItems(data);
  }, [data]);

  const [activeId, setActiveId] = useState("");

  const activationConstraint: PointerActivationConstraint = {
    delay: 250,
    tolerance: 5,
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint }),
    useSensor(TouchSensor, { activationConstraint }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="flex flex-grow mt-12 pr-6 md:space-x-4 space-x-2 text-sm">
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
          const oldIndex = items[0].map(function(e) {return e.id}).indexOf(active.id)
          const newIndex = items[0].map(function(e) {return e.id}).indexOf(over.id)
          setItems([arrayMove(items[0], oldIndex, newIndex), items[1], items[2]])
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
      >
        <div className="w-80 min-w-[200px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded">
          <h2 className="px-2 text-start text-gray-600 mb-3">TO-DO</h2>
          <SortableContext
          items={items[0]}
          strategy={verticalListSortingStrategy}
          >
            {
              items[0].map((item, index) => (
                <Preview data={item} key={index} index={index} col={0} activeId={activeId} />
              ))
            }
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
        const {active, over} = event
        setActiveId("")
        
        if (active.id !== over.id) {
          const oldIndex = items[1].map(function(e) {return e.id}).indexOf(active.id)
          const newIndex = items[1].map(function(e) {return e.id}).indexOf(over.id)
          setItems([items[0], arrayMove(items[1], oldIndex, newIndex), items[2]])
          console.log("getting")
          const test = async () => {
            const response = await fetch("api/hello", {
              method: "GET"
            })
            return response.json()
          }
          test().then((data) => {
            console.log(data)
          })
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
      >
        <div className="w-80 min-w-[220px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">IN PROGRESS</h2>
          <SortableContext
          items={items[1]}
          strategy={verticalListSortingStrategy}
          >
            {
              items[1].map((item, index) => (
                <Preview data={item} key={index} index={index} col={1} activeId={activeId} />
              ))
            }
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
        const {active, over} = event
        setActiveId("")
        
        if (active.id !== over.id) {
          const oldIndex = items[2].map(function(e) {return e.id}).indexOf(active.id)
          const newIndex = items[2].map(function(e) {return e.id}).indexOf(over.id)
          setItems([items[0], items[1], arrayMove(items[2], oldIndex, newIndex)])
        }
      }}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
      >
        <div className="w-80 min-w-[220px] min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-visible">
          <h2 className="px-2 text-start text-gray-600 mb-3">COMPLETE</h2>
          <SortableContext
          items={items[2]}
          strategy={verticalListSortingStrategy}
          >
            {
              items[2].map((item, index) => (
                <Preview data={item} key={index} index={index} col={2} activeId={activeId} />
              ))
            }
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default Boards;
