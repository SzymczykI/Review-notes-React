import { Button } from "flowbite-react"


const PriorityFilter = () => {

  
  return (
    <>
      <h1 className="text-sm">Priority</h1>
        <Button.Group>
          <Button color="gray">All</Button>
          <Button color="gray">Low</Button>
          <Button color="gray">Medium</Button>
          <Button color="gray">High</Button>
        </Button.Group>
    </>
  )
}

export default PriorityFilter