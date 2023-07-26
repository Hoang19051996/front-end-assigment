import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import * as Tabs from '@radix-ui/react-tabs'
import { useEffect, useRef, useState } from 'react'
import autoAnimate from '@formkit/auto-animate'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [toDoListStatus, setToDoListStatus] = useState('all')
  const parent = useRef(null)
  // const getTriggerClass = (e) => {
  //    return (e === value ) ? 'bg-gray-900 w-24 flex' : 'bg-white-300 w-24';
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  // };
  console.log(toDoListStatus)
  return (
    <main className="mx-auto w-[480px] pt-12 ">
      <div className="rounded-12 bg-white p-8 shadow-sm" ref={parent}>
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
<br></br>
        <Tabs.Root 
          className=" w-35  flex flex-col   "
          defaultValue="all"
          value={toDoListStatus}
          onValueChange={setToDoListStatus}

        >
          <Tabs.List
            className="   flex shrink-0  gap-2 p-4 justify-start  "
            aria-label="All"
            
          >
            <Tabs.Trigger
              value="all"
              className={
                toDoListStatus === 'all'
                  ? ' w-16 h-12 rounded-full bg-gray-800 text-white'
                  : ' w-16 h-12 rounded-full border-2 border-x-gray-300 border-y-gray-300  '
              }
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className={
                toDoListStatus === 'pending'
                  ? 'w-28 h-12  rounded-full bg-gray-800 text-white'
                  : 'w-28 h-12 rounded-full border-2 border-x-gray-300 border-y-gray-300'
              }
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className={
                toDoListStatus === 'completed'
                  ? 'w-32 h-12   rounded-full bg-gray-800 text-white'
                  : 'w-32 h-12 rounded-full border-2 border-x-gray-300 border-y-gray-300'
              }
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="" value="all">
            <div className="pt-10">
              <TodoList status={toDoListStatus} />
            </div>

            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
          <Tabs.Content
            className=""
            value="pending"
          >
            <div className="pt-10">
              <TodoList status={toDoListStatus} />
            </div>

            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>

          <Tabs.Content
            className=""
            value="completed"
          >
            <div className="pt-10">
              <TodoList status={toDoListStatus} />
            </div>

            <div className="pt-10">
              <CreateTodoForm />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </main>
  )
}

export default Index
