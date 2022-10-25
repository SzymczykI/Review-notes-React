import { Filters } from "../../types";

export const fetchData = async (path: string, filters?: Filters[]) => {
  if(filters) {
    const response = await fetch(`http://localhost:1337/${path}?limit=${filters[0].limit}&type=${filters[0].type}&priority=${filters[0].priority}`).then(response => response.json())
    .catch((err) => console.log(err));
    return response
  }
    const response = await fetch(`http://localhost:1337/${path}`).then(response => response.json())
      .catch((err) => console.log(err));
    return response
  };